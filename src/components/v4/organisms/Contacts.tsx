import { BackgroundGradient } from "@/components/ui/background-gradient";
import CurvedLoop from "../molecules/CurvedLoop";
import classNames from "classnames";
import { useState } from "react";
import { toast } from "sonner";

const style = {
  text: classNames(
    "flex",
    "w-fit",
    "h-fit",
    "items-center",
    "justify-center",
    "rounded-full",
    "text-2xl",
    "font-extrabold",
    "leading-[0.6em]",
    "tracking-tighter",
    "hover:italic",
    "cursor-pointer",
    "transition",
    "text-white"
  ),
};

const Contacts = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("devlilygo@gmail.com");
      setCopied(true);
      toast("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy Failed:", err);
    }
  };
  return (
    <div className="flex flex-col w-full h-fit items-center justify-center">
      <div className="flex w-full">
        <CurvedLoop
          marqueeText="Let's ✦ Work ✦ Together ✦ Lily ✦ Go ✦"
          speed={1}
          curveAmount={500}
          direction="right"
          interactive={true}
        />
      </div>

      <div className="flex flex-col w-full h-full items-center justify-center gap-4 pb-48">
        <div className="flex gap-8">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-gray-950 dark:bg-zinc-900 font-bold text-white cursor-pointer">
            <a className={style.text} href="/LilyGo_RESUME.pdf" target="_blank">
              RESUME
            </a>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-gray-950 dark:bg-zinc-900 font-bold text-white cursor-pointer">
            <a
              className={style.text}
              href="https://linkedin.com/in/lily-go-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </BackgroundGradient>
          {/* </div>
        <div className="flex gap-4"> */}
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-gray-950 dark:bg-zinc-900 font-bold text-white cursor-pointer">
            <a
              className={style.text}
              href="https://github.com/devlilygo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GIT
            </a>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-gray-950 dark:bg-zinc-900 font-bold text-white cursor-pointer">
            <a className={style.text} onClick={handleCopy}>
              {copied ? "COPIED! 🎉" : "COPY EMAIL"}
            </a>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
