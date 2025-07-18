import classNames from "classnames";
import { ReactNode } from "react";

interface props {
  href?: string;
  backgroundColor?: string;
  padding?: string;
  children: ReactNode;
  className?: string;
  title?: string;
  header?: boolean;
}

export const Card = ({
  // href = "/v1",
  backgroundColor = "bg-white",
  padding = "p-8",
  children,
  className,
  title,
  header = true,
}: props) => {
  return (
    // <Link href={href} className="flex h-full w-full">
    <div
      className={classNames(
        "flex flex-col h-full w-full items-center justify-center shadow-none border-0 rounded-2xl",
        padding,
        backgroundColor,
        className
      )}
    >
      {header ? (
        <div className="flex w-full h-10 items-center text-gray-400 font-medium mb-4 text-sm">
          {title}
        </div>
      ) : (
        <></>
      )}
      <div className="flex-1 w-full h-full">{children}</div>
    </div>
    // </Link>
  );
};
