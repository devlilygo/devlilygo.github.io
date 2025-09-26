import classNames from "classnames";
import Marquee from "../atoms/Marquee";

const style = {
  container: classNames(
    "flex",
    "flex-col",
    "w-full",
    "h-screen",
    "items-center",
    "justify-evenly",
    "bg-[#d0d9f5]",
    "p-12"
  ),
  title: classNames(
    "flex",
    "flex-col",
    "w-full",
    "h-full",
    "justify-center",
    "text-[140px]",
    "leading-none",
    "tracking-[-0.1em]",
    "font-extralight",
    "pl-56",
    "pt-80",
    "pb-24",
    "border"
    // "border-black"
  ),
};

const Works = () => {
  return (
    <div className={style.container}>
      <div className="relative w-full overflow-x-hidden">
        <Marquee />
      </div>
      <div className="flex w-full h-2/3 items-center justify-center">body</div>
    </div>
  );
};

export default Works;
