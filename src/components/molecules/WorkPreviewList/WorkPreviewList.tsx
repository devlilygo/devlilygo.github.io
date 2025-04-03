import { WorkPreviewItem } from "../WorkPreviewItem/WorkPreviewItem";

export function WorkPreviewList({
  works,
}: {
  works: { title: string; emoji: string; tech: string[] }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-2 pt-1">
      {works.map((work) => (
        <WorkPreviewItem key={work.title} {...work} />
      ))}
    </div>
  );
}
