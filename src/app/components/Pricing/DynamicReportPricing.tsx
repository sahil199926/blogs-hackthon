"use client";
import {
  IPricingReportNameSection,
  IPricingStructure,
  IDynamicReportData,
} from "@/types";
import Image from "next/image";
import Link from "next/link";
import ComparisonTable from "./ComparisonTable";
import SelectPriceSection from "./SelectPriceSection";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const dynamicReportData: IDynamicReportData = {
  reportName: "Middle East Edible Meat Market Size & Share Analysis",
  reportDescription:
    "Europe Satellite Attitude and Orbit Control System Market Size & Share Analysis - Growth Trends & Forecasts Up To 2029",
  reportPrice: {
    single: "9000",
    team: "10500",
    enterprise: "17500",
  },
  discountedPrice: {
    single: "4500",
    team: "5250",
    enterprise: "8750",
  },
  discountedPercentage: {
    single: "50",
    team: "50",
    enterprise: "50",
  },
};

interface DynamicReportPricingProps {
  reportNameSection: IPricingReportNameSection;
  pricingStructure: IPricingStructure;
}

const DynamicReportPricing: React.FC<DynamicReportPricingProps> = ({
  reportNameSection,
  pricingStructure,
}) => {
  // State to track which license is currently selected
  const [selectedLicense, setSelectedLicense] = useState<string>("single");
  const [isCurrencySelectorOpen, setIsCurrencySelectorOpen] = useState(false);

  return (
    <section className="w-full">
      {/* Top Section: Report Name, Description, and 'Explore report' button */}
      <div className="bg-Primary-Mordor-Blue-Bg-100 py-10 md:py-10">
        <div className="mx-auto flex w-[95%] max-w-[1440px] flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex flex-col gap-4 md:justify-start">
            <div className="text-Display-FullCaps-18 text-Neutrals-900">
              {reportNameSection.kicker}
            </div>
            <h2 className="text-Display-Semibold-14 md:text-Display-Semibold-28">
              {dynamicReportData.reportName}
            </h2>
            <p className="w-[85%] text-Body-Medium-14 text-Neutrals-900 md:text-Link-medium-16">
              {dynamicReportData.reportDescription}
            </p>
          </div>
          <Link
            href="/"
            className="w-fit bg-Accent-Orange-950 px-5 py-2 text-Body-Medium-14 text-white transition hover:bg-Accent-Orange-900 md:text-Body-Medium-16">
            {reportNameSection.button}
          </Link>
        </div>
      </div>

      <div className="bg-Primary-Mordor-Blue-Bg-200 py-5 md:py-12">
        <div className="mx-auto flex w-[95%] max-w-[1440px] flex-col gap-6">
          {/* Sub-Section: Heading, Currency Selector, PCI Image */}
          <div className="flex flex-row justify-between gap-4 md:items-center">
            <h3 className="w-[45%] text-Body-Regular-14 text-neutral-900 md:text-Body-Regular-16">
              {pricingStructure.topSection.heading}
            </h3>
            <div className="flex items-center gap-3 text-Display-Medium-16 md:gap-8">
              {/* Currency Selector */}
              <div className="relative inline-block">
                <select
                  onClick={() => setIsCurrencySelectorOpen((prev) => !prev)}
                  onFocus={() => setIsCurrencySelectorOpen(true)}
                  onBlur={() => setIsCurrencySelectorOpen(false)}
                  className="appearance-none border border-gray-300 px-3 py-2 pr-8 outline-none">
                  {pricingStructure.topSection.currencySelector.map((currency, index) => (
                    <option key={index}>{currency}</option>
                  ))}
                </select>

                {isCurrencySelectorOpen ? (
                  <ChevronUp className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                ) : (
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                )}
              </div>

              {/* PCI DSS Image */}
              <div className="flex-shrink-0">
                <Image
                  src={pricingStructure.topSection.image}
                  alt="PCI DSS image"
                  height={58}
                  width={46}
                  className="h-auto w-10 md:w-11"
                />
              </div>
            </div>
          </div>

          <SelectPriceSection
            pricingStructure={pricingStructure}
            dynamicReportData={dynamicReportData}
            selectedLicense={selectedLicense}
            setSelectedLicense={setSelectedLicense}
          />

          <ComparisonTable
            pricingStructure={pricingStructure}
            dynamicReportData={dynamicReportData}
            selectedLicense={selectedLicense}
            setSelectedLicense={setSelectedLicense}
          />
        </div>
      </div>
    </section>
  );
};

export default DynamicReportPricing;
