"use client";

import { TinyUXSection } from "@/components/lab/templates/TinyUXSection";
import { Button } from "@/components/ui/button";
import { tinyuxList } from "@/data/tinyux";
import classNames from "classnames";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const style = {
  container: classNames("font-jost", "h-screen overflow-hidden flex flex-col"),
  header: classNames(
    "fixed",
    "top-0",
    "left-0",
    "w-full",
    "z-50",
    "bg-white",
    "border-b-gray-300"
  ),
  innerHeader: classNames(
    "max-w-6xl",
    "mx-auto",
    "px-4",
    "py-5",
    "flex",
    "justify-between"
  ),
  headerFont: classNames("text-3xl", "font-light"),
  mainContainer: classNames(
    "pt-[76px]",
    "pb-12",
    "flex-1",
    "items-center",
    "justify-center",
    "overflow-y-auto",
    "snap-y snap-mandatory"
  ),
  sideNav: classNames(
    "sticky top-1/2 -translate-y-1/2 z-50 space-y-4 ml-4 w-max"
  ),
  viewCodeContainer: classNames(
    "flex",
    "w-full",
    "items-center",
    "justify-center",
    "mt-6"
  ),
  viewCode: classNames("hover:underline", "text-base", "text-muted-foreground"),
  footer: classNames(
    "flex",
    "fixed",
    "bottom-0",
    "h-12",
    "w-full",
    "py-4",
    "px-6",
    "text-muted-foreground",
    "text-center",
    "text-xs",
    "justify-center",
    "items-center",
    "bg-white"
  ),
};

export default function LabHome() {
  const router = useRouter();
  const [activeId, setActiveId] = useState<string | null>(null);

  const scrollToId = (id: string) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: document.querySelector("#lab-scroll"),
        threshold: 0.6,
      }
    );

    document
      .querySelectorAll("section[id]")
      .forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.innerHeader}>
          <h1 className={style.headerFont}>Lily&apos;s Lab 🧪</h1>
          <Button
            variant="outline"
            onClick={() => router.push("/")}
            className="font-light rounded-2xl"
          >
            <Home />
          </Button>
        </div>
      </header>

      <main className={style.mainContainer} id="lab-scroll">
        {/* 📌 Side navigation */}
        <nav className={style.sideNav}>
          {tinyuxList.map((item) => (
            <button
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(item.id);
              }}
              className={classNames(
                "flex items-center space-x-2 group",
                activeId === item.id && "font-semibold text-black"
              )}
            >
              <span
                className={classNames(
                  "block w-3 h-3 rounded-full",
                  activeId === item.id ? "bg-black scale-125" : "bg-gray-300"
                )}
              />
              <span
                className={classNames(
                  "text-xs opacity-70 group-hover:opacity-100 transition",
                  activeId === item.id && "opacity-100"
                )}
              >
                {item.title}
              </span>
            </button>
          ))}
        </nav>

        {tinyuxList.map(({ id, title, description, Component, codeUrl }) => (
          <TinyUXSection
            key={id}
            id={id}
            title={title}
            description={description}
          >
            <Component />
            <div className={style.viewCodeContainer}>
              <a href={codeUrl} target="_blank" className={style.viewCode}>
                💻 View Code
              </a>
            </div>
          </TinyUXSection>
        ))}
      </main>
      <footer className={style.footer}>
        © 2025 Lily Go. All rights reserved. |
        <a href="https://github.com/devlilygo" className="underline pl-2">
          GitHub
        </a>
      </footer>
    </div>
  );
}
