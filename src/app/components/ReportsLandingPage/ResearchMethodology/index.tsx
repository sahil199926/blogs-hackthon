"use client";
import { useState } from "react";
import { IResearchMethodology, IResearchMethodologyCardsTabData, IResearchMethodologyListTabData } from "@/types";
import CardsTab from "./CardsTab";
import ListTab from "./ListTab";
import DotBg from "../../common/DotBg";

function ResearchMethodology({ data }: { data: IResearchMethodology }) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <section className="relative mx-auto flex max-w-8xl flex-col gap-6 px-4 sm:px-10 lg:px-[88px] py-12">
      <h2 className="text-Display-Semibold-24 md:text-Display-Semibold-32 text-Neutrals-950 text-center z-10">{data.heading}</h2>
      {/* TAB OPTIONS */}
      <div className="hide-scrollbar scrollbar-hide flex w-full items-end justify-evenly overflow-x-scroll z-10">
        {data.tabOptions?.map((item, index) => (
          <h3
            onClick={() => setSelectedTab(index)}
            className={`${index == selectedTab ? "active-tab border-Accent-Orange-950 border-b-[3px] transition" : "border-#ABB6C9 border-b-[3px]"} flex-1 cursor-pointer border-b-[3px] px-8 py-4 text-center text-Body-Medium-14 md:text-Body-Medium-20`}
            key={item}>
            {item}
          </h3>
        ))}
      </div>
      {/* TAB CONTENT */}
      {data.tabs.map((tab, index) => 
        selectedTab === index && (
          <div key={tab.tabName}>
            {tab.type === "cards" && <CardsTab data={tab.data as IResearchMethodologyCardsTabData} />}
            {tab.type === "list" && <ListTab data={tab.data as IResearchMethodologyListTabData} />}
          </div>
        )
      )}
      {/* Pattern background */}
      <div className="hidden sm:absolute right-0 top-0 h-[340px] max-w-[803px]">
          <DotBg
            cropWidthStart={0}
            cropWidthEnd={422}
            cropHeightStart={304}
            cropHeightEnd={489}
          />
        </div>
    </section>
  );
}

export default ResearchMethodology;
