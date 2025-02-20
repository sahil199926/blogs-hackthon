import TACHeroSection from "./TACHeroSection";
import CommonFaqs from "../common/CommonFaqs";

import {
  HomePageProps,
  ITACHeroSection,
  ICommonFaqs,
} from "@/types";

function TermsAndConditonsPage({ data }: HomePageProps) {

  const faq: ICommonFaqs[] = data.tacList as ICommonFaqs[];
  const headerSection: ITACHeroSection = data.header as ITACHeroSection;

  return (
    <>
      <TACHeroSection headerSection={headerSection} />
      <CommonFaqs faq={faq} />
    </>
  );
}

export default TermsAndConditonsPage;
