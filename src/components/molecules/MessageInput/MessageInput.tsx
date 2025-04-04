import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { saveVisitorMessage } from "@/lib/supabaseMessage";
import { useState } from "react";

export function MessageInput({ onSubmit }: { onSubmit: () => void }) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!message.trim()) return alert("메시지를 입력해주세요!");

    saveVisitorMessage(message.trim());
    setMessage("");
    onSubmit();
  };

  return (
    <div className="flex gap-2">
      <div className="flex flex-col h-full w-full">
        <Input
          placeholder="Leave your message (max 150 characters) ✨"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border px-3 py-2 rounded resize-none"
          maxLength={150}
        />
        <p className="text-xs text-muted-foreground text-right pt-1">
          {message.length} / 150
        </p>
      </div>
      <Button
        onClick={handleSubmit}
        className="w-10 bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition"
      >
        ⏎
      </Button>
    </div>
  );
}
