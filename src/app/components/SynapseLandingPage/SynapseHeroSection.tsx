import CustomLinkTag from "@/components/Tags/CustomLinkTag";
import { IHeroSection } from "@/types";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SynapseHeroSection({ heroSection }: { heroSection: IHeroSection }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href={heroSection.logo.desktop}
          as="image"
          type="image/jpeg"
          imageSizes="(min-width: 768px) 100vw"
        />
        <link
          rel="preload"
          href={heroSection.logo.mobile}
          as="image"
          type="image/jpeg"
          imageSizes="(max-width: 767px) 100vw"
        />
      </Head>
      <section className="bg-primary-gradient">
        <div className="mx-auto flex h-max max-w-8xl flex-col-reverse items-center justify-evenly gap-14 px-4 py-10 lg:h-[35.5rem] lg:flex-row">
          {/* LEFT SECTION */}
          <div className="flex:1 w-[100%] lg:w-[45%]">
            <h1 className="text-center text-[28px] font-semibold leading-[40px] lg:text-left lg:text-[2.5rem] lg:leading-[56px]">
              {heroSection.heading}
            </h1>
            <p className="mb-8 mt-4 w-[100%] text-center text-sm text-neutral-900 lg:w-5/6 lg:text-left lg:text-lg lg:leading-[30px]">
              {heroSection.desc}
            </p>

            <div className="flex w-[100%] flex-wrap items-center justify-evenly gap-3 lg:w-max lg:justify-between">
              <CustomLinkTag
                target="_blank"
                href={heroSection.ctaOne.link}
                className="hero-section-btn min-w-max bg-Primary-Blue-950 text-sm font-medium text-Primary-Blue-50 hover:bg-Primary-Blue-800 lg:py-[11px] lg:text-[16px] lg:leading-6">
                {heroSection.ctaOne.title}
              </CustomLinkTag>
              <Link
                className="hero-section-btn min-w-max bg-Primary-Blue-50 text-sm font-medium text-Primary-Blue-950 hover:bg-Primary-Blue-100 lg:py-[11px] lg:text-[16px] lg:leading-6"
                href={heroSection.ctaTwo.link}
                target="_blank">
                {heroSection.ctaTwo.title}
              </Link>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex w-[100%] flex-[0.75] items-center justify-center lg:w-max lg:max-w-[30%]">
            <Image
              src={heroSection.logo.desktop}
              alt="Synapse logo"
              className="hidden md:block"
              priority={true}
            />
            <Image
              src={heroSection.logo.mobile}
              alt="Synapse logo"
              className="md:hidden"
              priority={true}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default SynapseHeroSection;
