import {
  BlogPageProps,
  IBlogHeroSectionDetails,
  ITrendingBlogDetails,
  IFeaturedBlogDetails,
  IKeyInsightDetails,
  ICategoriesDetails,
  IMoreResourceDetails,
  IBlogListingDetails
} from "@/types";
import BlogHeroSection from "./BlogHeroSection";
import TrendingBlogsSection from "./TrendingBlogsSection";
import FeaturedBlogSection from "./FeaturedBlogSection";
import KeyInsightSection from "./KeyInsightSection";
import CategoriesSection from "../common/Categories";
import MoreResourcesSection from "../common/MoreResources";
import NewsLetter from "../ContactUs/NewsLetterSection";
import BlogListingSection from "./BlogListingSection";


type TCategoryListItem = {
  label: string;
  link: string;
  children: null | TCategoryListItem[];
};

function BlogPage({ data }: BlogPageProps) {
   const heroSectionDetails: IBlogHeroSectionDetails = data.heroSectionDetails as IBlogHeroSectionDetails;
   const trendingBlogDetails:ITrendingBlogDetails = data.trendingBlogDetails as ITrendingBlogDetails;
   const featuredBlogDetails:IFeaturedBlogDetails = data.featuredBlogDetails as IFeaturedBlogDetails;
   const keyInsightDetails:IKeyInsightDetails = data.keyInsightDetails as IKeyInsightDetails;
   const   categoriesDetails:ICategoriesDetails = data.   categoriesDetails as ICategoriesDetails;
   const moreResourceDetails: IMoreResourceDetails = data.moreResourceDetails as IMoreResourceDetails;
   const blogListingDetails: IBlogListingDetails = data.   blogListingDetails as IBlogListingDetails;
   const categoryList: TCategoryListItem[] = data.categoryList as TCategoryListItem[];
  return (
    <div className="overflow-hidden">
    <BlogHeroSection heroSectionDetails={heroSectionDetails}/>
    <TrendingBlogsSection trendingBlogDetails={trendingBlogDetails} />
    <FeaturedBlogSection featuredBlogDetails={featuredBlogDetails}/>
    <CategoriesSection categoriesDetails={categoriesDetails} />
    <BlogListingSection blogListingDetails={blogListingDetails} />
    <KeyInsightSection keyInsightDetails={keyInsightDetails} />
    <MoreResourcesSection moreResourceDetails={moreResourceDetails} />
    <NewsLetter categoryList={categoryList}/>
    </div>
  );
}

export default BlogPage;
