import React from 'react';
import { categoryList, caseStudiesDetailsPage } from "@/app/constants";
import { ApiResponse } from '@/types';
import { Metadata } from 'next';
import DetailsPage from '@/app/components/CaseStudiesPage/DetailsPage';

interface IParams{
  params:{
    industry: string;
    slug: string;
  }
}

const MockApiResponse :ApiResponse = {
  data: {...caseStudiesDetailsPage, categoryList},
  meta: {
    title: "Case Studies | Mordor Intelligence | Market Research & Consulting",
    description: "Case Studies from Mordor Intelligence.",
    keywords: "Mordor Intelligence, Case Studies",
    ogTitle:
      "Case Studies | Mordor Intelligence | Market Research & Consulting",
    ogDescription: "Case Studies from Mordor Intelligence.",
  },
}

// Fetch data and meta info from the API
async function fetchData({industry, slug}: {industry: string, slug: string}): Promise<ApiResponse> {
  // eslint-disable-next-line
  console.log(industry, slug)
  try {
    return MockApiResponse;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Define static metadata for the page
export async function generateMetadata({params}: IParams): Promise<Metadata> {
  const { meta } = await fetchData(params);
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${params.industry}/${params.slug}`,
    },
  };
}

// Page Component
const CaseStudiesDetails = async ({params}: IParams) => {
  const {data} = await fetchData(params)
  return (
      <DetailsPage data={data} />  )
}

export default CaseStudiesDetails;