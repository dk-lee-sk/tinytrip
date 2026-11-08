// Helpers for putting a schedule into people's calendars:
// an .ics file (Apple Calendar, Outlook desktop, most others) and one-click links for Google and Outlook.com.
// Times are given as home time. With a home time zone they're turned into UTC, so they show correctly
// wherever the calendar is; without one they're "floating" and land at the same clock time anywhere.

export type CalEvent = {
  uid: string;
  title: string;
  description: string;
  /** YYYYMMDDTHHMMSS, with a trailing Z when it's UTC */
  start: string;
  end: string;
};

/**
 * A travel date (YYYY-MM-DD) plus minutes from midnight (may run past 24h) → YYYYMMDDTHHMMSS.
 * Pass the home time zone's offset from UTC (in minutes) to get a UTC time instead.
 */
export function stamp(date: string, mins: number, utcOffset?: number): string {
  const [y, m, d] = date.split('-').map(Number);
  const t = new Date(Date.UTC(y, m - 1, d, 0, Math.round(mins - (utcOffset ?? 0))));
  const p = (n: number) => String(n).padStart(2, '0');
  const s = `${t.getUTCFullYear()}${p(t.getUTCMonth() + 1)}${p(t.getUTCDate())}T${p(t.getUTCHours())}${p(t.getUTCMinutes())}00`;
  return utcOffset === undefined ? s : `${s}Z`;
}

/** Minutes a time zone is ahead of UTC on a given date (YYYY-MM-DD). */
export function utcOffset(timeZone: string, date: string): number {
  const name = new Intl.DateTimeFormat('en-GB', { timeZone, timeZoneName: 'longOffset' })
    .formatToParts(new Date(`${date}T12:00:00Z`))
    .find((p) => p.type === 'timeZoneName')?.value ?? '';
  const m = name.match(/GMT([+-])(\d{1,2}):?(\d{2})?/);
  return m ? (m[1] === '-' ? -1 : 1) * (Number(m[2]) * 60 + Number(m[3] || 0)) : 0;
}

/** YYYYMMDDTHHMMSS[Z] → YYYY-MM-DDTHH:MM:SS[Z] (for Outlook links). */
const iso = (s: string) =>
  `${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}T${s.slice(9, 11)}:${s.slice(11, 13)}:${s.slice(13, 15)}${s.slice(15)}`;

const esc = (s: string) => s.replace(/\\/g, '\\\\').replace(/[,;]/g, (c) => `\\${c}`).replace(/\r?\n/g, '\\n');

// Calendar files should keep lines under 75 characters; longer ones continue on the next line after a space.
function fold(line: string): string {
  const out: string[] = [];
  let rest = line;
  while (rest.length > 74) {
    out.push(rest.slice(0, 74));
    rest = ' ' + rest.slice(74);
  }
  out.push(rest);
  return out.join('\r\n');
}

export function icsFile(events: CalEvent[]): string {
  const now = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
  const body = events.flatMap((e) => [
    'BEGIN:VEVENT',
    `UID:${e.uid}@tinytrip`,
    `DTSTAMP:${now}`,
    `DTSTART:${e.start}`,
    `DTEND:${e.end}`,
    `SUMMARY:${esc(e.title)}`,
    `DESCRIPTION:${esc(e.description)}`,
    'END:VEVENT',
  ]);
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//TinyTrip//Travel day//EN',
    'CALSCALE:GREGORIAN',
    ...body,
    'END:VCALENDAR',
  ].map(fold).join('\r\n') + '\r\n';
}

export function downloadIcs(content: string, filename: string) {
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: filename });
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

// Spaces as %20, not "+": Outlook shows a literal "+" otherwise.
const query = (params: Record<string, string>) =>
  Object.entries(params).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');

export function googleLink(e: CalEvent): string {
  return `https://calendar.google.com/calendar/render?${query({
    action: 'TEMPLATE',
    text: e.title,
    dates: `${e.start}/${e.end}`,
    details: e.description,
  })}`;
}

export function outlookLink(e: CalEvent): string {
  return `https://outlook.live.com/calendar/0/deeplink/compose?${query({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: e.title,
    startdt: iso(e.start),
    enddt: iso(e.end),
    body: e.description,
  })}`;
}
