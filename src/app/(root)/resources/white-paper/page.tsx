import { categoryList, caseStudiesPage } from "@/app/constants";
import CaseStudiesPage from "@/app/components/CaseStudiesPage";
import { ApiResponse } from "@/types";
import { Metadata } from "next";
import React from "react";
const MockApiResponse: ApiResponse = {
  data: { ...caseStudiesPage, categoryList },
  meta: {
    title: "White Paper by Mordor Intelligence™",
    keywords:
      "white paper, custom market research, custom research services, marketing research consulting,  custom market research reports, tailored research, customized research reports, customized market reports, mordor intelligence",
    description:
      "White paper research reports and consulting services by Mordor Intelligence are designed to meet your, the client’s exact requirements and offer specific market insights that cater to specific needs. Our researchers become your in-house experts for these custom research projects!",
    ogTitle:
      "White paper Research and Consulting Services by Mordor Intelligence™",
    ogDescription:
      "White paper research reports and consulting services by Mordor Intelligence are designed to meet your, the client’s exact requirements and offer specific market insights that cater to specific needs. Our researchers become your in-house experts for these custom research projects!",
  },
};

// Fetch data and meta info from the API
async function fetchData(): Promise<ApiResponse> {
  try {
    return MockApiResponse;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Define static metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await fetchData();
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/case-studies`,
    },
  };
}

const CaseStudies = async () => {
  const { data } = await fetchData();
  return <CaseStudiesPage data={data} />;
};

export default CaseStudies;
