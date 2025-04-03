// components/organisms/MessagesCard.tsx
import { MessageInput } from "@/components/molecules/MessageInput/MessageInput";
import { MessageItem } from "@/components/molecules/MessageItem/MessageItem";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function MessagesCard() {
  return (
    <Card className="h-[248px] w-[464px] rounded-2xl shadow-md">
      <CardHeader className="gap-2">
        <CardTitle>💬 Visitor Messages</CardTitle>
        <CardDescription>Leave a note anonymously 💌</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 overflow-y-auto pr-2">
          <MessageItem name="익명" content="오늘 포트폴리오 너무 귀엽네요 💕" />
          <MessageItem name="익명" content="이런 앱 진짜 좋아요!" />
        </div>
        <MessageInput />
      </CardContent>
    </Card>
  );
}
