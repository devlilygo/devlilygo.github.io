import { SkillTag } from "@/components/atoms/SkillTag/SkillTag";

export function SkillTagList({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <SkillTag key={skill} label={skill} />
      ))}
    </div>
  );
}
