import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface TaskItemProps {
  text: string;
  done: boolean;
  onToggle: () => void;
}

export default function TaskItem({ text, done, onToggle }: TaskItemProps) {
  return (
    <div className="flex items-center gap-2 my-2">
      <Checkbox checked={done} onCheckedChange={onToggle} />
      <Label className="bg-transparent outline-none flex-1">{text}</Label>
    </div>
  );
}
