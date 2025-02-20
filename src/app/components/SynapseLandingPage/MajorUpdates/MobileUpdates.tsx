"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/ulComponents/ui/carousel";
import React from "react";

function MobileUpdates({ list }: { list: string[] }) {
  return (
    <Carousel prevButton={() => <></>} nextButton={() => <></>}>
      <CarouselContent>
        {list?.map((item, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/3">
            <p className="mr-[50px] min-w-[255px] border-l-2 border-Neutrals-50 pl-2 text-xs font-normal leading-[18px] xl-1000:flex-1 lg:text-sm lg:font-medium">
              {item}
            </p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default MobileUpdates;
