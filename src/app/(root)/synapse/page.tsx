import SynapseLandingPage from "@/app/components/SynapseLandingPage";
import { ApiResponse } from "@/types";
import { Metadata } from "next";
import { synapseLandingPage } from "@/app/constants";
// Mock API Response
const MockApiResponse: ApiResponse = {
  data: synapseLandingPage,
  meta: {
    title:
      "Synapse by Mordor Intelligence | Market Research Intelligence Command Centre",
    keywords:
      "Synapse by Mordor Intelligence, Data intelligence, Market intelligence, Market intelligence reports, Market intelligence analysis, Market Intelligence with Synapse, Market intelligence research reports, Market research and competitive analysis, Real-Time Market Data with Synapse",
    description:
      "Discover Synapse, the all-in-one market intelligence platform by Mordor Intelligence. Access 20,000+ reports, AI-powered insights, customizable subscriptions, and visual dashboards at your finger tips.",
    ogTitle:
      "Synapse by Mordor Intelligence | Market Research Intelligence Command Centre",
    ogDescription:
      "Discover Synapse, the all-in-one market intelligence platform by Mordor Intelligence. Access 20,000+ reports, AI-powered insights, customizable subscriptions, and visual dashboards at your finger tips.",

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
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/synapse`,
    },
  };
}

// Page Component
export default async function Synapse() {
  const { data } = await fetchData();
  return (
    <>
      {/* Pass data to SynapseLandingPage */}
      <SynapseLandingPage data={data} />
    </>
  );
}
