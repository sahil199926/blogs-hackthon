// import { ApiResponse } from "@/types";
import { Metadata } from "next";
import { partnersPageData } from "@/app/constants";
import PartnerPage from "@/app/components/Partners";
import { getPartnersPageFromDb } from "@/api/server";

// Define static metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await getPartnersPageFromDb();
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
  const { content } = await getPartnersPageFromDb();
  const combinedData = {
    ...partnersPageData,
    ...content,
  };

  return (
    <>
      {/* Pass data to FaqsPage*/}
      <PartnerPage data={combinedData} />
    </>
  );
}
