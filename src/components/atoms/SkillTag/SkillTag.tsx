import { Badge } from "@/components/ui/badge";

export function SkillTag({ label }: { label: string }) {
  return (
    <Badge
      variant="secondary"
      className="rounded-full px-2 py-1 text-xs font-normal"
    >
      {label}
    </Badge>
  );
}
