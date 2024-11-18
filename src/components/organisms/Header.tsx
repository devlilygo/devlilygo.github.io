import classNames from "classnames";
import Wireframe from "../atoms/Wireframe";

const style = {
  Links: classNames(
    "flex",
    "flex-col",
    "p-2",
    "hover:bg-slate-100 ",
    "cursor-pointer",
    "justify-center",
    "items-center"
  ),
};

const Header = () => {
  return (
    <div className="flex h-24 w-full border-b-2 border-black justify-between items-center">
      <div className="flex w-full p-10 justify-start font-[LuloCleanW01One]">
        <div className={style.Links}>About</div>
        <div className={style.Links}>Work</div>
        <div className={style.Links}>Contact</div>
      </div>
      <div className="flex w-full p-10 text-xl justify-center font-[BeautiqueDisplayCondensed] italic">
        Lily Go
      </div>
      <div className="flex w-full p-10 pr-15 justify-end font-[LuloCleanW01One] text-xs">
        From Seoul to Toronto: <br />
        Coding Dreams Into Reality
      </div>
    </div>
  );
};

export default Header;
