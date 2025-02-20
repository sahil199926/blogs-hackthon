import Navbar from "./Navbar";
import Topbar from "./Topbar";
import { SubSection,INavbarData } from "./Navbar";




function Header({topBarData,navbarData,caseStudyNavbar , mobileNavbarBanner} : {topBarData : TNavData[] , navbarData : INavbarData[] ,caseStudyNavbar : ICaseStudyTabNavbar , mobileNavbarBanner : IMobileNavbarBanner} ) {
  const mobileNavData :TNavData[] = [...navbarData];
  for(const item of topBarData){
    mobileNavData.push(item)
  }
  return (
    <div className="relative flex w-full flex-col">
      <Topbar topBarData={topBarData} mobileTabData={mobileNavData} mobileNavbarBanner={mobileNavbarBanner} />
      <div className="hidden lg:block  h-[50px]"></div>
      <Navbar navbarData={navbarData} caseStudiesNavbar={caseStudyNavbar}/>
    </div>
  );
}

export default Header;

export type TNavData = {
  label: string;
  link ?: string;
  children ?:  TNavData[];
  subSections ?:  SubSection[];
  kicker ?: string ;
  description ?: string;
  cta ?: {
    link : string;
    label : string;
  }
};

type ICaseStudiesNavbar = {
  title : string ;
  industry ?: string ;
  type ?: string ;
  imgUrl : string ;
  cta : {
    label : string ;
    link : string;
  }
 }
 export type ICaseStudyTabNavbar = {
  title : string ;
  cta : {
    label : string ;
    link : string;
  };
  children : ICaseStudiesNavbar[];
 }

export type IMobileNavbarBanner = {
  heading : string;
  cta : {
    label : string ;
    link : string;
  };
}