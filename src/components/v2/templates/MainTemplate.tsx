"use client";

import { useEffect, useState } from "react";
import { Card } from "../atoms/Card";
import Sidebar from "../atoms/Sidebar";
import { AnimatePresence } from "framer-motion";
import OpeningAction from "../atoms/OpeningAction";

export default function MainTemplate() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000); // 타이머 조절 가능
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AnimatePresence>{showIntro && <OpeningAction />}</AnimatePresence>
      <div className="relative min-h-screen flex justify-center items-center font-jost animate-fade-in">
        <div className="fixed inset-0 bg-[url('/images/bg2.jpg')] bg-cover bg-center" />

        {!showIntro && (
          <div className="w-[1200px] h-[90vh] rounded-2xl backdrop-blur-md overflow-hidden flex">
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
                    <Card className="border-none bg-white/80">
                      Total Experience
                    </Card>
                  </div>
                  <div className="flex h-full w-full">
                    <Card className="border-none bg-white/40">
                      Recent Projects
                    </Card>
                  </div>
                </div>
                <div className="flex flex-col h-full w-1/3 gap-10">
                  <div className="flex h-full w-full">
                    <Card className="border-none bg-white/80">
                      DOWNLOAD RESUME
                    </Card>
                  </div>
                  <div className="flex h-full w-full">
                    <Card>ID CARD</Card>
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
