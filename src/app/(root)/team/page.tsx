import { Metadata } from "next";
import { teamPageStaticData } from "@/app/constants/teamPageData";
import TeamPage from "@/app/components/TeamPage";
import { getTeamPageFromDb } from "@/api/server";


// Define static metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await getTeamPageFromDb();
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/team`,
    },
  };
}

// Page Component
export default async function Team() {
  const { content} = await getTeamPageFromDb();
  
 const data = {...content, ...teamPageStaticData}
  return (
    <>
      <TeamPage data={data} />
    </>
  );
}
