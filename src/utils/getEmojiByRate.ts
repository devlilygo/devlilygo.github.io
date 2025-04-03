export function getEmojiByRate(tasks: { done: boolean }[]): string {
  const doneCount = tasks.filter((t) => t.done).length;
  const total = tasks.length;
  const rate = total === 0 ? 0 : (doneCount / total) * 100;
  if (rate === 100) return "🌟";
  if (rate >= 70) return "😚";
  if (rate >= 30) return "🫣";
  return "😴";
}
