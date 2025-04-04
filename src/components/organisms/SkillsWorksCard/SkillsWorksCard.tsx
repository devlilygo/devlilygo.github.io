import SkillTagList from "@/components/molecules/SkillTagList/SkillTagList";
import { WorkPreviewList } from "@/components/molecules/WorkPreviewList/WorkPreviewList";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { workHistory } from "@/constants/works";
const skillGroups = [
  {
    title: "Frontend",
    bgColor: "bg-[#F0FAF8] ", // 밝은 민트
    textColor: "text-[#3DA195]", // 밝은 민트
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "UI & Motion",
    bgColor: "bg-[#FFF0F3]", // 밝은 로즈
    textColor: "text-[#D97B91]", // 밝은 로즈
    skills: ["Tailwind CSS", "Framer Motion", "Figma", "UX"],
  },
  {
    title: "Data & Backend",
    bgColor: "bg-[#F3F1FA] ", // 밝은 라벤더
    textColor: "text-[#8378C2]", // 밝은 라벤더
    skills: ["Supabase", "Node.js", "REST API", "GraphQL", "Chart.js"],
  },
  {
    title: "Workflow",
    bgColor: "bg-[#FCFAF1] ", // 밝은 머스타드
    textColor: "text-[#B5A359]", // 밝은 머스타드
    skills: ["Jira", "Storybook", "Agile"],
  },
];

export interface SkillGroup {
  title: string;
  bgColor: string; // Tailwind 색상 클래스
  textColor: string; // Tailwind 색상 클래스
  skills: string[];
}

export interface SkillTagListProps {
  groups: SkillGroup[];
}

export function SkillsWorksCard() {
  return (
    <Card className="w-[464px] h-[320px] rounded-2xl shadow-md overflow-hidden text-sm gap-1">
      <CardHeader className="pb-1">
        <CardTitle className="text-lg">🛠️ Skills & Works</CardTitle>
        <CardDescription className="text-xs m-0">
          Things I&apos;ve built and mastered
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2 space-y-3 flex flex-col gap-2">
        <SkillTagList groups={skillGroups} />
        <WorkPreviewList works={workHistory} />
      </CardContent>
    </Card>
  );
}
