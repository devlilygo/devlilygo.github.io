import classNames from 'classnames';
import Link from 'next/link';
import DarkModeToggle from '../atoms/DarkModeToggle';

const style = {
  Links: classNames(
    'flex',
    'flex-col',
    'p-2',
    'hover:bg-slate-100 ',
    'cursor-pointer',
    'justify-between',
    'items-center',
    'dark:hover:bg-slate-600',
    'rounded'
  ),
};

const Header = () => {
  return (
    <div className="flex h-24 w-full border-b-[0.5px] justify-between items-center border-black dark:border-white">
      {/* NOTE - Navigation */}
      <header className="flex w-full p-10 justify-start font-[LuloCleanW01One]">
        <nav className="flex">
          <Link className={style.Links} href="/">
            About
          </Link>
          <Link className={style.Links} href="/works">
            Work
          </Link>
          <Link className={style.Links} href="/contact">
            Contact
          </Link>
        </nav>
        <div className="flex w-36 items-center justify-center">
          <DarkModeToggle />
        </div>
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
