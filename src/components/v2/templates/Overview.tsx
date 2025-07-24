"use client";

import { useState } from "react";
import { Card } from "../atoms/Card";
import ProjectsTimeline from "../molecules/ProjectsTimeline";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import { Bell } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
const Overview = () => {
  const [copied, setCopied] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  // const [hasUnread, setRead] = useState(true);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("devlilygo@gmail.com");
      setCopied(true);
      toast("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 2000); // 2초 후 상태 초기화
    } catch (err) {
      console.error("Copy Failed:", err);
    }
  };
  return (
    <div className="flex-1 flex flex-col bg-white/60 px-8 transition">
      {/* 탑바 */}
      <header className="flex h-40 justify-between items-center px-4 pt-4">
        <div className="flex flex-col items-start">
          <span className="text-5xl font-extralight mt-6 mb-3">Overview</span>
          <span className="text-lg font-medium">Hi, I&apos;m Lily!</span>
        </div>
        <div className="mr-2">
          <Popover>
            <PopoverTrigger>
              {/* <Button
                variant="outline"
                className="relative rounded-2xl h-12"
                // onClick={() => setRead(false)}
              > */}
              <div className="relative rounded-2xl h-12 w-12 bg-white flex items-center justify-center shadow-md hover:bg-gray-100 transition">
                <Bell size={20} />
                {/* {hasUnread && ( */}
                <span className="absolute top-1 right-1 block w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
                {/* )} */}
                {/* {hasUnread && ( */}
                <span className="absolute top-1 right-1 block w-2.5 h-2.5 bg-red-500 rounded-full" />
                {/* )} */}
              </div>
              {/* </Button> */}
            </PopoverTrigger>
            <PopoverContent className="w-56">
              <p className="font-medium text-black whitespace-pre-line">
                {`Available for hire 
                — React, Next.js & more`}
              </p>
              <p className="text-muted-foreground mt-1">
                {`Don’t wait, get in touch ⚡️`}
              </p>
            </PopoverContent>
          </Popover>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex h-full w-full p-6 overflow-y-hidden gap-10 mb-6">
        <div className="flex flex-col h-full w-2/3 gap-10">
          <div className="flex h-1/3 w-full">
            <Card className="border-none bg-white/70" title="TOTAL EXPERIENCE">
              <div className="flex flex-col h-full w-full">
                <span className="text-5xl font-medium">
                  {/* <WaveText text="8+ years in Dev" amplitude={4} /> */}
                  8+ years in Dev
                </span>
                <span className="mt-6 font-light">
                  React, TypeScript, Next.js, Tailwind
                </span>
              </div>
            </Card>
          </div>
          <div className="flex h-2/3 w-full pb-6">
            <Card
              className="border-none px-0"
              title="RECENT PROJECTS"
              backgroundColor="bg-transparent"
            >
              <ProjectsTimeline />
            </Card>
          </div>
        </div>
        <div className="flex flex-col h-full w-1/3 gap-10">
          <div className="flex h-1/2 w-full">
            <Card className="border-none bg-white/70 h-72" title="DOWNLOAD">
              <div className="flex flex-col gap-3 items-center justify-center">
                <div className="flex gap-2">
                  <a
                    className="flex w-20 h-12 items-center justify-center rounded-2xl text-sm font-bold border hover:border-purple-500 hover:text-purple-500 cursor-pointer transition"
                    href="/resume_lilygo_202507.pdf"
                    target="_blank"
                  >
                    RESUME
                  </a>
                  <a
                    className="flex w-32 h-12 items-center justify-center border rounded-2xl text-sm font-bold hover:border-purple-500 hover:text-purple-500 cursor-pointer transition"
                    href="/coverletter_lilygo_202507.pdf"
                    target="_blank"
                  >
                    COVERLETTER
                  </a>
                </div>

                <div className="flex gap-2">
                  <a
                    className="flex w-32 h-12 items-center justify-center border rounded-2xl text-sm font-bold hover:border-purple-500 hover:text-purple-500 cursor-pointer transition"
                    href="https://linkedin.com/in/lily-go-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LINKEDIN
                  </a>
                  <a
                    className="flex w-20 h-12 items-center justify-center border rounded-2xl text-sm font-bold hover:border-purple-500 hover:text-purple-500 cursor-pointer transition"
                    href="https://github.com/devlilygo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GIT
                  </a>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex w-full h-12 items-center justify-center border mt-2 rounded-2xl text-sm font-bold text-white bg-purple-500 hover:border-purple-500 hover:text-purple-500 hover:bg-transparent cursor-pointer transition"
                >
                  {copied ? "COPIED! 🎉" : "COPY EMAIL"}
                </button>
              </div>
            </Card>
          </div>
          <div className="flex h-full w-full">
            <Card
              title="ID CARD"
              className="border-none w-full h-[23rem] flex items-center justify-center"
              header={false}
              backgroundColor="bg-white/60"
              padding="p-0"
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-2xl w-full h-full border-none shadow-sm bg-transparent"
                captionLayout="dropdown"
              />
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Overview;
