"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  GitPullRequestArrow,
  BarChart,
  Send,
  Sparkles,
  TreePalm,
} from "lucide-react";
import classNames from "classnames";

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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 bg-white/60 border-r-[0.3px] border-gray-300 p-4 flex-col justify-between">
      <div>
        <div className="flex h-[100px] items-center justify-center">
          <TreePalm size={40} color="#78A2D2" />

          {/* <WaveText
            text="Lily Go"
            className="text-3xl ml-2 font-jost font-medium text-center"
            color="black"
            amplitude={4}
          /> */}
          <h1 className="text-3xl text-black ml-2 font-jost font-medium text-center">
            Lily Go
          </h1>
        </div>
        <nav className="flex flex-col gap-2 text-gray-400">
          {tabs.map((tab) => (
            <Link
              key={tab.label}
              href={tab.href}
              className={classNames(
                "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/60 transition ",
                pathname === tab.href && "bg-white/60 text-black"
              )}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
