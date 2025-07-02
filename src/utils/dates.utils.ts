import { differenceInDays, differenceInHours, differenceInMinutes, formatDuration, intervalToDuration, isBefore, parse } from 'date-fns';
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
  

export function getTimeLeftString(dateEndStr: string, dateStartStr: string) {
  // Helper to add seconds if missing
  const normalizeDateStr = (d: string) => (d.length === 16 ? d + ':00' : d);

  const dateStart = parse(normalizeDateStr(dateStartStr), 'yyyy-MM-dd HH:mm:ss', new Date());
  const dateEnd = parse(normalizeDateStr(dateEndStr), 'yyyy-MM-dd HH:mm:ss', new Date());
  const now = new Date();

  if (isBefore(now, dateStart)) {
    // Current time is before start date
    return 'preparing stage 👷';
  }

  if (isBefore(dateEnd, now)) {
    // Event finished
    return 'finished';
  }

  // Event is ongoing, calculate time left till end
  const days = differenceInDays(dateEnd, now);
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} left`;

  const hours = differenceInHours(dateEnd, now);
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} left`;

  const minutes = differenceInMinutes(dateEnd, now);
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} left`;

  return 'less than a minute left';
}