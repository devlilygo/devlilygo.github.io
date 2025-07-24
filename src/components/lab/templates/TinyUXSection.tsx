import classNames from "classnames";
import { ReactNode } from "react";

interface TinyUXSectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}

const style = {
  container: classNames(
    "space-y-4",
    "flex",
    "flex-col",
    "w-full",
    "h-screen",
    "pb-12",
    "justify-center",
    "items-center",
    "gap-4",
    "snap-start"
  ),
  title: classNames("text-xl", "font-semibold"),
};

export const TinyUXSection = ({
  id,
  title,
  description,
  children,
}: TinyUXSectionProps) => {
  return (
    <section id={id} className={style.container}>
      <h2 className={style.title}>{title}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
      <div>{children}</div>
    </section>
  );
};
