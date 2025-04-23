"use client";

import { useEffect, useRef, useState } from "react";

export const HighlightText = ({
  children,
  color = "yellow",
}: {
  children: React.ReactNode;
  color?: "yellow" | "pink" | "blue";
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
    yellow: "bg-[#FEF9C3]",
    pink: "bg-[#FDE2E4]",
    blue: "bg-[#DBEAFE]",
  }[color];

  return (
    <span className="relative inline-block" ref={ref}>
      <span className="relative z-10 font-medium text-gray-800">
        {children}
      </span>
      <span
        key={isVisible ? "active" : "inactive"}
        className={`absolute left-0 bottom-1 h-5 ${
          isVisible ? `w-full animate-highlight` : "w-0"
        } ${bgColor} rounded-sm z-0`}
      />
    </span>
  );
};
