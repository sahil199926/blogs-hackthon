"use client";
import { IAllCagtegoryList, IAllCaseStudiesSection } from "@/types";
import CaseStudy from "../../CustomResearchPage/CaseStudies/CaseStudy";
import DotBg from "../../common/DotBg";
import Link from "next/link";
import DropdownSearch from "../../common/DropdownSearch";
import { Search, FilePlus2, X } from "lucide-react";
import { useState } from "react";

const recentOptions = [
  "All",
  "Latest",
  "3 Months",
  "6 Months",
  "1 Year Ago",
  "2 Year Ago",
];

function FiltersComponent({
  caseStudies,
}: {
  caseStudies: IAllCaseStudiesSection;
}) {
  const allCategoryList = caseStudies.allCategoryList;
  const [options] = useState<string[]>(
    allCategoryList.map((item) => item.heading)
  );
  const [categoryList, setCategoryList] =
    useState<IAllCagtegoryList[]>(allCategoryList);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSubmit = (selectedValues: string[]) => {
    if (selectedValues.length > 0) {
      setCategoryList(
        allCategoryList.filter((item) => selectedValues.includes(item.heading))
      );
      setSelectedFilters(( prev: string[]) => [...prev, ...selectedValues])
    } else {
      setCategoryList(allCategoryList);
      setSelectedFilters((prev) =>
        selectedValues.filter((item) => prev.includes(item))
      );
    }
  };
  const handleSubmitRecent = () => {
    // console.log("Selected Values:", selectedValues);
  };

  const clearSelectedData = (item: string) => {
    setSelectedFilters((prev) => prev.filter((val) => val != item ))
  };
  const clearAll = () => {
    setSelectedFilters([])
    setCategoryList(allCategoryList);
  };

  return (
    <div>
      <div className="relative">
        <section className="relative z-40 mx-auto flex max-w-[1440px] flex-col gap-10 px-4 py-5 sm:px-10 md:px-[88px] md:py-10">
          <h2 className="text-Display-Semibold-24 md:text-Display-Semibold-32">
            {caseStudies.heading}
          </h2>
          <div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="relative h-[46px] w-[450px]">
                <input
                  type="text"
                  placeholder="Search Case Studies"
                  className="h-full w-full border border-gray-300 pl-[40px] pr-[40px] text-base"
                />
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 transform text-gray-500 md:left-auto md:right-2" />
              </div>
              <div className="flex gap-2">
                <DropdownSearch
                  title="Industries"
                  options={options}
                  onSubmit={handleSubmit}
                  selectedItems={selectedFilters}
                  />
                <DropdownSearch
                  title="Most Recent"
                  options={recentOptions}
                  onSubmit={handleSubmitRecent}
                  icon={<FilePlus2 />}
                  selectedItems={selectedFilters}
                />
              </div>
            </div>
            {selectedFilters && selectedFilters.length ? (
              <div className="relative z-[15] flex flex-col mt-6 items-start gap-4 md:flex-row md:items-center">
                <span className="text-nowrap text-Neutrals-800">
                  Filters Selected
                </span>
                <div className="flex w-full gap-2 overflow-hidden">
                  <div className="scrollbar-hide flex items-center gap-4 overflow-auto">
                    {selectedFilters.map((item) => (
                      <div
                        key={item}
                        className="flex flex-shrink-0 items-center gap-1 rounded-[6px] border border-Neutrals-300 px-2 py-[6px] text-[14px] leading-5 text-Neutrals-950 md:gap-2 md:px-4 md:font-medium">
                        <span>{item}</span>
                        <button onClick={() => clearSelectedData(item)}>
                          <X className="h-[14px] w-[14px]" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="sticky right-0 flex items-center md:ml-4">
                    <div
                      onClick={clearAll}
                      className="cursor-pointer text-nowrap bg-white py-[6px] text-Body-Medium-16 text-Accent-Orange-950">
                      Clear All
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </section>
        <section className="relative z-20 mx-auto flex max-w-[1440px] flex-col gap-12 px-4 py-10 sm:px-10 md:px-[88px] md:py-20">
          {categoryList.map((item, index: number) => (
            <div key={index} className="my-4">
              <div className="flex w-full justify-between">
                <h2 className="text-Display-Semibold-24 md:text-Display-Semibold-32">
                  {item.heading}
                </h2>
                <Link
                  className="hero-section-btn hidden min-w-max rounded-[1.5px] border-[1.5px] border-Primary-Blue-950 bg-Primary-Mordor-Blue-Bg-50 px-3 py-4 text-Link-medium-14 font-medium text-Primary-Blue-950 hover:bg-Primary-Blue-950 hover:text-Primary-Blue-50 md:block md:text-Link-medium-16 lg:text-[16px] lg:leading-6"
                  href={item.cta.link}
                  target={item.cta.title ? "_blank" : ""}>
                  {item.cta.title}
                </Link>
              </div>
              <div className="flex w-full flex-wrap justify-center gap-4 md:justify-start">
                {item.studies.map((study, i: number) => (
                  <div key={i} className="my-4 w-[408px]">
                    <CaseStudy caseStudy={study} />
                  </div>
                ))}
              </div>
              <div className="flex w-full justify-center md:hidden">
                <Link
                  className="hero-section-btn min-w-max rounded-[1.5px] border-[1.5px] border-Primary-Blue-950 bg-Primary-Mordor-Blue-Bg-50 px-3 py-4 text-Link-medium-14 font-medium text-Primary-Blue-950 hover:bg-Primary-Blue-950 hover:text-Primary-Blue-50 md:text-Link-medium-16 lg:text-[16px] lg:leading-6"
                  href={item.cta.link}
                  target={item.cta.title ? "_blank" : ""}>
                  {item.cta.title}
                </Link>
              </div>
            </div>
          ))}
        </section>
        <div className="absolute -bottom-[80px] right-0 z-10 md:top-[180px]">
          <DotBg
            cropWidthStart={0}
            cropWidthEnd={460}
            cropHeightStart={0}
            cropHeightEnd={500}
          />
        </div>
      </div>
    </div>
  );
}

export default FiltersComponent;
