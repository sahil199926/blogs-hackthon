import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { IWhatsNewSection } from "@/types";
import Image from "next/image";
import CardSwiper from "../../common/CardSwiper";

export default function WhatsNewSection({whatsNewSection, background, from}: {whatsNewSection: IWhatsNewSection, background?: string, from?: string}) {
  return (
    <div className={`${background? background : "bg-Primary-Mordor-Blue-Bg-100"} flex justify-center`}>
      <section className="container flex flex-col gap-8 max-w-[1440px] px-4 sm:px-10 lg:px-[88px] py-12">

        {/* Heading */}
        <h2 className="text-Display-Semibold-24 text-center md:text-left md:text-Display-Semibold-32 text-Neutrals-950">{whatsNewSection.heading}</h2>

        {/* Desktop Content */}
        <div id="content" className="hidden md:flex w-full flex-col xl:flex-row gap-5">

          {/* Report */}
          <div className="bg-white relative w-full flex xl:max-w-[750px] py-20 pl-12 pr-8 items-center shadow-mordorCustom">
            <div className="relative z-10 flex max-w-[377px] flex-col gap-[72px]">
              <div className="flex flex-col gap-3">

                  <div className="flex gap-3 text-Caption-Regular-14 items-center text-Neutrals-800"><h3>{whatsNewSection.contentCardList[0].eyebrow.tag1}</h3><span>|</span><p>{whatsNewSection.contentCardList[0].eyebrow.tag2}</p></div>

                  <p className="text-Display-Semibold-24 text-Neutrals-950">
                    {whatsNewSection.contentCardList[0].title}
                  </p>

              </div>
              <Link
                href={whatsNewSection.contentCardList[0].link.href}
                className="text-Accent-Orange-950 text-Link-medium-16 hover:underline flex items-center"
              >
                {whatsNewSection.contentCardList[0].link.text}
                <ArrowUpRight size={24} className="text-Accent-Orange-950"/>
              </Link>
            </div>
            <Image src={whatsNewSection.contentCardList[0].img.src} alt={whatsNewSection.contentCardList[0].img.alt} width={320} height={320} title={whatsNewSection.contentCardList[0].img.title} className="absolute right-8"/>
          </div>

          <div className="flex w-full xl:max-w-[494px] flex-col lg:flex-row xl:flex-col gap-5">

            {/* Article */}
              <div className="bg-white items-center relative py-5 pl-8 flex h-full w-full shadow-mordorCustom">
                <div className="flex relative z-10 max-w-[276px] h-full flex-col justify-center gap-[18px]">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-3 py-[6px] text-Caption-Regular-14 items-center text-Neutrals-800"><h3>{whatsNewSection.contentCardList[1].eyebrow.tag1}</h3><span>|</span><p>{whatsNewSection.contentCardList[1].eyebrow.tag2}</p></div>
                    <p className="text-Display-Semibold-16">
                    {whatsNewSection.contentCardList[1].title}
                    </p>
                  </div>
                  <Link
                    href={whatsNewSection.contentCardList[1].link.href}
                    className="text-Accent-Orange-950 font-medium hover:underline flex items-center"
                  >
                     {whatsNewSection.contentCardList[1].link.text}
                    <ArrowUpRight size={24} className="text-Accent-Orange-950"/>
                  </Link>
                </div>
                <Image src={whatsNewSection.contentCardList[1].img.src} alt={whatsNewSection.contentCardList[1].img.alt} title={whatsNewSection.contentCardList[1].img.title} width={140} height={130} className="absolute right-6"/>
              </div>
    
            {/* Case Study */}
              <div className="bg-white items-center relative py-5 pl-8 flex h-full w-full shadow-mordorCustom">

                <div className="flex relative z-10 flex-col w-full max-w-[250px] h-full justify-center gap-[18px]">
                  <p className="text-Display-Semibold-16 text-Neutrals-950">
                    {whatsNewSection.contentCardList[2].title}
                  </p>
                  <Link
                    href={whatsNewSection.contentCardList[2].link.href}
                    className="text-Accent-Orange-950 font-medium hover:underline flex items-center"
                  >
                     {whatsNewSection.contentCardList[2].link.text}
                    <ArrowUpRight size={24} className="text-Accent-Orange-950"/>
                  </Link>
                </div>
                <Image src={whatsNewSection.contentCardList[2].img.src} alt={whatsNewSection.contentCardList[2].img.alt} title={whatsNewSection.contentCardList[2].img.title} width={140} height={60} className="absolute right-8"/> 

              </div>

          </div>
        </div>

        {/* Tablet & Mobile Slider */}
        <div className="flex items-center md:hidden">
          <CardSwiper
              dataList={whatsNewSection.contentCardList}
              from={from || "landing-page/whats-new"}
            />
        </div>

      </section>
    </div>
  );
}
