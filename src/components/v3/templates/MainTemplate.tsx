import classNames from "classnames";
import Landing from "./Landing";

const style = {
  container: classNames(
    "font-montserrat",
    "flex",
    "flex-col",
    "h-full",
    "w-full",
    "w-min-[1340px]",
    "text-[#333333]"
  ),
};

const MainTemplate = () => {
  return (
    <div className={style.container}>
      <Landing />
    </div>
  );
};

export default MainTemplate;
