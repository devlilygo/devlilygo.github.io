import BlurText from "../molecules/BlurText";
import GradientText from "../molecules/GradientText";

const CurrentWorks = () => {
  return (
    <div>
      <div className="flex flex-col w-full h-fit text-white items-center justify-center gap-10 mt-20">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#ffde70", "#40ffaa"]}
          animationSpeed={5}
          showBorder={false}
          className="text-base md:text-4xl font-semibold text-center h-96"
        >
          What I am interested in thesedays are...
        </GradientText>
        <BlurText
          text="My AI WORKs will be updated soon..."
          delay={150}
          animateBy="words"
          direction="top"
          className="text-base md:text-2xl"
        />
        {/* <BlurText>My AI WORKs will be updated soon...</BlurText> */}
      </div>
    </div>
  );
};

export default CurrentWorks;
