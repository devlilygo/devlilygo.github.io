import { ScrollArea } from "@/components/ui/scroll-area";
import { allProjects } from "@/data/recentProjects";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const ProjectsTimeline = () => {
  const proects = allProjects;
  //   const viewportRef = useRef<HTMLDivElement>(null);
  //   const [showArrow, setShowArrow] = useState(false);

  //   useEffect(() => {
  //     const el = viewportRef.current;
  //     if (!el) return;

  //     const updateArrowVisibility = () => {
  //       const { scrollTop, scrollHeight, clientHeight } = el;
  //       const hasScroll = scrollHeight > clientHeight;
  //       const isBottom = scrollTop + clientHeight >= scrollHeight - 1;
  //       setShowArrow(hasScroll && !isBottom);
  //     };

  //     el.addEventListener("scroll", updateArrowVisibility);
  //     updateArrowVisibility(); // 초기 확인

  //     return () => el.removeEventListener("scroll", updateArrowVisibility);
  //   }, []);

  return (
    <div className="flex w-full h-full">
      <ScrollArea className="w-full h-full">
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
      </ScrollArea>
      {/* {showArrow && ( */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 pointer-events-none">
        <ChevronDown className="w-5 h-5" />
      </div>
      {/* )} */}
    </div>
  );
};

export default ProjectsTimeline;
