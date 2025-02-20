"use client";

import React, { useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { IOurStory, ItimeLineData } from "@/types";
import { Button } from "@/ulComponents/ui/button";
import ArrowMark from '@/assets/arrow_mark.svg';
import Image from "next/image";


function Card({ year, description }: { year: number; description: string }) {
  return (
    <div id="main-box" className="relative bg-transparent min-h-[15.5rem] flex flex-col  z-40 ">

       <div className="absolute top-[17.0rem] left-[47.5%] md:top-0 md:left-[0.50rem] z-20">
          <Image src={ArrowMark} alt="Arrow Mark" width={18} height={18}
          title="Arrow Mark"
          />  
        </div> {/* Arrow element */}
      <div className="box-border size-32 border-l-2 border-b-2 border-Primary-Blue-900 bg-transparent w-80 absolute top-0 h-40 rounded-bl-xl left-4 hidden md:block"></div>
      <div className="box-border size-32 border-t-2 border-Primary-Blue-900 bg-transparent w-[100%] absolute top-0 h-40 rounded-bl-xl left-4 mt-2 hidden md:block"></div>
      <div className="bg-white text-left p-8 ml-0 md:ml-8 relative mt-auto">
        <h2
          style={{
            fontSize: '3.5rem',
            fontWeight: 600,
          }}
          className="text-Accent-Orange-900 text-Custom-56 md:text-Custom-64"
        >
          {year}
        </h2>
        <p className="mt-2 text-Body-Regular-14 text-neutral-900">{description}</p>
      </div>
    </div>
  );
}

export default function TimelineCarousel({
  title,
  desc,
  heading,
  timelineData,
}:IOurStory) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisible = 2.5; // Maximum visible items for large screens

  const scrollPrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const scrollNext = () => setCurrentIndex((prev) => Math.min(prev + 1, timelineData.length - maxVisible));

  return (
    <section className="py-12 bg-Primary-Mordor-Blue-Bg-100">
      <div className="mx-auto max-w-8xl px-3 py-10 lg:p-10">
        <div className="text-left mb-8">
          <h2 className="text-Display-FullCaps-16 
        md:text-[1.125rem] md:leading-[1.688rem]
        font-medium uppercase text-Neutrals-900 mb-5">{title}</h2>
          <h1 className="text-[1.5rem] leading-[2rem] md:text-Display-Semibold-32 mb-4 text-Neutrals-950 font-semibold">{heading}</h1>
          <p className="text-Neutrals-900 text-Body-Regular-14 md:text-Body-Regular-16 max-w-3xl ">
            {desc}
          </p>
        </div>

        {/* Timeline with pointers */}
        <div className="hidden md:block relative">
          {/* Horizontal Line */}
          {/* <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-300"></div> */}

          <div className="flex overflow-hidden">
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * (100 / maxVisible)}%)` }}>
              {timelineData?.map((item:ItimeLineData, index:number) => (
                <>
                <div key={index} className="relative w-full md:w-2/5 flex-shrink-0">
                  {/* Pointer dot */}
                  {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-md"></div> */}
                  <Card year={item.year} description={item.description} />
                </div>
                </>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-4">
            <Button
              variant="outline"
              size="icon"
              className={`h-10 w-10 mx-2 rounded-full ${currentIndex === 0 ? "bg-gray-300" : ""}`}
              onClick={scrollPrev}
              disabled={currentIndex === 0}
              aria-label="Previous"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={`h-10 w-10 mx-2 rounded-full ${currentIndex >= timelineData.length - maxVisible ? "bg-gray-300" : ""}`}
              onClick={scrollNext}
              disabled={currentIndex >= timelineData.length - maxVisible}
              aria-label="Next"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Timeline (Stacked Cards) */}
        <div className="block md:hidden">
          <div className="relative space-y-1 ">
              <div className='left-0 top-8 absolute h-full bg-transparent size-32 w-[50%] border-t-2 border-r-2 border-Primary-Blue-900 rounded-tr-3xl'>
               
              </div>
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline Pointer */}
                {/* <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md"></div> */}
                <Card year={item.year} description={item.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}