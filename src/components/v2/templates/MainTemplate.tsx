"use client";

import { useEffect, useState } from "react";
import { Card } from "../atoms/Card";
import Sidebar from "../atoms/Sidebar";
import { AnimatePresence } from "framer-motion";
import OpeningAction from "../atoms/OpeningAction";
import ProjectsTimeline from "../molecules/ProjectsTimeline";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";

export default function MainTemplate() {
  const [showIntro, setShowIntro] = useState(true);
  const [copied, setCopied] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("devlilygo@gmail.com");
      setCopied(true);
      toast("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 2000); // 2초 후 상태 초기화
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000); // 타이머 조절 가능
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AnimatePresence>{showIntro && <OpeningAction />}</AnimatePresence>
      <div className="relative min-h-screen flex justify-center items-center font-jost">
        <div className="fixed inset-0 bg-[url('/images/bg2.jpg')] bg-cover bg-center" />

        {!showIntro && (
          <div className="w-[1200px] h-[90vh] rounded-2xl backdrop-blur-md overflow-hidden flex animate-fade-in">
            <Sidebar />

            <div className="flex-1 flex flex-col bg-white/60 px-8">
              {/* 탑바 */}
              <header className="flex h-40 justify-between items-center px-4 py-4">
                <div className="flex flex-col items-start gap-3">
                  <span className="text-5xl font-extralight mt-6">
                    Overview
                  </span>
                  <span className="text-lg font-medium">Hi, I'm Lily!</span>
                </div>
              </header>

              {/* 메인 콘텐츠 */}
              <main className="flex h-full w-full p-6 overflow-y-hidden gap-10 mb-6">
                <div className="flex flex-col h-full w-2/3 gap-10">
                  <div className="flex h-1/3 w-full">
                    <Card
                      className="border-none bg-white/70"
                      title="TOTAL EXPERIENCE"
                    >
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
                      className="border-none bg-transparent px-0"
                      title="RECENT PROJECTS"
                    >
                      <ProjectsTimeline />
                    </Card>
                  </div>
                </div>
                <div className="flex flex-col h-full w-1/3 gap-10">
                  <div className="flex h-1/2 w-full">
                    <Card className="border-none bg-white/70" title="DOWNLOAD">
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
                  <div className="flex h-1/2 w-full">
                    <Card
                      title="ID CARD"
                      className="border-none bg-white/60 p-0 flex items-center justify-center"
                      header={false}
                    >
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-2xl border-none shadow-sm w-full bg-transparent"
                        captionLayout="dropdown"
                      />
                    </Card>
                  </div>
                </div>
              </main>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
