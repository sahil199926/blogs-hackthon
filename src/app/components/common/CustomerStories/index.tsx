"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/ulComponents/ui/carousel";
import Image from "next/image";
import ChevronRight from "@/assets/ChevronRight.svg";
import ChevronLeft from "@/assets/ChevronLeft.svg";
import Review from "./Review";
import { ICustomerStories } from "@/types";
import DotBg from "../DotBg";
const CustomerStories = ({
  customerStories,
  noPattern,
  bgBlue
}: {
  customerStories: ICustomerStories;
  noPattern ?: boolean;
  bgBlue ?: boolean
}) => {
  return (
    <div className={`relative ${bgBlue ? "bg-Primary-Mordor-Blue-Bg-100" :""}`}>
      <section className="relative mx-auto flex max-w-[1440px] flex-col gap-12 px-4 py-10 sm:px-10 md:px-[88px] md:py-20">
        <div id="Title & Buttons" className="flex justify-between">
          <div id="Title" className="flex flex-col gap-4">
            <h3 className="text-base text-Neutrals-900 md:text-lg">
              {customerStories.kicker}
            </h3>
            <h2 className="text-2xl font-semibold text-Neutrals-950 md:text-[32px]">
              {customerStories.heading}
            </h2>
          </div>
        </div>

        <Carousel
          prevButton={(scrollPrev, canScrollPrev) => {
            return (
              customerStories.customerTestimonials.length > 1 && (
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
              customerStories.customerTestimonials.length > 1 && (
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
            {customerStories.customerTestimonials.map(
              (review, index: number) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Review review={review} />
                </CarouselItem>
              )
            )}
          </CarouselContent>
        </Carousel>
      </section>
      {/* <Image
        className="absolute -bottom-0 right-0 -z-10"
        src={patten5}
        alt="patten5"
      /> */}
      { !noPattern &&
      <div className="absolute -bottom-2 right-0 -z-10">
        <DotBg
          cropWidthStart={0}
          cropWidthEnd={780}
          cropHeightStart={0}
          cropHeightEnd={489}
        />
      </div>
        }
    </div>
  );
};

export default CustomerStories;
