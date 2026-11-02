// The parent's trip details, shared by every page that tailors itself to the trip.
// Kept in localStorage for now; moves to Supabase when accounts arrive.

export type Trip = {
  age?: string;
  length?: string;
  mode?: string;
  /** Departure date, YYYY-MM-DD */
  date?: string;
  /** Home and destination time zones (IANA ids), used by the sleep helper and travel-day planner */
  from?: string;
  to?: string;
  /** Baby's usual bedtime at home, HH:MM */
  bed?: string;
};

export const LENGTHS: Record<string, string> = {
  weekend: 'Weekend (2–3 nights)',
  short: 'Short (4–6 nights)',
  week: 'Week+',
};

export const MODES: Record<string, string> = {
  flight: '✈️ Flight',
  road: '🚗 Road trip',
  train: '🚂 Train',
};

const KEY = 'tinytrip:trip:v1';

// Ticked items, each list saved on this device.
export const PACK_KEY = 'tinytrip:pack:v1';
export const PLAN_KEY = 'tinytrip:plan:v1';
export const ASK_KEY = 'tinytrip:ask:v1';

export function loadTrip(): Trip {
  try {
    const t = JSON.parse(localStorage.getItem(KEY) || '{}');
    return t && typeof t === 'object' ? t : {};
  } catch {
    return {};
  }
}

export function saveTrip(trip: Trip) {
  try {
    localStorage.setItem(KEY, JSON.stringify(trip));
  } catch {}
}

export function loadSet(key: string): Set<string> {
  try {
    const v = JSON.parse(localStorage.getItem(key) || '[]');
    return new Set(Array.isArray(v) ? v.map(String) : []);
  } catch {
    return new Set();
  }
}

export function saveSet(key: string, set: Iterable<string>) {
  try {
    localStorage.setItem(key, JSON.stringify([...set]));
  } catch {}
}

const isDate = (v: string) => /^\d{4}-\d{2}-\d{2}$/.test(v) && !isNaN(Date.parse(v));
const isTime = (v: string) => /^([01]\d|2[0-3]):[0-5]\d$/.test(v);
function isZone(v: string) {
  try {
    new Intl.DateTimeFormat('en', { timeZone: v });
    return true;
  } catch {
    return false;
  }
}

/**
 * Read trip fields from the URL (?age=&length=&mode=&date=&from=&to=&bed=), merge into the saved trip and save.
 * A shared link can also carry ticked items (?packed=a,b&done=c,d), which are added to this device's ticks.
 */
export function tripFromUrl(validAges: string[]): Trip {
  const p = new URLSearchParams(location.search);
  const trip = loadTrip();
  let changed = false;
  const take = (k: keyof Trip, ok: (v: string) => boolean) => {
    const v = p.get(k);
    if (v && ok(v)) {
      trip[k] = v;
      changed = true;
    }
  };
  take('age', (v) => validAges.includes(v));
  take('length', (v) => v in LENGTHS);
  take('mode', (v) => v in MODES);
  take('date', isDate);
  take('from', isZone);
  take('to', isZone);
  take('bed', isTime);
  if (changed) saveTrip(trip);

  for (const [param, key] of [['packed', PACK_KEY], ['done', PLAN_KEY]] as const) {
    const ids = p.get(param)?.split(',').filter((id) => /^[a-z0-9-]{1,40}$/.test(id));
    if (ids?.length) saveSet(key, new Set([...loadSet(key), ...ids]));
  }
  return trip;
}

/** A link that opens the same trip (and ticks) on someone else's phone. */
export function shareLink(path: string, trip: Trip): string {
  const url = new URL(path, location.origin);
  for (const [k, v] of Object.entries(trip)) if (v) url.searchParams.set(k, v);
  const packed = [...loadSet(PACK_KEY)];
  const done = [...loadSet(PLAN_KEY)];
  if (packed.length) url.searchParams.set('packed', packed.join(','));
  if (done.length) url.searchParams.set('done', done.join(','));
  return url.toString();
}

/** Share with the phone's share sheet where there is one, otherwise copy. Returns what happened. */
export async function shareOrCopy(url: string, title: string): Promise<'shared' | 'copied' | 'failed'> {
  if (navigator.share) {
    try {
      await navigator.share({ title, url });
      return 'shared';
    } catch (e) {
      if ((e as Error).name === 'AbortError') return 'failed';
    }
  }
  return copyText(url);
}

export async function copyText(text: string): Promise<'copied' | 'failed'> {
  try {
    await navigator.clipboard.writeText(text);
    return 'copied';
  } catch {
    return 'failed';
  }
}

/** Days from today (local) until a YYYY-MM-DD date. */
export function daysUntil(date: string): number {
  const [y, m, d] = date.split('-').map(Number);
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((Date.UTC(y, m - 1, d) - today) / 86400000);
}

// ── Packing list rules ──

type Condition = { ages?: string[]; modes?: string[]; lengths?: string[] };

export type PackItem = {
  id: string;
  name: string;
  note: string;
  priority: string;
  needsReview?: boolean;
  /** ids from src/data/sources.json */
  sources?: string[];
  show?: Condition;
  variants?: ({ when: Condition } & Partial<Pick<PackItem, 'name' | 'note' | 'priority' | 'needsReview'>>)[];
};

// A condition matches when every field it names includes the trip's value.
// If the trip doesn't say (e.g. no age chosen), that field doesn't rule anything out.
function matches(c: Condition, trip: Trip, strict: boolean): boolean {
  const check = (list: string[] | undefined, value: string | undefined) =>
    !list || (value ? list.includes(value) : !strict);
  return check(c.ages, trip.age) && check(c.modes, trip.mode) && check(c.lengths, trip.length);
}

/** How an item should look for this trip, or null if it doesn't apply. */
export function resolveItem(item: PackItem, trip: Trip): PackItem | null {
  if (item.show && !matches(item.show, trip, false)) return null;
  // Variants only apply when the trip actually has the values they're about.
  const variant = item.variants?.find((v) => matches(v.when, trip, true));
  if (!variant) return item;
  const { when, ...overrides } = variant;
  return { ...item, ...overrides };
}
