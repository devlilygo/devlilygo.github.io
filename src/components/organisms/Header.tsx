import classNames from "classnames";
import Link from "next/link";

const style = {
  Links: classNames(
    "flex",
    "flex-col",
    "p-2",
    "hover:bg-slate-100 ",
    "cursor-pointer",
    "justify-between",
    "items-center"
  ),
};

const Header = () => {
  return (
    <div className="flex h-24 w-full border-b-[0.5px] border-black justify-between items-center">
      {/* NOTE - Navigation */}
      <header className="flex w-full p-10 justify-start font-[LuloCleanW01One]">
        <nav className="flex">
          <Link className={style.Links} href="/">
            About
          </Link>
          <Link className={style.Links} href="/project">
            Work
          </Link>
          <Link className={style.Links} href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <div className="flex w-full p-10 text-xl justify-center font-[BeautiqueDisplayCondensed] italic">
        Lily Go
      </div>
      <div className="flex w-full p-10 pr-15 justify-end font-[LuloCleanW01One] text-xs text-nowrap">
        From Seoul to Toronto: <br />
        Coding Dreams Into Reality
      </div>
    </div>
  );
};

export default Header;
