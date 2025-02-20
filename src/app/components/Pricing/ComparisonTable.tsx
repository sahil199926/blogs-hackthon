import { IPricingStructure, IDynamicReportData } from "@/types";
import { Check, ChevronDown, Minus } from "lucide-react";
import React, { useState } from "react";

interface ComparisonTableProps {
  dynamicReportData: IDynamicReportData;
  pricingStructure: IPricingStructure;
  selectedLicense: string | null;
  setSelectedLicense: (license: string) => void;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  pricingStructure,
  dynamicReportData,
  selectedLicense,
  setSelectedLicense,
}) => {
  // Controls the open/close of the comparison table
  const [showComparison, setShowComparison] = useState(false);

  /**
   * Conditionally apply the background color (gradient or light blue) + text color 
   * for the LICENSE header cells.
   */
  const headerClasses = (licenseType: string) => {
    return selectedLicense === licenseType
      ? // Selected License → Gradient + White text
        "bg-gradient-to-r from-[#46CDCF] to-[#2985B2] text-white"
      : // Non-selected License → Light background
        "bg-[#EAF6FA] text-neutral-950";
  };

  /**
   * Conditionally apply left/right border color for LICENSE cells (TH or TD):
   * - Default: border-neutral-200
   * - Selected column: border-neutral-900
   */
  const borderClasses = (licenseType: string) => {
    // By default, each column has light borders on left & right
    const defaultBorders = "border-l border-r border-neutral-200";
    // For selected columns, override with dark borders on left & right
    const selectedBorders = "border-l border-r border-neutral-900";

    return selectedLicense === licenseType ? selectedBorders : defaultBorders;
  };

  return (
    <section>
      {/* Toggle Button for Plan Comparison */}
      {!showComparison ? (
        <button
          onClick={() => setShowComparison(true)}
          className="mx-auto flex items-center gap-1 text-Link-medium-16 text-Primary-Blue-950 hover:text-Primary-Blue-900"
        >
          <span>Open Plan Comparison</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      ) : (
        <div className="flex w-full flex-col gap-8">
          <div className="flex flex-col gap-10">
            <h3 className="text-center text-Display-Semibold-24 text-neutral-950 md:text-Display-Semibold-32">
              {pricingStructure.pricingComparison.heading}
            </h3>

            {/* Table Container with horizontal scroll */}
            <div className="w-full grid place-items-center overflow-x-auto">
              {/*
                Use "border-separate" + "border-spacing-0" to ensure each cell
                can display its own left/right borders (especially for the selected column).
              */}
              <table className="border-separate border-spacing-0 w-full border border-neutral-200">
                {/* Table Head */}
                <thead>
                  <tr className="border-b border-neutral-200">
                    {/* Features Column (static) */}
                    <th
                      className="
                        w-1/4 min-w-[140px]
                        bg-transparent
                        p-3 md:px-6 md:py-8
                        text-center md:text-left
                        text-Display-Semibold-14 md:text-Display-Semibold-24 
                        text-neutral-950
                        border-l border-r border-neutral-200
                      "
                    >
                      Features
                    </th>

                    {/* Single User License */}
                    <th
                      onClick={() => setSelectedLicense("single")}
                      className={`
                        w-1/4 min-w-[140px]
                        cursor-pointer 
                        p-3 md:px-6 md:py-8 
                        text-center 
                        transition-colors
                        ${headerClasses("single")} 
                        ${borderClasses("single")}
                      `}
                    >
                      <span className="block text-Body-Medium-12 md:text-Body-Medium-16">
                        {pricingStructure.licenseTypes[0].heading}
                      </span>
                      <span className="block text-Body-Semibold-18 md:text-Body-Semibold-20">
                        ₹{dynamicReportData.reportPrice.single}
                      </span>
                    </th>

                    {/* Team License */}
                    <th
                      onClick={() => setSelectedLicense("team")}
                      className={`
                        w-1/4 min-w-[140px]
                        cursor-pointer 
                        p-3 md:px-6 md:py-8 
                        text-center 
                        transition-colors
                        ${headerClasses("team")}
                        ${borderClasses("team")}
                      `}
                    >
                      <span className="block text-Body-Medium-12 md:text-Body-Medium-16">
                        {pricingStructure.licenseTypes[1].heading}
                      </span>
                      <span className="block text-Body-Semibold-18 md:text-Body-Semibold-20">
                        ₹{dynamicReportData.reportPrice.team}
                      </span>
                    </th>

                    {/* Enterprise License */}
                    <th
                      onClick={() => setSelectedLicense("enterprise")}
                      className={`
                        w-1/4 min-w-[140px]
                        cursor-pointer 
                        p-3 md:px-6 md:py-8 
                        text-center
                        transition-colors
                        ${headerClasses("enterprise")}
                        ${borderClasses("enterprise")}
                      `}
                    >
                      <span className="block text-Body-Medium-12 md:text-Body-Medium-16">
                        {pricingStructure.licenseTypes[2].heading}
                      </span>
                      <span className="block text-Body-Semibold-18 md:text-Body-Semibold-20">
                        ₹{dynamicReportData.reportPrice.enterprise}
                      </span>
                    </th>
                  </tr>
                </thead>

                {/* Table Body (all rows get bg-[#F6FBFD]) */}
                <tbody className="bg-[#F6FBFD]">
                  {pricingStructure.pricingComparison.table.map((row, idx) => (
                    <tr key={idx} className="border-b border-neutral-200">
                      {/* Features column */}
                      <td
                        className="
                          w-1/4 min-w-[140px]
                          p-5 md:px-6 md:py-8
                          text-center md:text-left
                          text-Body-Medium-12 md:text-Body-Medium-16
                          text-neutral-950
                          border-l border-r border-neutral-200
                        "
                      >
                        {row.Feature}
                      </td>

                      {/* Single User License Cell */}
                      <td
                        className={`
                          w-1/4 min-w-[140px]
                          p-3 md:px-6 md:py-8
                          text-center align-middle
                          ${borderClasses("single")}
                        `}
                      >
                        {row["Single User License"] ? (
                          <Check
                            height={16}
                            width={16}
                            className="mx-auto text-[#30AC66]"
                          />
                        ) : (
                          <Minus
                            height={16}
                            width={16}
                            className="mx-auto text-neutral-600"
                          />
                        )}
                      </td>

                      {/* Team License Cell */}
                      <td
                        className={`
                          w-1/4 min-w-[140px]
                          p-3 md:px-6 md:py-8
                          text-center align-middle
                          ${borderClasses("team")}
                        `}
                      >
                        {row["Team License"] ? (
                          <Check
                            height={16}
                            width={16}
                            className="mx-auto text-[#30AC66]"
                          />
                        ) : (
                          <Minus
                            height={16}
                            width={16}
                            className="mx-auto text-neutral-600"
                          />
                        )}
                      </td>

                      {/* Enterprise/Corporate License Cell */}
                      <td
                        className={`
                          w-1/4 min-w-[140px]
                          p-3 md:px-6 md:py-8
                          text-center align-middle
                          ${borderClasses("enterprise")}
                        `}
                      >
                        {row["Enterprise/Corporate License"] ? (
                          <Check
                            height={16}
                            width={16}
                            className="mx-auto text-[#30AC66]"
                          />
                        ) : (
                          <Minus
                            height={16}
                            width={16}
                            className="mx-auto text-neutral-600"
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Close Comparison Button */}
          <button
            onClick={() => setShowComparison(false)}
            className="flex items-center gap-1 self-center text-Link-medium-16 text-Primary-Blue-950 hover:text-Primary-Blue-900"
          >
            <span>Close Plan Comparison</span>
            <span className="rotate-180 transform">
              <ChevronDown className="h-4 w-4" />
            </span>
          </button>
        </div>
      )}
    </section>
  );
};

export default ComparisonTable;
