export function MessageItem({
  name,
  content,
}: {
  name: string;
  content: string;
}) {
  return (
    <div className="bg-muted rounded-md px-3 py-2 text-sm">
      <span className="font-semibold mr-2">{name}:</span>
      <span>{content}</span>
    </div>
  );
}
