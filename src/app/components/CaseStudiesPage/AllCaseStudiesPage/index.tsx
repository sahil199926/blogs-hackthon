import React from "react";
import { AllCaseStudiesPageProps, IAllCaseStudiesSection,   } from "@/types";
import NewsLetter from "../../ContactUs/NewsLetterSection";
import FiltersComponent from "./FiltersComponent";
import Pagination from "../../common/Pagination";

function AllCaseStudiesPage({ data }: AllCaseStudiesPageProps) {
  const caseStudies: IAllCaseStudiesSection =
    data.caseStudies as IAllCaseStudiesSection;
  const categoryList: TCategoryListItem[] =
    data.categoryList as TCategoryListItem[];
  return (
    <>
      <FiltersComponent caseStudies={caseStudies}  /> 
      <Pagination />
      <NewsLetter categoryList={categoryList} />
    </>
  );
}

export default AllCaseStudiesPage;

type TCategoryListItem = {
  label: string;
  link: string;
  children: null | TCategoryListItem[];
};
