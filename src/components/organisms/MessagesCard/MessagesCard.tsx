import { ScrollToBottom } from "@/components/atoms/ScrollToBottom/ScrollToBottom";
import { MessageInput } from "@/components/molecules/MessageInput/MessageInput";
import {
  MessageItem,
  VisitorMessage,
} from "@/components/molecules/MessageItem/MessageItem";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { fetchVisitorMessages } from "@/lib/supabaseMessage";
import { useEffect, useState } from "react";

export function MessagesCard() {
  const [messages, setMessages] = useState<Array<VisitorMessage>>([]);

  useEffect(() => {
    const loadMessages = async () => {
      const data = await fetchVisitorMessages();
      setMessages(data);
    };
    loadMessages();
  }, []);

  const onSubmit = async () => {
    const updated = await fetchVisitorMessages(); // 최신 메시지 다시 받아오기
    setMessages(updated);
  };

  return (
    <Card className="h-[248px] w-[464px] rounded-2xl shadow-md gap-2">
      <CardHeader className="gap-2">
        <CardTitle>💬 Visitor Messages</CardTitle>
        <CardDescription>Leave a note anonymously 💌</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 h-24">
        <ScrollToBottom>
          {!messages.length ? (
            <p className="text-muted-foreground">Message box is empty 😌</p>
          ) : (
            messages.map((msg) => <MessageItem key={msg.id} {...msg} />)
          )}
        </ScrollToBottom>
        <MessageInput onSubmit={() => onSubmit()} />
      </CardContent>
    </Card>
  );
}
