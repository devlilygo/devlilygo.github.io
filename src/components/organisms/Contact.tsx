"use client";

import classNames from "classnames";
import { Github, Linkedin } from "lucide-react";
import { AccentUnderline } from "../atoms/AccentUnderline";

// styles
const style = {
  container: classNames(
    "relative",
    "min-h-screen",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "px-6",
    "py-20",
    "bg-[#F8FAFF]",
    "text-cloudMist",
    "font-fira"
  ),
  backgroundArea: classNames(
    "absolute",
    "inset-0",
    "bg-[url('/images/contacts-bg.jpg')]",
    "bg-no-repeat",
    "bg-center",
    "bg-cover",
    "opacity-80",
    "z-0",
    "pointer-events-none"
  ),
  backgroundColourArea: classNames(
    "absolute",
    "inset-0",
    "bg-charcoalGray/80",
    "z-10",
    "pointer-events-none"
  ),
  mainArea: classNames(
    "relative",
    "z-20",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "text-center"
  ),
  titleArea: classNames(
    "text-6xl",
    "lg:text-8xl",
    "font-bodoni",
    "mb-10",
    "italic"
  ),
  capitalArea: classNames(
    "font-ballet",
    "not-italic",
    "text-7xl",
    "lg:text-9xl"
  ),
  desciriptionArea: classNames(
    "text-sm",
    "lg:text-lg",
    "max-w-xl",
    "mb-10",
    "p-3"
  ),
  emailArea: classNames(
    "text-xl",
    "font-semibold",
    "underline",
    "underline-offset-4",
    "hover:text-blue-600",
    "transition"
  ),
  iconArea: classNames("flex", "gap-6", "mt-10"),
};

export const Contact = () => {
  return (
    <section className={style.container}>
      <div className={style.backgroundArea} aria-hidden="true" />

      <div className={style.backgroundColourArea} />

      <div className={style.mainArea}>
        <h2 className={style.titleArea}>
          <span className={style.capitalArea}>C</span>
          ontact
        </h2>

        <p className={style.desciriptionArea}>
          Feel free to reach out if you&apos;re interested in working together
          or just want to say hi 👋
        </p>

        <a href="mailto:devlilygo@google.com" className={style.emailArea}>
          <AccentUnderline>devlilygo@google.com</AccentUnderline>
        </a>

        <div className={style.iconArea}>
          <a
            href="https://github.com/devlilygo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={28} className="hover:text-gray-800 transition" />
          </a>
          <a
            href="https://linkedin.com/in/lily-go-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={28} className="hover:text-[#0A66C2] transition" />
          </a>
        </div>
      </div>
    </section>
  );
};
