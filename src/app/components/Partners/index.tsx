import PartnersHeroSection from "./PartnersHeroSection";
import {
  HomePageProps,
  IPartnersHeroSection,
  IUnlockGrowth,
  IWhyPartnerWithUs,
  ICommonFaqs,
  ICustomerStories,
  ISolutionTabs,
  ICtaSection,
  IOurClients,
} from "@/types";
import UnlockGrowth from "./UnlockGrowth";
import WhyPartnerWithUs from "./WhyPartner";
import CommonFaqs from "../common/CommonFaqs";
import CustomerStories from "../common/CustomerStories";
import CtaSection from "./CtaSection";
import SolutionTabs from "../common/UISections/SolutionTabs";

function PartnerPage({ data }: HomePageProps) {
  const headerSection: IPartnersHeroSection =
    data.header as IPartnersHeroSection;
  const unlockGrowth: IUnlockGrowth = data.unlockGrowth as IUnlockGrowth;
  const whyPartnerWithUs: IWhyPartnerWithUs =
    data.whyPartnerWithUs as IWhyPartnerWithUs;
  const partnerSolutionTabs: ISolutionTabs<IOurClients> =
    data.ourSolutions as ISolutionTabs<IOurClients>;
  const customerStories: ICustomerStories =
    data.customerStories as ICustomerStories;
  const faq: ICommonFaqs[] = data.faqList as ICommonFaqs[];
  const ctaSection: ICtaSection = data.ctaSection as ICtaSection;

  return (
    <section>
      <PartnersHeroSection headerSection={headerSection} />
      <UnlockGrowth unlockGrowth={unlockGrowth} />
      <WhyPartnerWithUs whyPartnerWithUs={whyPartnerWithUs} />

      <SolutionTabs
        solutionTabs={partnerSolutionTabs}
        childComponent={"partners"}
        noPattern={false}
        mobileHeadBar={false}
      />

      <CustomerStories
        customerStories={customerStories}
        noPattern={true}
        bgBlue={true}
      />

      <div>
        <h2 className="p-4 text-center text-Display-Semibold-24 md:px-16 md:py-20 md:text-Display-Semibold-32">
          More Questions About Our Future Partnership? <br />
          We Have Answers
        </h2>
        <CommonFaqs faq={faq} />
      </div>
      <CtaSection ctaSection={ctaSection} />
    </section>
  );
}

export default PartnerPage;
