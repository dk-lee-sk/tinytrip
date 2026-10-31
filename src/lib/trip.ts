// The parent's trip details, shared by the home form, readiness page and packing list.
// Kept in localStorage for now; moves to Supabase when accounts arrive.

export type Trip = { age?: string; length?: string; mode?: string };

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

/** Read any trip fields from the URL (?age=&length=&mode=), merge into the saved trip and save. */
export function tripFromUrl(validAges: string[]): Trip {
  const p = new URLSearchParams(location.search);
  const trip = loadTrip();
  const age = p.get('age');
  const length = p.get('length');
  const mode = p.get('mode');
  if (age && validAges.includes(age)) trip.age = age;
  if (length && length in LENGTHS) trip.length = length;
  if (mode && mode in MODES) trip.mode = mode;
  if (age || length || mode) saveTrip(trip);
  return trip;
}

// ── Packing list rules ──

type Condition = { ages?: string[]; modes?: string[]; lengths?: string[] };

export type PackItem = {
  id: string;
  name: string;
  note: string;
  priority: string;
  needsReview?: boolean;
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
