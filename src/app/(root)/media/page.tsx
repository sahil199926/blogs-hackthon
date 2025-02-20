import { Metadata } from "next";
import { mediaPageStaticData } from "@/app/constants";
import MediaPage from "@/app/components/MediaPage";
import { getMediaPageFromDb } from "@/api/server";

// Define static metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await getMediaPageFromDb();
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/media`,
    },
  };
}

// Page Component
export default async function Media() {
  const { content } = await getMediaPageFromDb();

  const data = {...content, ...mediaPageStaticData}
  return (
    <>
      {/* Pass data to MediaPage */}
      <MediaPage data={data} />
    </>
  );
}
