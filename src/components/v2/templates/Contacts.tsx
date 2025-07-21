"use client";

import { Button } from "@/components/ui/button";
import { Card } from "../atoms/Card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // shadcn 기본 유틸

const Contacts = () => {
  return (
    <div className="flex-1 flex flex-col bg-white/60 px-8 p-10 gap-4 items-center justify-center">
      <Card
        className="flex flex-col h-36 w-80"
        header={false}
        backgroundColor="bg-transparent"
      >
        <div className="flex flex-col h-full w-full gap-4 justify-center">
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative group"
          >
            <Button
              //   onClick={onClick}
              className={cn(
                "relative overflow-hidden",
                "bg-gradient-to-br from-white/10 via-white/5 to-white/10",
                "backdrop-blur-lg border border-white/20",
                "text-white font-medium tracking-wide",
                "rounded-2xl px-6 py-3 shadow-xl ring-1 ring-white/30",
                "transition-all duration-300 ease-in-out",
                "hover:backdrop-blur-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                // className
              )}
            >
              LINKEDIN
              {/* 반사광 */}
              <span className="absolute inset-0 bg-white/10 blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </Button>
          </motion.div>
          <Button>GIT</Button>
        </div>
      </Card>
    </div>
  );
};

export default Contacts;
