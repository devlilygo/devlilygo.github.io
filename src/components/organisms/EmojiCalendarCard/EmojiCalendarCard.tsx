import { CalendarDay } from "@/components/molecules/CalendarDay/CalendarDay";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { generateCalendarDays } from "@/lib/utils/calendar";

export function EmojiCalendarCard() {
  const today = new Date();
  const calendarDays = generateCalendarDays(today);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Card className="h-[320px] w-[464px] rounded-xl text-sm px-4 py-6">
      <CardHeader className="gap-0">
        <CardTitle>📆 April 2025</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-[2px]">
          {/* 요일 헤더 */}
          {weekdays.map((label) => (
            <div
              key={label}
              className="text-center text-xs font-medium text-muted-foreground"
            >
              {label}
            </div>
          ))}

          {/* 날짜 이모지 */}
          {calendarDays.map((day) =>
            day.dayNumber ? (
              <CalendarDay
                key={day.key}
                day={day.dayNumber}
                emoji={day.emoji}
              />
            ) : (
              <div key={day.key} /> // 빈 칸
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}
