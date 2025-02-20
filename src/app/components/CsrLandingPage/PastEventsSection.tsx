"use client";
import { IPastEventsSection } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/ulComponents/ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";

function PastEventsSection({ pastEvents }: { pastEvents: IPastEventsSection }) {
  return (
    <section className="flex justify-center overflow-hidden">
      <div className="flex w-full max-w-[1440px] flex-col gap-10 px-4 py-10 sm:px-10 md:gap-12 md:px-[88px] md:py-14">
        
        {/* upper Text */}
        <div className="flex flex-col gap-4 md:mr-28">
          <h2 className="text-Display-Semibold-24 text-Neutrals-950 md:text-Display-Semibold-32">
            {pastEvents.heading}
          </h2>
          <p className="text-Body-Regular-14 text-Neutrals-900 md:text-Body-Regular-16">
            {pastEvents.description}
          </p>
        </div>

        {/* Events */}
        <Carousel
          prevButton={(scrollPrev, canScrollPrev) => (
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="absolute -top-24 right-14 hidden h-12 w-12 rounded-full border border-Neutrals-200 md:flex md:items-center md:justify-center"
              aria-label="View previous reviews">
              <ChevronLeftIcon />                 {/* Left Button */}
            </button>
          )}
          nextButton={(scrollNext, canScrollNext) => (
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="absolute -top-24 right-0 hidden h-12 w-12 rounded-full border border-Neutrals-200 md:flex md:items-center md:justify-center"
              aria-label="View next reviews">
              <ChevronRightIcon />                {/* Right Button */}
            </button>
          )}>
          <CarouselContent className="flex w-full gap-5 ml-0 ">
            {pastEvents.events.map((event, index) => (
              <CarouselItem
                key={index}
                className="relative flex h-[280px] md:h-[330px] w-full min-w-[320px] md:min-w-[408px] overflow-hidden pl-0  ">
                
                {/* Background Image */}
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                  sizes="(max-width: 640px) 280, 320, (max-width: 1024px) 330px, 408px"
                  quality={75}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-50% to-[#006FAB]/100"></div>

                {/* Text Content */}
                <p className="absolute bottom-6 left-6 text-Display-Semibold-16 text-white max-w-[280px] text">
                  {event.title}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default PastEventsSection;
