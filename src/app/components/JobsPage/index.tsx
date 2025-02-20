import { HomePageProps, IJobsHeroSection, IJobsListParent, IOurExpertise, } from "@/types";
import JobsHeroSection from "./JobsHeroSection";
import JobsSearchHeader from "./JobsSearchHeader";
import OurExpertise from "./OurExpertise";
import DotBg from "../common/DotBg";
interface IFilteredData {
  [key: string]: string;
}
function JobsPage({ data }: HomePageProps) {

  const jobsHeroSection: IJobsHeroSection = data.jobsHeroSection as IJobsHeroSection;
  const jobsList: IJobsListParent[] = data.jobsList as IJobsListParent[];
  const ourExpertise: IOurExpertise = data.ourExpertise as IOurExpertise;
  const FilteredData: IFilteredData = data.FilteredData as IFilteredData;

  return (
    <div className="relative overflow-hidden">
      <div className="z-10 absolute top-[400px] md:top-72 -right-32 md:right-0">
        <DotBg
          cropWidthStart={0}
          cropWidthEnd={400}
          cropHeightStart={0}
          cropHeightEnd={489}
        />
      </div>
      <JobsHeroSection jobsHeroSection={jobsHeroSection} />
      <JobsSearchHeader jobsList={jobsList} FilteredData={FilteredData} />
      <OurExpertise ourExpertise={ourExpertise} />
      <div className="z-10 absolute top-[1080px] -right-6 md:right-0">
        <DotBg
          cropWidthStart={0}
          cropWidthEnd={225}
          cropHeightStart={0}
          cropHeightEnd={435}
        />
      </div>
    </div>
  );
}

export default JobsPage;
