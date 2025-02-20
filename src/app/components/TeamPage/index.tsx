import {
  ITeamMember,
  TeamPageProps,
  ITeamHeroSectionDetails,
  IFounderDetails,
  INewsSection,
  IMedia,
  IInfo,
} from "@/types";

import TeamHeroSection from "./TeamHeroSection";
import FounderSection from "./FounderSection";
import TeamMembers from "../common/TeamMembers";
import InfoBox from "../common/InfoBox";
import CommonCultureSection from "../common/UISections/CommonCultureSection";
import Media from "../common/Media";
import CommonAwardsSection from "../common/UISections/CommonAwardsSection";
import NewsSection from "../HomePage/NewsSection";

function TeamPage({ data }: TeamPageProps) {
  const heroSectionDetails: ITeamHeroSectionDetails =
    data.heroSectionDetails as ITeamHeroSectionDetails;
  const founderDetails: IFounderDetails =
    data.founderDetails as IFounderDetails;
  const teamList: ITeamMember[] = data.teamList as ITeamMember[];
  const info: IInfo = data.info as IInfo;
  const media: IMedia = data.media as IMedia;
  // const awards: IAwards = data.awards as IAwards;
  const newsSection: INewsSection = data.newsSection as INewsSection;

  return (
    <>
      <TeamHeroSection heroSectionDetails={heroSectionDetails} />
      <FounderSection founderDetails={founderDetails} />
      <TeamMembers teamMemberList={teamList} />
      <InfoBox info={info} />
      <CommonCultureSection />
      <Media media={media} />
      <CommonAwardsSection />
      <NewsSection newsSection={newsSection} />
    </>
  );
}

export default TeamPage;
