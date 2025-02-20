import React from "react";
import { ICaseStudiesHeroSection } from "@/types";
import Image from "next/image";

function CaseStudiesHeroSection({
  caseStudiesHeroSection,
}: {
  caseStudiesHeroSection: ICaseStudiesHeroSection;
}) {
  return (
    <div className="flex justify-center bg-Primary-Mordor-Blue-Bg-50 md:bg-primary-gradient">
      <section className="container flex max-w-[1440px] flex-col gap-3 px-4 pb-10 pt-3 sm:px-10 md:flex-row md:pb-[30px] md:pt-[30px] lg:px-[88px]">
        {/* Globle for mobile */}
        <div
          id="Globe"
          className="flex items-center justify-center sm:w-[300px] md:hidden">
          <Image src={caseStudiesHeroSection.globe} alt="globe img" />
        </div>

        <div
          id="content"
          className="mt-0 flex flex-col gap-4 md:mt-16 md:gap-8">
          <div id="text" className="flex max-w-[780px] flex-col gap-4">
            <h1
              id="Main heading"
              className="text-Display-Semibold-28 text-Neutrals-950 md:text-Display-Semibold-40">
              {caseStudiesHeroSection.heading}
            </h1>
            <p className="text-Body-Regular-14 text-Neutrals-900 md:text-Body-Regular-18">
              {caseStudiesHeroSection.desc}
            </p>
          </div>
        </div>

        {/* Globle for desktop */}
        <div id="Globe" className="hidden justify-center md:flex">
          <Image src={caseStudiesHeroSection.globe} alt="globe img" />
        </div>
      </section>
    </div>
  );
}

export default CaseStudiesHeroSection;
