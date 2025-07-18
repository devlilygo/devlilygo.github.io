"use client";

import {
  Home,
  GitPullRequestArrow,
  BarChart,
  Send,
  Sparkles,
  TreePalm,
} from "lucide-react";
import classNames from "classnames";
import WaveText from "./WaveText";

const tabs = [
  { label: "Overview", icon: <Home size={20} />, href: "/" },
  { label: "Skills", icon: <GitPullRequestArrow size={20} />, href: "/skills" },
  {
    label: "Works",
    icon: <BarChart size={20} />,
    href: "/works",
  },
  { label: "Strength", icon: <Sparkles size={20} />, href: "/strength" },
  { label: "Contacts", icon: <Send size={20} />, href: "/contacts" },
];

interface SidebarProps {
  currTab: string;
  setTab: (tab: string) => void;
}

export default function Sidebar({ currTab, setTab }: SidebarProps) {
  return (
    <aside className="flex h-screen w-64 bg-white/60 border-r-[0.3px] border-gray-300 p-4 flex-col justify-between">
      <div>
        <div className="flex h-[100px] items-center justify-center">
          <TreePalm size={40} color="#78A2D2" />
          <WaveText
            text="Lily Go"
            amplitude={4}
            className="text-3xl ml-2 font-jost font-medium text-center"
          />
        </div>
        <nav className="flex flex-col gap-2 text-gray-400">
          {tabs.map((tab) => (
            <div
              key={tab.label}
              className={classNames(
                "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/60 transition cursor-pointer",
                currTab === tab.label && "bg-white/60 text-black"
              )}
              onClick={() => setTab(tab.label)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
