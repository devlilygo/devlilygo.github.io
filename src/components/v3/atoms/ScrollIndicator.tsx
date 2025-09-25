import { ChevronsDown } from "lucide-react";
// import { LiquidGlass } from "./LiquidGlass/LiquidGlass";
import { motion } from "framer-motion";
import classNames from "classnames";

const style = {
  container: classNames(
    "flex",
    "flex-col",
    "w-full",
    "h-screen",
    "items-center",
    "justify-center",
    "bg-[url('/v3/bg-water.jpg')]",
    "bg-no-repeat",
    "bg-center",
    "bg-cover"
  ),
  scrollIndicator: classNames(
    "absolute",
    "bottom-6",
    "animate-bounce",
    "hover:cursor-[url('/v3/pointer-black')]"
  ),
};

const ScrollIndicator = () => {
  return (
    <>
      {/* Scroll Indicator */}
      <motion.div
        initial="hidden"
        animate="visible"
        className={style.scrollIndicator}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
      >
        <div className="flex flex-col h-12 w-12 items-center justify-center hover:scale-120">
          <ChevronsDown className="h-6 w-6" />
        </div>
      </motion.div>
    </>
  );
};

export default ScrollIndicator;
