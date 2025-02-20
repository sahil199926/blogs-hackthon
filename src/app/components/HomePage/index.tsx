import HomeHeroSection from "./HomeHeroSection";
import Trending from "./Trending";
import OurCustomers from "../common/UISections/OurCustomers";
import WhatsNewSection from "./WhatsNewSection";
import SolutionTabs from "../common/UISections/SolutionTabs";
import GranularCoverage from "./GranularCoverage";
import CustomerStories from "../common/CustomerStories";
import OurImpact from "../common/UISections/OurImpact";
import CommonAwardsSection from "../common/UISections/CommonAwardsSection";
import NewsSection from "./NewsSection";
import ContactUs from "../common/ContactUs";


import {
  HomePageProps,
  IHomeHeroSection,
  ITrending,
  ICustomers,
  IWhatsNewSection,
  ISolutionTabs,
  IGranularCoverage,
  ICustomerStories,
  IOurImpact,
  INewsSection,
} from "@/types";

function HomePage({ data }: HomePageProps) {
  const homeHeroSection: IHomeHeroSection =
    data.homeHeroSection as IHomeHeroSection;
  const trending: ITrending = data.trending as ITrending;
  const ourCustomers: ICustomers = data.ourCustomers as ICustomers;
  const whatsNewSection: IWhatsNewSection =
    data.whatsNewSection as IWhatsNewSection;
  const solutionTabs: ISolutionTabs = data.solutionTabs as ISolutionTabs;
  const granularCoverage: IGranularCoverage =
  data.granularCoverage as IGranularCoverage;
  const customerStories: ICustomerStories =
    data.customerStories as ICustomerStories;
  const ourImpact: IOurImpact = data.ourImpact as IOurImpact;
  const newsSection: INewsSection = data.newsSection as INewsSection;


  return (
    <>
      <HomeHeroSection homeHeroSection={homeHeroSection} />
      <Trending trending={trending} />
      <OurCustomers ourCustomers={ourCustomers} />
      <WhatsNewSection whatsNewSection={whatsNewSection} />
      <SolutionTabs solutionTabs={solutionTabs} />
      <GranularCoverage granularCoverage={granularCoverage} />
      <CustomerStories customerStories={customerStories} />
      <OurImpact ourImpact={ourImpact} />
      <CommonAwardsSection />
      <NewsSection newsSection={newsSection} />
      <ContactUs />
    </>
  );
}

export default HomePage;
