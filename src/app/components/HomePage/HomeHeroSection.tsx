import React from "react";
import { IHomeHeroSection } from "@/types";
import Link from "next/link";
import Image from "next/image";

function HomeHeroSection({
  homeHeroSection,
}: {
  homeHeroSection: IHomeHeroSection;
}) {
  return (
    <div className="flex justify-center bg-Primary-Mordor-Blue-Bg-50 md:bg-primary-gradient">
      <section className="container flex max-w-[1440px] flex-col-reverse gap-3 px-4 pb-10 pt-3 sm:px-10 md:flex-row md:pb-[30px] md:pt-[30px] lg:px-[88px]">
        <div
          id="content"
          className="mt-0 flex flex-col gap-4 md:mt-16 md:gap-8">
          <div id="text" className="flex max-w-[780px] flex-col gap-4">
            <h1
              id="Main heading"
              className="text-Display-Semibold-28 text-Neutrals-950 md:text-Display-Semibold-40">
              {homeHeroSection.heading}
            </h1>
            <p className="text-Body-Regular-14 text-Neutrals-900 md:text-Body-Regular-18">
              {homeHeroSection.desc}
            </p>
          </div>
          <div id="buttons" className="flex gap-3">
            <Link
              className="bg-Primary-Blue-950 px-4 py-3 text-Link-medium-14 text-Neutrals-white md:text-Link-medium-16"
              href={homeHeroSection.ctaOne.link}>
              {homeHeroSection.ctaOne.title}
            </Link>

            <Link
              className="bg-Primary-Blue-50 px-4 py-3 text-Link-medium-14 text-Primary-Blue-950 md:text-Link-medium-16"
              href={homeHeroSection.ctaTwo.link}>
              {homeHeroSection.ctaTwo.title}
            </Link>
          </div>
        </div>

        {/* Globe background image*/}
        <div id="Globe" className="flex justify-center">
          <Image
            title={homeHeroSection.globe.label}
            src={homeHeroSection.globe.src}
            width={580}
            height={580}
            className="max-h-[358px] w-full mix-blend-multiply sm:max-h-[580px] md:max-w-[580px]"
            alt={homeHeroSection.globe.alt}
            priority={true}
            sizes="(max-width: 640px) 100vw, 580px"
            quality={75}
          />
        </div>
      </section>
    </div>
  );
}

export default HomeHeroSection;
