import { useEffect, useRef } from "react";

export function ScrollToBottom({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.scrollTop = scrollElement.scrollHeight;
    }
  }, [children]); // children이 바뀔 때마다 스크롤

  return (
    <div ref={scrollRef} className="h-full overflow-y-auto rounded-xl">
      {children}
    </div>
  );
}
