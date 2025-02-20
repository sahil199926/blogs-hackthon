
import { Metadata } from "next";
import {getIndustriesOverviewPageFromDb} from "@/api/server";
import IndustriesOverviewPage from "@/app/components/IndustriesOverview";

// Define static metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await getIndustriesOverviewPageFromDb();
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/industries`,
    },
  };
}

// Page Component
export default async function IndustriesOverview() {
  const { content } = await getIndustriesOverviewPageFromDb();
  return (
    <>
      <IndustriesOverviewPage data={content} />
    </>
  );
}
