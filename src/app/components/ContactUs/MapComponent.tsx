"use client"
import { useRef, useState, useEffect } from 'react';

const MapComponent = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [inView, setInView] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the map is visible
    );

    const container = mapContainerRef.current;
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
    <div ref={mapContainerRef} className="relative">
      {/* Use a placeholder image before iframe is loaded */}
      {!isIframeLoaded ? (
        <div
          className="w-[100%] object-contain h-[244px] bg-white">
          {/* Placeholder content */}
        </div>
      ) : (

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7687752658417!2d78.33673307498606!3d17.42288078347033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9483e1be320d%3A0x13dcb271e969f929!2sMordor%20Intelligence%20Private%20Limited!5e0!3m2!1sen!2sin!4v1737434423189!5m2!1sen!2sin"
          ref={iframeRef}
          style={{ border: 0 }}
          className="w-[100%] object-contain h-[244px]"
          title="Google Map"
          allowFullScreen
          loading="lazy"
        ></iframe>
      )}
    </div>
  );
};

export default MapComponent;
