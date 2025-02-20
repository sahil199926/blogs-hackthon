import { ApiResponse } from "@/types";
import { Metadata } from "next";
import PricingComponent from "@/app/components/Pricing";
import { pricingPage } from "@/app/constants";

// Mock API Response
const MockApiResponse: ApiResponse = {
  data: pricingPage,
  meta: {
    title: "Pricing | Mordor Intelligence | Market Research & Consulting",
    description: "Learn more about Mordor Intelligence. Discover our mission, vision, and the team behind our success. Get to know our story and what drives us.",
    keywords: "Mordor Intelligence, Pricing, Our team, Company information",
    ogTitle: "Pricing | Mordor Intelligence | Market Research & Consulting",
    ogDescription: "Learn more about Mordor Intelligence. Discover our mission, vision, and the team behind our success. Get to know our story and what drives us.",
  },
};

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
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/pricing`,
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

const PricingPage = async () => {
  const { data } = await fetchData();
  return <PricingComponent data={data} />;
};

export default PricingPage;
