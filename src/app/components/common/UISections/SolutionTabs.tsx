"use client";
import { useState } from "react";
import Image from "next/image";
import pattern from "@/assets/Pattern2.svg";
import {
  ISolutionTabs,
  ITabCard,
  ICustomResearchSolutionTabData,
  IOurClients,
} from "@/types";
import CustomResearchSolutionTabCard from "@/app/components/CustomResearchPage/CustomResearchSolutionTabCard";
import Link from "next/link";
import PartnersOurClient from "../../Partners/PartnersOurClients";
import OurCustomers from "./OurCustomers";

// What we can do is to not pass the component as children there and pass it here render it here directly

function SolutionTabs<T = ITabCard>({
  solutionTabs,
  childComponent,
  mobileHeadBar,
  noPattern,
}: {
  solutionTabs: ISolutionTabs<T>;
  childComponent?: string;
  mobileHeadBar?: boolean;
  noPattern?: boolean;
}) {
  const [selectedTab, setSelectedTab] = useState(0);



  return (
    <div className="relative">
      <section className="mx-auto max-w-8xl py-12">
        <div className="mx-auto flex w-full flex-col gap-2 md:mx-auto md:items-center md:justify-start md:gap-6 lg:gap-8">
          <div className="mx-auto flex w-[80%] flex-col items-center gap-4 md:w-full">
            <p className="text-Display-FullCaps-16 uppercase text-Neutrals-900 md:text-Display-FullCaps-18">
              {solutionTabs.kicker}
            </p>
            <h2 className="text-center text-2xl font-semibold lg:text-left lg:text-[32px] lg:leading-[46px]">
              {solutionTabs.heading}
            </h2>
          </div>

          {/* TAB OPTIONS */}
          <div
            className={`mx-auto ${!mobileHeadBar ? "hidden" : "flex"} w-[100%] items-end justify-evenly md:flex lg:border-b-[3.4px] ${mobileHeadBar ? "hide-scrollbar scrollbar-hide min-h-20 overflow-x-scroll lg:min-h-0 lg:overflow-x-visible" : ""}`}>
            {solutionTabs.tabOptions?.map((item, index) => (
              <h3
                onClick={() => setSelectedTab(index)}
                className={`${index == selectedTab ? "active-tab" : ""} h-full ${mobileHeadBar ? "flex-shrink-0" : ""} flex-1 cursor-pointer border-b-[3px] px-8 py-4 text-center text-Body-Medium-14 md:text-xl md:font-medium md:leading-[30px] lg:-mb-[3px]`}
                key={item}>
                {item}
              </h3>
            ))}
          </div>

          {childComponent === "partners" && (
            <ul className="block md:hidden">
              {solutionTabs.tabOptions.map((item, index) => {
                const temp = solutionTabs.tabData[index] as IOurClients;
                return (
                  <li
                    key={index}
                    className="border-b border-Neutrals-200 px-4 py-5">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none justify-between text-base font-medium text-Neutrals-900">
                        <p className="text-Display-Semibold-16 text-Neutrals-950">
                          {item}
                        </p>
                        <div className="flex h-6 w-6 rotate-180 items-center justify-center">
                          <span className="chevron"></span>
                        </div>
                      </summary>
                      <p className="whitespace-pre-line text-justify text-Body-Regular-14 text-Neutrals-900 sm:text-left">
                        {temp.heading}
                      </p>
                      <div className="mt-6 md:mt-8">
                        <Link
                          className="bg-Primary-Blue-950 hover:bg-Primary-Blue-800"
                          href={temp.CTA.link}>
                          <p className="px-4 py-3 text-Link-medium-16 text-Neutrals-white">
                            {temp.CTA.title}
                          </p>
                        </Link>
                      </div>
                      <OurCustomers
                        ourCustomers={temp.mobileImages}
                        className="bg-transparent md:hidden"
                        headerStyle="hidden"
                      />
                    </details>
                  </li>
                );
              })}
            </ul>
          )}

          {/* TAB CONTENT */}
          <div className="w-full">
            {solutionTabs.tabData?.map((data, index) => {
              const isActive = index === selectedTab;
              if (childComponent === "custom-research") {
                return (
                  <CustomResearchSolutionTabCard
                    key={index}
                    index={index}
                    {...(data as ICustomResearchSolutionTabData)}
                    hidden={!isActive}
                    tabHeading={solutionTabs.tabOptions[index]}
                  />
                );
              }
              if (childComponent === "partners") {
                return (
                  <PartnersOurClient
                    key={index}
                    index={index}
                    {...(data as IOurClients)}
                    hidden={!isActive}
                  />
                );
              } else {
                return (
                  <TabCard
                    key={index}
                    index={index}
                    {...(data as ITabCard)}
                    hidden={!isActive}
                    tabHeading={solutionTabs.tabOptions[index]}
                  />
                );
              }
            })}
          </div>
        </div>
      </section>
      {!noPattern && (
        <Image
          className="z-1 absolute -bottom-0 left-0 hidden md:block"
          src={pattern}
          alt="pattern"
        />
      )}
    </div>
  );
}

export default SolutionTabs;

function TabCard({
  imgUrl,
  heading,
  description,
  stats,
  hidden,
  tabHeading,
  index,
  ctaOne,
  ctaTwo,
}: ITabCard & { hidden: boolean; tabHeading: string; index: number }) {
  return (
    <div
      className={` ${index != 0 ? "mt-4 lg:mt-0" : "mt-0"} offerings-card flex ${hidden ? "md:hidden" : "md:flex"} flex-col-reverse gap-4 bg-Primary-Mordor-Blue-Bg-75 p-4 md:flex-row md:items-center md:justify-between md:gap-[5%] md:bg-white lg:p-0`}>
      {/* LEFT SECTION */}
      <div className="relative z-10 flex-1 lg:m-auto lg:w-[38%] lg:flex-none">
        <h4 className="text-[12px] font-bold uppercase text-Accent-Orange-800 md:hidden">
          {tabHeading}
        </h4>
        <h4 className="mb-2 text-lg font-semibold lg:mb-4 lg:text-2xl">
          {heading}
        </h4>
        <p className="text-[12px] font-normal text-Neutrals-900 lg:text-[16px] lg:leading-6">
          {description}
        </p>

        <div className="my-4 flex items-center justify-start gap-8 lg:mb-6">
          {stats?.map((item, pos) => (
            <div key={pos} className="flex flex-col items-start justify-start">
              <strong className="text-lg font-bold leading-[27px] lg:text-xl lg:leading-[30px]">
                {item.value}
              </strong>
              <span className="text-xs font-normal leading-[18px]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex gap-2 lg:gap-3">
          {ctaOne && (
            <Link key={index} href={ctaOne.link}>
              <button className="cursor-pointer bg-Primary-Blue-950 px-4 py-3 text-sm font-medium text-white lg:text-[16px] lg:leading-6">
                {ctaOne.title}
              </button>
            </Link>
          )}
          {ctaTwo && (
            <Link key={index} href={ctaTwo.link}>
              <button className="cursor-pointer bg-Primary-Blue-50 px-4 py-3 text-sm font-medium text-Primary-Blue-950 lg:text-[16px] lg:leading-6">
                {ctaTwo.title}
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1 lg:flex-[0.85]">
        <Image
          width={622}
          height={400}
          className="h-[240px] object-cover md:h-[400px]"
          sizes="(max-width: 1286px) 50vh, 622px"
          title={imgUrl.title}
          src={imgUrl.src}
          alt={imgUrl.alt}
          layout="fixed"
        />
      </div>
    </div>
  );
}
