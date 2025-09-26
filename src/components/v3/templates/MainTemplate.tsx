import classNames from "classnames";
import Landing from "../organisms/Landing";
import AboutMe from "../organisms/AboutMe";
import Works from "../organisms/Works";
import Contacts from "../organisms/Contacts";
import ScrollIndicator from "../atoms/ScrollIndicator";
import { useEffect, useRef, useState } from "react";
// import { ScrollDotNavigation } from "../molecules/ScrollDotNavigation";

const style = {
  container: classNames(
    "font-montserrat",
    "flex",
    "flex-col",
    "w-full",
    "w-min-[1340px]",
    "text-[#333333]",
    "tracking-tighter",
    "h-screen",
    "snap-y",
    "snap-mandatory",
    "overflow-y-scroll",
    "scroll-smooth",
    "items-center"
  ),
  snapContainer: classNames("h-screen w-full snap-start"),
};

const MainTemplate = () => {
  const [show, setShow] = useState(true);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(false); // 마지막 페이지 보이면 숨김
        } else {
          setShow(true);
        }
      },
      { threshold: 0.1 } // 10%라도 보이면 "보인다" 처리
    );

    if (endRef.current) {
      observer.observe(endRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className={style.container}>
      {show && <ScrollIndicator />}
      {/* <ScrollDotNavigation /> */}
      <section id="landing" className={style.snapContainer}>
        <Landing />
      </section>
      <section id="works" className={style.snapContainer}>
        <Works />
      </section>
      <section id="aboutme" className={style.snapContainer}>
        <AboutMe />
      </section>
      <section id="contacts" className={style.snapContainer} ref={endRef}>
        <Contacts />
      </section>
    </div>
  );
};

export default MainTemplate;
