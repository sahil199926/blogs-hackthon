import {
  IOurImpact,
  IndustriesOverviewPageProps,
  ICustomerStories,
  ICompanyStats,
  IIndustriesOverviewHeroSection,
  ITrendingindustries,
  IOurClients,
  IPopularIndustriesSection,
} from "@/types";

import ContactUs from "../common/ContactUs";
import CustomerStories from "../common/CustomerStories";
import OurImpact from "../common/UISections/OurImpact";
import CompanyStats from "../OurClientsPage/CompanyStats";
import IndustriesOverviewHeroSection from "./IndustriesOverviewHeroSection";
import TrendingIndustries from "./TrendingIndustries";
import OurClientSection from "../AboutUs/OurClientSection";
import PopularIndustries from "./PopularIndustries";

// import DotBg from "../common/DotBg";

function IndustriesOverviewPage({ data }: IndustriesOverviewPageProps) {
  const heroSection: IIndustriesOverviewHeroSection =
    data.heroSection as IIndustriesOverviewHeroSection;
  const trendingIndustries: ITrendingindustries =
    data.trendingIndustries as ITrendingindustries;
  const companyStats: ICompanyStats[] = data.companyStats as ICompanyStats[];
  const popularIndustriesData: IPopularIndustriesSection =
    data.popularIndustries as IPopularIndustriesSection;
  const customerStories: ICustomerStories =
    data.customerStories as ICustomerStories;
  const ourClientSection: IOurClients = data.ourClients as IOurClients;
  const ourImpact: IOurImpact = data.ourImpact as IOurImpact;

  return (
    <>
      <IndustriesOverviewHeroSection heroSection={heroSection} />
      <TrendingIndustries trendingIndustries={trendingIndustries} />
      <CompanyStats
        companyStats={companyStats}
        bgColorClass="bg-Primary-Mordor-Green-Bg-50"
      />
      <PopularIndustries popularIndustriesData={popularIndustriesData} />
      <OurClientSection
        title={ourClientSection.title}
        heading={ourClientSection.heading}
        CTA={ourClientSection.CTA}
        clients={ourClientSection.clients}
        mobileImages={ourClientSection.mobileImages}
      />
      <CustomerStories customerStories={customerStories} />
      <OurImpact ourImpact={ourImpact} />
      <ContactUs bgColorClass="bg-Primary-Mordor-Blue-Bg-50" />
    </>
  );
}

export default IndustriesOverviewPage;
