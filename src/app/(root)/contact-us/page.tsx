import React from 'react'
import ContactUsComponents from '../../components/ContactUs';
import { categoryList, contactUsPage } from "@/app/constants";
import { ApiResponse } from '@/types';
import { Metadata } from 'next';

const MockApiResponse :ApiResponse = {
  data: {...contactUsPage, categoryList},
  meta: {
    title: "Contact Us | Mordor Intelligence | Market Research & Consulting",
    description: "Connect with Mordor Intelligence today. Get expert help and unlock the power of data-driven success. Find our contact information and easily reach out to our team with your inquiries.",
    keywords: "Mordor Intelligence, Contact us, Contact Form, Inquiry form ",
    ogTitle:
      "Contact Us | Mordor Intelligence | Market Research & Consulting",
    ogDescription: "Connect with Mordor Intelligence today. Get expert help and unlock the power of data-driven success. Find our contact information and easily reach out to our team with your inquiries.",
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
      // url: meta.ogUrl || "https://example.com/synapse",
      // images: meta.ogImages || ["https://example.com/synapse-image.jpg"],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/synapse`,
    },
  };
}

const ContactUs =async () => {
  const {data} = await fetchData()
  return (
    <ContactUsComponents
      data={data}
    />
  )
}

export default ContactUs