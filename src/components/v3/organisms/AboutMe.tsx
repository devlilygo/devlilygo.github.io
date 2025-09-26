import classNames from "classnames";

const style = {
  container: classNames(
    "flex",
    "flex-col",
    "w-full",
    "h-screen",
    "items-center",
    "justify-center",
    "bg-[#d0d9f5]",
    "pb-12"
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

const AboutMe = () => {
  return (
    <div className={style.container}>
      <div className="flex w-full h-1/2 items-center justify-between">
        <div className={style.title}>
          <span>HAPPY TO</span>
          <span>MEET YOU!</span>
        </div>
        <div className={style.title}>
          <div>NICE TO MEET YOU</div>
        </div>
      </div>
      <div className="flex w-full h-1/2 justify-center items-center">
        <div>NICE TO MEET YOU</div>
        <div>NICE TO MEET YOU</div>
      </div>
    </div>
  );
};

export default AboutMe;
