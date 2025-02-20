"use client";
import { useState } from "react";
import Image from "next/image";
import { IResearchMethodologyListTabData } from "@/types";
import { ChevronDown } from "lucide-react";

function ListTab({ data }: { data: IResearchMethodologyListTabData }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col gap-8">
      <p className="text-Body-Regular-14 text-Neutrals-900 md:text-Body-Regular-16">
        {data.topParagraph}
      </p>
      {/* For Desktop */}
      <div className="hidden gap-10 md:flex xl:gap-20">
        {/* LEFT SECTION (LIST) */}
        <div className="flex w-full max-w-[534px] flex-col gap-4">
          {data.steps?.map((category, index) => (
            <div
              key={index}
              className={`cursor-pointer px-5 py-4 transition ${
                selectedIndex === index
                  ? "bg-Primary-Mordor-Blue-Bg-200 shadow-mordorCustom"
                  : "bg-Primary-Mordor-Blue-Bg-50"
              }`}
              onClick={() => setSelectedIndex(index)}>
              <h3 className="flex items-center gap-4 text-Display-Semibold-16 text-Neutrals-950">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF5722] text-Body-Regular-12 text-white">
                  {index + 1}
                </span>
                {category.title}
              </h3>
              {Array.isArray(category.points) ? (
                <ul className="mt-2 list-disc pl-6 text-Body-Medium-14 text-Neutrals-950">
                  {category.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-Body-Regular-14 text-Neutrals-900">
                  {category.points}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT SECTION (IMAGE + TEXT) */}
        {data.steps[selectedIndex]?.rightSectionData && (
          <div className="w-full max-w-[650px] bg-white shadow-blogAndCasecard">
            <Image
              src={data.steps[selectedIndex].rightSectionData.image}
              alt={data.steps[selectedIndex].rightSectionData.text.title}
              width={500}
              height={300}
              className="h-full max-h-[263px] w-full object-cover"
            />
            <div className="flex flex-col gap-4 p-5">
              <p className="text-Display-Semibold-20 text-Neutrals-950">
                {data.steps[selectedIndex].rightSectionData.text.title}
              </p>
              <p className="text-Body-Regular-14 text-Neutrals-900">
                {data.steps[selectedIndex].rightSectionData.text.desc}
              </p>
            </div>
          </div>
        )}
      </div>
      {/* For Mobile */}
      <div className="flex flex-col gap-5 md:hidden">
        {data.steps?.map((category, index) => (
          <div key={index} className="border border-Neutrals-100 shadow-blogAndCasecard bg-Primary-Mordor-Blue-Bg-50">
            <div
              className={`transform transition-transform ${
                selectedIndex === index ? "bg-Primary-Mordor-Blue-Bg-200" : ""
              } flex cursor-pointer items-center justify-between px-4 py-3`}
              onClick={() =>
                setSelectedIndex(selectedIndex === index ? -1 : index)
              }>
              <div className="flex items-center gap-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF5722] text-Body-Regular-12 text-white">
                  {index + 1}
                </span>
                <p className="text-[18px] font-semibold text-Neutrals-950">
                  {category.title}
                </p>
              </div>
              <ChevronDown
                className={`transform transition-transform ${
                  selectedIndex === index ? "rotate-180" : ""
                }`}
                size={20}
              />
            </div>
            {/* Always visible points/paragraph */}
            <div className=" p-4">
              {Array.isArray(category.points) ? (
                <ul className="list-disc flex flex-col gap-4 pl-6 text-Body-Medium-14 text-Neutrals-950">
                  {category.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-Body-Regular-14 text-Neutrals-900">
                  {category.points}
                </p>
              )}
            </div>
            {/* Conditionally visible right image and text */}
            {selectedIndex === index && category.rightSectionData && (
              <div className="flex flex-col gap-4 p-5 shadow-blogAndCasecard">
                <Image
                  src={category.rightSectionData.image}
                  alt={category.rightSectionData.text.title}
                  width={500}
                  height={300}
                  className="h-full max-h-[263px] w-full object-cover"
                />
                <p className="text-[18px] font-semibold text-Neutrals-950">
                  {category.rightSectionData.text.title}
                </p>
                <p className="text-Body-Regular-12 text-Neutrals-900">
                  {category.rightSectionData.text.desc}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListTab;
