import { format } from "date-fns";
import { getEmojiByRate } from "@/utils/getEmojiByRate";
import { useEffect, useState } from "react";
import { fetchAllTasksMap } from "@/lib/supabaseTasks";

interface CalendarDayProps {
  day: string;
  dayNumber: number;
  emoji?: string;
}

export function CalendarDay({
  day,
  dayNumber,
  emoji = "🌱",
}: CalendarDayProps) {
  const [displayEmoji, setDisplayEmoji] = useState("🌱");

  useEffect(() => {
    const fetchTasks = async () => {
      const allTasks = await fetchAllTasksMap();
      const today = format(new Date(), "yyyy-MM-dd");

      if (day > today) {
        // 미래 날짜 → 새싹으로 고정
        setDisplayEmoji("🌱");
        return;
      }

      const tasksForDay = allTasks[day] ?? [];
      const auto = getEmojiByRate(tasksForDay);
      setDisplayEmoji(auto);
    };

    fetchTasks();
  }, [day, emoji]);

  return (
    <div className="flex flex-col items-center justify-center p-1 rounded bg-muted hover:bg-accent transition">
      <div className="text-[10px] text-muted-foreground leading-none">
        {dayNumber}
      </div>
      <div className="text-base">{displayEmoji}</div>
    </div>
  );
}
