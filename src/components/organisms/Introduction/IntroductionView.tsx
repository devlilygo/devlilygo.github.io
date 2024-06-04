import classNames from "classnames";

const style = {
  Container: classNames(
    "flex flex-col h-screen w-full items-center justify-center bg-slate-500"
  ),
};

const IntroductionView = () => {
  return <div className={style.Container}>Introductions</div>;
};

export default IntroductionView;
