import { IGranularCoverage } from "@/types";
import Image from "next/image";
import React from "react";

const GranularCoverage = ({granularCoverage}:{granularCoverage : IGranularCoverage}) => {
  return (
    <div className="bg-Primary-Mordor-Blue-Bg-50 flex w-full justify-center">
      <section className="container flex max-w-[1440px] flex-col gap-6 sm:items-center px-4 sm:px-10 lg:px-[88px] md:flex-row md:justify-between py-[88px]">
        {/* Left Section */}
        <div className="flex flex-[1] flex-col gap-8 sm:text-center lg:max-w-[530px] md:text-left">
          <div className="flex flex-col gap-3 md:gap-4">
            <h2 className="text-Display-FullCaps-16 md:text-Display-FullCaps-18 text-Neutrals-900">
              {granularCoverage.kicker}
            </h2>
            <h3 className="text-Display-Semibold-24 md:text-Display-Semibold-32 text-Neutrals-950">
              {granularCoverage.heading}
            </h3>
            <p className="text-Body-Regular-14 md:text-Body-Regular-16 text-Neutrals-900">
              {granularCoverage.text}
            </p>
          </div>
          <div className="hidden md:flex justify-center gap-3 text-Link-medium-16 md:justify-start">
            <button className="bg-Primary-Blue-950 px-4 py-3 text-Neutrals-white">
              See All Clients
            </button>
            <button className="bg-Primary-Blue-50 px-4 py-3 text-Primary-Blue-950">
              See All Industries
            </button>
          </div>
        </div>

        {/* Right Map */}
        <div className="flex flex-[1] justify-center">
          
        <Image src={granularCoverage.map.src} alt={granularCoverage.map.alt} title={granularCoverage.map.title} height={359} width={729}/>
        </div>

        {/* Buttons for mobile */}
        <div className="md:hidden flex justify-start gap-2 text-Link-medium-14">
            <button className="bg-Primary-Blue-950 px-4 py-3 text-Neutrals-white">
              See All Clients
            </button>
            <button className="bg-Primary-Blue-50 px-4 py-3 text-Primary-Blue-950">
              See All Industries
            </button>
          </div>
      </section>
    </div>
  );
};

export default GranularCoverage;
