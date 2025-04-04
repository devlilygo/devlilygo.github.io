import { supabase } from "@/lib/supabase";

export async function saveVisitorMessage(message: string) {
  const { error } = await supabase.from("visitor_messages").insert([
    { message }, // approved: false 도 가능
  ]);

  if (error) {
    console.error("메시지 저장 실패:", error);
  }
}

export async function fetchVisitorMessages() {
  const { data, error } = await supabase
    .from("visitor_messages")
    .select("id, message, created_at")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("메시지 불러오기 실패:", error);
    return [];
  }

  return data;
}
