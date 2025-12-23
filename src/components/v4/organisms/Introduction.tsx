import ScrollReveal from "../molecules/ScrollReveal";
import SplitText from "../molecules/SplitText";
import TiltedCard from "../molecules/TiltedCard";

const Introduction = () => {
  return (
    <div className="flex flex-col w-full h-fit text-white items-center justify-center gap-10">
      <SplitText
        text="What I have done until now..."
        className="text-xl md:text-4xl font-semibold text-center pb-[200px]"
        delay={100}
        duration={0.4}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />
      <div className="flex gap-10">
        <div className="hidden md:flex">
          <TiltedCard
            imageSrc="/images/work1.jpg"
            captionText="Dashboards"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="flex items-center justify-center bg-black bg-opacity-50 rounded-2xl m-7 px-4 py-2 font-bold shadow-lg">
                Dashboards
              </p>
            }
          />
        </div>
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={7}
          blurStrength={20}
          textClassName="w-[300px] md:w-[500px] text-sm md:text-xl"
        >
          Built a scalable monitoring dashboard for small manufacturers,
          focusing on real-time data visualization and modular architecture
        </ScrollReveal>
      </div>
      <div className="flex gap-10">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={7}
          blurStrength={20}
          textClassName="w-[300px] md:w-[500px] text-sm md:text-xl"
        >
          Developed a modular monitoring system for major semiconductor clients
          such as SK Hynix, Samsung and SK ON with real-time data display and
          status tracking
        </ScrollReveal>

        <div className="hidden md:flex">
          <TiltedCard
            imageSrc="/images/work2.jpg"
            captionText="Monitoring System"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="flex items-center justify-center bg-black bg-opacity-50 rounded-2xl m-7 px-4 py-2 font-bold shadow-lg">
                Monitoring System
              </p>
            }
          />
        </div>
      </div>
      <div className="flex gap-10">
        <div className="hidden md:flex">
          <TiltedCard
            imageSrc="/images/work3.jpg"
            captionText="Fault Detection & Classification"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="flex items-center justify-center bg-black bg-opacity-50 rounded-2xl m-7 px-4 py-2 font-bold shadow-lg">
                Fault Detection & Classification
              </p>
            }
          />
        </div>
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={7}
          blurStrength={20}
          textClassName="w-[300px] md:w-[500px] text-sm md:text-xl"
        >
          Built a fault detection and classification UI for major semiconductor
          clients such as SK Hynix, Samsung and SK ON with real-time
          visualization and modular components
        </ScrollReveal>
      </div>
      <div className="flex gap-10">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={7}
          blurStrength={20}
          textClassName="w-[300px] md:w-[500px] text-sm md:text-xl"
        >
          Developed a modular monitoring system for major semiconductor clients
          such as SK Hynix, Samsung and SK ON with real-time data display and
          status tracking
        </ScrollReveal>

        <div className="hidden md:flex">
          <TiltedCard
            imageSrc="/images/work4.jpg"
            captionText="Billing System"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="flex items-center justify-center bg-black bg-opacity-50 rounded-2xl m-7 px-4 py-2 font-bold shadow-lg">
                Billing System
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
