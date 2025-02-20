"use client";
import { useState } from "react";
import ChevronUp from "@/assets/Chevron-Up.svg";
import Image from "next/image";
import Link from "next/link";
import { IRelatedIndustries } from "@/types";
import DotBg from "../common/DotBg";

const RelatedIndustries = ({ relatedIndustries }: { relatedIndustries : IRelatedIndustries }) => {
  const [viewMore, setViewMore] = useState(false);

  const handleViewMore = () => {
    setViewMore(!viewMore);
  };

  return (
    <div className="relative bg-Primary-Mordor-Green-Bg-50 overflow-hidden">
      <section className="relative z-10 mx-auto max-w-8xl p-4 md:p-14">
        <div className="mb-8 text-center">
          <h2 className="md:text-Display/Semibold mb-3 text-center text-2xl font-semibold leading-46px">
            {relatedIndustries?.heading}
          </h2>
          <p className="mx-auto mb-8 flex max-w-3xl text-center text-sm leading-6 text-Neutrals-900 md:text-base">
            {relatedIndustries?.desc}
          </p>
        </div>
        {/* Separator */}
        
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {viewMore
            ? relatedIndustries?.hubList?.map((hub, index) => (
                <li key={index}>
                  <Link
                    target="_blank"
                    href={hub.HubLink}
                    className="relative flex h-auto cursor-pointer flex-col items-center overflow-hidden bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl md:flex-row"
                  >
                    <div className="relative h-[100px] w-full flex-shrink-0 md:h-full md:w-24 lg:h-[130px] lg:w-24 xl:h-24 xl:w-24">
                      <Image
                        src={hub.img}
                        alt={hub.label}
                        title={hub.label}
                        width={286}
                        height={180}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-2">
                      <h3 className="mt-0 text-center  text-sm font-medium text-Neutrals-950 md:mt-2 md:text-left md:text-base">
                        {hub.label}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))
            : relatedIndustries?.hubList?.slice(0, 8).map((hub, index) => (
                <li key={index}>
                  <Link
                    target="_blank"
                    href={hub.HubLink}
                    className="relative flex h-auto cursor-pointer flex-col items-center overflow-hidden bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl md:flex-row"
                  >
                    <div className="relative h-[100px] w-full flex-shrink-0 md:h-full md:w-24 lg:h-[130px] lg:w-24 xl:h-24 xl:w-24">
                      <Image
                        src={hub.img}
                        alt={hub.label}
                        title={hub.label}
                        width={286}
                        height={180}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-2">
                      <h3 className="mt-0 text-center text-sm font-medium text-Neutrals-950 md:mt-2 md:text-left md:text-base">
                        {hub.label}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
        </ul>
        <div className="mt-8 text-center">
          <button
            onClick={handleViewMore}
            className="text-base text-Primary-Blue-950 transition-colors duration-300"
          >
            <span className="flex items-center text-sm md:text-base">
              {viewMore ? (
                <div className="hover:underline"> View Less </div>
              ) : (
                <div className="hover:underline"> View More </div>
              )}
              <Image
                src={ChevronUp}
                alt="Chevron Up"
                width={24}
                height={24}
                className={`transform ${!viewMore ? "rotate-180" : ""} ml-2`}
              />
            </span>
          </button>
        </div>
      </section>
       <div className="z-1 absolute -right-[150px] md:-left-36 -top-[200px]">
            <DotBg
                cropWidthStart={0}
                cropWidthEnd={500}
                cropHeightStart={0}
                cropHeightEnd={500}
            />
        </div> 
    </div>
  );
};

export default RelatedIndustries;