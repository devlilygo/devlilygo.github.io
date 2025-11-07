import classNames from "classnames";
import MarqueeText from "../atoms/MarqueeText";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";
// import { useRouter } from "next/navigation";

const style = {
  container: classNames(
    "flex",
    "flex-col",
    "w-full",
    "h-screen",
    "items-center",
    "justify-between",
    "bg-[#fffdf5]"
  ),
  text: classNames(
    "flex",
    "w-fit",
    "h-fit",
    "items-center",
    "justify-center",
    "rounded-full",
    "text-4xl",
    "md:text-5xl",
    "lg:text-6xl",
    "xl:text-7xl",
    "leading-[0.6em]",
    "tracking-tighter",
    "font-black",
    "hover:opacity-50",
    "hover:italic",
    "cursor-pointer",
    "transition",
    "cursor-none",
    "text-[#333333]"
  ),
  accentText: classNames(
    "font-bodoni",
    "text-lg",
    "lg:text-2xl",
    "italic",
    "font-semibold"
  ),
  descriptionArea: classNames(
    "text-xs",
    "lg:text-sm",
    "xl:text-md",
    "font-light",
    "flex",
    "flex-col",
    "h-[150px]",
    "lg:h-[300px]",
    "overflow-auto",
    "lg:overflow-hidden",
    "lg:h-fit",
    "w-fit",
    "bg-[#95b1ee]",
    "text-[#fffdf5]",
    "p-4",
    "tracking-tighter",
    "rounded-sm",
    "md:rounded-none"
  ),
};

const Contacts = () => {
  // const router = useRouter();
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
    <div className={style.container}>
      <div className="flex flex-col lg:flex-row md:h-3/5 h-4/5 w-full mt-32 p-12 items-center justify-center">
        <div className="flex flex-col h-full w-full gap-4 md:gap-2 lg:gap-0">
          <motion.div
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              duration: 0.1,
              ease: "easeOut",
            }}
          >
            <a
              className={style.text}
              href="/LilyGo_RESUME.pdf"
              target="_blank"
            >
              RESUME
            </a>
          </motion.div>
          <motion.div
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              duration: 0.1,
              ease: "easeOut",
            }}
          >
            <a
              className={style.text}
              href="/LilyGo_COVERLETTER.pdf"
              target="_blank"
            >
              COVERLETTER
            </a>
          </motion.div>
          <motion.div
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              duration: 0.1,
              ease: "easeOut",
            }}
          >
            <a
              className={style.text}
              href="https://linkedin.com/in/lily-go-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
          </motion.div>
          <motion.div
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              duration: 0.1,
              ease: "easeOut",
            }}
          >
            <a
              className={style.text}
              href="https://github.com/devlilygo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GIT
            </a>
          </motion.div>
          <motion.div
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              duration: 0.1,
              ease: "easeOut",
            }}
          >
            <a className={style.text} onClick={handleCopy}>
              {copied ? "COPIED! 🎉" : "COPY EMAIL"}
            </a>
          </motion.div>
        </div>
        <div className="flex flex-col h-full w-full items-end justify-between gap-4">
          <div className={style.descriptionArea}>
            <span>
              I am a person who likes working in{" "}
              <b className={style.accentText}>agile</b>, taking small steps and
              moving fast.
            </span>
            <span>
              I am someone who likes using{" "}
              <b className={style.accentText}>Gantt charts</b> for planning.
            </span>
            <span>
              With me, you can see where I am, what I am doing, and what comes
              next.
            </span>
            <span>
              I am a person who sets <b className={style.accentText}>goals</b>{" "}
              and works hard to reach them.
            </span>
            <span>
              I am someone who feels <b className={style.accentText}>proud</b>{" "}
              and <b className={style.accentText}>confident</b> through my work.
            </span>
            <span>
              I am <b className={style.accentText}>eager to work</b> with people
              and grow with every project.
            </span>
            <span>
              I am a person who enjoys being{" "}
              <b className={style.accentText}>part of a team</b> and reaching{" "}
              <b className={style.accentText}>success</b> together.
            </span>
            <span>
              I am someone who likes meeting{" "}
              <b className={style.accentText}>new people</b> and building good
              connections.
            </span>
          </div>
          <motion.div
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              duration: 0.1, // ⚡ 엄청 빠른 반응
              ease: "easeOut",
            }}
            className="flex"
          >
            <a
              className={classNames(style.text, "flex")}
              // onClick={() => router.push("/lab")}
              href="https://lilygo.vercel.app/lab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FlaskConical size={80} />
              Lily&apos;s Lab
            </a>
          </motion.div>
        </div>
      </div>

      <div className="flex h-[100px] lg:h-1/5 w-full items-center">
        <MarqueeText />
      </div>
    </div>
  );
};

export default Contacts;
