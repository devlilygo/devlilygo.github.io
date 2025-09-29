import classNames from "classnames";
import { motion } from "framer-motion";

const style = {
  containter: classNames(
    "flex",
    "flex-col",
    "h-auto",
    "w-[600px]",
    "items-left",
    "gap-4"
  ),
  textContainter: classNames(
    "flex",
    "flex-col",
    "md:h-48",
    "w-full",
    "md:w-[600px]",
    "items-left",
    "gap-1",
    "md:gap-4",
    "font-medium",
    "text-sm",
    "md:text-xl",
    "md:mb-6",
    "p-4",
    "md:p-0"
  ),
  button: classNames(
    "flex",
    "w-full",
    "md:w-64",
    "h-16",
    "items-center",
    "justify-center",
    "rounded-full",
    "bg-[#d0d9f5]",
    "hover:bg-[#364c84]",
    "hover:text-[#e7f1ab]",
    "text-sm",
    "md:text-base",
    "lg:text-xl",
    "transition",
    "m-4",
    "md:m-0"
  ),
};

const Introduction = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
        className={style.textContainter}
      >
        <span>{`I'm a frontend developer with 8+ years of experience,`}</span>
        <span>{`specializing in scalable, data-driven UIs.`}</span>
        <span>{`I strive to bridge data and experience`}</span>
        <span>{`through thoughtful interfaces.`}</span>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
        className="flex w-40 h-auto items-center justify-center"
      >
        <motion.div
          whileTap={{
            scale: 0.9,
          }}
          transition={{
            duration: 0.1,
            ease: "easeOut",
          }}
          className="flex w-40 h-auto items-center justify-center"
        >
          <div
            className={style.button}
            onClick={() => scrollToSection("contacts")}
          >
            CONTACT
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Introduction;
