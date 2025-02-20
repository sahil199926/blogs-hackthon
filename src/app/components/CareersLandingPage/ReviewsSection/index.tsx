"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/ulComponents/ui/carousel";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { IReviewsSection } from "@/types";
import Rating from "./Rating";

function ReviewsSection({ reviews }: { reviews: IReviewsSection }) {
  return (
    <div className="relative">
      <section className="relative mx-auto flex max-w-[1440px] flex-col gap-10 px-4 sm:px-10 md:px-[88px] py-10 md:py-14 z-20">
        {/* Title and Rating */}
        <div className="flex flex-col gap-6 items-center text-center">

          <h2 className="text-Display-FullCaps-18 text-Neutrals-900 uppercase">
            {reviews.kicker}
          </h2>
          <div className="flex items-center gap-4 ">
            <Image src={reviews.glassdoorLogo} alt="Glassdoor Logo" width={205} height={40} />
            <span className="bg-Neutrals-500 sm:bg-Neutrals-900 w-[1px] sm:w-2 h-3 sm:h-2 rounded-full"/>
            <div className="flex flex-row-reverse sm:flex-row gap-3 items-center ">
              <span className="text-[#4EA64F] text-Display-Semibold-20">{reviews.rating}</span>
              <Rating rating={reviews.rating} />
            </div>
          </div>

        </div>

        {/* Carousel */}
        <Carousel
          prevButton={(scrollPrev, canScrollPrev) => (
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="absolute -top-20 left-0 hidden h-10 w-10 rounded-full border border-Neutrals-200 md:flex md:items-center md:justify-center"
              aria-label="View previous reviews"
            >
              <ChevronLeftIcon/>
            </button>
          )}
          nextButton={(scrollNext, canScrollNext) => (
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="absolute -top-20 right-0 hidden h-10 w-10 rounded-full border border-Neutrals-200 md:flex md:items-center md:justify-center"
              aria-label="View next reviews"
            >
              <ChevronRightIcon/>
            </button>
          )}
        >
          <CarouselContent className="flex w-full gap-8 py-1">
            {reviews.reviews.map((review, index) => (
              <CarouselItem
                key={index}
                className="flex min-w-[400px] pl-0"
              >
                <div className="bg-white shadow-mordorCustom border-Neutrals-100 border px-6 py-9 max-h-[228px] ">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(review.stars)].map((_, i) => (
                      <span key={i} className="text-[#FFAC01] text-2xl leading-5">★</span>
                    ))}
                  </div>
                  <p className="text-Body-Regular-16 text-Neutrals-950">
                    {review.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </div>
  );
}

export default ReviewsSection;
