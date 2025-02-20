import { BlogPageProps, IBannerSection, IMoreResourceDetails, IRelatedBlogs, IRelatedReports, ISuggestion } from "@/types";
import BannerSection from "./BannerSection";
import NewsLetter from "../../ContactUs/NewsLetterSection";
import MoreResourcesSection from "../../common/MoreResources";
import MainContent from "./MainContent";
import DotBg from "../../common/DotBg";

function BlogDetailsPage({ data }: BlogPageProps) {

  const bannerSection: IBannerSection = data.bannerSection as IBannerSection;
  const moreResourceDetails: IMoreResourceDetails = data.moreResourceDetails as IMoreResourceDetails;
  const categoryList: TCategoryListItem[] = data.categoryList as TCategoryListItem[]
  const relatedBlogs: IRelatedBlogs = data.relatedBlogs as IRelatedBlogs;
  const relatedReports: IRelatedReports = data.relatedReports as IRelatedReports;
  const suggestion:ISuggestion = data.suggestion as ISuggestion;

  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute right-0 top-[2150px] md:top-[1950px] z-10">  
        <DotBg
          cropWidthStart={0}
          cropWidthEnd={360}
          cropHeightStart={0}
          cropHeightEnd={489}
        />
      </div>
      <BannerSection bannerSection={bannerSection} />
      <MainContent content={bannerSection.content} relatedBlogs={relatedBlogs} relatedReports={relatedReports} suggestion={suggestion} />
      <MoreResourcesSection moreResourceDetails={moreResourceDetails} dotBg={true} />
      <NewsLetter categoryList={categoryList} />
    </div>
  );
}

export default BlogDetailsPage;

type TCategoryListItem = {
  label: string;
  link: string;
  children: null | TCategoryListItem[];
};