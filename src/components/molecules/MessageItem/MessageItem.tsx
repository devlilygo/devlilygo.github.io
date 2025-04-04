export interface VisitorMessage {
  id: string;
  message: string;
  created_at: string;
}

export function MessageItem({ message, created_at }: VisitorMessage) {
  return (
    <div className="flex m-1 ml-0 rounded bg-muted items-center">
      <div className="flex w-8 text-sm text-muted-foreground items-center justify-center">
        💬
      </div>
      <div className="flex mr-3 text-sm italic items-center break-all w-[38ch]">
        {message}
      </div>
      <div className="flex w-10 text-sm text-muted-foreground justify-end items-center">
        {new Date(created_at).toLocaleDateString()}
      </div>
    </div>
  );
}
