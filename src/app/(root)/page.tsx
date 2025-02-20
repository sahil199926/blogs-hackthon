import Homepage from "../components/HomePage";
import { Metadata } from "next";
import { homePageStaticData } from "@/app/constants";
import { getHomePageFromDb } from "@/api/server";


// Define static metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await getHomePageFromDb();
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      // url: meta.ogUrl || "https://example.com/synapse",
      // images: meta.ogImages || ["https://example.com/synapse-image.jpg"],
    },
  };
}

export default async function Home() {
  const { content } = await getHomePageFromDb();
  const data = {...content, ...homePageStaticData}
  return (
    <>
      <Homepage data={data} />
    </>
  );
}
