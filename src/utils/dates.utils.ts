import { parse } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

// Helper to parse a UTC-like string
export const parseUTC = (dateStr: string): Date => {
  const parsed = parse(dateStr, 'yyyy-MM-dd HH:mm:ss', new Date());
  return toZonedTime(parsed, 'UTC');
};