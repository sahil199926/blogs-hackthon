import { IIndustryBlogsHeroDetails,IFeaturedBlogDetails,IIndustryBlogDetails,IMoreResourceDetails,ISimilarCategoriesDetails, BlogPageProps } from "@/types";
import NewsLetter from "../../ContactUs/NewsLetterSection";
import Pagination from "../../common/Pagination";
import IndustryBlogsHeroSection from "../IndustryBlogsHeroSection";
import FeaturedBlogSection from "../FeaturedBlogSection";
import IndustryBlogListingSection from "../IndustryBlogListingSection";
import MoreResourcesSection from "../../common/MoreResources";
import SimilarCategoriesSection from "../../common/SimilarCategoriesSection";

type TCategoryListItem = {
  label: string;
  link: string;
  children: null | TCategoryListItem[];
};

function IndustryBlogsPage({ data }: BlogPageProps) {
  const heroSectionDetails: IIndustryBlogsHeroDetails =
    data.heroSectionDetails as IIndustryBlogsHeroDetails;
      const featuredBlogDetails:IFeaturedBlogDetails = data.featuredBlogDetails as IFeaturedBlogDetails;
      const blogListingDetails: IIndustryBlogDetails =
         data.blogListingDetails as IIndustryBlogDetails;
         const moreResourceDetails: IMoreResourceDetails = data.moreResourceDetails as IMoreResourceDetails;
         const similarCategoriesDetails: ISimilarCategoriesDetails = data.similarCategoriesDetails as ISimilarCategoriesDetails;
  const categoryList: TCategoryListItem[] =
    data.categoryList as TCategoryListItem[];
  return (
    <>
      <IndustryBlogsHeroSection heroSectionDetails={heroSectionDetails} />
      <FeaturedBlogSection featuredBlogDetails={featuredBlogDetails} />
      <IndustryBlogListingSection data={blogListingDetails} />
       <Pagination />
       <MoreResourcesSection moreResourceDetails={moreResourceDetails} />
       <SimilarCategoriesSection similarCategoriesDetails={similarCategoriesDetails} />
      <NewsLetter categoryList={categoryList} />
    </>
  );
}

export default IndustryBlogsPage;
