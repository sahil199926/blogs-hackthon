import CareersLandingPage from "@/app/components/CareersLandingPage";
import { ApiResponse } from "@/types";
import { Metadata } from "next";
import { careersLandingPage } from "@/app/constants";
// Mock API Response
const MockApiResponse: ApiResponse = {
  data: careersLandingPage,
  meta: {
    title:
      "Careers at Mordor Intelligence™ - Join Us | Market Research Job Openings & Growth Opportunities",
    keywords:
      "Careers, Join us, Job openings, Join our team, Research analyst jobs, Market research jobs, Mordor Intelligence",
    description:
      "Explore careers at Mordor Intelligence - Check out our latest job openings and join our team of experts in market research and intelligence. Join us and grow your career today!",
    ogTitle:
      "Careers at Mordor Intelligence™ - Join Us | Market Research Job Openings & Growth Opportunities",
    ogDescription:
      "Explore careers at Mordor Intelligence - Check out our latest job openings and join our team of experts in market research and intelligence. Join us and grow your career today!",

    // ogUrl: "https://example.com/synapse",
    // ogImages: ["https://example.com/synapse-image.jpg"],
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
      // url: meta.ogUrl || "https://example.com/synapse",
      // images: meta.ogImages || ["https://example.com/synapse-image.jpg"],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/careers`,
    },
  };
}

// Page Component
export default async function Synapse() {
  const { data } = await fetchData();
  return (
    <>
      {/* Pass data to SynapseLandingPage */}
      <CareersLandingPage data={data} />
    </>
  );
}