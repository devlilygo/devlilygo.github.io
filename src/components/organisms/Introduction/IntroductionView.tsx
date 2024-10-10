import classNames from "classnames";

const style = {
  Container: classNames(
    "flex flex-col h-screen w-full items-center justify-center bg-sky-200 font-[Cafe24MeongiB] text-9xl text-white "
  ),
  SubLabel: classNames("font-[Cafe24MeongiW] text-4xl"),
};

const IntroductionView = () => {
  return (
    <div
      className={style.Container}
      style={{ textShadow: "2px 3px 3px rgba(0, 0, 0, 0.15)" }}
    >
      Lily Go
      <div
        className={style.SubLabel}
        style={{ textShadow: "2px 3px 3px rgba(0, 0, 0, 0.15)" }}
      >
        Front-End Developer
      </div>
    </div>
  );
};

export default IntroductionView;
