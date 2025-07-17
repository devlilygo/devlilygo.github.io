import { ScrollArea } from "@/components/ui/scroll-area";
import { allProjects } from "@/data/recentProjects";

const ProjectsTimeline = () => {
  const proects = allProjects;
  return (
    // <div className="flex flex-col w-full h-full overflow-y-auto py-4">
    <ScrollArea className="w-full">
      {proects.map((project) => (
        <div
          key={project.id}
          className="flex w-full items-center gap-6 py-6 border-b-[0.1px] border-gray-400 last:border-b-0"
        >
          <div className="flex w-14 h-14 font-light text-sm text-center items-center justify-center bg-white/80 rounded-2xl p-6">
            {project.date}
          </div>
          <div className="flex flex-col">
            <div className="text-medium font-medium pb-2">
              {project.summary}
            </div>
            <div className="text-sm font-light text-gray-500">
              {project.title}
            </div>
            {/* <div className="text-sm font-light">{project.role}</div> */}
          </div>
        </div>
      ))}
      {/* </div> */}
    </ScrollArea>
  );
};

export default ProjectsTimeline;
