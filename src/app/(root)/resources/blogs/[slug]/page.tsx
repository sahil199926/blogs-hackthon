
// di
import React from "react";
import { categoryList } from "@/app/constants";
import {  BlogPageProps } from "@/types";
import { Metadata } from "next";
import BlogDetailsPage from "@/app/components/BlogsPage/BlogDetailsPage";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../../../firebaseconfig"; // Ensure Firebase is configured properly
import { notFound } from "next/navigation";

interface IParams {
  params: {
    slug: string;
  };
}

// Fetch data from Firebase based on the slug and industry
async function fetchData({
  slug,
}: {
  slug: string;
}): Promise<BlogPageProps | null> {
  try {
    const q = query(collection(db, "blogs"), where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const blogDoc = querySnapshot.docs[0]; // Get the first matching document
      const blogData = blogDoc.data();

      return {
        data: { ...blogData, categoryList }, // Pass categoryList if needed
        meta: {
          title: blogData.title || "Blog Post",
          description: blogData.description || "Blog details.",
          keywords: blogData.keywords || "blog, market research",
          ogTitle: blogData.title || "Blog Post",
          ogDescription: blogData.description || "Blog details.",
        },
      };
    } else {
      console.warn("No blog found for slug:", slug);
      return null;
    }
  } catch (error) {
    console.error("Error fetching blog data:", error);
    throw error;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const blogData = await fetchData(params);

  if (!blogData) notFound();

  const { meta } = blogData;
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blogs/${params.slug}`,
    },
  };
}

// Page Component
const BlogDetails = async ({ params }: IParams) => {
  const blogData = await fetchData(params);

  if (!blogData) notFound();

  return <BlogDetailsPage data={blogData.data} />;
};

export default BlogDetails;
