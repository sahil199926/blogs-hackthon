import OurClientsPage from "@/app/components/OurClientsPage";
import { ApiResponse } from "@/types";
import { Metadata } from "next";
import { OurClientsPageData } from "@/app/constants";
import { getClientsPageFromDb } from "@/api/server";
// Mock API Response
const MockApiResponse: ApiResponse = {
  data: OurClientsPageData,
  meta: {
    title:
      "Clients Trust Us for Our Industry Insights | Mordor Intelligence™",
    keywords:
      "Clients, Our Clients",
    description:
      "Our clients from across the globe trust us, Mordor Intelligence™ , for data-driven industry insights to take strategic decisions. Explore success stories, partnerships, and testimonials showcasing the impact of our services.",
    ogTitle:
      "Clients Trust Us for Our Industry Insights | Mordor Intelligence™",
    ogDescription:
      "Our clients from across the globe trust us, Mordor Intelligence™ , for data-driven industry insights to take strategic decisions. Explore success stories, partnerships, and testimonials showcasing the impact of our services.",
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
  const { meta } = await getClientsPageFromDb();
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
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/clients`,
    },
  };
}

// Page Component
export default async function OurClients() {
  const {content}=await getClientsPageFromDb()
  const {data} = await fetchData()
  const combinedData={
    ...(data?.aboutUs as object),
    ...content,
  }
  return (
    <>
      <OurClientsPage data={combinedData} />
    </>
  );
}
