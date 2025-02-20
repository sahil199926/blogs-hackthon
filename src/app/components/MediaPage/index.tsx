import {
  HomePageProps,
  IFeaturedArticleSection,
  IMediaHeroSection,
  IMediaKit,
  IPressEnquiry,
  IUpdateNAnnouncements,
} from "@/types";
import MediaHeroSection from "./MediaHeroSection";
import FeaturedArticle from "../common/FeaturedArticle";
import UpdateNAnnouncements from "./UpdateNAnnouncements";
import ContactUs from "../common/ContactUs";
import MediaKit from "./MediaKit";
import PressInquiries from "./PressInquiries";
import CommonAwardsSection from "../common/UISections/CommonAwardsSection";

function MediaPage({ data }: HomePageProps) {
  const mediaHeroSection: IMediaHeroSection = data.header as IMediaHeroSection;
  const featuredArticle: IFeaturedArticleSection =
    data.featuredArticle as IFeaturedArticleSection;
  const updateNAnnouncements: IUpdateNAnnouncements =
    data.updateNAnnouncements as IUpdateNAnnouncements;
  const pressEnquiry: IPressEnquiry = data.pressEnquiry as IPressEnquiry;
  const mediaKit: IMediaKit = data.mediaKit as IMediaKit;

  return (
    <div className="relative overflow-hidden">
      <MediaHeroSection mediaHeroSection={mediaHeroSection} />
      <FeaturedArticle featuredArticle={featuredArticle} />
      <UpdateNAnnouncements updateNAnnouncements={updateNAnnouncements} />
      <MediaKit mediaKit={mediaKit} />
      <CommonAwardsSection />
      <PressInquiries pressEnquiry={pressEnquiry} />
      <ContactUs />
    </div>
  );
}

export default MediaPage;
