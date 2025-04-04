import { SkillTag } from "@/components/atoms/SkillTag/SkillTag";
import { SkillTagListProps } from "@/components/organisms/SkillsWorksCard/SkillsWorksCard";

export default function SkillTagList({ groups }: SkillTagListProps) {
  return (
    <div className="space-y-2">
      {groups.map((group) => (
        <div key={group.title}>
          <div className="flex flex-wrap gap-2 items-center">
            <h4 className={`text-xs font-medium italic ${group.textColor}`}>
              {group.title}
            </h4>
            {group.skills.map((skill) => (
              <SkillTag
                key={skill}
                label={skill}
                bgColor={group.bgColor}
                textColor={group.textColor}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
