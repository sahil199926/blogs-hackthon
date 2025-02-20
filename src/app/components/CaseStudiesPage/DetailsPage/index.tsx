import {
  CaseStudiesPageProps,
  IBannerSection,
  IMoreResourceDetails,
  IRelatedBlogs,
  IRelatedReports,
  ISuggestion,
} from "@/types";
import NewsLetter from "../../ContactUs/NewsLetterSection";
import MoreResourcesSection from "../../common/MoreResources";
import DotBg from "../../common/DotBg";
import BannerSection from "./BannerSection";
import MainContent from "./MainContent";
import ContactSection from "./ContactSection";

function DetailsPage({ data }: CaseStudiesPageProps) {
  const bannerSection: IBannerSection = data.bannerSection as IBannerSection;
  const moreResourceDetails: IMoreResourceDetails =
    data.moreResourceDetails as IMoreResourceDetails;
  const categoryList: TCategoryListItem[] =
    data.categoryList as TCategoryListItem[];
  const relatedBlogs: IRelatedBlogs = data.relatedBlogs as IRelatedBlogs;
  const relatedReports: IRelatedReports =
    data.relatedReports as IRelatedReports;
  const suggestion: ISuggestion = data.suggestion as ISuggestion;

  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute right-0 top-[2150px] z-10 md:top-[1950px]">
        <DotBg
          cropWidthStart={0}
          cropWidthEnd={360}
          cropHeightStart={0}
          cropHeightEnd={489}
        />
      </div>
      <BannerSection bannerSection={bannerSection} />
      <MainContent
        content={bannerSection.content}
        relatedBlogs={relatedBlogs}
        relatedReports={relatedReports}
        suggestion={suggestion}
      />
      <ContactSection/>
      <MoreResourcesSection
        moreResourceDetails={moreResourceDetails}
        dotBg={true}
      />
      <NewsLetter categoryList={categoryList} />
    </div>
  );
}

export default DetailsPage;

type TCategoryListItem = {
  label: string;
  link: string;
  children: null | TCategoryListItem[];
};
