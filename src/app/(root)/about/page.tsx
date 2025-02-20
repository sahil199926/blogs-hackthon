import React from "react";
import { ApiResponse } from '@/types';
import { Metadata } from 'next';
import { aboutUsPage,categoryList } from "@/app/constants";
import AboutUs from "@/app/components/AboutUs";
import { getAboutPageFromDb } from "@/api/server";



const MockApiResponse :ApiResponse = {
  data: {...aboutUsPage,categoryList},
  meta: {
    title: "About Us | Mordor Intelligence | Market Research & Consulting",
    description: "Learn more about Mordor Intelligence. Discover our mission, vision, and the team behind our success. Get to know our story and what drives us.",
    keywords: "Mordor Intelligence, About us, Our team, Company information",
    ogTitle: "About Us | Mordor Intelligence | Market Research & Consulting",
    ogDescription: "Learn more about Mordor Intelligence. Discover our mission, vision, and the team behind our success. Get to know our story and what drives us.",
  },
}

// Define static metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const { meta } = await getAboutPageFromDb();
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      // url: meta.ogUrl || "https://example.com/synapse",
      // images: meta.ogImages || ["https://example.com/synapse-image.jpg"],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/synapse`,
    },
  };
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

const About=async()=> {
  const {content}=await getAboutPageFromDb()
  const {data} = await fetchData()
  const combinedData={
     aboutUs: {
      ...(data?.aboutUs as object),
      ...content,
    },
  }
  return (
    <AboutUs
      data={combinedData}
    />
  );
}

export default About;
