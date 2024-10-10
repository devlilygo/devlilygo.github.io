import classNames from "classnames";

const style = {
  Container: classNames(
    "flex flex-col h-screen w-full items-center justify-center bg-yellow-100 font-[Cafe24MeongiB] text-9xl text-white"
  ),
};

const CareerView = () => {
  return (
    <div
      className={style.Container}
      style={{ textShadow: "2px 3px 3px rgba(0, 0, 0, 0.15)" }}
    >
      Career
    </div>
  );
};

export default CareerView;
