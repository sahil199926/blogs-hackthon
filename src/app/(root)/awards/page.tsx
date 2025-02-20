import AwardsPage from "@/app/components/AwardsPage";
import { ApiResponse } from "@/types";
import { Metadata } from "next";
import { AwardsPageData } from "@/app/constants";
import { getAwardsPageFromDb } from "@/api/server";
// Mock API Response
const MockApiResponse: ApiResponse = {
  data: AwardsPageData,
  meta: {
    title:
      "Awards and Recognition - Mordor Intelligence™",
    keywords:
      "Awards and Recognition, Prestigious Awards, Market Research Award, Mordor Intelligence Awards, Awards and Market Recognitions",
    description:
      `Prestigious awards and recognition highlight Mordor Intelligence's commitment to excellence in delivering high-quality market research, data-driven insights and consulting services, earning global trust. We've also been recognized for our workplace culture and are certified as a "Great Place to Work".`,
    ogTitle:
      "Awards and Recognition - Mordor Intelligence™",
    ogDescription:
      `Prestigious awards and recognition highlight Mordor Intelligence's commitment to excellence in delivering high-quality market research, data-driven insights and consulting services, earning global trust. We've also been recognized for our workplace culture and are certified as a "Great Place to Work".`,
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
  const { meta } = await getAwardsPageFromDb();
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/awards`,
    },
  };
}

// Page Component
export default async function Awards() {
  const {content}=await getAwardsPageFromDb()
  const {data} = await fetchData()
  const combinedData={
    ...(data?.aboutUs as object),
    ...content,
  }
  return (
    <>
      <AwardsPage data={combinedData} />
    </>
  );
}
