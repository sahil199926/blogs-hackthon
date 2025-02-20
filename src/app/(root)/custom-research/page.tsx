import CustomResearchPage from "@/app/components/CustomResearchPage";
import { ApiResponse } from "@/types";
import { Metadata } from "next";
import { customResearchPage } from "@/app/constants";
import { getCustomResearchPageFromDb } from "@/api/server";
// Mock API Response
const MockApiResponse: ApiResponse = {
  data: customResearchPage,
  meta: {
    title:
      "Custom Market Research and Consulting Services by Mordor Intelligence™",
    keywords:
      "custom research, custom market research, custom research services, marketing research consulting,  custom market research reports, tailored research, customized research reports, customized market reports, mordor intelligence",
    description:
      "Custom market research reports and consulting services by Mordor Intelligence are designed to meet your, the client’s exact requirements and offer specific market insights that cater to specific needs. Our researchers become your in-house experts for these custom research projects!",
    ogTitle:
      "Custom Market Research and Consulting Services by Mordor Intelligence™",
    ogDescription:
      "Custom market research reports and consulting services by Mordor Intelligence are designed to meet your, the client’s exact requirements and offer specific market insights that cater to specific needs. Our researchers become your in-house experts for these custom research projects!",

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
  const { meta } = await getCustomResearchPageFromDb();
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/custom-research`,
    },
  };
}

// Page Component
export default async function CustomResearch() {
  const {content}=await getCustomResearchPageFromDb()
  const {data} = await fetchData()
  const combinedData={
    ...(data?.aboutUs as object),
    ...content,
  }
  return (
    <>
      {/* Pass data to SynapseLandingPage */}
      <CustomResearchPage data={combinedData} />
    </>
  );
}
