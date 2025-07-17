import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

interface props {
  href?: string;
  backgroundColor?: string;
  children: ReactNode;
  className?: string;
}

export const Card = ({
  href = "/v1",
  backgroundColor = "bg-white",
  children,
  className,
}: props) => {
  return (
    <Link href={href} className="flex h-full w-full">
      <div
        className={classNames(
          "cursor-pointer flex h-full w-full items-center justify-center shadow-none border-0 rounded-2xl",
          backgroundColor,
          className
        )}
      >
        {children}
      </div>
    </Link>
  );
};
