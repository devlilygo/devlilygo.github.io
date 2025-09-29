import classNames from "classnames";
import HeroTitle from "../atoms/HeroTitle";
import SpinningLogo from "../atoms/SpinningLogo";
import Introduction from "../molecules/Introduction";
import HeroCoffee from "../atoms/HeroCoffee";

const style = {
  container: classNames(
    "flex",
    "flex-col",
    "w-full",
    "h-screen",
    "items-center",
    "justify-center",
    "bg-[#fffdf5]",
    "pb-8"
  ),
  subContainer: classNames(
    "flex",
    "flex-col",
    "md:flex-row",
    "w-full",
    "h-auto",
    "items-start",
    "justify-center",
    "gap-10"
  ),
};

const Landing = () => {
  return (
    <div className={style.container}>
      <SpinningLogo />
      <HeroTitle />
      <div className={style.subContainer}>
        <HeroCoffee />
        <Introduction />
      </div>
    </div>
  );
};

export default Landing;
