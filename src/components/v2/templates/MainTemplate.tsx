"use client";

import { useEffect, useState } from "react";
import Sidebar from "../atoms/Sidebar";
import { AnimatePresence } from "framer-motion";
import OpeningAction from "../atoms/OpeningAction";
import Overview from "./Overview";
import Skills from "./Skills";
import Works from "./Works";
import Strength from "./Strength";
// import Contacts from "./Contacts";
export default function MainTemplate() {
  const [showIntro, setShowIntro] = useState(true);

  const [tab, setTab] = useState("Overview");

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
          <div className="w-[1200px] h-[900px] rounded-2xl backdrop-blur-md overflow-hidden flex animate-fade-in">
            <Sidebar currTab={tab} setTab={setTab} />
            {tab === "Overview" && <Overview />}
            {tab === "Skills" && <Skills />}
            {tab === "Works" && <Works />}
            {tab === "Strength" && <Strength />}
            {/* {tab === "Contacts" && <Contacts />} */}
          </div>
        )}
      </div>
    </div>
  );
}
