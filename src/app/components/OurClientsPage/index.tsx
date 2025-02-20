import ContactUs from "../common/ContactUs";
import GlobalCoverage from "./GlobalCoverage";
import RelatedIndustries from "../AwardsPage/RelatedIndustries";
import ClientsListing from "./ClientsListing";
import OurClientsHeroSection from "./OurClientsHeroSection";
import CompanyStats from "./CompanyStats";
import DotBg from "../common/DotBg";
import {
  OurClientsPageProps,
  IGlobalCoverage,
  IRelatedIndustries,
  ICustomerStories,
  IClientsListing,
  IOurClientsHeroSection,
  ICompanyStats,
} from "@/types";
import CustomerStories from "../common/CustomerStories";
import CommonAwardsSection from "@/app/components/common/UISections/CommonAwardsSection";

function OurClientsPage({ data }: OurClientsPageProps) {
  const heroSection: IOurClientsHeroSection =
    data.heroSection as IOurClientsHeroSection;
  const companyStats: ICompanyStats[] = data.companyStats as ICompanyStats[];
  const clientsListing: IClientsListing =
    data.clientsListing as IClientsListing;
  const globalCoverage: IGlobalCoverage =
    data.globalCoverage as IGlobalCoverage;
  const relatedIndustries: IRelatedIndustries =
    data.relatedIndustries as IRelatedIndustries;
  const customerStories: ICustomerStories =
    data.customerStories as ICustomerStories;

  return (
    <>
      <OurClientsHeroSection heroSection={heroSection} />
      <CompanyStats companyStats={companyStats} />
      <ClientsListing clientsListing={clientsListing} />
      <GlobalCoverage globalCoverage={globalCoverage} />
      <RelatedIndustries relatedIndustries={relatedIndustries} />
      <CommonAwardsSection />
      <CustomerStories
        customerStories={customerStories}
        noPattern={true}
        bgBlue={true}
      />
      <div className="relative hidden md:block">
        <div className="absolute -bottom-[430px] right-0 z-10 md:-bottom-[400px]">
          <DotBg
            cropWidthStart={100}
            cropWidthEnd={250}
            cropHeightStart={0}
            cropHeightEnd={550}
          />
        </div>
      </div>
      <div className="relative md:hidden">
        <div className="absolute -bottom-[430px] right-0 z-10">
          <DotBg
            cropWidthStart={200}
            cropWidthEnd={250}
            cropHeightStart={0}
            cropHeightEnd={550}
          />
        </div>
      </div>
      <ContactUs bgColorClass="bg-Primary-Mordor-Blue-Bg-50" />
    </>
  );
}

export default OurClientsPage;
