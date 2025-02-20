import {
  IFeaturedBlogDetails,
  ICaseStudiesHeroSection,
  ICategoriesDetails,
  IAllCaseStudiesSection,
  CaseStudiesPageProps,
} from "@/types";
import NewsLetter from "../../ContactUs/NewsLetterSection";
import Pagination from "../../common/Pagination";

import CaseStudiesHeroSection from "../CaseStudiesHeroSection";
import FeaturedCaseStudies from "../FeaturedCaseStudies";
import CategoriesSection from "../../common/Categories";
import FilterSection from "./FilterSection";

type TCategoryListItem = {
  label: string;
  link: string;
  children: null | TCategoryListItem[];
};

function IndustryBlogsPage({ data }: CaseStudiesPageProps) {
    const caseStudiesHeroSection: ICaseStudiesHeroSection =
    data.caseStudiesHeroSection as ICaseStudiesHeroSection;
const featuredBlogDetails: IFeaturedBlogDetails =
    data.featuredBlogDetails as IFeaturedBlogDetails;
    const caseStudies: IAllCaseStudiesSection =
        data.caseStudies as IAllCaseStudiesSection;
    const categoriesDetails: ICategoriesDetails =
        data.categoriesDetails as ICategoriesDetails;
  const categoryList: TCategoryListItem[] =
    data.categoryList as TCategoryListItem[];
  return (
    <>
      <CaseStudiesHeroSection caseStudiesHeroSection={caseStudiesHeroSection} />
      <FeaturedCaseStudies featuredBlogDetails={featuredBlogDetails} />
      <FilterSection caseStudies={caseStudies}  /> 
      <Pagination />
      <CategoriesSection categoriesDetails={categoriesDetails} />
      <NewsLetter categoryList={categoryList} />
    </>
  );
}

export default IndustryBlogsPage;
