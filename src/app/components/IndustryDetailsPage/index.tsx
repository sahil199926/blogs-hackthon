import {
  HomePageProps,
  ICustomers,
  ICustomerStories,
  IFeaturedArticleSection,
  IIndustryDetailsHero,
  IInfo,
  IMedia,
  IOurExpertise,
  IRelatedIndustries,
  ISolutionTabs,
  ITeamSection,
  IWhatsNewSection,
  IWhyUs,
} from "@/types";
import Media from "../common/Media";
import ContactUs from "../common/ContactUs";
import WhatsNewSection from "../HomePage/WhatsNewSection";
import CustomerStories from "../common/CustomerStories";
import CommonAwardsSection from "../common/UISections/CommonAwardsSection";
import OurCustomers from "../common/UISections/OurCustomers";
import FeaturedArticle from "../common/FeaturedArticle";
import SolutionTabs from "../common/UISections/SolutionTabs";
import OurExpertiseSection from "../common/UISections/OurExpertiseSection";
import TeamCarousel from "../AboutUs/TeamCarousel/TeamCarousel";
import WhyUs from "../common/WhyUs";
import RelatedIndustries from "./RelatedIndustries";
import HeroSection from "./HeroSection";
import InfoBox from "../common/InfoBox";
import DotBg from "../common/DotBg";

function IndustryDetailsPage({ data }: HomePageProps) {
  const heroSection: IIndustryDetailsHero =
    data.heroSection as IIndustryDetailsHero;
  const info: IInfo = data.info as IInfo;
  const ourCustomers: ICustomers = data.ourCustomers as ICustomers;
  const featuredArticle: IFeaturedArticleSection =
    data.featuredArticle as IFeaturedArticleSection;
  const solutionTabs: ISolutionTabs = data.solutionTabs as ISolutionTabs;
  const ourExpertiseData: IOurExpertise = data.ourExpertise as IOurExpertise;
  const whyUs: IWhyUs = data.whyUs as IWhyUs;
  const teamCarousel: ITeamSection = data.teamSection as ITeamSection;
  const customerStories: ICustomerStories =
    data.customerStories as ICustomerStories;
  const media: IMedia = data.media as IMedia;
  const whatsNewSection: IWhatsNewSection =
    data.whatsNewSection as IWhatsNewSection;
  const relatedIndustries: IRelatedIndustries =
    data.relatedIndustries as IRelatedIndustries;

  return (
    <div className="relative overflow-hidden">
      <div className="absolute -left-9 top-[4900px] z-10 scale-75 md:left-0 md:top-[2700px] md:scale-100">
        <DotBg
          cropWidthStart={850}
          cropWidthEnd={1156}
          cropHeightStart={0}
          cropHeightEnd={489}
        />
      </div>
      <HeroSection heroSection={heroSection} />
      <InfoBox info={info} />
      <OurCustomers ourCustomers={ourCustomers} />
      <FeaturedArticle featuredArticle={featuredArticle} />
      <SolutionTabs solutionTabs={solutionTabs} />
      <OurExpertiseSection
        title={ourExpertiseData.title}
        desc={ourExpertiseData.desc}
        steps={ourExpertiseData.steps}
      />
      <WhyUs whyUs={whyUs} />
      <TeamCarousel
        title={teamCarousel.title}
        teamMember={teamCarousel.teamMember}
        CTA={teamCarousel.CTA}
        background="bg-Primary-Mordor-Blue-Bg-100"
      />
      <CommonAwardsSection />
      <CustomerStories customerStories={customerStories} />
      <Media media={media} />
      <WhatsNewSection
        whatsNewSection={whatsNewSection}
        background="bg-Neutrals-white"
        from="industry-page/industry-details"
      />
      <RelatedIndustries relatedIndustries={relatedIndustries} />
      <ContactUs />
    </div>
  );
}

export default IndustryDetailsPage;
