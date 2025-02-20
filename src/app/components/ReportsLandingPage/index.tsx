import {
   IReportHeroSection,
   ICustomers,
   ReportLandingPageProps,
   ISolutionTabs,
   ITrendingReports,
   ILatestReports,
   IResearchMethodology,
   IOurExpertise,
   IOurImpact,
   ICustomerStories,
    
  } from "@/types";

import HeroSection from "./HeroSection";
import TrendingReports from "./TrendingReoprts";
import OurCustomers from "../common/UISections/OurCustomers";
import SolutionTabs from "../common/UISections/SolutionTabs";
import LatestReports from "./LatestReports";
import ResearchMethodology from "./ResearchMethodology";
import OurExpertiseSection from '../common/UISections/OurExpertiseSection'
import OurImpact from "../common/UISections/OurImpact";
import CommonAwardsSection from "../common/UISections/CommonAwardsSection";
import CustomerStories from "../common/CustomerStories";
import ContactUs from "../common/ContactUs";
  
  
  function ReportLandingPage({ data }: ReportLandingPageProps) {
    const heroSection: IReportHeroSection = data.heroSection as IReportHeroSection;
    const trendingReports: ITrendingReports = data.trendingReports as ITrendingReports;
    const ourCustomers: ICustomers = data.ourCustomers as ICustomers;
    const solutionTabs: ISolutionTabs = data.solutionTabs as ISolutionTabs;
    const ourExpertise: IOurExpertise = data.ourExpertise as IOurExpertise;
    const latestReports: ILatestReports = data.latestReports as ILatestReports;
    const researchMethodology: IResearchMethodology = data.researchMethodology as IResearchMethodology
    const ourImpact: IOurImpact = data.ourImpact as IOurImpact;
    const customerStories: ICustomerStories = data.customerStories as ICustomerStories;

    return (
      <>
        <HeroSection heroSection={heroSection} />
        <TrendingReports trendingReports={trendingReports} />
        <OurCustomers ourCustomers={ourCustomers} />
        <SolutionTabs solutionTabs={solutionTabs}/>
        <OurExpertiseSection title={ourExpertise.title} desc={ourExpertise.desc} steps={ourExpertise.steps} />
        <ResearchMethodology data={researchMethodology} />
        <LatestReports data={latestReports} />
        <OurImpact ourImpact={ourImpact} />
        <CommonAwardsSection  />
        <CustomerStories customerStories={customerStories} />
        <ContactUs />
      </>
    )
  }
  
  export default ReportLandingPage