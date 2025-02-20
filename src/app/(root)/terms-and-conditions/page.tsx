import { ApiResponse } from "@/types";
import { Metadata } from "next";
import { termsAndConditions } from "@/app/constants";
import TermsAndConditonsPage from "@/app/components/TermsAndConditionsPage";
// Mock API Response
const MockApiResponse: ApiResponse = {
  data: termsAndConditions,
  meta: {
    title:
      "Terms and Conditions (T&C) – Mordor Intelligence™",
    keywords:
      "Mordor Intelligence Terms and Conditions, T&C, Terms and Conditions, Terms of Use",
    description:
      "Read Mordor Intelligence's Terms and Conditions for use of website and content, T&C of Purchase covering available payment options, delivery terms and report format for both online and offline methods, and policies on returns, refunds, and copyrights.",
    ogTitle:
      "Terms and Conditions (T&C) – Mordor Intelligence™",
    ogDescription:
      "Read Mordor Intelligence's Terms and Conditions for use of website and content, T&C of Purchase covering available payment options, delivery terms and report format for both online and offline methods, and policies on returns, refunds, and copyrights."
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
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/terms-and-conditions`,
    },
  };
}

// Page Component
export default async function TermsAndConditins() {
  const { data } = await fetchData();
  return (
    <>
      {/* Pass data to TermsAndConditinsPage */}
      <TermsAndConditonsPage data={data} />
    </>
  );
}
