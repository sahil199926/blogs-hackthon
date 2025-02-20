import CustomResearchHeroSection from "./CustomResearchHeroSection";
import ContactUs from "../common/ContactUs";
import OurCustomers from "../common/UISections/OurCustomers";
// import SolutionTabs from "../common/SolutionTabs";
import CustomerStories from "../common/CustomerStories";
import CommonAwardsSection from "../common/UISections/CommonAwardsSection";
import CompanyFacts from "./CompanyFacts";
import FeaturedArticle from "../common/FeaturedArticle";
import CustomSolution from "./CustomSolution";
import CaseStudies from "./CaseStudies";
import SolutionTabs from "../common/UISections/SolutionTabs";
import AdvisoryInsights from "./AdvisoryInsights";

import {
  ICustomers,
  ICompanyFacts,
  ICustomerStories,
  CustomResearchPageProps,
  ICustomResearchHeroSection,
  IFeaturedArticleSection,
  ICustomSolutionSection,
  ICaseStudiesSection,
  ISolutionTabs,
  ICustomResearchSolutionTabData,
  IAdvisoryInsights
} from "@/types";


function CustomResearchPage({ data }: CustomResearchPageProps) {
  const heroSection :ICustomResearchHeroSection = data.heroSection as ICustomResearchHeroSection;
  const ourCustomers: ICustomers = data.ourCustomers as ICustomers;
  const companyFacts : ICompanyFacts = data.companyFacts as ICompanyFacts;
  const featuredArticle : IFeaturedArticleSection = data.featuredArticle as IFeaturedArticleSection;
  const customSolution : ICustomSolutionSection = data.customSolution as ICustomSolutionSection;
  const solutionTabs: ISolutionTabs<ICustomResearchSolutionTabData> = data.solutionTabs as ISolutionTabs<ICustomResearchSolutionTabData>; // Need to use the new solution tab after making it
  const advisoryInsights : IAdvisoryInsights = data.advisoryInsights as IAdvisoryInsights; 
  const caseStudies : ICaseStudiesSection = data.caseStudies as ICaseStudiesSection;
  const customerStories: ICustomerStories = data.customerStories as ICustomerStories;

  return (
    <>
      <CustomResearchHeroSection heroSection={heroSection}/>
      <CompanyFacts companyFacts={companyFacts}/>
      <OurCustomers ourCustomers={ourCustomers} />
      <FeaturedArticle featuredArticle={featuredArticle}/>
      <SolutionTabs solutionTabs={solutionTabs} childComponent={"custom-research"} noPattern={true} mobileHeadBar={true}/>
      <CustomSolution customSolution={customSolution}/>
      <AdvisoryInsights advisoryInsights={advisoryInsights}/>
      <CommonAwardsSection />
      <CaseStudies caseStudies={caseStudies}/>
      <CustomerStories customerStories={customerStories} noPattern={true} bgBlue={true} />
      <ContactUs  />
    </>
  );
}

export default CustomResearchPage;
