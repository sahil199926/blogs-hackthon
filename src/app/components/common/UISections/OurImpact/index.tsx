import React from "react";
import { IOurImpact } from "@/types";
import Link from "next/link";
import CardSwiper from "../../CardSwiper";

const OurImpact = ({ ourImpact }: { ourImpact: IOurImpact }) => {
  return (
    <section className="flex justify-center bg-Primary-Mordor-Blue-Bg-100">
      <div className="container max-w-[1440px] px-4 pb-10 pt-10 sm:px-10 md:pb-[88px] md:pt-20 lg:px-[88px]">
        <div className="flex flex-col items-center justify-between gap-6 md:items-start lg:flex-row lg:items-center">
          {/* Left Section */}
          <div className="flex flex-col justify-start gap-8 text-center md:text-left">
            <div className="flex max-w-[544px] flex-col items-center gap-4 md:items-start">
              <p className="text-Display-FullCaps-16 uppercase text-Neutrals-900 md:text-Display-FullCaps-18">
                {ourImpact.kicker}
              </p>
              <h2 className="text-center text-Display-Semibold-24 text-Neutrals-950 md:text-left md:text-Display-Semibold-32">
                {ourImpact.heading}
              </h2>
            </div>

            <Link
              className="hidden max-w-[195px] bg-Primary-Blue-950 px-4 py-[11px] text-Link-medium-16 text-Neutrals-white md:flex"
              href={ourImpact.cta.link}>
              {ourImpact.cta.title}
            </Link>
          </div>

          {/* Right Section */}
          <CardSwiper
            dataList={ourImpact.caseStudiesList}
            from="landing-page/our-impact"
          />

          <Link
            className="mt-6 max-w-[195px] bg-Primary-Blue-950 px-4 py-[11px] text-Link-medium-14 text-Neutrals-white md:hidden"
            href={ourImpact.cta.link}>
            {ourImpact.cta.title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
