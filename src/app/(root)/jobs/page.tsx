import { Metadata } from "next";
import JobsPage from "@/app/components/JobsPage";
import { getJobsListPageFromDb } from "@/api/server";
import { jobsPage } from "@/app/constants";
interface FilteredData {
  [key: string]: string;
}
// Define static metadata for the page
export const metadata: Metadata = {
  title: jobsPage?.meta.title,
  description: jobsPage?.meta.description,
  keywords: jobsPage?.meta.keywords,
  openGraph: {
    title: jobsPage?.meta.ogTitle,
    description: jobsPage?.meta.ogDescription,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/jobs`,
  },
}

// Page Component
export default async function Jobs({ searchParams }: { searchParams: FilteredData }) {
  const fetchedData = await getJobsListPageFromDb(searchParams);

  const data = { ...fetchedData, ...jobsPage, FilteredData: searchParams };
  return (
    <>
      {/* Pass data to JobsPage */}
      <JobsPage data={data} />
    </>
  );
}
