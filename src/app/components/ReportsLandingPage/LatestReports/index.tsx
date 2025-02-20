"use client";

import { ILatestReports } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChartLine, MapPin, ShoppingCart, Star } from "lucide-react";
import { useRef, useState } from "react";

function LatestReports({ data }: { data: ILatestReports }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Update the current index based on the scroll position
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.clientWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(index);
    }
  };

  // Scroll to a specific card when a dot is clicked
  const handleDotClick = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <section className="flex w-full max-w-[1440px] mx-auto flex-col gap-4 md:gap-8 px-4 py-10 md:py-14 lg:px-[88px]">
      <div className="flex items-center justify-between">
        <h2 className="text-Display-Semibold-24 md:text-Display-Semibold-32 text-Neutrals-950">
          {data.heading}
        </h2>
        <Link
          href={data.button.link}
          className="hidden md:flex bg-Accent-Orange-950 px-4 py-3 text-white transition hover:bg-Accent-Orange-800"
        >
          {data.button.text}
        </Link>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto scrollbar-hide scroll-smooth"
          onScroll={handleScroll}
        >
          <div className="flex">
            {data.reports.map((report, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full max-w-[920px] h-max p-6"
              >
                {/* Category Tag */}
                <span className="bg-Primary-Mordor-Blue-Bg-300 w-max px-4 py-1 text-Body-Medium-14 text-Neutrals-950">
                  {report.category}
                </span>
                <div className="flex flex-col lg:flex-row gap-6 lg:items-center p-6 shadow-blogAndCasecard">
                  {/* Report Image */}
                  <div className="flex gap-4">
                    <Image
                      width={369}
                      height={199}
                      src={report.image}
                      alt={report.title}
                      className="h-[132px] max-w-[246px] object-cover"
                    />
                    
                  </div>
                  
                  {/* Report Details */}
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-Display-Semibold-16 text-Neutrals-950">
                          {report.title}
                        </h3>
                        <div className="flex w-max gap-4 items-center bg-Accent-Orange-50 pl-1 pr-4 py-[2px] ">
                          <span className="flex items-center gap-1 text-Body-Medium-12 text-Neutrals-950">
                            <ChartLine
                              className="text-Accent-Orange-950 "
                              size={14}
                            />
                            CAGR {report.cagr}
                          </span>
                          <span className="flex items-center gap-1 text-Body-Medium-12 text-Neutrals-950">
                            <Calendar
                              className="text-Accent-Orange-950"
                              size={14}
                            />
                            Study Period: {report.studyPeriod}
                          </span>
                        </div>
                      </div>
                      <button className="flex w-max h-max bg-Primary-Blue-950 px-4 py-3 text-Link-medium-16 text-white transition hover:bg-Primary-Blue-800">
                        <Link
                          href={report.freeSampleButton.link}
                          className="text-nowrap"
                        >
                          {report.freeSampleButton.text}
                        </Link>
                      </button>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="flex gap-1 items-center">
                        <MapPin size={16} className="text-Neutrals-700" />
                        <p className="text-Body-Regular-14 text-Neutrals-700">
                          Regions Covered:
                        </p>{" "}
                        <p className="text-Body-Medium-14 text-Neutrals-950">
                          {report.regionsCovered.join(", ")}
                        </p>
                      </span>
                      <span className="flex gap-1 items-center">
                        <Star size={16} className="text-Neutrals-700" />
                        <p className="text-Body-Regular-14 text-Neutrals-700">
                          Major Players:
                        </p>{" "}
                        <p className="text-Body-Medium-14 text-Neutrals-950">
                          {report.majorPlayers.join(", ")}
                        </p>
                      </span>
                    </div>
                    <div className="flex justify-between w-full gap-4">
                      <div>
                        <span className="text-Body-Medium-14 text-Neutrals-950">
                          Start From
                        </span>
                        <p className="text-[18px] font-semibold text-Neutrals-950 flex items-center">
                          {report.price}
                          <span className="text-sm font-light">
                            {"/"}
                            {report.licenceType}
                          </span>
                        </p>
                      </div>
                      <button className="flex items-center w-max h-max border-2 border-Primary-Blue-900 px-4 py-[11px] text-Link-medium-16 text-Primary-Blue-950 transition hover:bg-Primary-Blue-50">
                        <Link
                          href={report.addToCartButton.link}
                          className="text-nowrap flex gap-1"
                        >
                          <ShoppingCart
                            size={20}
                            className="flex h-6 items-center justify-center"
                          />
                          {report.addToCartButton.text}
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {data.reports.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full ${
                index === currentIndex
                  ? "bg-Neutrals-950 w-4"
                  : "bg-Neutrals-300 w-2"
              }`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestReports;
