import {
  ICSRHeroSection,
  IPastEventsSection,
  IInitiativesSection,
  IAchievementsSection,
  ISustainabilitySection,
  IFinalCtaSection,
  ICustomers,
  CsrLandingPageProps,
} from "@/types";

import HeroSection from "./HeroSection";
import PastEventsSection from "./PastEventsSection";
import InitiativesSection from "./InitiativesSection";
import OurPartners from "../common/UISections/OurCustomers";
import AchievementsSection from "./AchievementsSection";
import SustainabilitySection from "./SustainabilitySection";
import FinalCtaSection from "../common/FinalCtaSection";
import ContactUs from "../common/ContactUs";



function CsrLandingPage({ data }: CsrLandingPageProps) {
  const heroSection: ICSRHeroSection = data.heroSection as ICSRHeroSection;
  const pastEvents: IPastEventsSection = data.pastEvents as IPastEventsSection;
  const initiativesSection: IInitiativesSection = data.initiativesSection as IInitiativesSection;
  const partnersSection: ICustomers = data.partnersSection as ICustomers;
  const achievementsSection: IAchievementsSection = data.achievementsSection as IAchievementsSection;
  const sustainabilitySection: ISustainabilitySection = data.sustainabilitySection as ISustainabilitySection;
  const finalCTA: IFinalCtaSection = data.finalCTA as IFinalCtaSection;
  
  return (
    <>
      <HeroSection heroSection={heroSection} />
      <PastEventsSection pastEvents={pastEvents} />
      <InitiativesSection initiativesSection={initiativesSection} />
      <OurPartners ourCustomers={partnersSection} />
      <AchievementsSection achievementsSection={achievementsSection} />
      <SustainabilitySection sustainabilitySection={sustainabilitySection} />
      <FinalCtaSection sectionData={finalCTA} />
      <ContactUs  />
    </>
  );
}

export default CsrLandingPage;