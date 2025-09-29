import classNames from "classnames";
import { HighlightText } from "../atoms/HighlightText";
import Image from "next/image";

const style = {
  container: classNames(
    "flex",
    "flex-col",
    "w-full",
    "h-screen",
    "items-center",
    "bg-[#fffdf5]",
    "p-12",
    "py-32"
  ),
  title: classNames(
    "flex",
    "flex-col",
    "w-1/3",
    "h-full",
    "justify-start",
    "text-[175px]",
    "leading-[0.8]",
    "tracking-[-0.1em]",
    "font-extralight",
    "pl-20",
    "text-[#364c84]"
  ),
  descriptionArea: classNames(
    "flex",
    "flex-col",
    "w-2/3",
    "h-full",
    "justify-between",
    "items-center",
    "ml-32"
  ),
  description: classNames(
    "flex",
    "flex-col",
    "w-full",
    "h-full",
    "justify-start",
    "text-xl",
    "leading-10",
    "tracking-[-0.04em]",
    "font-light",
    "text-left",
    "text-[#364c84]",
    "gap-2",
    "p-2"
  ),
};

const AboutMe = () => {
  return (
    <div className={style.container}>
      <div className="flex w-full h-full">
        <div className={style.title}>
          <span>HAPPY</span>
          <span>TO</span>
          <span>MEET</span>
          <span>YOU!</span>
        </div>
        <div className={style.descriptionArea}>
          <div className="flex w-full h-[400px] justify-center items-center p-10 pr-32">
            <Image
              src="/v3/croissant.png"
              alt="croissant"
              width={400}
              height={400}
              className="-scale-x-100 -rotate-12"
            />
          </div>
          <div className={style.description}>
            <span>
              I believe in{" "}
              <HighlightText color="blue" opacity={50}>
                empathy
              </HighlightText>
              , in
              <HighlightText color="blue" opacity={50}>
                people
              </HighlightText>
              , and in the quiet power of{" "}
              <HighlightText color="blue" opacity={50}>
                genuine communication
              </HighlightText>
              .
            </span>
            <span>
              I believe in the{" "}
              <HighlightText color="blue" opacity={50}>
                energy of optimism
              </HighlightText>{" "}
              and the joy of small, ordinary moments.
            </span>
            <span>
              I believe in{" "}
              <HighlightText color="blue" opacity={50}>
                creativity fueled by kindness
              </HighlightText>
              , and in doing things with care,
              <br />
              even when no one’s watching.
            </span>
            <span>
              I believe
              <HighlightText color="blue" opacity={50}>
                details are not just details
              </HighlightText>{" "}
              — they shape experience.
            </span>
            <span>
              I believe in
              <HighlightText color="blue" opacity={50}>
                building thoughtfully{" "}
              </HighlightText>
              — with intention, not just logic.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
