import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const emojis = ["🌿", "🎈", "💻", "📚", "😴", "🌧️", "🌼", "🧘", "🍙", "❌"];

export function EmojiPickerPopover({
  trigger,
  onSelect,
}: {
  trigger: React.ReactNode;
  onSelect: (emoji: string) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className="grid grid-cols-5 gap-2 w-[200px]">
        {emojis.map((emoji) => (
          <Button
            key={emoji}
            variant="ghost"
            className="text-xl"
            onClick={() => onSelect(emoji)}
          >
            {emoji}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
