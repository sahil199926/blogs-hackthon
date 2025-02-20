import { ApiResponse } from "@/types";
import { Metadata } from "next";
import { privacyPolicy } from "@/app/constants";
import PrivacyPolicyPage from "@/app/components/PrivacyPolicyPage";
// Mock API Response
const MockApiResponse: ApiResponse = {
  data: privacyPolicy,
  meta: {
    title:
      "Privacy Policy for Mordor Intelligence™ Visitors and Customers",
    keywords:
      "Mordor Intelligence Privacy Policy, Privacy Policy",
    description:
      "Find out how Mordor Intelligence collects, manages, and uses the confidential information of visitors and customers in our privacy policy. Visit this page for detailed insights and updates on policy amendments.",
    ogTitle:
      "Privacy Policy for Mordor Intelligence™ Visitors and Customers",
    ogDescription:
      "Find out how Mordor Intelligence collects, manages, and uses the confidential information of visitors and customers in our privacy policy. Visit this page for detailed insights and updates on policy amendments.",
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
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/privacy-policy`,
    },
  };
}

// Page Component
export default async function PrivacyPolicy() {
  const { data } = await fetchData();
  return (
    <>
      {/* Pass data to PrivacyPolicyPage */}
      <PrivacyPolicyPage data={data} />
    </>
  );
}
