"use client";
import { IKeyInsightDetails } from "@/types";
import CaseStudiesCard from "./CaseStudiesCard";

function KeyInsightCaseStudies({
  keyInsightDetails,
}: {
  keyInsightDetails: IKeyInsightDetails;
}) {
  return (
    <section className="relative bg-Primary-Mordor-Blue-Bg-100">
      <div className="mx-auto max-w-8xl px-3 py-10 md:px-[68px]">
        <div>
          <h2 className="mb-4 text-2xl font-semibold lg:mb-3 lg:text-[32px] lg:leading-[46px]">
            {keyInsightDetails.heading}
          </h2>
        </div>
        <CaseStudiesCard blog={keyInsightDetails.insightBlog} />
        <div className="absolute -bottom-16 right-0 z-10 md:-bottom-20"></div>
      </div>
    </section>
  );
}

export default KeyInsightCaseStudies;
