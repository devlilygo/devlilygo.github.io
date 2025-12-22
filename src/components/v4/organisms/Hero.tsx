import Aurora from "../molecules/Aurora";
import TextType from "../molecules/TextType";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col font-bold text-4xl">
      <div className="h-screen w-full flex flex-col absolute -z-0">
        <Aurora
          colorStops={["#0b385a", "#2dbae1", "#90e6ff"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="h-screen w-full flex flex-col absolute items-center justify-center cursor-default">
        <TextType
          text={["When Frontend Developer Loves AI"]}
          typingSpeed={60}
          pauseDuration={5000}
          showCursor={true}
          cursorCharacter="|"
          className="text-white"
        />
        <motion.div
          className="text-white flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <h1 className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-[#1c8bc0] via-[#2dbae1] to-[#ffde70] py-4 text-6xl">
            Lily Go
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
