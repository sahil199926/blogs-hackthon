import { BlogPageProps, IIndustryBlogDetails } from "@/types";
import HeaderSection from "../HeaderSection";
import IndustryBlogs from "../IndustryBlogs";
import NewsLetter from "../../ContactUs/NewsLetterSection";
import InfoBox from "../../common/InfoBox";
import Pagination from "../../common/Pagination";

type TCategoryListItem = {
  label: string;
  link: string;
  children: null | TCategoryListItem[];
};

function AllBlogsPage({ data }: BlogPageProps) {
  const industryBlogDetails: IIndustryBlogDetails[] =
    data.industryBlogDetails as IIndustryBlogDetails[];
  const categoryList: TCategoryListItem[] =
    data.categoryList as TCategoryListItem[];
  return (
    <>
      <HeaderSection />
      {industryBlogDetails.map((data) => {
        return (
          <>
            <IndustryBlogs data={data} />
            {data?.info && <InfoBox info={data.info} />}
          </>
        );
      })}
      <Pagination />
      <NewsLetter categoryList={categoryList} />
    </>
  );
}

export default AllBlogsPage;
