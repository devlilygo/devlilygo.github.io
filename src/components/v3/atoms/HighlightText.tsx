"use client";

import { useEffect, useRef, useState } from "react";

export const HighlightText = ({
  children,
  color = "default",
  opacity = 100,
}: {
  children: React.ReactNode;
  color?: "default" | "yellow" | "pink" | "blue";
  opacity?: number;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const bgColor = {
    default: "bg-[#e7f1ab]",
    yellow: "bg-[#FEF9C3]",
    pink: "bg-[#FDE2E4]",
    blue: "bg-[#95b1ee]",
  }[color];

  const customOpacity = "opacity-" + opacity;

  return (
    <span className="relative inline-block mx-1 px-[1px]" ref={ref}>
      <span className="relative z-10 text-[#364c84] font-bold">{children}</span>
      <span
        key={isVisible ? "active" : "inactive"}
        className={`absolute left-0 bottom-1 md:h-8 h-4 ${
          isVisible ? `w-full animate-highlight` : "w-0"
        } ${bgColor} z-0 ${customOpacity}`}
      />
    </span>
  );
};
