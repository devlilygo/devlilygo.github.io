// src/lib/utils/calendar.ts

import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  format,
} from "date-fns";

interface CalendarDay {
  key: string;
  dayNumber: number | null;
  date: Date | null;
  emoji?: string;
}

export function getFormattedMonthYear(date: Date): string {
  return format(date, "MMMM yyyy"); // 예: "April 2025"
}

export function generateCalendarDays(baseDate: Date): CalendarDay[] {
  const start = startOfMonth(baseDate);
  const end = endOfMonth(baseDate);
  const days = eachDayOfInterval({ start, end });

  const prefixEmptyCount = getDay(start); // 0 (Sun) ~ 6 (Sat)

  const placeholders: CalendarDay[] = Array.from({
    length: prefixEmptyCount,
  }).map((_, i) => ({
    key: `empty-${i}`,
    dayNumber: null,
    date: null,
    emoji: undefined,
  }));

  const calendarDays: CalendarDay[] = days.map((d) => ({
    key: format(d, "yyyy-MM-dd"),
    dayNumber: d.getDate(),
    date: d,
    // emoji: "🌑", // default placeholder
  }));

  return [...placeholders, ...calendarDays];
}
