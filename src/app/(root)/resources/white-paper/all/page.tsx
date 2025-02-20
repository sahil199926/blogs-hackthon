import { categoryList, allCaseStudiesPage } from "@/app/constants";
import { ApiResponse } from "@/types";
import { Metadata } from "next";
import React from "react";
import AllCaseStudiesPage from "@/app/components/CaseStudiesPage/AllCaseStudiesPage";
const MockApiResponse: ApiResponse = {
  data: { ...allCaseStudiesPage, categoryList },
  meta: {
    title: "White paper and Consulting Services by Mordor Intelligence™",
    keywords:
      "white paper, white paper research, white paper services, marketing research consulting,  white paper research reports, tailored research, customized research reports, customized market reports, mordor intelligence",
    description:
      "white paper research reports and consulting services by Mordor Intelligence are designed to meet your, the client’s exact requirements and offer specific market insights that cater to specific needs. Our researchers become your in-house experts for these white paper projects!",
    ogTitle:
      "white paper Research and Consulting Services by Mordor Intelligence™",
    ogDescription:
      "white paper research reports and consulting services by Mordor Intelligence are designed to meet your, the client’s exact requirements and offer specific market insights that cater to specific needs. Our researchers become your in-house experts for these white paper projects!",
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
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/case-studies/all`,
    },
  };
}

const CaseStudies = async () => {
  const { data } = await fetchData();
  return <AllCaseStudiesPage data={data} />;
};

export default CaseStudies;
