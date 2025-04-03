// components/molecules/MessageInput.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function MessageInput() {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!message.trim()) return;
    console.log("💬 메시지 전송:", message);
    setMessage("");
  };

  return (
    <div className="flex items-center gap-2">
      <Input
        type="text"
        placeholder="Write a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="text-sm h-8"
      />
      <Button onClick={handleSubmit} className="h-8 px-3 text-sm">
        Send
      </Button>
    </div>
  );
}
