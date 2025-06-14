import { formatDuration, intervalToDuration, parse } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

// Helper to parse a UTC-like string
export const parseUTC = (dateStr: string): Date => {
  const date = dateStr || '1970-01-01'
  const parsed = parse(date, 'yyyy-MM-dd HH:mm:ss', new Date());
  return toZonedTime(parsed, 'UTC');
};

export const formatTimeSpent = (timeSpent: number) => {
    const raw = formatDuration(intervalToDuration({ start: 0, end: timeSpent }), {
      format: ['days', 'hours', 'minutes'],
    });

    return raw
      .replace(/\bdays?\b/, 'd')
      .replace(/\bhours?\b/, 'h')
      .replace(/\bminutes?\b/, 'min');
  };
  