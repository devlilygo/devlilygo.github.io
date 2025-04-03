export function WorkPreviewItem({
  title,
  emoji,
  tech,
}: {
  title: string;
  emoji: string;
  tech: string[];
}) {
  return (
    <div className="bg-muted rounded-md px-3 py-2 text-xs flex flex-col justify-between">
      <div className="text-xl mb-1">{emoji}</div>
      <div className="font-semibold">{title}</div>
      <div className="text-muted-foreground text-[10px]">{tech.join(", ")}</div>
    </div>
  );
}
