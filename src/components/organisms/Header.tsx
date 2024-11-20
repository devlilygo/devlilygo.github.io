import classNames from 'classnames';
import Link from 'next/link';
import ThemeToggle from '../atoms/ThemeToggle';
import SnowToggle from '../atoms/SnowToggle';

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
    <div className="flex h-24 w-full border-b-[0.5px] justify-between items-center">
      {/* NOTE - Navigation */}
      <header className="flex w-full pl-10 justify-start font-[LuloCleanW01One]">
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
      </header>
      <div className="flex w-full pl-10 pr-10 text-xl justify-center font-[BeautiqueDisplayCondensed] italic">
        Lily Go
      </div>
      <div className="flex w-full pl-10 justify-end items-center font-[LuloCleanW01One] text-xs text-nowrap">
        From Seoul to Toronto: <br />
        Coding Dreams Into Reality
        <div className="flex w-full items-center justify-center mr-4 ml-8">
          <ThemeToggle />
          <SnowToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
