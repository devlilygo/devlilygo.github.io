"use client";

import { useEffect } from "react";

export const useSmartVideo = (
  videoRef: React.RefObject<HTMLVideoElement | null>,
  trigger: number
) => {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [videoRef, trigger]);
};
