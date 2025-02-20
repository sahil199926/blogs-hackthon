import React from 'react';
import { industryBlogPageDetails, categoryList } from "@/app/constants";
import { ApiResponse } from '@/types';
import { Metadata } from 'next';
import IndustryBlogsPage from '@/app/components/BlogsPage/IndustryBlogsPage';

const MockApiResponse :ApiResponse = {
  data: {...industryBlogPageDetails, categoryList},
  meta: {
    title: "Blogs | Mordor Intelligence | Market Research & Consulting",
    description: "Blogs from Mordor Intelligence.",
    keywords: "Mordor Intelligence, Blogs",
    ogTitle:
      "Blogs | Mordor Intelligence | Market Research & Consulting",
    ogDescription: "Blogs from Mordor Intelligence.",
  },
}

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
  const { meta } = await fetchData();
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/synapse`,
    },
  };
}

// Page Component
const IndustryBlogs =async () => {
  const {data} = await fetchData()
  return (
  <IndustryBlogsPage data={data} />
  )
}

export default IndustryBlogs;