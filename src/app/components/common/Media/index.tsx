"use client";
import React from "react";
import { IMedia } from "@/types";
import MediaCard from "./MediaCard";
import DotBg from "../DotBg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/ulComponents/ui/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function Media({ media }: { media: IMedia }) {
  return (
    <section className="relative mt-6 flex justify-center overflow-hidden bg-Primary-Mordor-Blue-Bg-100">
      <div className="absolute left-[200px] top-0 md:left-auto md:right-0">
        <DotBg
          cropWidthStart={10}
          cropWidthEnd={700}
          cropHeightStart={300}
          cropHeightEnd={500}
        />
      </div>
      <div className="container mt-10 mx-auto max-w-[1440px] pr-4 py-6 md:mt-12 md:px-[88px]">
        <div>
          <h2 className="md:text-Display-Semibold-36 mb-3 pl-4 text-Display-Semibold-24">
            {media.heading}
          </h2>
          <Carousel
            className="relative mt-4 md:mt-8"
            prevButton={(scrollPrev, canScrollPrev) => (
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="absolute -top-20 right-14 hidden h-10 w-10 rounded-full border border-Neutrals-200 md:flex md:items-center md:justify-center">
                <ChevronLeftIcon />
              </button>
            )}
            nextButton={(scrollNext, canScrollNext) => (
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="absolute -top-20 right-0 hidden h-10 w-10 rounded-full border border-Neutrals-200 md:flex md:items-center md:justify-center">
                <ChevronRightIcon />
              </button>
            )}>
            <CarouselContent>
              {media.mediaList.map((item) => {
                return (
                  <CarouselItem key={item.title} className="flex max-w-full mx-4 md:mx-0">
                    <MediaCard key={item.title} mediaItem={item} />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
