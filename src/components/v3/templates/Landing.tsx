import classNames from "classnames";
import HeroTitle from "../atoms/HeroTitle";
import ScrollIndicator from "../atoms/ScrollIndicator";
import SpinningLogo from "../atoms/SpinningLogo";
import Introduction from "../organisms/Introduction";
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
    "pb-12"
  ),
};

const Landing = () => {
  return (
    <div className={style.container}>
      <SpinningLogo />
      <HeroTitle />
      <div className="flex w-full h-auto items-center justify-center gap-10">
        <HeroCoffee />
        <Introduction />
      </div>
      <ScrollIndicator />
    </div>
  );
};

export default Landing;
