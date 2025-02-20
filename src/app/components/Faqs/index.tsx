import FaqHeroSection from "./FaqHeroSection";
import FaqsList from "./FaqsList";
import FaqsData from "./FaqsData";
import OurExpertiseSection from "../common/UISections/OurExpertiseSection";
import ContactUs from "../common/ContactUs";
import {
  HomePageProps,
  IFaqsHeroSection,
  IFaqsList,
  IFaqsData,
  IOurExpertise,
} from "@/types";

function FaqsPage({ data }: HomePageProps) {
  const headerSection: IFaqsHeroSection = data.header as IFaqsHeroSection;
  const faqsList: IFaqsList = data.faqsList as IFaqsList;
  const faqsData: IFaqsData[] = data.faqsData as IFaqsData[];
  const ourExpertiseData: IOurExpertise = data.ourExpertise as IOurExpertise;

  return (
    <section>
      <FaqHeroSection headerSection={headerSection} />
      <div className="mx-auto grid max-w-8xl grid-cols-3 gap-4 px-3 py-12 lg:p-10">
        <FaqsList faqsList={faqsList} />
        <FaqsData faqsData={faqsData} />
      </div>

      <OurExpertiseSection
        title={ourExpertiseData.title}
        desc={ourExpertiseData.desc}
        steps={ourExpertiseData.steps}
      />
      <ContactUs />
    </section>
  );
}

export default FaqsPage;
