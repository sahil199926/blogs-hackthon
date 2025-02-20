"use client";
import { useEffect, useRef, useState } from "react";
import youtube from "@/assets/youtube.svg";
const DemoVideo = ({ url }: { url: string }) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [inView, setInView] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the video is visible
    );

    const container = videoContainerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  useEffect(() => {
    if (inView && !isIframeLoaded) {
      setIsIframeLoaded(true); // Once in view, we allow iframe to load
    }
  }, [inView, isIframeLoaded]);

  return (
    <div ref={videoContainerRef}>
      {/* Use a placeholder image before iframe is loaded */}
      {!isIframeLoaded ? (
        <div
          style={{
            height: "400px",
            background: `url(${youtube}) center/cover no-repeat`,
          }}
          className="w-[100%] object-contain sm:h-[358px] md:h-[400px] lg:h-max">
          {/* Placeholder content */}
        </div>
      ) : (
        <iframe
          ref={iframeRef}
          style={{ height: "400px" }}
          className="w-[100%] object-contain sm:h-[358px] md:h-[400px] lg:h-max"
          width="100%"
          src={`${url}?muted=1&autoplay=1&rel=0`} // Autoplay, no related videos, muted
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      )}
    </div>
  );
};

export default DemoVideo;
