import { Badge } from "@/components/ui/badge";

export function SkillTag({
  label,
  bgColor,
  textColor,
}: {
  label: string;
  bgColor: string;
  textColor: string;
}) {
  return (
    <Badge
      variant="secondary"
      className={`rounded-sm px-[2px] py-[1px] text-xs font-bold ${bgColor} ${textColor}`}
    >
      {label}
    </Badge>
  );
}
