"use client";
import { useState } from "react";
import ResearchReport from "@/assets/ResearchReport.svg";
import DataPoints from "@/assets/DataPoints.svg";
import Insights from "@/assets/Insight.svg";
import Industry from "@/assets/Industry.svg";
import ChevronUp from "@/assets/Chevron-Up.svg";
import Image from "next/image";
import Link from "next/link";
import { IHubs } from "@/types";
const SynapseHubs = ({ hubs }: { hubs: IHubs }) => {
  const [viewMore, setViewMore] = useState(false);

  const handleViewMore = () => {
    setViewMore(!viewMore);
  };

  return (
    <div className="bg-Primary-Mordor-Blue-Bg-100">
      <section className="mx-auto max-w-8xl p-8">
        <div className="mb-8 text-center">
          <h3 className="mb-5 text-base font-medium uppercase leading-27px text-Neutrals-900 md:text-lg">
            Hubs
          </h3>
          <h2 className="md:text-Display/Semibold mb-3 text-center text-2xl font-semibold leading-46px">
            {hubs?.title}
          </h2>
          <p className="mx-auto mb-8 flex max-w-3xl text-center text-sm leading-6 text-Neutrals-900 md:text-base">
            {hubs?.desc}
          </p>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-6 px-8 md:grid-cols-4">
          <div className="flex flex-row items-center">
            <Image
              className="h-[18px] w-[13.5px] md:h-[36px] md:w-[27px]"
              src={ResearchReport}
              alt="Research Report"
            />
            <p className="ml-4 text-sm font-medium leading-22px text-Neutrals-950 md:text-base">
              Comprehensive Reports
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image
              className="h-[18px] w-[13.5px] md:h-[36px] md:w-[27px]"
              src={DataPoints}
              alt="Data Points"
            />
            <p className="ml-4 text-sm font-medium leading-22px text-Neutrals-950 md:text-base">
              Expanding Hub Portfolio
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image
              className="h-[18px] w-[13.5px] md:h-[36px] md:w-[27px]"
              src={Industry}
              alt="Insights"
            />
            <p className="ml-4 text-sm font-medium leading-22px text-Neutrals-950 md:text-base">
              Analyst Support
            </p>
          </div>
          <div className="flex flex-row items-center">
            <Image
              className="h-[18px] w-[13.5px] md:h-[36px] md:w-[27px]"
              src={Insights}
              alt="Industry"
            />
            <p className="ml-4 text-sm font-medium leading-22px text-Neutrals-950 md:text-base">
              Get Custom Insights & More
            </p>
          </div>
        </div>
        <div className="my-5 border-t border-Neutrals-500"></div>{" "}
        {/* Separator */}
        <div className="mb-6 text-center">
          <div className="text-2xl font-semibold leading-30px text-gray-800 md:text-xl">
            Hubs Listing Includes
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {viewMore
            ? hubs?.hubList?.map((hub, index) => (
                <li key={index}>
                  <Link
                    target="_blank"
                    href={hub.HubLink}
                    className="relative flex h-auto cursor-pointer flex-col items-center overflow-hidden bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl md:flex-row"
                  >
                    <div className="relative h-[100px] w-full flex-shrink-0 md:h-full md:w-24 lg:h-24 lg:h-[130px] lg:w-24 xl:h-24 xl:w-24">
                      <Image
                        src={hub.img}
                        alt={hub.label}
                        width={286}
                        height={180}
                        className="h-full w-full object-cover"
                      />
                      <p className="absolute bottom-4 left-3 bg-Accent-Orange-100 p-1 text-center text-xs font-semibold sm:text-sm md:hidden">
                        {hub.value}
                      </p>
                    </div>
                    <div className="p-2">
                      <p className="hidden bg-Accent-Orange-100 p-2 text-sm font-medium md:inline-block">
                        {hub.value}
                      </p>
                      <p className="mt-0 text-center text-sm font-medium text-Neutrals-950 md:mt-2 md:text-left md:text-base">
                        {hub.label}
                      </p>
                    </div>
                  </Link>
                </li>
              ))
            : hubs?.hubList?.slice(0, 6).map((hub, index) => (
                <li key={index}>
                  <Link
                    target="_blank"
                    href={hub.HubLink}
                    className="relative flex h-auto cursor-pointer flex-col items-center overflow-hidden bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl md:flex-row"
                  >
                    <div className="relative h-[100px] w-full flex-shrink-0 md:h-full md:w-24 lg:h-24 lg:h-[130px] lg:w-24 xl:h-24 xl:w-24">
                      <Image
                        src={hub.img}
                        alt={hub.label}
                        width={286}
                        height={180}
                        className="h-full w-full object-cover"
                      />
                      <p className="absolute bottom-4 left-3 bg-Accent-Orange-100 p-1 text-center text-sm text-xs font-semibold sm:text-sm md:hidden">
                        {hub.value}
                      </p>
                    </div>
                    <div className="p-2">
                      <p className="hidden bg-Accent-Orange-100 p-2 text-sm font-semibold md:inline-block">
                        {hub.value}
                      </p>
                      <p className="mt-0 text-center text-sm font-semibold text-Neutrals-950 md:mt-2 md:text-left md:text-base">
                        {hub.label}
                      </p>
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
    </div>
  );
};

export default SynapseHubs;
