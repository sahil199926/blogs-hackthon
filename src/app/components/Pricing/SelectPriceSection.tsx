import { IDynamicReportData, IPricingStructure } from "@/types";
import { Check, ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface SelectPriceSectionProps {
  dynamicReportData: IDynamicReportData;
  pricingStructure: IPricingStructure;
  selectedLicense: string;
  setSelectedLicense: (license: string) => void;
}

const SelectPriceSection: React.FC<SelectPriceSectionProps> = ({
  dynamicReportData,
  pricingStructure,
  selectedLicense,
  setSelectedLicense,
}) => {
  // Track which license card is "expanded" on mobile
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Toggle expand/collapse for mobile
  const toggleExpand = (licenseType: string) => {
    setExpandedCard((prev) => (prev === licenseType ? null : licenseType));
  };

  return (
    <section>
      {/* License Cards */}
      <div className="hide-scrollbar flex flex-col gap-5 py-10 md:flex-row md:justify-between md:overflow-x-scroll">
        {pricingStructure.licenseTypes.map((license) => {
          const discounted = dynamicReportData.discountedPrice[license.type];
          const original = dynamicReportData.reportPrice[license.type];
          const discountPercent =
            dynamicReportData.discountedPercentage[license.type];

          // Banner if "team" license is the most popular
          const isMostPopular = license.type === "team";

          // Check if this license is the one currently selected
          const isSelected = selectedLicense === license.type;

          // Check if this card is expanded on mobile
          const isExpanded = expandedCard === license.type;

          return (
            <div
              key={license.type}
              className="relative flex min-w-fit flex-col justify-between rounded border border-gray-200 bg-transparent shadow-sm md:min-w-[450px]"
            >
              {/* Most Popular Banner */}
              {isMostPopular && (
                <div className="md:absolute mb-2 md:mb-0 -top-10 left-0 w-full bg-Accent-Orange-900 py-[6px] text-center text-Body-Medium-14 text-white">
                  Most Popular
                </div>
              )}

              {/* Top Portion: Clickable (sets selected & expands/collapses on mobile) */}
              <div
                className={`p-6 transition-colors duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-[#46CDCF] to-[#2985B2] text-white"
                    : "bg-[#EAF6FA] text-neutral-950"
                }`}
                onClick={() => {
                  setSelectedLicense(license.type);
                  toggleExpand(license.type);
                }}
              >
                {/* Radio button & License Heading */}
                <label className="mb-4 flex items-center gap-2">
                  <input
                    type="radio"
                    name="license-plan"
                    checked={isSelected}
                    onChange={() => {
                      setSelectedLicense(license.type);
                      toggleExpand(license.type);
                    }}
                    className="form-radio h-5 w-5"
                  />
                  <span className="text-Body-Medium-16">{license.heading}</span>
                </label>

                {/* Pricing + Discount */}
                <div className="mb-2 flex flex-row items-center justify-between gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <span
                      className={`text-Display-Semibold-32 ${
                        isSelected ? "text-white" : "text-neutral-950"
                      }`}
                    >
                      ₹{discounted}
                    </span>
                    <span
                      className={`text-sm line-through ${
                        isSelected ? "text-white/80" : "text-neutral-800"
                      }`}
                    >
                      ₹{original}
                    </span>
                  </div>
                  {/* Discount Pill */}
                  <span
                    className={`rounded-full px-3 py-1 text-Body-Medium-14 ${
                      isSelected
                        ? "bg-white text-[#2985B2]"
                        : "bg-[#30AC66] text-white"
                    }`}
                  >
                    {discountPercent}% OFF
                  </span>
                </div>
              </div>

              {/* Bottom Portion (Always White on desktop) */}
              <div className="bg-white p-6">
                {/* Row with heading and chevron for mobile */}
                <div className="flex flex-row items-center justify-between">
                  <h4 className="mb-4 text-Display-Semibold-16">
                    {license.included.heading}
                  </h4>
                  {/* Chevron only visible on mobile (md:hidden) */}
                  <ChevronDown
                    className={`h-5 w-5 transition-transform md:hidden ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    // No onClick here — icon is purely decorative
                  />
                </div>

                {/* 
                  We always show the list on md+ screens.
                  On mobile, only show if expandedCard === this license type.
                */}
                <ul
                  className={`
                    list-none transition-all
                    ${isExpanded ? "block" : "hidden md:block"}
                  `}
                >
                  {license.included.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 py-[10px]">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-Body-Medium-14 text-neutral-950">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SelectPriceSection;
