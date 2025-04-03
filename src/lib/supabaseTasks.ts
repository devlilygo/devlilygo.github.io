import { supabase } from "./supabase";

const getToday = () => new Date().toISOString().split("T")[0];

export async function fetchTodayTasks() {
  const { data, error } = await supabase
    .from("daily_tasks")
    .select("tasks")
    .eq("date", getToday())
    .maybeSingle();

  if (error) {
    console.error("Fetch error:", error);
    return [];
  }

  return data?.tasks ?? [];
}

export async function fetchAllTasksMap(): Promise<
  Record<string, { text: string; done: boolean }[]>
> {
  const { data, error } = await supabase
    .from("daily_tasks")
    .select("date, tasks");

  if (error) {
    console.error("Fetch error:", error);
    return {};
  }

  // 날짜별로 정리된 객체로 반환 (예: { "2025-04-03": [...] })
  const map: Record<string, { text: string; done: boolean }[]> = {};
  data?.forEach((item) => {
    map[item.date] = item.tasks;
  });

  return map;
}

export async function saveTodayTasks(tasks: { text: string; done: boolean }[]) {
  const { data: existing } = await supabase
    .from("daily_tasks")
    .select("id")
    .eq("date", getToday())
    .maybeSingle();

  if (existing) {
    const { error } = await supabase
      .from("daily_tasks")
      .update({ tasks })
      .eq("id", existing.id);
    if (error) {
      console.error("Save error:", error);
    }
  } else {
    const { error } = await supabase
      .from("daily_tasks")
      .insert({ date: getToday(), tasks });
    if (error) {
      console.error("Save error:", error);
    }
  }
}
