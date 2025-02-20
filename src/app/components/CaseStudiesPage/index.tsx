import React from "react";
import CaseStudiesHeroSection from "./CaseStudiesHeroSection";
import {
  CaseStudiesPageProps,
  ICaseStudiesHeroSection,
  //   IFeaturedArticleSection,
  ICaseStudiesSection,
  ICategoriesDetails,
  IFeaturedBlogDetails,
  IKeyInsightDetails,
  IMoreResourceDetails,
  ITrendingBlogDetails,
} from "@/types";
import NewsLetter from "../ContactUs/NewsLetterSection";
import CaseStudiesComponent from "./CaseStudiesComponent";
import CategoriesSection from "../common/Categories";
import MoreResourcesSection from "../common/MoreResources";
import TrendingCaseStudies from "./TrendingCaseStudies";
import FeaturedCaseStudies from "./FeaturedCaseStudies";
import KeyInsightCaseStudies from "./KeyInsightCaseStudies";

// function CaseStudiesPage () {
function CaseStudiesPage({ data }: CaseStudiesPageProps) {
  const caseStudiesHeroSection: ICaseStudiesHeroSection =
    data.caseStudiesHeroSection as ICaseStudiesHeroSection;
  const trendingBlogDetails: ITrendingBlogDetails =
    data.trendingBlogDetails as ITrendingBlogDetails;
  const featuredBlogDetails: IFeaturedBlogDetails =
    data.featuredBlogDetails as IFeaturedBlogDetails;
  const keyInsightDetails: IKeyInsightDetails =
    data.keyInsightDetails as IKeyInsightDetails;
  const categoriesDetails: ICategoriesDetails =
    data.categoriesDetails as ICategoriesDetails;
  const moreResourceDetails: IMoreResourceDetails =
    data.moreResourceDetails as IMoreResourceDetails;
  const caseStudies: ICaseStudiesSection =
    data.caseStudies as ICaseStudiesSection;
  const categoryList: TCategoryListItem[] =
    data.categoryList as TCategoryListItem[];
  return (
    <>
      <CaseStudiesHeroSection caseStudiesHeroSection={caseStudiesHeroSection} />
      <TrendingCaseStudies trendingBlogDetails={trendingBlogDetails} />
      <FeaturedCaseStudies featuredBlogDetails={featuredBlogDetails} />
      <CategoriesSection categoriesDetails={categoriesDetails} />
      <CaseStudiesComponent caseStudies={caseStudies} />
      <KeyInsightCaseStudies keyInsightDetails={keyInsightDetails} />
      <MoreResourcesSection moreResourceDetails={moreResourceDetails} />
      <NewsLetter categoryList={categoryList} />
    </>
  );
}

export default CaseStudiesPage;

type TCategoryListItem = {
  label: string;
  link: string;
  children: null | TCategoryListItem[];
};
