import ContactUs from "../common/ContactUs";
import AchievementSection from "./AchievementSection";
import AwardsHeroSection from "./AwardsHeroSection";
import AboutUsSection from "./AboutUsSection";

import {
  AwardsPageProps,
  IAwardsHeroSection,
  IAchievementSection,
  IAboutUsSection,
  IRelatedIndustries
} from "@/types";
import RelatedIndustries from "./RelatedIndustries";
import DotBg from "../common/DotBg";

function AwardsPage({ data }: AwardsPageProps) {
  const heroSection : IAwardsHeroSection = data.heroSection as IAwardsHeroSection;
  const achievementSection : IAchievementSection = data.achievementSection as IAchievementSection;
  const aboutUsSection : IAboutUsSection = data.aboutUsSection as IAboutUsSection;
  const relatedIndustries : IRelatedIndustries = data.relatedIndustries as IRelatedIndustries;

  return (
    <>
      <AwardsHeroSection heroSection={heroSection} />
      <AchievementSection achievementSection={achievementSection}/>
      <RelatedIndustries relatedIndustries={relatedIndustries}/>
      <AboutUsSection aboutUsSection={aboutUsSection}/>
      <div className="relative md:hidden">
        <div className="z-10 absolute right-0  -bottom-[60px]">
            <DotBg
                cropWidthStart={0}
                cropWidthEnd={250}
                cropHeightStart={0}
                cropHeightEnd={250}
            />
        </div> 
      </div>
      <ContactUs bgColorClass="bg-Primary-Mordor-Blue-Bg-50" />
    </>
  );
}

export default AwardsPage;
