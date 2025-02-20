"use client";
import React from "react";
import checkBoxSvg from "@/assets/Checkbox.svg";
import Image from "next/image";
import pattern from "@/assets/Pattern3.svg";
import { useState } from "react";
import { IWhySynapse } from "@/types";
import CustomLinkTag from "@/components/Tags/CustomLinkTag";

const WhySynapse = ({ whySynapse }: { whySynapse: IWhySynapse }) => {
  const [selectedPoint, setSelectedPoint] = useState<
    (typeof whySynapse.points)[0]
  >(whySynapse.points[0]);

  const handlePointClick = (index: number) => {
    setSelectedPoint(whySynapse.points[index]);
  };

  return (
    <div className="relative bg-Primary-Mordor-Blue-Bg-200 pb-8">
      <Image
        className="absolute -top-0 left-0 z-0"
        src={pattern}
        alt="pattern"
      />
      <section className="mx-auto max-w-8xl px-4 py-10 sm:px-10 md:py-14 lg:px-[88px]">
        <h3 className="mb-4 mt-4 text-Display-FullCaps-16 text-Neutrals-900 md:ml-6 md:text-Display-FullCaps-18 md:text-lg">
          WHY SYNAPSE
        </h3>

        <div className="mb-5 max-w-lg md:mb-0 md:ml-6">
          <h2 className="text-Display-Semibold-24 text-Neutrals-950 md:text-Display-Semibold-32">
            {whySynapse.title}
          </h2>
        </div>

        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between md:gap-9">
          <div>
            <ul className="mt-8">
              {whySynapse.points.map((point, index) => (
                <li
                  onClick={() => handlePointClick(index)}
                  key={index}
                  className={`flex max-w-md flex-row p-4 ${selectedPoint?.title === point?.title ? "cursor-pointer bg-Primary-Mordor-Blue-Bg-50" : "cursor-pointer"}`}>
                  <section className="flex-shrink-0">
                    <Image
                      height={checkBoxSvg.height}
                      width={checkBoxSvg.width}
                      src={checkBoxSvg.src}
                      alt={`Why Synapse ${index + 1}`}
                    />
                  </section>
                  <section className="pl-3">
                    <div className="text-base font-semibold text-Neutrals-950 md:text-xl">
                      {point.title}
                    </div>
                    {point.title === selectedPoint?.title ? (
                      <p className="text-sm leading-6 text-Neutrals-900 md:text-base">
                        {point.desc}
                      </p>
                    ) : (
                      ""
                    )}
                  </section>
                </li>
              ))}
            </ul>
            <CustomLinkTag href={whySynapse.cta.link} target="_blank">
              <button className="ml-4 mt-4 bg-Primary-Blue-900 px-4 py-[11px] text-base font-medium text-white hover:bg-Primary-Blue-800">
                {whySynapse.cta.title}
              </button>
            </CustomLinkTag>
          </div>
          <div className="max-h-[428px] w-full max-w-[720px] overflow-hidden">
            <Image
              height={1909}
              width={3247}
              className="object-contain"
              src={selectedPoint.link}
              alt="Why Synapse"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhySynapse;
