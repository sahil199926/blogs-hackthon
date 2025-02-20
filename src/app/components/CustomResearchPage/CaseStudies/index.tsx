"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/ulComponents/ui/carousel";
import Image from "next/image";
import ChevronRight from "@/assets/ChevronRight.svg";
import ChevronLeft from "@/assets/ChevronLeft.svg";
import CaseStudy from "./CaseStudy";
import { ICaseStudiesSection } from "@/types";
import Link from "next/link";
import DotBg from "../../common/DotBg";

const CaseStudies = ({
  caseStudies
}: {
  caseStudies: ICaseStudiesSection;
}) => {
  return (
    <div className="relative  bg-Primary-Mordor-Blue-Bg-50  ">
      <section className="relative z-20 mx-auto flex max-w-[1440px] flex-col gap-12 px-4 py-10 sm:px-10 md:px-[88px] md:py-20">
        <div id="Title & Buttons" className="flex justify-between">
          <div id="Title" className="flex flex-col gap-4">
            <h2 className="text-base text-Neutrals-900 md:text-lg">
              {caseStudies.kicker}
            </h2>
            <h3 className="text-2xl font-semibold text-Neutrals-950 md:text-[32px]">
              {caseStudies.heading}
            </h3>
          </div>
        </div>
        {/*Carousel for the case studies  */ }
        <Carousel
          prevButton={(scrollPrev, canScrollPrev) => {
            return (
              caseStudies.studies.length > 3 && (
                <button
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  className="absolute -top-28 right-14 hidden h-12 w-12 rounded-full border border-Neutrals-200 md:flex md:items-center md:justify-center">
                  <Image src={ChevronLeft} alt="slide left button" />
                </button>
              )
            );
          }}
          nextButton={(scrollNext, canScrollNext) => {
            return (
              caseStudies.studies.length > 3 && (
                <button
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  className="absolute -top-28 right-0 hidden h-12 w-12 rounded-full border border-Neutrals-200 md:flex md:items-center md:justify-center">
                  <Image src={ChevronRight} alt="slide right button" />
                </button>
              )
            );
          }}>
          <CarouselContent>
            {caseStudies.studies.map(
              (study, index: number) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <CaseStudy caseStudy={study}/>
                </CarouselItem>
              )
            )}
          </CarouselContent>
        </Carousel>
        {/*Button to show all case studies cta of this section */}
        <div className="w-full flex justify-center md:justify-start ">
          <Link
            className="hero-section-btn min-w-max bg-Primary-Mordor-Blue-Bg-50 border-Primary-Blue-950 border-[1.5px] rounded-[1.5px] hover:bg-Primary-Blue-950  text-Link-medium-14 md:text-Link-medium-16 font-medium text-Primary-Blue-950 hover:text-Primary-Blue-50 py-4 px-3 lg:text-[16px] lg:leading-6"
            href={caseStudies.cta.link}
            target={caseStudies.cta.title ? "_blank" : ""}
          >
            {caseStudies.cta.title}
          </Link>
        </div>
      </section>
      <div className="absolute -bottom-[80px] md:bottom-[150px] right-0 z-10">
        <DotBg
          cropWidthStart={300}
          cropWidthEnd={480}
          cropHeightStart={0}
          cropHeightEnd={500}
        />
      </div>
    </div>
  );
};

export default CaseStudies;
