"use client";

import MoodBadge from "@/components/atoms/MoodBadge/MoodBadge";
import TaskItem from "@/components/molecules/TaskItem/TaskItem";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchTodayTasks, saveTodayTasks } from "@/lib/supabaseTasks";
import { format } from "date-fns";
import { useEffect, useState } from "react";

const TaskCard = () => {
  const today = format(new Date(), "EEE MMMM d, yyyy").toUpperCase();
  const [tasks, setTasks] = useState<{ text: string; done: boolean }[]>([]);

  useEffect(() => {
    fetchTodayTasks().then(setTasks);
  }, []);

  const toggleTask = (index: number) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
    saveTodayTasks(updated);
  };

  return (
    <Card className="flex h-[248px] w-[464px] rounded-2xl shadow-md gap-2 justify-between">
      <CardHeader className="">
        <CardTitle>✅ Today’s Tasks</CardTitle>
        <CardDescription>{today}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ScrollArea className="h-[100px]">
          {tasks.map((task, i) => (
            <TaskItem
              key={i}
              text={task.text}
              done={task.done}
              onToggle={() => toggleTask(i)}
            />
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <div className="pt-2">
          Mood: <MoodBadge mood="Peaceful" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
