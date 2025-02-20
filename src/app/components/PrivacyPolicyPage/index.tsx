import PrivacyPolicyHeroSection from "./PrivacyPolicyHeroSection";
import CommonFaqs from "../common/CommonFaqs";

import {
  HomePageProps,
  ICommonFaqs,
  IPrivacyPolicyHeroSection,
} from "@/types";

function PrivacyPolicyPage({ data }: HomePageProps) {

  const faq: ICommonFaqs[] = data.faqList as ICommonFaqs[];
  const headerSection: IPrivacyPolicyHeroSection = data.header as IPrivacyPolicyHeroSection;

  return (
    <>
      <PrivacyPolicyHeroSection headerSection={headerSection} />
      <CommonFaqs faq={faq} />
    </>
  );
}

export default PrivacyPolicyPage;
