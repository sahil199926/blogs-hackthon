import {
  ICareerHeroSection,
  IStatsSection,
  IEmployeeStoriesSection,
  IPerksAndBenefitsSection,
  ITeamsSection,
  IReviewsSection,
  IFinalCtaSection,
  CareersLandingPageProps,
} from "@/types";

import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import EmployeeStoriesSection from "./EmployeeStoriesSection";
import PerksAndBenefitsSection from "./PerksAndBenefitsSection";
import CommonCultureSection from "../common/UISections/CommonCultureSection";
import TeamsSection from "./TeamsSection";
import ReviewsSection from "./ReviewsSection";
import JoinTeamSection from "../common/FinalCtaSection";



function CareersLandingPage({ data }: CareersLandingPageProps) {
  const heroSection: ICareerHeroSection = data.heroSection as ICareerHeroSection;
  const statsSection: IStatsSection = data.statsSection as IStatsSection;
  const employeeStories: IEmployeeStoriesSection = data.employeeStories as IEmployeeStoriesSection;
  const perksAndBenefits: IPerksAndBenefitsSection = data.perksAndBenefits as IPerksAndBenefitsSection;
  const teamsSection: ITeamsSection = data.teamsSection as ITeamsSection;
  const reviewsSection: IReviewsSection = data.reviews as IReviewsSection;
  const joinTeam: IFinalCtaSection = data.joinTeam as IFinalCtaSection;

  return (
    <>
      <HeroSection heroSection={heroSection} />{/**/}
      <StatsSection statsSection={statsSection} />
      <EmployeeStoriesSection employeeStories={employeeStories} />
      <PerksAndBenefitsSection perksAndBenefits={perksAndBenefits} />
      <CommonCultureSection />
      <TeamsSection teamsSection={teamsSection} />
      <ReviewsSection reviews={reviewsSection} />
      <JoinTeamSection sectionData={joinTeam} />
    </>
  )
}

export default CareersLandingPage