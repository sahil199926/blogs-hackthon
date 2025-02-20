import { ApiResponse } from "@/types";
import React from "react";
import { resourceAndMobile, categoryList } from "@/app/constants";
import ResourcesMobileComponent from "@/app/components/Resources";
import { Metadata } from "next";
import { getResourcePageFromDb } from "@/api/server";

const MockApiResponse: ApiResponse = {
  data: {
    ...resourceAndMobile,
    categoryList,
  },
  meta: {
    title:
      "Resource Center | Market Research Case Studies, Events, Blogs & Resources by Mordor Intelligence",
    description:
      "Resource page for professionals seeking market data, research insights, and industry reports. Get expert-driven market intelligence at Mordor Intelligence",
    keywords:
      "resource center, resource page, resource hub, market research, market research resources, mordor intelligence, competitive analysis, business growth, market intelligence, industry analysis, market data, industry trends, industry insights, market research reports, market research case studies, market research events",
    ogTitle:
      "Resource Center | Market Research Case Studies, Events, Blogs & Resources by Mordor Intelligence",
    ogDescription:
      "Resource page for professionals seeking market data, research insights, and industry reports. Get expert-driven market intelligence at Mordor Intelligence",
  },
};

// Define static metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await getResourcePageFromDb();
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      // url: meta.ogUrl || "https://example.com/synapse",
      // images: meta.ogImages || ["https://example.com/synapse-image.jpg"],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/synapse`,
    },
  };
}

// Fetch data and meta info from the API
async function fetchData(): Promise<ApiResponse> {
  try {
    return MockApiResponse;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const ResourcesMobile = async () => {
  const { content } = await getResourcePageFromDb();
  const { data } = await fetchData();
  const combinedData = {
    ...data,
    ...content,
  };
  return <ResourcesMobileComponent data={combinedData} />;
};

export default ResourcesMobile;
