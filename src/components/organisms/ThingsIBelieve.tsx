"use client";

import { AccentUnderline } from "@/components/atoms/AccentUnderline";
import classNames from "classnames";

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
    "py-32",
    "bg-[#F8FAFF]",
    "text-[#3E4A5C]",
    "font-fira",
    "text-center"
  ),
  titleArea: classNames(
    "text-3xl",
    "lg:text-6xl",
    "font-bodoni",
    "mb-10",
    "lg:mb-20",
    "z-10",
    "italic"
  ),
  capitalArea: classNames(
    "text-5xl",
    "lg:text-8xl",
    "font-ballet",
    "not-italic"
  ),
  descriptionArea: classNames(
    "text-left",
    "space-y-6",
    "lg:space-y-10",
    "max-w-6xl",
    "p-3",
    "text-base",
    "lg:text-lg",
    "leading-relaxed",
    "z-10"
  ),
};

//NOTE - Beliefs
const beliefs = [
  <>
    I believe in <AccentUnderline>empathy</AccentUnderline>, in{" "}
    <AccentUnderline>people</AccentUnderline>, and in the quiet power of{" "}
    <AccentUnderline>genuine communication</AccentUnderline>.
  </>,
  <>
    I believe in the energy of <AccentUnderline>optimism</AccentUnderline> and
    the joy of <AccentUnderline>small, ordinary moments</AccentUnderline>.
  </>,
  <>
    I believe in{" "}
    <AccentUnderline>creativity fueled by kindness</AccentUnderline>, and in{" "}
    <AccentUnderline>doing things with care</AccentUnderline>, even when no
    one’s watching.
  </>,
  <>
    I believe <AccentUnderline>details</AccentUnderline> are not just details —
    they shape experience.
  </>,
  <>
    I believe in building thoughtfully — with{" "}
    <AccentUnderline>intention</AccentUnderline>, not just logic.
  </>,
];

export const ThingsIBelieve = () => {
  return (
    <section className={style.container}>
      <h2 className={style.titleArea}>
        <span className={classNames(style.capitalArea, "mr-1")}>T</span>
        hings I<span className={classNames(style.capitalArea, "ml-4")}>B</span>
        elieve
      </h2>

      <div className={style.descriptionArea}>
        {beliefs.map((belief, i) => (
          <p key={i}>{belief}</p>
        ))}
      </div>
    </section>
  );
};
