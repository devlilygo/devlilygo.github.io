"use client";

import { useEffect, useRef, useState } from "react";

type SmartVideoProps = {
  src: string;
  className?: string;
};

export const SmartVideo = ({ src, className = "" }: SmartVideoProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 } // 20% 보이면 재생
    );

    const videoEl = videoRef.current;
    if (videoEl) observer.observe(videoEl);

    return () => {
      if (videoEl) observer.unobserve(videoEl);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      video.play().catch(() => {}); // 자동재생 실패 무시
    } else {
      video.pause();
    }
  }, [isVisible]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      loop
      preload="none"
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
    />
  );
};
