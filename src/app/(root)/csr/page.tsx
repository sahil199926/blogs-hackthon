import CsrLandingPage from "@/app/components/CsrLandingPage";
import { ApiResponse } from "@/types";
import { Metadata } from "next";
import { csr } from "@/app/constants";
// Mock API Response
const MockApiResponse: ApiResponse = {
  data: csr,
  meta: {
    title:
      "Corporate Social Responsibility (CSR) | Mordor Intelligence",
    keywords:
      "CSR, Corporate Social Responsibility, CSR, societal impact",
    description:
      "Mordor Intelligence's Corporate Social Responsibility (CSR) initiatives are dedicated to enhancing value creation in society, through sustainable practices, community impact, and ethical initiatives. Join us in making a positive difference!",
    ogTitle:
      "Corporate Social Responsibility (CSR) | Mordor Intelligence",
    ogDescription:
      "Mordor Intelligence's Corporate Social Responsibility (CSR) initiatives are dedicated to enhancing value creation in society, through sustainable practices, community impact, and ethical initiatives. Join us in making a positive difference!",

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
      <CsrLandingPage data={data} />
    </>
  );
}