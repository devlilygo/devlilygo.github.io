import { SkillTagList } from "@/components/molecules/SkillTagList/SkillTagList";
import { WorkPreviewList } from "@/components/molecules/WorkPreviewList/WorkPreviewList";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
const skills = ["React", "TypeScript", "Tailwind CSS", "Framer Motion"];
const works = [
  { title: "칭찬 생성기", emoji: "💬", tech: ["React", "Framer Motion"] },
  { title: "감정 기록 앱", emoji: "🧠", tech: ["Next.js", "TypeScript"] },
];

export function SkillsWorksCard() {
  return (
    <Card className="w-[464px] h-[320px] rounded-2xl shadow-md overflow-hidden text-sm">
      <CardHeader className="pb-1">
        <CardTitle>🛠️ Skills & Works</CardTitle>
        <CardDescription className="text-xs">
          Things I&apos;ve built and mastered
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2 space-y-3">
        <SkillTagList skills={skills} />
        <WorkPreviewList works={works} />
      </CardContent>
    </Card>
  );
}
