import {
  BlogPageProps,
  // IBannerSection,
  // IMoreResourceDetails,
  // IRelatedBlogs,
  // IRelatedReports,
  // ISuggestion,
} from "@/types";
import BannerSection from "./BannerSection";
// import NewsLetter from "../../ContactUs/NewsLetterSection";
// import MoreResourcesSection from "../../common/MoreResources";
import MainContent from "./MainContent";
import DotBg from "../../common/DotBg";

function BlogDetailsPage({ data }: { data: BlogPageProps }) {
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
      <BannerSection data={data} />
      <MainContent content={data.content} />
      {/* <MoreResourcesSection moreResourceDetails={moreResourceDetails} dotBg={true} /> */}
      {/* <NewsLetter categoryList={categoryList} /> */}
    </div>
  );
}

export default BlogDetailsPage;

// type TCategoryListItem = {
//   label: string;
//   link: string;
//   children: null | TCategoryListItem[];
// };
