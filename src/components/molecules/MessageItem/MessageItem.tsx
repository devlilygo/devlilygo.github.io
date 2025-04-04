export interface VisitorMessage {
  id: string;
  message: string;
  created_at: string;
}

export function MessageItem({ message, created_at }: VisitorMessage) {
  return (
    <div className="flex p-2 m-1 ml-0 rounded bg-muted items-center">
      <div className="flex w-8 pl-1 text-sm text-muted-foreground items-center justify-between">
        💬
      </div>
      <div className="flex mr-3 text-base italic items-center break-all w-[30ch]">
        {message}
      </div>
      <div className="flex w-10 text-sm text-muted-foreground justify-end items-center">
        {new Date(created_at).toLocaleDateString()}
      </div>
    </div>
  );
}
