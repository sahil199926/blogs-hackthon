import { TCategoryListItem } from "@/app/components/Resources";

export interface Meta {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImages?: string[];
}

export interface ApiResponse {
  data: Record<string, unknown>; // Adjust the type based on your actual data structure
  meta: Meta;
}

export interface HomePageProps {
  data: Record<string, unknown>;
}
export interface CaseStudiesPageProps {
  data: Record<string, unknown>;
}
export interface AllCaseStudiesPageProps {
  data: Record<string, unknown>;
}

export interface SynapseLandingPageProps {
  data: Record<string, unknown>;
}

export interface ContactUsPageProps {
  data: Record<string, unknown>;
}

export interface AboutUsPageProps {
  data: Record<string, unknown>;
}
export interface CareersLandingPageProps {
  data: Record<string, unknown>;
}
export interface CsrLandingPageProps {
  data: Record<string, unknown>;
}

export interface ReportLandingPageProps {
  data: Record<string, unknown>;
}

export interface TeamPageProps {
  data: Record<string, unknown>;
}

export interface BlogPageProps {
  data: Record<string, unknown>;
}

export interface ResourcesMobilePageProps {
  data: Record<string, unknown>;
}

export interface PricingProps {
  data: Record<string, unknown>;
}

export interface customerTestimonials {
  comment: {
    heading: string;
    body: string;
  };
  customer: {
    name: string;
    position: string;
    company: string;
  };
  link: string;
}

export interface InquiryCardData {
  label: string;
  icon: React.ReactNode; // Replace 'any' with the specific type if available
  title: string;
  mailData: string;
}

export interface InquiryFormData {
  title: string;
  cardData: InquiryCardData[];
}

export interface FeedbackFormCTA {
  title: string;
  link: string;
}

export interface FeedbackFormLeftSection {
  title: string;
  desc: string;
  CTA: FeedbackFormCTA;
  icon: React.ReactNode; // Replace 'any' with the specific type if available
}

export interface FeedbackFormRightSection {
  title: string;
  AddressLine1Icon: React.ReactNode; // Replace 'any' with the specific type if available
  AddressLine1: string;
  AddressLine2: string;
}

export interface FeedbackFormData {
  leftSection: FeedbackFormLeftSection;
  rightSection: FeedbackFormRightSection;
}

export interface FAQData {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  faqData: FAQData[];
}

export interface NewsLetterSection {
  title: string;
  desc: string;
}

export interface ContactUs {
  heading: string;
  desc: string;
  headerImage: string;
  inquiryFormData: InquiryFormData;
  feedbackFormData: FeedbackFormData;
  faqSection: FAQSection;
  NewsLetterSection: NewsLetterSection;
}

export interface IAboutUs {
  banner: {
    heading: string;
    desc: string;
    CTA: {
      title: string;
      link: string;
    };
    certificate: string[];
    headerImage: string;
  };
  mission: {
    title: string;
    slogan: string;
    coreValues: string[];
  };

  awards: IAwards;
  newsSection: INewsSection;
  contactUs: IContactUs;
  socialResponsibility: ISocialResponsibility;
  teamsSection: ITeamsSection;
  ourClients: IOurClients;
}

// {
//   comment: {
//     heading: "Your trusted source for actionable insights.",
//     body: "I must say that he comes across as a exceptionally talented trainer who knows the finer aspects of Project and Program Management. He is an expert in his domain and can communicate in a clear and succint manner. Finally, he is one person who has a wealth of knowledge and he is your person to go to, in case you would want to enhance your career in Project, Program and Portfolio Management.",
//   },
//   customer: {
//     name: "Jhon Smith",
//     position: "Business Analyst",
//     company: "McKinsey & Company",
//   },
//   link: "#",
// },
export interface IHomeHeroSection {
  heading: string;
  desc: string;
  ctaOne: {
    title: string;
    link: string;
  };
  ctaTwo: {
    title: string;
    link: string;
  };
  globe: {
    label: string;
    src: string;
    alt: string;
  };
}

export interface ICaseStudiesHeroSection {
  heading: string;
  desc: string;
  globe: string;
}

export interface ITrending {
  heading: string;
  links: {
    title: string;
    description: string;
    link: string;
  }[];
}

export interface IContentCard {
  type: string;
  eyebrow: {
    tag1: string;
    tag2: string;
  };
  title: string;
  link: {
    href: string;
    text: string;
  };
  img: {
    title: string;
    src: string;
    alt: string;
  };
}

export interface IWhatsNewSection {
  heading: string;
  contentCardList: IContentCard[]; // Use the IContentCard interface
}

export interface IGranularCoverage {
  kicker: string;
  heading: string;
  text: string;
  cta1: {
    title: string;
    link: string;
  };
  cta2: {
    title: string;
    link: string;
  };
  map: {
    title: string;
    src: string;
    alt: string;
  };
}
export interface ICaseStudiesCard {
  heading: string;
  logo: {
    title: string;
    src: string;
    alt: string;
  };
  link: string;
  ctaText: string;
}

export interface IOurImpact {
  kicker: string;
  heading: string;
  cta: {
    title: string;
    link: string;
  };
  caseStudiesList: ICaseStudiesCard[]; // Use the ICaseStudiesList interface
}
export interface IAwards {
  kicker: string;
  heading: string;
  text: string;
  logoList: {
    title: string;
    src: string;
    alt: string;
  }[];
  bgImg: {
    title: string;
    src: string;
    alt: string;
  };
}

export interface INewsSection {
  heading: string;
  newsPageLink: string;
  newsList: {
    date: string;
    headline: string;
    logo: {
      title: string;
      src: string;
      alt: string;
    };
    logoWidth: number;
    link: string;
  }[];
}

export interface IMajorUpdates {
  heading: string;
  link: string;
  list: string[];
}
export interface ITrialCta {
  heading: string;
  price: string;
  cta: {
    title: string;
    link: string;
  };
}
export interface IHeroSection {
  heading: string;
  desc: string;
  ctaOne: {
    title: string;
    link: string;
  };
  ctaTwo: {
    title: string;
    link: string;
  };
  logo: {
    desktop: string;
    mobile: string;
  };
}
export interface ICustomers {
  kicker: string;
  imgList: [
    {
      label: string;
      src: string;
    },
  ];
}
export interface ISynapseAction {
  subTitle?: string;
  title: string;
  desc: string;
  url: string;
}
export interface ISolutionTabs<T = ITabCard> {
  kicker: string;
  heading: string;
  tabOptions: string[];
  tabData: T[];
}
export interface ITabCard {
  heading: string;
  description: string;
  stats: {
    label: string;
    value: string;
  }[];
  imgUrl: {
    title: string;
    src: string;
    alt: string;
  };

  ctaOne?: {
    title: string;
    link: string;
  };
  ctaTwo?: {
    title: string;
    link: string;
  };
}
export interface IWhySynapse {
  title: string;
  desc: string;
  heroImg: string;
  cta: {
    title: string;
    link: string;
  };
  points: [
    {
      title: string;
      desc: string;
      link: string;
    },
  ];
}
export interface ICustomerStories {
  kicker?: string;
  heading: string;
  customerTestimonials: IReview[];
}
export interface IReview {
  comment: {
    heading: string;
    body: string;
  };
  customer: {
    profileImage: {
      title: string;
      src: string;
      alt: string;
    };
    name: string;
    position: string;
    company: string;
  };
  link?: string;
}
export interface ISubscription {
  title: string;
  desc: string;
  descTwo: string;
}

export interface IFaq {
  title: string;
  faqList: [
    {
      question: string;
      answer: string;
    },
  ];
}

export interface IHubs {
  title: string;
  desc: string;
  hubList: [
    {
      img: string;
      label: string;
      value: string;
      HubLink: string;
    },
  ];
}

export interface IContactUs {
  kicker: string;
  heading: string;
  cta: {
    title: string;
    link: string;
  };
}

export interface OurClientsPageProps {
  data: Record<string, unknown>;
}
export interface IGlobalCoverage {
  kicker: string;
  heading: string;
  desc: string;
  cta: {
    title: string;
    link: string;
  };
  map: {
    src: string;
    title: string;
    alt: string;
  };
}

export interface ICustomResearchHeroSection {
  heading: string;
  desc: string;
  cta: {
    title: string;
    link: string;
  };
  image: {
    link: string;
    title: string;
    altText: string;
  };
}
export interface ICompanyFacts {
  heading: string;
  desc: string;
}

interface BaseArticleInterface {
  title: string;
  image: {
    link: string;
    title: string;
    altText: string;
  };
  readTime: string;
  CTA: {
    title: string;
    link: string;
  };
}
export interface ICaseStudy extends BaseArticleInterface {
  industry: string;
  publishedOn: string;
}

export interface IAllCagtegoryList {
  heading: string;
  cta: {
    title: string;
    link: string;
  };
  studies: ICaseStudy[];
}
interface Article extends BaseArticleInterface {
  description: string;
  author: {
    name: string;
    image: {
      link: string;
      title: string;
      altText: string;
    };
    designation: string;
  };
}

interface IResourceArticles extends BaseArticleInterface {
  description: string;
  author: {
    name: string;
    imgUrl: string;
    designation: string;
  };
  category: string;
  reportTitle: string;
  date: string;
}

export interface IFeaturedArticleSection {
  heading: string;
  article: Article;
}

export interface IResourceArticle {
  heading: string;
  article: Article;
}

export interface ICustomSolutionSection {
  kicker: string;
  heading: string;
  desc: string;
  image: {
    link: string;
    title: string;
    altText: string;
  };
  cta: {
    title: string;
    link: string;
  };
}

export interface ICaseStudiesSection {
  kicker: string;
  heading: string;
  cta: {
    title: string;
    link: string;
  };
  studies: ICaseStudy[];
}
export interface IAllCaseStudiesSection {
  kicker: string;
  heading: string;
  allCategoryList: IAllCagtegoryList[];
}

export interface IPointCard {
  title: string;
  numberingIconAfter: boolean;
  description?: string;
  list?: string[];
}
export interface ICustomResearchSolutionTabData {
  heading?: string;
  description?: string;
  imgSection: {
    image: {
      link: string;
      title: string;
      altText: string;
    };
    onlyImage: boolean;
    title?: string;
    description?: string;
  };
  points: IPointCard[];
}

export interface ITopics {
  title: string;
  list: {
    title: string;
    desc: string;
  }[];
}
export interface IAdvisoryInsights {
  heading: string;
  desc: string;
  title: string;
  description: string;
  topics: ITopics[];
}

export interface CustomResearchPageProps {
  data: Record<string, unknown>;
}
export interface ITACHeroSection {
  title: string;
  desc: string;
}
export interface ICommonFaqs {
  heading: string;
  body: string;
}

export interface IPrivacyPolicyHeroSection {
  title: string;
  updatedAt: string;
  desc: string;
}

//Careers Landing Page Types

// Hero Section
export interface ICareerHeroSection {
  heading: string;
  description: string;
  cta: {
    title: string;
    link: string;
  };
  awards: {
    image: string; // Use the correct type if GPTWLogo is a specific object
  }[];
  bgImg: string;
}

// Stats Section
export interface IStatItem {
  title: string;
  description: string;
  icon: string;
  link?: {
    title: string;
    url: string;
  };
}

export interface IStatsSection {
  items: IStatItem[];
}

// Employee Stories Section
export interface IEmployeeStoryCard {
  comment: string;
  employeeDetails: {
    name: string;
    position: string;
    experience: string;
    image: string;
  };
}

export interface IEmployeeStoriesSection {
  kicker: string;
  heading: string;
  description: string;
  testimonials: IEmployeeStoryCard[];
}

// Perks and Benefits Section
export interface IPerk {
  title: string;
  points: string[];
  icon: string;
}

export interface IPerksAndBenefitsSection {
  kicker: string;
  heading: string;
  description: string;
  cta: {
    title: string;
    link: string;
  };
  perks: IPerk[];
}

// Culture Section
export interface ICultureSection {
  bgColor: string;
  kicker: string;
  heading: string;
  description: string;
  cta: {
    title: string;
    link: string;
  };
  galleryImages: string;
}

// Teams Section
export interface ITeam {
  title: string;
  image: string;
}

export interface ITeamsSection {
  heading: string;
  description: string;
  teams: ITeam[];
}

// Reviews Section
export interface IReview {
  stars: number;
  description: string;
}

export interface IReviewsSection {
  kicker: string;
  glassdoorLogo: string;
  rating: number;
  stars: number; // Total stars possible
  reviews: IReview[];
}

// Join Team Section from Careers Landing Page
// Know more about us section from CSR Landing Page
export interface IFinalCtaSection {
  heading: string;
  description: string;
  cta: {
    title: string;
    link: string;
  };
}
// Faqs Page
export interface IFaqsHeroSection {
  title: string;
  desc: string;
  faqImage: string;
}
export interface IFaqsList {
  title: string;
  desc: string[];
}

export interface IFaqsData {
  heading: string;
  faqs: ICommonFaqs[];
}

export interface ITeamHeroSectionDetails {
  title: string;
  desc: string;
}

export interface IFounderDetails {
  heading: string;
  desc: string;
  name: string;
  position: string;
  message: string;
  aboutFounder: string;
  image: {
    title: string;
    altText: string;
    link: string;
  };
}

export interface ITeamMember {
  name: string;
  position: string;
  about: string;
  image: {
    title: string;
    altText: string;
    link: string;
  };
}

export interface IInfo {
  title: string;
  desc: string;
}

export interface IMediaItem {
  title: string;
  date: string;
  content: string;
  image: {
    title: string;
    link: string;
    altText: string;
  };
  author: {
    name: string;
    position: string;
    image: {
      title: string;
      link: string;
      altText: string;
    };
  };
  slotsLeft: number;
  cta: {
    title: string;
    link: string;
  };
}

export interface IMedia {
  heading: string;
  mediaList: IMediaItem[];
}

export interface IJobsHeroSection {
  heading: string;
  desc: string;
  cta: {
    title: string;
    link: string;
  };
  image: {
    link: string;
    title: string;
    altText: string;
  };
}

export interface IJobsListParent {
  department: string | undefined;
  list: IJobsList[];
}

export interface IJobsList {
  _id: string;
  jobId: string;
  department: string;
  employmentType: string;
  position: string;
  experience: string;
  location: string;
  postedAt: string;
}

interface Step {
  text: string;
  link: string;
  data: string;
  title: string;
}

export interface IOurExpertise {
  title: string;
  desc: string;
  steps: Step[];
}

export interface IWhatWeDo {
  heading: string;
  title: string;
  desc: string;
  steps: Step[];
}

export interface ISocialResponsibility {
  heading: string;
  bgImage: string;
  title: string;
  desc: string;
  CTA: {
    title: string;
    link: string;
  };
}

export interface ItimeLineData {
  year: number;
  description: string;
}
export interface IOurStory {
  title: string;
  desc: string;
  heading: string;
  timelineData: ItimeLineData[];
}

export interface IOurClients {
  key?: number;
  title: string;
  heading: string;
  CTA: {
    title: string;
    link: string;
  };
  clients: string[];
  mobileImages: ICustomers;
}

export interface ITeamMember {
  name: string;
  position: string;
  link: string;
}

export interface ITeamSection {
  title: string;
  teamMember: ITeamMember[];
  CTA: {
    title: string;
    link: string;
  };
  background?: string;
}

export interface IAboutUs {
  banner: {
    heading: string;
    desc: string;
    CTA: {
      title: string;
      link: string;
    };
    certificate: string[];
    headerImage: string;
  };
  mission: {
    title: string;
    slogan: string;
    coreValues: string[];
  };
  ourExpertise: IOurExpertise;
  whatWeDo: IWhatWeDo;
  awards: IAwards;
  newsSection: INewsSection;
  contactUs: IContactUs;
  ourStory: IOurStory;
  cultureSection: ICultureSection;
  ourClients: IOurClients;
  teamSection: ITeamSection;
}

export interface AwardsPageProps {
  data: Record<string, unknown>;
}

export interface IAwardsHeroSection {
  featured: {
    featuredOn: string;
    featuredDate: string;
    awardName: string;
  };
  heading: string;
  desc: string;
  cta: {
    title: string;
    link: string;
  };
  image: {
    link: string;
    title: string;
    altText: string;
  };
}

export interface IAchievement {
  title: string;
  description: string;
  featuredDate: string;
  awardName: string;
  image: {
    link: string;
    title: string;
    altText: string;
  };
}
export interface IAchievementSection {
  heading: string;
  desc: string;
  achievements: IAchievement[];
}

export interface IAboutUsSection {
  heading: string;
  cta: {
    title: string;
    link: string;
  };
}

export interface IRelatedIndustries {
  heading: string;
  desc?: string;
  hubList: [
    {
      img: string;
      label: string;
      value?: string;
      HubLink: string;
    },
  ];
}

export interface IResourceMobileHeader {
  title: string;
  desc: string;
  headerImage: string;
}
interface Author {
  pic: string;
  name: string;
  designation: string;
}

interface CTA {
  title: string;
  link: string;
}

interface Blog {
  title: string;
  date: string;
  headerImage: string;
  header: string;
  author: Author;
  readTime: string;
  CTA: CTA;
}

export interface ITrendingData {
  [key: string]: Blog[];
}

export interface IResourcesMobileTrending {
  title: string;
  trendingBlogData: ITrendingData;
}

interface IFeaturedStudy {
  title: string;
  desc: string;
  readTime: string;
  category: string;
  reportTitle: string;
  date: string;
  featuredImage: string; // Assuming CargillFeaturedImage is a string, adjust if it's a different type
}

export interface IFeatured {
  title: string;
  featuredStudies: IFeaturedStudy[];
}

interface IAuthor {
  name: string;
  pic: string;
  designation: string;
}

export interface IEvent {
  title: string;
  description: string;
  date: string;
  eventPic: string;
  organizer: string;
  category: string;
  author: IAuthor;
  slotsLeft: number;
}

export interface IResourcesMobile {
  header: IResourceMobileHeader;
  trendingSmallSec: ITrending;
  trending: IResourcesMobileTrending;
  featured: IFeatured;
  newsSection: INewsSection;
  upcomingEventsCarousel: IEvent[];
  categoryList: TCategoryListItem;
}
//-----------------------Interfaces for CSR Landing Page---------------------------
//CSR Hero Section
export interface ICSRHeroSection {
  heading: string;
  description: string;
  cta: {
    title: string;
    link: string;
  };
  image: string;
}

// Past Events Section
export interface IEvent {
  title: string;
  image: string;
}

export interface IPastEventsSection {
  heading: string;
  description: string;
  events: IEvent[];
}

// Initiatives Section
export interface IInitiative {
  title: string;
  description: string;
  image: string;
}

export interface IInitiativesSection {
  heading: string;
  description: string;
  initiatives: IInitiative[];
}

// Partners Section
//using the same interface as ICustomers for Partners Section

// Achievements Section
export interface IAchievementStat {
  value: string;
  description: string;
}

export interface IAchievementsSection {
  heading: string;
  stats: IAchievementStat[];
}

// Sustainability Section
export interface ISustainabilityValue {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ISustainabilitySection {
  heading: string;
  description: string;
  values: ISustainabilityValue[];
}
export interface IClients {
  title: string;
  industry: string;
  imgUrl: string;
}

export interface IClientsListing {
  heading: string;
  clients: IClients[];
}

export interface IOurClientsHeroSection {
  heading: string;
  desc: string;
  cta: {
    title: string;
    link: string;
  };
  image: {
    title: string;
    altText: string;
    link: string;
  };
}
export interface ICompanyStats {
  value: number;
  label: string;
}
export interface IMediaHeroSection {
  createdAt: string;
  coverage: string;
  heading: string;
  desc: string;
  cta: {
    title: string;
    link: string;
  };
  cup: string;
}

export interface IUpdateNAnnouncements {
  heading: string;
  desc: string;
  list: [
    {
      postedAt: string;
      postType: string;
      title: string;
      desc: string;
      cta: {
        text: string;
        link: string;
      };
      views: number;
      image: string;
    },
  ];
}

export interface IMediaKit {
  heading: string;
  desc: string;
  cta: {
    title: string;
    link: string;
  };
  image: string;
}

export interface IPressEnquiry {
  heading: string;
  cta: {
    title: string;
    link: string;
  };
}

//Report Landing Page Types
export interface IReportHeroSection {
  title: string;
  description: string;
  cta: {
    text: string;
    link: string;
  }[];
  image: string;
}
export interface ITrendingReport {
  title: string;
  link: string;
}
export type ITrendingReports = ITrendingReport[];
export interface ILatestReports {
  heading: string;
  button: {
    text: string;
    link: string;
  };
  reports: {
    category: string;
    title: string;
    cagr: string;
    studyPeriod: string;
    regionsCovered: string[];
    majorPlayers: string[];
    price: string;
    licenceType: string;
    freeSampleButton: {
      text: string;
      link: string;
    };
    addToCartButton: {
      text: string;
      link: string;
    };
    image: string;
  }[];
}

//Research Methodology Section interfaces

//defining separate interfaces for each tab structure
export interface IResearchMethodologyCardsTabData {
  steps: {
    title: string;
    description: string;
  }[];
}
export interface IResearchMethodologyListTabData {
  topParagraph: string;
  steps: {
    title: string;
    points: string | string[]; // Allows both a paragraph (string) and a list (string[])
    rightSectionData: {
      image: string;
      text: {
        title: string;
        desc: string;
      };
    };
  }[];
}

export interface IResearchMethodology {
  heading: string;
  tabOptions: string[];
  tabs: {
    tabName: string;
    type: "cards" | "list"; // Ensures the type is either "cards" or "list"
    data: IResearchMethodologyCardsTabData | IResearchMethodologyListTabData;
  }[];
}
export interface IResourceFeaturedArticleSection {
  heading: string;
  article: IResourceArticles;
}

export interface IPartnersHeroSection {
  title: string;
  desc: string;
  faqImage: string;
  cta: {
    title: string;
    link: string;
  };
}
export interface IUnlockGrowth {
  url: string;
  title: string;
  desc: string;
}

export interface IWhyPartnerWithUs {
  title: string;
  benefits: [
    {
      icon: string;
      title: string;
      desc: string;
    },
  ];
}
export interface ICtaSection {
  title: string;
  cta: {
    title: string;
    link: string;
  };
}

export interface IndustriesOverviewPageProps {
  data: Record<string, unknown>;
}

export interface IIndustriesOverviewHeroSection {
  heading: string;
  desc: string;
  cta: {
    title: string;
    link: string;
  };
}

export interface IIndustries {
  label: string;
  id: string;
  description?: string;
  link: string;
}
export interface ITrendingindustries {
  heading: string;
  industries: IIndustries[];
}

export interface IPopularTrendingIndustries extends IIndustries {
  image: {
    link : string;
    title : string;
    altText : string;
  };
  CTA: {
    link: string;
    title: string;
  };
}
export interface IPopularIndustriesSection {
  heading: string;
  kicker: string;
  title: string;
  trending: IPopularTrendingIndustries[];
  industries: IIndustries[];
}
export interface IIndustryDetailsHero {
  heading: string;
  desc: string;
  ctaOne: {
    title: string;
    link: string;
  };
  ctaTwo: {
    title: string;
    link: string;
  };
  image: string;
}
export interface IWhyUs {
  kicker: string;
  heading: string;
  list: [
    {
      icon: string;
      title: string;
      desc: string;
    },
  ];
}
export interface IBlogHeroSectionDetails {
  heading: string;
  desc: string;
  image: {
    title: string;
    altText: string;
    link: string;
  };
}

export interface trendingBlog {
  title: string;
  link: string;
}

export interface ITrendingBlogDetails {
  heading: string;
  list: trendingBlog[];
}

export interface IBlog {
  title: string;
  description: string;
  type: string;
  category: string;
  date: string;
  image: {
    title: string;
    link: string;
    altText: string;
  };
  readTime: string;
  author: {
    name: string;
    designation: string;
    image: {
      title: string;
      link: string;
      altText: string;
    };
  };
  CTA: {
    title: string;
    link: string;
  };
}

export interface IFeaturedBlogDetails {
  heading: string;
  featuredBlogList: IBlog[];
}

export interface IKeyInsightDetails {
  heading: string;
  insightBlog: IBlog;
}

export interface ICategory {
  title: string;
  slug: string;
}

export interface ICategoriesDetails {
  heading: string;
  categoryList: ICategory[];
}

export interface IResource {
  title: string;
  image: string;
  link: string;
}

export interface IMoreResourceDetails {
  heading: string;
  resourceList: IResource[];
}

export interface IBlogListingDetails {
  heading: string;
  blogList: IBlog[];
}

export interface IIndustryBlogDetails {
  heading: string;
  slug: string;
  blogList: IBlog[];
  info: IInfo;
}

export interface IIndustryBlogsHeroDetails {
  heading: string;
  desc: string;
  image: {
    title: string;
    link: string;
    altText: string;
  };
}

export interface ISimilarCategory {
  image: string;
  title: string;
  slug: string;
}

export interface ISimilarCategoriesDetails {
  heading: string;
  categoriesList: ISimilarCategory[];
}

export interface IBannerSection {
  heading: string;
  bannerImage: {
    title: string;
    altText: string;
    link: string;
  };
  slug: string;
  industrySlug: string;
  industry: string;
  author: {
    name: string;
    position: string;
    image: {
      title: string;
      link: string;
      altText: string;
    };
  };
  published: string;
  readTime: string;
  content: string;
}
export interface IRelatedBlogsList {
  title: string;
  description: string;
  category: string;
  type: string;
  date: string;
  image: {
    title: string;
    altText: string;
    link: string;
  };
  readTime: string;
  author: {
    name: string;
    image: {
      title: string;
      altText: string;
      link: string;
    };
    designation: string;
  };
  CTA: {
    title: string;
    link: string;
  };
}
export interface IRelatedBlogs {
  heading: string;
  blogList: IRelatedBlogsList[];
}

export interface IRelatedReportsList {
  slug: string;
  title: string;
  shortTitle: string;
  industryName: string;
  industrySlug: string;
  marketSizeData: {
    key: string;
    value: string;
  }[];
}

export interface ISuggestion {
  title: string;
  desc: string;
  image: {
    title: string;
    altText: string;
    link: string;
  };
  CTA: {
    title: string;
    link: string;
  };
}

export interface IRelatedReports {
  heading: string;
  reportList: IRelatedReportsList[];
}

/* Pricing Types */
export interface IPricingTopSection {
  heading: string;
  logoList: string[];
}
export interface IPricingReportNameSection {
  kicker: string;
  button: string;
}
export interface IPricingStructure {
  topSection: {
    heading: string;
    currencySelector: string[];
    image: string;
  };
  licenseTypes: IPricingLicenseType[];
  pricingComparison: {
    heading: string;
    table: IPricingComparison[];
  };
}
export interface IPricingContactSection {
  heading: string;
  contactData: IPricingContact[];
}
export type TLicenseType = "single" | "team" | "enterprise";
export interface IPricingLicenseType {
  type: TLicenseType;
  heading: string;
  included: {
    heading: string;
    items: string[];
  };
}
export interface IPricingComparison {
  Feature: string;
  "Single User License": boolean;
  "Team License": boolean;
  "Enterprise/Corporate License": boolean;
}
export interface IPricingContact {
  icon: string;
  heading: string;
  description: string;
  link: string;
  type: "number" | "email" | "link";
}
export interface IPrice {
  single: string;
  team: string;
  enterprise: string;
}
export interface IDynamicReportData {
  reportName: string;
  reportDescription: string;
  reportPrice: IPrice;
  discountedPrice: IPrice;
  discountedPercentage: IPrice;
}
