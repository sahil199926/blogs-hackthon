"use client";
import { ICaseStudiesSection } from "@/types";
import Link from "next/link";
import CaseStudy from "../CustomResearchPage/CaseStudies/CaseStudy";
import DotBg from "../common/DotBg";

const CaseStudiesComponent = ({
  caseStudies,
}: {
  caseStudies: ICaseStudiesSection;
}) => {
  return (
    <div className="relative">
      <section className="relative z-20 mx-auto flex max-w-[1440px] flex-col gap-12 px-4 py-10 sm:px-10 md:px-[88px] md:py-20">
        <h3 className="w-100 text-center text-2xl font-semibold text-Neutrals-950 md:text-[32px]">
          {caseStudies.heading}
        </h3>
        <div className="flex flex-wrap gap-4">
          {caseStudies.studies?.map((study, index: number) => (
            <div key={index} className="my-4 w-[408px]">
              <CaseStudy caseStudy={study} />
            </div>
          ))}
          {caseStudies.studies?.map((study, index: number) => (
            <div key={index} className="my-4 w-[408px]">
              <CaseStudy caseStudy={study} />
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center">
          <Link
            className="hero-section-btn min-w-max rounded-[1.5px] border-[1.5px] border-Primary-Blue-950 bg-Primary-Mordor-Blue-Bg-50 px-3 py-4 text-Link-medium-14 font-medium text-Primary-Blue-950 hover:bg-Primary-Blue-950 hover:text-Primary-Blue-50 md:text-Link-medium-16 lg:text-[16px] lg:leading-6"
            href={caseStudies.cta.link}
            target={caseStudies.cta.title ? "_blank" : ""}>
            {caseStudies.cta.title}
          </Link>
        </div>
      </section>
      <div className="absolute -bottom-[80px] md:-top-[100px] right-0 z-10">
        <DotBg
          cropWidthStart={0}
          cropWidthEnd={520}
          cropHeightStart={0}
          cropHeightEnd={500}
        />
      </div>
    </div>
  );
};

export default CaseStudiesComponent;
