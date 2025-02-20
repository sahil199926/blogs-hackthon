import { Metadata } from "next";
import IndustryDetailsPage from "@/app/components/IndustryDetailsPage";
import {getIndustryDetailsPageFromDb} from "@/api/server";

// Page Component
interface IParams {
  params: {
    industry: string;
  };
}

// Define static metadata for the page
export async function generateMetadata({params}: IParams): Promise<Metadata> {
  
  const { meta } = await getIndustryDetailsPageFromDb(params.industry)
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/industries/${params.industry}`,
    },
  };
}


export default async function Industry({ params }: IParams) {
  const { content } = await getIndustryDetailsPageFromDb(params.industry)
  return (
    <>
      {/* Pass data to IndustryDetailsPage */}
      <IndustryDetailsPage data={content} />
    </>
  );
}
