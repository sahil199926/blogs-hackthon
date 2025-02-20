"use client";
import CustomLinkTag from "@/components/Tags/CustomLinkTag";
import { ITrialCta } from "@/types";
import React, { useEffect, useRef } from "react";

function TrialCta({ trialCta }: { trialCta: ITrialCta }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("bread-crumbs");

      if (containerRef.current && heroSection) {
        const rectHero = heroSection.getBoundingClientRect();

        const isHeroInView =
          rectHero.top < window.innerHeight && rectHero.bottom > 0;

        if (isHeroInView) {
          containerRef.current.classList.remove("fixed");
          // containerRef.current.classList.add("hidden");
        } else if (!isHeroInView) {
          containerRef.current.classList.add("fixed");
          // containerRef.current.classList.remove("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="trial-cta"
      className="bottom-0 z-50 h-max w-[100%] bg-Neutrals-950 py-4">
      <div className="mx-auto flex max-w-8xl items-center justify-between gap-3 lg:w-[80%]">
        <p className="hidden text-[16px] leading-6 text-white md:inline">
          {trialCta.heading}
          <strong className="ml-1 text-lg font-semibold leading-7 text-white">
            {trialCta.price}
          </strong>
        </p>
        <p className="inline text-white md:hidden">Join us today</p>
        <CustomLinkTag
          href={trialCta.cta.link}
          className="min-w-max bg-Accent-Orange-950 px-[14.5px] py-[11px] font-medium text-white hover:bg-Accent-Orange-900">
          {trialCta.cta.title}
        </CustomLinkTag>
      </div>
    </div>
  );
}

export default TrialCta;
