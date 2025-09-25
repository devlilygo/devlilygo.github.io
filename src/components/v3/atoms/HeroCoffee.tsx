import classNames from "classnames";
import Image from "next/image";
import { motion } from "framer-motion";

const style = {
  containter: classNames(
    "flex flex-col h-[400px] w-[500px] justify-center mr-4"
  ),
};

const HeroCoffee = () => {
  return (
    <div className={style.containter}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
        className="flex w-full h-full items-center justify-center"
      >
        <motion.div
          whileTap={{
            scale: 0.9,
          }}
          transition={{
            duration: 0.1, // ⚡ 엄청 빠른 반응
            ease: "easeOut",
          }}
          className="flex w-full h-full items-center justify-center"
        >
          <div className="relative flex  w-full h-auto  group justify-center">
            <Image
              src="/v3/coffee.png"
              alt="coffee"
              width={500}
              height={500}
              className="transition group-hover:rotate-12"
            />
            <div className="absolute top-24 left-6 -rotate-45 flex items-center justify-center text-xl opacity-0 group-hover:opacity-100 transition">
              COFFEE CHAT?
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroCoffee;
