import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { WorkHistory } from "@/constants/works";

export function WorkPreviewList({ works }: { works: Array<WorkHistory> }) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 gap-2 pt-1">
      {works.map((work) => (
        <Drawer
          key={work.id}
          open={selectedId === work.id}
          onOpenChange={(open) => setSelectedId(open ? work.id : null)}
        >
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              className="h-20 border-0"
              onClick={() => setSelectedId(work.id)}
            >
              <div className="flex flex-col">
                <span className="font-bold">{work.role}</span>
                <span className="italic text-xs text-muted-foreground">
                  {work.period}
                </span>
              </div>
            </Button>
          </DrawerTrigger>
          <DrawerContent className="mx-auto w-full h-2/3 ml-auto rounded-l-xl border-l border-muted shadow-lg p-4 flex flex-col items-center text-center">
            <DrawerHeader className="mt-8 mb-4">
              <DrawerTitle className="text-4xl">{work.role}</DrawerTitle>
              <DrawerDescription className="text-md">
                {work.company}
                <br />
                {work.period}
              </DrawerDescription>
            </DrawerHeader>
            <div className="px-4 pb-20 flex flex-col h-full space-y-4 justify-between">
              <p className="text-md whitespace-pre-wrap text-left">
                {work.description}
              </p>
              <div className="flex flex-wrap gap-2 text-sm justify-center">
                {work.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-accent px-2 py-1 rounded font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}
