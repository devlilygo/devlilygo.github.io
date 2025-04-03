// components/organisms/TaskCard.tsx
import MoodBadge from "@/components/atoms/MoodBadge/MoodBadge";
import TaskItem from "@/components/molecules/TaskItem/TaskItem";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { format } from "date-fns";

const TaskCard = () => {
  const today = format(new Date(), "EEE MMMM d, yyyy").toUpperCase();

  return (
    <Card className="flex h-[248px] w-[464px] rounded-2xl shadow-md ">
      <CardHeader>
        <CardTitle>✅ Today’s Tasks</CardTitle>
        <CardDescription>{today}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          <TaskItem label="Study English" checked />
          <TaskItem label="Go for a walk" checked />
          <TaskItem label="Work on portfolio" />
        </ul>
        <div className="pt-2">
          Mood: <MoodBadge mood="Peaceful" />
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
