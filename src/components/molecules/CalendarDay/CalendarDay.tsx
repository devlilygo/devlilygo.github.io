import { useState } from "react";
import { EmojiPickerPopover } from "../EmojiPickerPopover/EmojiPickerPopover";

interface CalendarDayProps {
  day: number;
  emoji?: string;
  onClick?: () => void;
}

export function CalendarDay({ day, emoji = "🌑" }: CalendarDayProps) {
  const [selectedEmoji, setSelectedEmoji] = useState(emoji);

  return (
    <EmojiPickerPopover
      trigger={
        <div className="flex flex-col items-center justify-center p-1 rounded bg-muted hover:bg-accent transition">
          <div className="text-[10px] text-muted-foreground leading-none">
            {day}
          </div>
          <div className="text-base cursor-pointer">{selectedEmoji}</div>
        </div>
      }
      onSelect={(e) => setSelectedEmoji(e)}
    />
  );
}
