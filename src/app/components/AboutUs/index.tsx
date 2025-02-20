import {
  AboutUsPageProps,
  IAboutUs,
  INewsSection,
  IOurClients,
  IOurExpertise,
  IOurStory,
  ISocialResponsibility,
  ITeamSection,
  IWhatWeDo,
} from "@/types";
import React from "react";
import BannerSection from "./BannerSection.";
import MissonSection from "./MissonSection";
import CommonAwardsSection from "../common/UISections/CommonAwardsSection";
import NewsSection from "../HomePage/NewsSection";
import ContactUs from "../common/ContactUs";
import OurExpertiseSection from "../common/UISections/OurExpertiseSection";
import { WhatWeDoSection } from "./WhatWeDoSection";
import SocialResponsibilitySection from "./SocialResponsibilitySection";
import Timeline from "@/app/components/AboutUs/timeline";
import CommonCultureSection from "../common/UISections/CommonCultureSection";
import OurClientSection from "./OurClientSection";
import TeamCarousel from "./TeamCarousel/TeamCarousel";

const AboutUs = ({ data }: AboutUsPageProps) => {
  const aboutUsData: IAboutUs = data.aboutUs as IAboutUs;
  const bannerData = aboutUsData.banner;
  const missionData = aboutUsData.mission;
  const newsSection: INewsSection = aboutUsData.newsSection as INewsSection;
  const ourExpertiseData: IOurExpertise =
    aboutUsData.ourExpertise as IOurExpertise;
  const whatWeDoData: IWhatWeDo = aboutUsData.whatWeDo as IWhatWeDo;
  const socialResponsibilityData: ISocialResponsibility =
    aboutUsData.socialResponsibility as ISocialResponsibility;
  const ourStoryData: IOurStory = aboutUsData.ourStory as IOurStory;
  const ourClientSection: IOurClients = aboutUsData.ourClients as IOurClients;
  const teamCarousel: ITeamSection = aboutUsData.teamSection as ITeamSection;

  return (
    <>
      <BannerSection
        heading={bannerData.heading}
        desc={bannerData.desc}
        headerImage={bannerData.headerImage}
        ctaLink={bannerData.CTA.link}
        ctaTitle={bannerData.CTA.title}
        certification={bannerData.certificate}
      />
      <MissonSection
        title={missionData.title}
        slogan={missionData.slogan}
        coreValues={missionData.coreValues}
      />
      <Timeline
        title={ourStoryData.title}
        desc={ourStoryData.desc}
        heading={ourStoryData.heading}
        timelineData={ourStoryData.timelineData}
      />
      <CommonCultureSection />
      <OurExpertiseSection
        title={ourExpertiseData.title}
        desc={ourExpertiseData.desc}
        steps={ourExpertiseData.steps}
      />
      <WhatWeDoSection
        heading={whatWeDoData.heading}
        title={whatWeDoData.title}
        desc={whatWeDoData.desc}
        steps={whatWeDoData.steps}
      />
      <SocialResponsibilitySection
        heading={socialResponsibilityData.heading}
        bgImage={socialResponsibilityData.bgImage}
        title={socialResponsibilityData.title}
        desc={socialResponsibilityData.desc}
        CTA={socialResponsibilityData.CTA}
      />
      <TeamCarousel
        title={teamCarousel.title}
        teamMember={teamCarousel.teamMember}
        CTA={teamCarousel.CTA}
      />
      <OurClientSection
        title={ourClientSection.title}
        heading={ourClientSection.heading}
        CTA={ourClientSection.CTA}
        clients={ourClientSection.clients}
        mobileImages={ourClientSection.mobileImages}
      />
      <CommonAwardsSection />
      <NewsSection newsSection={newsSection} />
      <ContactUs dotbgStyle="hidden md:block" />
    </>
  );
};

export default AboutUs;
