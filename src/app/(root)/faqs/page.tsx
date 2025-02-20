import { ApiResponse } from "@/types";
import { Metadata } from "next";
import { faqsPageData } from "@/app/constants";
import FaqsPage from "@/app/components/Faqs";

// Mock API Response
const MockApiResponse: ApiResponse = {
  data: faqsPageData,
  meta: { // This is use for formatting only, will change when data available
    title:
      "FAQs | Offerings, Features & Policies Answered | Mordor Intelligence",
    keywords:
      "Mordor Intelligence FAQs, Frequently Asked Questions on Market Research, Market Intelligence FAQ, Market Research FAQ",
    description:
      "Find answers to common questions about our market research services, including pricing, methodology, data collection, and more about Mordor Intelligence. Visit our FAQs page today.",
    ogTitle:
      "FAQs | Offerings, Features & Policies Answered | Mordor Intelligence",
    ogDescription:
      "Find answers to common questions about our market research services, including pricing, methodology, data collection, and more about Mordor Intelligence. Visit our FAQs page today.",
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
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/faqs`,
    },
  };
}

// Page Component
export default async function Faqs() {
  const { data } = await fetchData();
  return (
    <>
      {/* Pass data to FaqsPage*/}
      <FaqsPage data={data} />
    </>
  );
}
