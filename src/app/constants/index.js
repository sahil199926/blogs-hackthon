import synapseLogo from "@/assets/synapse-logo.svg";
import synapseMobileLogo from "@/assets/mobile-synapse-logo.svg";
//clients logos
import boeh from "@/assets/clients/boeh.svg";
import coca from "@/assets/clients/Coca.svg";
import Epson from "@/assets/clients/Epson.svg";
import cargill from "@/assets/clients/cargill.svg";
import Microsoft from "@/assets/clients/Microsoft.svg";
import Qualcomm from "@/assets/Qualcomm.svg";
import sabre from "@/assets/clients/sabre.svg";
import caseStudiesBanner from "@/assets/case-studies-banner.png";
import caseStudiesFeatureBanner from "@/assets/Cargill.svg";

//Why synapse images
import whySynapse1 from "@/assets/whySynapse1.png";
import whySynapse2 from "@/assets/whySynapse2.png";
import whySynapse3 from "@/assets/whySynapse3.png";
import whySynapse4 from "@/assets/whySynapse4.png";
//Hubs Section images

import cropProtection from "@/assets/crop_protection.svg";
import freightLogistics from "@/assets/freight_logistic.svg";
import vehicles from "@/assets/vehicles.svg";
//SolutionsTAb images
import reports from "@/assets/solutions-reports.png";
import myRA from "@/assets/solutions-myRA.png";
import customResearch from "@/assets/solutions-custom-research.svg";
import MarketData from "@/assets/solutions-market-data.svg";
import trends from "@/assets/solutions-trends.svg";
import synapseTool from "@/assets/solutions-synapse-tool.svg";
//homepage news
import ForbesLogo from "@/assets/ForbesLogo.png";
import MinyLogo from "@/assets/MinyLogo.png";
import GPTWLogo from "@/assets/GPTW.svg";
import GPTWLogo2022 from "@/assets/GPTW_2022.png";
//homepage awards
import MRSI from "@/assets/MRSI.svg";
import MRSI_whitebg from "@/assets/MRSI_whitebg.svg";
import ESOMAR from "@/assets/ESOMAR.svg";
import ESOMAR_whitebg from "@/assets/ESOMAR_whitebg.svg";
import ISO from "@/assets/ISO.png";
import BgImg from "@/assets/awardsBg.png";

//homepage whats new section
import Bottle from "@/assets/bottle.svg";
import Ai from "@/assets/ai.svg";
import Cargill from "@/assets/cargillLogo.svg";

//custom research page case studies companies
import Company1 from "@/assets/custom_research_company1.svg";
import Company2 from "@/assets/custom_research_company2.svg";
import Company3 from "@/assets/custom_research_company3.svg";

//customer stories
import TDSynnex from "@/assets/CustomerStoryTDSynnex.png";

import BlogsHero1 from "@/assets/blogs_hero_1.svg";
import Mentholatum from "@/assets/CustomerStoryMentholatum.png";
import {
  FileQuestionIcon,
  HelpCircle,
  Shuffle,
  ThumbsUp,
  UsersRound,
  ChartNoAxesCombined,
  BookMarked,
  TrendingUp,
  HeartPulse,
  Sparkles,
  Crosshair,
  Lightbulb,
  Key,
  HandHeart,
  Award,
  BookCheck,
  Footprints,
  ChartPie,
  Phone,
  Mail,
  Link,
} from "lucide-react";

import CaseStudiesImg from "@/assets/CaseStudies.svg";
import FaqsImg from "@/assets/Faqs.svg";
import InsightsImg from "@/assets/Insight.svg";
import Aerospace from "@/assets/Aerospace.png";

//Contact Us
import contactUsHeroImage from "@/assets/Awards1.png";

//Careers
import { BriefcaseBusiness } from "lucide-react";
import Gallery from "@/assets/Gallery.png";

//Import TeamMembers
import TeamMember1 from "@/assets/Team_Member_1.png";

//Import Resources and Mobile

import reportLandingPage from "@/assets/reportLandingPage.png";

// pricing page
import Pci_Approved from "@/assets/pci_approved.svg";

// our customers
export const ourCustomers = {
  kicker: "OUR CUSTOMERS",
  imgList: [
    {
      label: "boeh",
      src: boeh,
    },
    {
      label: "Coca Cola",
      src: coca,
    },
    {
      label: "Epson",
      src: Epson,
    },
    {
      label: "Cargill",
      src: cargill,
    },
    {
      label: "Microsoft",
      src: Microsoft,
    },
    {
      label: "Qualcomm",
      src: Qualcomm,
    },
    {
      label: "sabre",
      src: sabre,
    },
  ],
};

// customer testimonials
export const customerStories = {
  kicker: "CUSTOMER STORIES",
  heading: "Don’t Just Take Our Words For It",
  customerTestimonials: [
    {
      comment: {
        heading: "",
        body: "Thank you for providing us with a fantastic cybersecurity market intelligence report. The report was provided quickly and covers all the key areas that show an in-depth understanding of the market. The level of detail and coverage in the report is impressive. We have used the report to shape our global go-to-market value proposition, for a multi-billion dollar business unit. The feedback from the team has been really positive. It is wonderful to see regional teams building this market intelligence into their own presentations. This is proof in itself of the quality of the report. Thank you again.",
      },
      customer: {
        profileImage: TDSynnex,
        name: "Lawrence Roberts",
        position: "Senior Global Manager For Strategic Go-to-Market",
        company: "TD SYNNEX",
      },
      link: "https://www.mordorintelligence.com/testimonials/Recommendation-TD-SYNNEX.pdf",
    },
    {
      comment: {
        heading: "",
        body: "We used Mordor Intelligence’s Skincare research which focused on the skincare category. This gave us a view of current splits and growths, and a forecast of market sizes and growths. As a business we were able to use this information to plan around which categories were the best to focus on, based on long term growth. The research also gave us a lot of information on what competitors and brands are doing well, as well as what the global trends are with examples. The consumer behaviour analysis also gave some great insight as to how people are shopping and researching products in the skincare category. All in all the research has enabled us to make more informed business decisions.",
      },
      customer: {
        profileImage: Mentholatum,
        name: "Trish Erasmus",
        position: "Skincare Brand Manager",
        company: "Mentholatum SA",
      },
      link: "https://www.mordorintelligence.com/testimonials/Mentholatum-SA-Skin-Care.pdf ",
    },
  ],
};

export const ACCOUNT_IDS = {
  VWOAccountId:
    process.env.NEXT_PUBLIC_APP_ENV == "production"
      ? 708874
      : process.env.NEXT_PUBLIC_APP_ENV == "staging"
        ? 731627
        : 731615,
  GoogleTagManagerID:
    process.env.NEXT_PUBLIC_APP_ENV == "production"
      ? "GTM-5TRTJMQ"
      : process.env.NEXT_PUBLIC_APP_ENV == "staging"
        ? "GTM-WP76Q7GT"
        : "GTM-5ZSQ336J",
  GoogleAnalyticsID:
    process.env.NEXT_PUBLIC_APP_ENV == "production"
      ? "G-P2RH4GY79Y"
      : process.env.NEXT_PUBLIC_APP_ENV == "staging"
        ? "GT-MKP3MX3"
        : "G-TXQJ2E10ZN",
  linkedID: "5870796",
};

export const contactUsPage = {
  contactUs: {
    heading: "Contact Mordor Intelligence",
    desc: "Looking for answers on market intelligence? Contact us today, our experts are here to guide you every step of the way.",
    headerImage: contactUsHeroImage,
    inquiryFormData: {
      title: "Enquiry",
      cardData: [
        {
          label: "Ask us",
          icon: HelpCircle,
          title: "Let us know how your experience was with us? ",
          mailData: "Mordor.askus@mordorintelligence.com",
        },
        {
          label: "Media",
          icon: HelpCircle,
          title: "Let us know how your experience was with us? ",
          mailData: "Mordor.askus@mordorintelligence.com",
        },
        {
          label: "Careers",
          icon: FileQuestionIcon,
          title: "Let us know how your experience was with us? ",
          mailData: "Mordor.askus@mordorintelligence.com",
        },
      ],
    },
    feedbackFormData: {
      leftSection: {
        title: "Feedback Form",
        desc: "Let us know how your experience was with us? Your feedbacks are invaluable to us to provide you with best experience",
        CTA: {
          title: "Submit",
          link: "#",
        },
        icon: FileQuestionIcon,
      },
      rightSection: {
        title: "Office Location",
        AddressLine1Icon: FileQuestionIcon,
        AddressLine1: "Hyderabad, India",
        AddressLine2:
          "11th Floor, Rajapushpa Summit Nanakramguda Rd, Financial District, Gachibowli Hyderabad,Telangana - 500008, India",
      },
    },
    faqSection: {
      title: "More questions? We have Answers.",
      faqData: [
        {
          question: "What services does Mordor Intelligence offer?",
          answer:
            "We provide market intelligence and research solutions, including market overviews, competitive landscape analysis, industry trends, custom research, and consulting services tailored to your business needs.",
        },
        {
          question: "How can I request a custom research report?",
          answer:
            "You can request a custom report by filling out our Request for Proposal form on this page, or by contacting us directly at info@mordorintelligence.com.",
        },
        {
          question: "How long does it take to deliver a report?",
          answer:
            "The timeline for delivering a report depends on the scope of the research. Standard reports are usually delivered within a few business days, while custom research projects may take 1-4 weeks based on complexity.",
        },
        {
          question: "What industries does Mordor Intelligence cover?",
          answer:
            "We cover a wide range of industries, including healthcare, technology, agriculture, energy, consumer goods, and more. Explore our complete industry coverage on our website.",
        },
        {
          question:
            "Who should I contact for media-related/ partnership queries?",
          answer:
            "For media inquiries, reach out to us at media@mordorintelligence.com. ",
        },
        {
          question: "Can I speak to someone directly about my requirements?",
          answer:
            " Absolutely! You can email us at info@mordorintelligence.com, and one of our representatives will get in touch with you promptly. ",
        },
      ],
    },
    NewsLetterSection: {
      title: "Subscribe To Our Newsletter And Stay Updated",
      desc: "Subscribe to get updates on new reports launches, Synapse tool and interesting insights",
    },
  },
};

export const aboutUsPage = {
  aboutUs: {
    banner: {
      heading: "We Are Mordor Intelligence.",
      desc: "Innovative minds thrive in our vibrant workplace culture,where collaboration fuels creativity. Our dynamic team's passion for tackling intricate challenges drives our success.",
      CTA: {
        title: "About Us",
        link: "#",
      },
      certificate: [GPTWLogo2022, GPTWLogo],
      headerImage:
        "https://s3.mordorintelligence.com/static/about-us-hero.webp",
    },
    mission: {
      title: "Our mission ",
      slogan:
        "Consistently providing credible insights that drive business success through strategic analysis and actionable recommendations.",
      coreValues: [
        "Consistently providing credible insights that drives business.",
        "Embrace hard work & collabration",
        "Grow 1% everyday",
        "Deliver the best work",
      ],
    },
    ourStory: {
      title: "OUR STORY",
      heading: "A Decade Of Excellence",
      desc: "We’ve been self-funded and partnered with 6000+ enterprises spanning 20 industries, completing over 10,000 projects. Our specialized research teams provide precise data and insights, empowering clients with competitive market intelligence.",
      timelineData: [
        {
          year: 2014,
          description:
            "For more than 10 years, we’ve guided businesses with trusted insights, shaping success one informed decision at a time.",
        },
        {
          year: 2015,
          description:
            "For more than 10 years, we’ve guided businesses with trusted insights, shaping success one informed decision at a time.",
        },
        {
          year: 2016,
          description:
            "For more than 10 years, we’ve guided businesses with trusted insights, shaping success one informed decision at a time.",
        },
        {
          year: 2017,
          description:
            "For more than 10 years, we’ve guided businesses with trusted insights, shaping success one informed decision at a time.",
        },
        {
          year: 2018,
          description:
            "For more than 10 years, we’ve guided businesses with trusted insights, shaping success one informed decision at a time.",
        },
      ],
    },
    ourExpertise: {
      title: "Our Expertise",
      desc: "Get a head start with the insights to guide your decision-making process. Our expertise lies in furnishing you with market insights, empowering you to make well-informed decisions.",
      steps: [
        {
          text: "Pricing Strategy",
          link: "#",
        },
        {
          text: "Sustainability",
          link: "#",
        },
        {
          text: "Pricing Strategy",
          link: "#",
        },
        {
          text: "Supply Chain",
          link: "#",
        },
      ],
    },
    whatWeDo: {
      heading: "What We Do",
      title: "Deliver Actionable Insights",
      desc: "For over a decade, we've been the beacon of trust for businesses, offering insightful guidance. Our commitment to informed decisions has been instrumental in shaping countless successes. With precision and dedication, we navigate the complexities of markets, ensuring strategic clarity. ",
      steps: [
        {
          text: "Pricing Strategy",
          link: "#",
        },
        {
          text: "Sustainability",
          link: "#",
        },
        {
          text: "Pricing Strategy",
          link: "#",
        },
        {
          text: "Supply Chain",
          link: "#",
        },
      ],
    },
    socialResponsibility: {
      heading: "What we believe in",
      bgImage: "https://s3.mordorintelligence.com/static/socity-resp.webp",
      title: "Corporate Social Responsiblity",
      desc: "At Mordor Intelligence, we recognize the pivotal role we play in shaping a brighter future for India’s youth. Our Corporate Social Responsibility initiatives are deeply rooted in this commitment to empower the next generation for sustainable success.",
      CTA: {
        title: "Learn More",
        link: "#",
      },
    },
    awards: {
      kicker: "Awards",
      heading: "You are in Safe Hands",
      text: "Trusted by brands across industries, geographies, and sizes.",
      logoList: [MRSI, ESOMAR, GPTWLogo, ISO],
      bgImg: BgImg,
    },
    contactUs: {
      kicker: "CONTACT US",
      heading:
        "Today's Accessible Intelligence, Unlocking Tomorrow's Potential.",
      cta: {
        title: "Submit",
        link: "#",
      },
    },
    cultureSection: {
      bgColor: "#FFFFFF",
      kicker: "Culture",
      heading: "It’s all About the People",
      description:
        "Mordor's people-first culture continues to inspire our employees to reach their full potential through courage, agility, creativity, independence, learning, and collaboration.",
      cta: {
        title: "Join Our Team",
        link: "#",
      },
      galleryImages: Gallery,
    },
    ourClients: {
      title: "OUR CLIENTS",
      heading: "Endorsed by the Premier Brands in the Industry ",
      CTA: {
        title: "See All Clients",
        link: "#",
      },
      clients: [
        boeh,
        coca,
        Epson,
        cargill,
        Microsoft,
        Qualcomm,
        sabre,
        boeh,
        coca,
        Epson,
        cargill,
        Microsoft,
        Qualcomm,
        sabre,
      ],
      mobileImages: {
        kicker: "OUR CUSTOMERS",
        imgList: [
          {
            label: "boeh",
            src: boeh,
          },
          {
            label: "Coca Cola",
            src: coca,
          },
          {
            label: "Epson",
            src: Epson,
          },
          {
            label: "Cargill",
            src: cargill,
          },
          {
            label: "Microsoft",
            src: Microsoft,
          },
          {
            label: "Qualcomm",
            src: Qualcomm,
          },
          {
            label: "sabre",
            src: sabre,
          },
        ],
      },
    },
    teamSection: {
      title: "Meet Our Leader",
      teamMember: [
        {
          name: "Rahul Sharma",
          position: "Senior Manager, New & Emerging Opportunities Source ",
          link: TeamMember1,
        },
        {
          name: "Rahul Sharma 2",
          position: "Sales & Marketing",
          link: TeamMember1,
        },
        {
          name: "Rahul Sharma 3",
          position: "Senior Manager, New & Emerging Opportunities Source ",
          link: TeamMember1,
        },
        {
          name: "Rahul Sharma 4",
          position: "Senior Manager, New & Emerging Opportunities Source ",
          link: TeamMember1,
        },
        {
          name: "Rahul Sharma 5",
          position: "Senior Manager, New & Emerging Opportunities Source ",
          link: TeamMember1,
        },
        {
          name: "Rahul Sharma 6",
          position: "Senior Manager, New & Emerging Opportunities Source ",
          link: TeamMember1,
        },
        {
          name: "Rahul Sharma 7",
          position: "Senior Manager, New & Emerging Opportunities Source ",
          link: TeamMember1,
        },
        {
          name: "Rahul Sharma 8",
          position: "Senior Manager, New & Emerging Opportunities Source ",
          link: TeamMember1,
        },
      ],
      CTA: {
        title: "Meet Our Team",
        link: "#",
      },
    },
  },
};

export const homePageStaticData = {
  ourCustomers: {
    kicker: "OUR CUSTOMERS",
    imgList: [
      {
        label: "boeh",
        src: boeh,
      },
      {
        label: "Coca Cola",
        src: coca,
      },
      {
        label: "Epson",
        src: Epson,
      },
      {
        label: "Cargill",
        src: cargill,
      },
      {
        label: "Microsoft",
        src: Microsoft,
      },
      {
        label: "Qualcomm",
        src: Qualcomm,
      },
      {
        label: "sabre",
        src: sabre,
      },
    ],
  },
};

export const synapseLandingPage = {
  nav: {
    first: {
      title: "Solution",
      link: "solution",
      children: [
        {
          title: "Features",
          link: "features",
        },
        {
          title: "Pricing",
          link: "pricing",
        },
      ],
    },
    second: {
      title: "Industries",
      link: "/industries",
      children: [
        {
          title: "About",
          link: "about",
        },
        {
          title: "Team",
          link: "team",
        },
        {
          title: "Contact",
          link: "contact",
        },
      ],
    },
    third: {
      title: "Hub",
      link: "/hub",
      children: [
        {
          title: "Meat and Meat Substitutes",
          link: "meat",
        },
      ],
    },
  },
  heroSection: {
    heading: "Synapse: Your Market Intelligence Command Centre",
    desc: "Revolutionizing Market Intelligence with Synapse—where cutting-edge AI seamlessly blends with human expertise to drive smarter decisions and unparalleled insights.",
    ctaOne: {
      title: "Start Your Trial",
      link: "https://synapse.mordorintelligence.com/register",
    },
    ctaTwo: {
      title: "Login to Synapse",
      link: "https://synapse.mordorintelligence.com/",
    },
    logo: {
      desktop: synapseLogo,
      mobile: synapseMobileLogo,
    },
  },
  majorUpdates: {
    heading: "MAJOR UPDATES",
    link: "#",
    list: [
      "Now visualize insights seamlessly with enhanced dashboards.",
      "650+ new reports added this month, covering emerging trends across markets.",
      "myRA AI supports 30+ languages now! Get insights in your language.",
    ],
  },
  trialCta: {
    heading: "Enjoy a 7-day free trial with Synapse!",
    price: "",
    cta: {
      title: "Start a Free Trial",
      link: "https://synapse.mordorintelligence.com/register",
    },
  },
  ourCustomers: {
    kicker: "OUR CUSTOMERS",
    imgList: [
      {
        label: "boeh",
        src: boeh,
      },
      {
        label: "Coca Cola",
        src: coca,
      },
      {
        label: "Epson",
        src: Epson,
      },
      {
        label: "Cargill",
        src: cargill,
      },
      {
        label: "Microsoft",
        src: Microsoft,
      },
      {
        label: "Qualcomm",
        src: Qualcomm,
      },
      {
        label: "sabre",
        src: sabre,
      },
    ],
  },
  synapseAction: {
    title: "How Synapse Works for You",
    desc: "Imagine having everything you need – reports, market estimates, and shares – at your fingertips, on a single, intuitive dashboard. Spend less time searching, more time strategizing. Synapse empowers your team with instant access to critical market intelligence on a user-friendly dashboard.",
    url: "https://www.youtube.com/embed/k09TN_YN-ss",
  },
  solutionTabs: {
    heading: "Our Offerings",
    tabOptions: [
      "myRA AI",
      "Reports Library",
      "Industry Hubs",
      "On-Demand Reports",
      "Custom Research",
    ],
    tabData: [
      {
        heading: "The future of market intelligence",
        description: `Prefer direct answers over lengthy reports? Our AI-powered assistant,
myRA, provides instant insights in your language, answering questions
on data, analysis, and more—qualitative and quantitative.`,
        stats: [
          // {
          //   value: "AI meets Human Intelligence",
          // },
        ],
        imgUrl: myRA,
        CTA: {
          title: "Subscribe Now",
          link: "https://synapse.mordorintelligence.com/register",
        },
      },
      {
        heading: "Read what your competitor is reading!",
        description:
          "Covers a broad spectrum of industries and topics, providing foundational data and actionable insights in pre-built, standardized formats that save you time and enhance efficiency.",
        stats: [
          { label: "Companies", value: "6,000 +" },
          { label: "Reports", value: "9,000 +" },
          { label: "Industries", value: "100 +" },
        ],
        imgUrl: reports,
        CTA: {
          title: "View All Reports",
          link: "https://www.mordorintelligence.com/market-analysis",
        },
      },
      {
        heading: "Macro to Micro Trends",
        description:
          "Our Industry Hubs dive deep into specific markets, offering rich, customizable data and pre-built reports. Each Hub provides in-depth analysis that translates complex market landscapes into clear, actionable intelligence.",
        stats: [
          { label: "Hubs", value: "27" },
          { label: "Reports", value: "1,000 +" },
          { label: "Markets", value: "1,400 +" },
        ],
        imgUrl: customResearch,
        CTA: {
          title: "Subscribe Now",
          link: "https://synapse.mordorintelligence.com/register",
        },
      },
      {
        heading: "Get the intelligence you need, when you need it",
        description:
          "Move beyond cookie-cutter solutions with tailored market intelligence to meet real-time business demands.",
        stats: [{ label: "Projects Delivered", value: "10,000" }],
        imgUrl: MarketData,
        CTA: {
          title: "Request Custom Insights",
          link: "#contact-us-section",
        },
      },
      {
        heading:
          "Make smarter, data-driven decisions with insights tailored to your industry.",
        description:
          "Uncover emerging trends shaping your industry. Make data-driven decisions with comprehensive market sizing, trends, and forecasts.",
        stats: [
          { label: "Research Experts", value: "550 +" },
          { label: "Years of Experience", value: "10 +" },
        ],
        imgUrl: customResearch,
        CTA: {
          title: "Explore Solutions",
          link: "https://www.mordorintelligence.com/custom-research",
        },
      },
    ],
  },
  whySynapse: {
    title: "Say Goodbye to Data Silos And Fragmented Reports",
    desc: "",
    heroImg: whySynapse1,
    cta: {
      title: "Start a Free Trial",
      link: "https://synapse.mordorintelligence.com/register",
    },
    points: [
      {
        title: "Get Instant Insights with myRA AI",
        desc: "AI-powered tools deliver actionable intelligence faster.",
        link: whySynapse1, // in image tag link.src causing issue
      },
      {
        title: "Unify Your Market Research",
        desc: "Access 20,000+ reports across industries and geographies.",
        link: whySynapse2,
      },
      {
        title: "Visualize Data",
        desc: "Interactive dashboards simplify complex insights for informed decision-making.",
        link: whySynapse3,
      },
      {
        title: "Subscription Flexibility",
        desc: "Choose a subscription plan tailored to your business, from 50 to 5,000 reports.",
        link: whySynapse4,
      },
    ],
  },
  subscription: {
    title: "subscriptions",
    desc: "The Future of Market Intelligence is Here",
    descTwo:
      "Say goodbye to fragment data. Get synapse. analyze data like a pro and use actionable insights to drive business impact.",
  },
  hubs: {
    title: "Uncover Industry Insights with Hubs",
    desc: "Our Hubs offer a unified, in-depth view of specific markets, ideal for companies that need precise, segmented industry insights. Each Hub consolidates a decade of research, delivering actionable data and market intelligence through a single, easy-to-navigate platform.",
    hubList: [
      {
        img: cropProtection,
        label: "CROP PROTECTION",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/crop-protection-chemicals",
      },
      {
        img: freightLogistics,
        label: "FREIGHT AND LOGISTICS",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/freight-and-logistics",
      },
      {
        img: vehicles,
        label: "VEHICLES",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/vehicles",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/A%26S/adhesive_latest.png",
        label: "ADHESIVES AND SEALANTS",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/adhesives-and-sealants",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Meat/meat_latest.png",
        label: "MEATS AND MEAT SUBSTITUTES",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/meats-and-meat-substitutes",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/feed-additive/feed_additive_latest.png",
        label: "FEED ADDITIVE",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/feed-additives",
      },

      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Seeds/27.png",
        label: "SEEDS",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/seeds",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Proteins/protein_latest.png",
        label: "PROTEINS",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/protein-ingredients",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/petfoods/pet_food_latest.png",
        label: "PET FOOD",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/pet-food",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/dairy/dairy.jpg",
        label: "DAIRY AND DAIRY ALTERNATIVE",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/dairy-and-dairy-alternatives",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/engineering-plastics/Engineering+Plastics.png",
        label: "ENGINEERING PLASTICS",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/engineering-plastics",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/agriculture-biological/AGRICULTURAL+BIOLOGICALS.png",
        label: "AGRICULTURAL BIOLOGICALS",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/agricultural-biologicals",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/cmcc/cmcc_latest.png",
        label: "CONCRETE, MORTARS AND CONSTRUCTION CHEMICALS",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/concrete-mortar-and-construction-chemicals",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Fertilizers/fertilizer.png",
        label: "FERTILIZER",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/fertilizer",
      },

      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/LED/led_latest.png",
        label: "LED",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/led-lighting",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/cep/cep_latest.png",
        label: "CEP",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/courier-express-and-parcel-(cep)",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/food-services/food_services_latest.png",
        label: "FOOD SERVICE",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/foodservice",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/confectionary/CONFECTIONERY.png",
        label: "CONFECTIONERY",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/confectionery",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/datacenter/data_center_latest.png",
        label: "DATA CENTER",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/data-center",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/satellite/satellite_latest.png",
        label: "SATELLITE",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/satellite-and-launch-vehicle",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/soft-drink/Softdrinks.png",
        label: "SOFT DRINK",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/soft-drinks",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Road+Freight/3.jpg",
        label: "ROAD FREIGHT",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/road-freight-transport",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Aviation/21.jpg",
        label: "AVIATION",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/aviation",
      },

      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/ev-battery-packs/ev_battery_v2.png",
        label: "EV BATTERY PACK",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/ev-battery-pack",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Ebikes/ebike_latest.png",
        label: "E BIKES",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/e-bike",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/MLCC/mlcc_latest.png",
        label: "MLCC",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/mlcc",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/aircraft-cabin-interiors/aircraft_cabin_latest.png",
        label: "COMMERCIAL AIRCRAFT CABIN",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/commercial-aircraft-cabin-interior-market",
      },
    ],
  },
  customerStories: {
    kicker: "CUSTOMER STORIES",
    heading: "Don’t Just Take Our Words For It",
    customerTestimonials: [
      {
        comment: {
          heading:
            "Impressive Detail and Comprehensive Market Coverage in the Report.",
          body: "Thank you for providing us with a fantastic cybersecurity market intelligence report. The report was provided quickly and covers all the key areas that show an in-depth understanding of the market. The level of detail and coverage in the report is impressive. We have used the report to shape our global go-to-market value proposition, for a multi-billion dollar business unit. The feedback from the team has been really positive. It is wonderful to see regional teams building this market intelligence into their own presentations. This is proof in itself of the quality of the report. Thank you again.",
        },
        customer: {
          profileImage: TDSynnex,
          name: "Lawrence Roberts",
          position: "Senior Global Manager For Strategic Go-to-Market",
          company: "TD SYNNEX",
        },
        link: "https://www.mordorintelligence.com/testimonials/Recommendation-TD-SYNNEX.pdf",
      },
      {
        comment: {
          heading:
            "Consumer Behavior Insights and Market Estimates Helped Us Gain a Competitive Edge.",
          body: "We used Mordor Intelligence’s Skincare research which focused on the skincare category. This gave us a view of current splits and growths, and a forecast of market sizes and growths. As a business we were able to use this information to plan around which categories were the best to focus on, based on long term growth. The research also gave us a lot of information on what competitors and brands are doing well, as well as what the global trends are with examples. The consumer behaviour analysis also gave some great insight as to how people are shopping and researching products in the skincare category. All in all the research has enabled us to make more informed business decisions.",
        },
        customer: {
          profileImage: Mentholatum,
          name: "Trish Erasmus",
          position: "Skincare Brand Manager",
          company: "Mentholatum SA",
        },
        link: "https://www.mordorintelligence.com/testimonials/Mentholatum-SA-Skin-Care.pdf ",
      },
    ],
  },

  faq: {
    title: "More Questions For Our Future Partnership? We Have Answers",

    faqList: [
      {
        question: "How does the trial for Synapse work? ",
        answer:
          "The trial provides users with limited access to the Synapse platform to explore its features and understand its capabilities. During the trial period, users can browse through reports, view the scope, dashboards, and summary sections, but the content within reports will remain blurred. Full access to reports requires a paid subscription. ",
      },
      {
        question:
          "Can I download reports, charts, or data sheets during the trial?",
        answer:
          "No, trial accounts have limited permissions and are set to view-only mode. Downloads and full access to content are available only for paid subscribers. If you need specific data, consider upgrading to a paid subscription.",
      },
      {
        question:
          "Why do I see blurred content when I click inside a report? Blurred content",
        answer: `Can be due to one of the following reasons: 
             • Trial Account:  Trial users can only view blurred content. 
             • Library Credits:  Users with library credits can view blurred content to decide if they want to unlock the report using their credit. To gain full access to a report, click the "Get Access" button, which will deduct one library credit. `,
      },
      {
        question:
          "Where can I see the reports I have accessed or commissioned?  ",
        answer: `All accessed library reports and commissioned custom or on-demand reports will be available in the "My Reports" section of the Synapse platform. Your relationship manager will notify you when new reports are uploaded to your account.`,
      },
      {
        question: "What is myRA AI, and how does it work?",
        answer:
          "myRA AI is a proprietary AI tool available within the Synapse platform. It interacts with the information in reports to answer user queries, generate charts and tables, and provide quantitative and qualitative insights. It can converse in multiple languages and respond to complex questions based on report data.",
      },
      {
        question: "Can I download charts and tables generated by myRA AI?",
        answer:
          "Yes, users can download charts and tables generated by myRA AI. These downloads are available to paid subscribers only.",
      },
    ],
  },
  contactUs: {
    kicker: "CONTACT US",
    heading: "Today's Accessible Intelligence, Unlocking Tomorrow's Potential.",
    cta: {
      title: "Submit",
      link: "#",
    },
  },
};

export const customResearchPage = {
  heroSection: {
    heading: "Custom solutions for every single business needs",
    desc: "We take great pride in our dynamic work culture, which has earned us the prestigious Great Place to Work award for two consecutive years. This recognition highlights our exceptional environment that fosters innovation, collaboration, and personal growth.",
    cta: {
      title: "Contact Us",
      link: "#contact-us-section",
    },
    image: {
      link: "https://s3.mordorintelligence.com/static/cmasoicsam.webp",
      altText: "Custom Research Logo Alt Text",
      title: "Custom Research Logo Title",
    },
  },
  companyFacts: {
    heading: "DID YOU KNOW?",
    desc: "We have worked on over 120 custom research projects last year and total profit overall to the companies where $80million.",
  },
  ourCustomers: {
    kicker: "OUR CUSTOMERS",
    imgList: [
      {
        label: "Boehringer Ingelheim",
        src: "https://s3.mordorintelligence.com/static/boeh.webp",
        alt: "Boehringer Ingelheim Logo",
      },
      {
        label: "Coca Cola",
        src: "https://s3.mordorintelligence.com/static/Coca.webp",
        alt: "Coca Cola Logo",
      },
      {
        label: "Epson",
        src: "https://s3.mordorintelligence.com/static/Epson.webp",
        alt: "Epson Logo",
      },
      {
        label: "Cargill",
        src: "https://s3.mordorintelligence.com/static/cargill.webp",
        alt: "Cargill Logo",
      },
      {
        label: "Microsoft",
        src: "https://s3.mordorintelligence.com/static/Microsoft.webp",
        alt: "Microsoft Logo",
      },
      {
        label: "Sabre",
        src: "https://s3.mordorintelligence.com/static/sabre.webp",
        alt: "Sabre Logo",
      },
      {
        label: "Evonik",
        src: "https://s3.mordorintelligence.com/static/evonik.webp",
        alt: "Evonik Logo",
      },
      {
        label: "Fujifilm",
        src: "https://s3.mordorintelligence.com/static/fujifilm.webp",
        alt: "Fujifilm Logo",
      },
      {
        label: "Hitachi",
        src: "https://s3.mordorintelligence.com/static/hitachi.webp",
        alt: "Hitachi Logo",
      },
      {
        label: "IFFCO",
        src: "https://s3.mordorintelligence.com/static/iffco.webp",
        alt: "IFFCO Logo",
      },
      {
        label: "McKinsey",
        src: "https://s3.mordorintelligence.com/static/mckinsey.webp",
        alt: "McKinsey Logo",
      },
      {
        label: "Mitsubishi",
        src: "https://s3.mordorintelligence.com/static/mitsubishi.webp",
        alt: "Mitsubishi Logo",
      },
      {
        label: "Morgan Stanley",
        src: "https://s3.mordorintelligence.com/static/morgan-stanley.webp",
        alt: "Morgan Stanley Logo",
      },
      {
        label: "Nestle",
        src: "https://s3.mordorintelligence.com/static/nestle.webp",
        alt: "Nestle Logo",
      },
      {
        label: "Nokia",
        src: "https://s3.mordorintelligence.com/static/nokia.webp",
        alt: "Nokia Logo",
      },
      {
        label: "PepsiCo",
        src: "https://s3.mordorintelligence.com/static/pepsico.webp",
        alt: "PepsiCo Logo",
      },
    ],
  },
  featuredArticle: {
    heading: "Featured Article",
    article: {
      title: "Boosting agriculture with tech is the next big thing",
      description:
        "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
      image: {
        link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        title: "Boosting agriculture with tech is the next big thing",
        altText: "Boosting agriculture Logo Alt Text",
      },
      readTime: "13 Mins Read",
      author: {
        name: "Rahul Sharma",
        imgUrl: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
        designation: "Lead Researcher, Agriculture",
      },
      CTA: {
        title: "Read Article",
        link: "",
      },
    },
  },
  solutionTabs: {
    kicker: "RESEARCH METHODOLOGY",
    heading: "Solution that Drives Business Impact",
    tabOptions: [
      "Overview",
      "Desk research",
      "Expert interviews",
      "Data modelling",
      "Survey",
    ],
    tabData: [
      {
        heading: "",
        description: "",
        imgSection: {
          image: {
            link: "https://s3.mordorintelligence.com/static/solutions-reports.webp",
            title: "Repository Databases with over 30000+ Reports",
            altText: "Repository Databases Alt Text",
          },
          onlyImage: true,
        },
        points: [
          {
            title: "Step",
            numberingIconAfter: true,
            description:
              "Mordor Intelligence is dedicated to providing market intelligence that offers actionable insights you can rely on. Our research methodology, which combines secondary and primary research, ensures the accuracy and credibility of our findings. Our process begins with thorough desk research, where we delve into paid databases, internal data, and a variety of publications to grasp the current market landscape.",
          },
          {
            title: "Step",
            numberingIconAfter: true,
            description:
              "This initial phase is then complemented by detailed primary research. Here, we engage in interviews with industry experts, utilise market surveys, and meticulously validate all data through triangulation and expert analysis. Every piece of information we gather is carefully scrutinised to draw meaningful conclusions.",
          },
          {
            title: "Step",
            numberingIconAfter: true,
            description:
              "Our analysts and subject matter experts also employ heuristic methods for market estimates, anchoring our market models and forecasts in reliable data. Finally, we emphasise the validation process, employing rigorous methods to ensure the accuracy of our final data points.",
          },
        ],
      },
      {
        heading: "",
        description:
          "Desk research, also referred to as secondary research, underpins our market research methodology. It entails consolidating data and insights from existing publications to discern market trends, technological advancements, and industry shifts. Below, we outline the key sources we tap into for our secondary research:",
        imgSection: {
          image: {
            link: "https://s3.mordorintelligence.com/static/solutions-reports.webp",
            title: "Repository Databases with over 30000+ Reports",
            altText: "Repository Databases Alt Text",
          },
          onlyImage: false,
          title: "Repository Databases with over 30000+ Reports",
          description:
            "At Mordor, our market intelligence services are strengthened by the strategic use of high-quality purchased databases. These databases are essential tools in our research methodology, providing us with extensive, reliable, and up-to-date information that enhances the accuracy and depth of our market analysis. Sourced from trusted providers, they offer accurate and validated information, boosting our analytical capabilities for benchmarking, trend identification, market sizing, segmentation, and competitive analysis. Integrating these databases with our proprietary data ensures a comprehensive approach, while adhering to ethical and legal standards.",
        },
        points: [
          {
            title: "Purchased Databases",
            numberingIconAfter: false,
            list: [
              "Company Databases",
              "Industry Specific Databased",
              "Content Aggregators",
              "Niche Data Sets",
            ],
          },
          {
            title: "Secondary Databases",
            numberingIconAfter: false,
            list: [
              "Industry and Government Websites",
              "Think Tanks",
              "Academic and Scientific Websites",
            ],
          },
          {
            title: "Company Websites",
            numberingIconAfter: false,
            list: ["Company Roadmap", "Company Databases"],
          },
          {
            title: "Mordor’s Internal Databases",
            numberingIconAfter: false,
            list: ["Our Internal Databases"],
          },
        ],
      },
      {
        heading: "",
        description:
          "For the past decade, our research process has hinged on our adeptness at swiftly tapping into our extensive expert network to glean robust insights. Expert interviews stand as pivotal pillars, offering firsthand insights and data validation. We liaise with industry experts spanning the value chain, ensuring a blend of qualitative and quantitative data. Our outreach extends to raw material suppliers, manufacturers, distributors, regulators, market players, and independent experts, tailored to each project's needs. Our interviewees, carefully selected, encompass a broad spectrum of roles, from CXOs to specialized experts and middle management.",
        imgSection: {
          image: {
            link: "https://s3.mordorintelligence.com/static/solutions-reports.webp",
            title: "Repository Databases with over 30000+ Reports",
            altText: "Repository Databases Alt Text",
          },
          onlyImage: false,
          title: "Repository Databases with over 30000+ Reports",
          description:
            "At Mordor, our market intelligence services are strengthened by the strategic use of high-quality purchased databases. These databases are essential tools in our research methodology, providing us with extensive, reliable, and up-to-date information that enhances the accuracy and depth of our market analysis. Sourced from trusted providers, they offer accurate and validated information, boosting our analytical capabilities for benchmarking, trend identification, market sizing, segmentation, and competitive analysis. Integrating these databases with our proprietary data ensures a comprehensive approach, while adhering to ethical and legal standards.",
        },
        points: [
          {
            title: "Interview Methodologies",
            numberingIconAfter: false,
            list: [
              "Telephonic Interviews",
              "Email Interviews",
              "Surveys",
              "Virtual Councils",
            ],
          },
          {
            title: "Expert Network",
            numberingIconAfter: false,
            list: [
              "In-house Panel",
              "Extended Network",
              "Need Based Recruitment",
              "Regional Scope",
            ],
          },
        ],
      },
      {
        heading: "",
        description:
          "Market modeling is pivotal in predicting future trends, growth rates, and competitor market shares. Our meticulous data modeling process entails pinpointing crucial variables, crafting statistical and econometric models, and rigorously validating these models to ensure precise market trend and market size estimations. Here's a detailed look at our market modeling methodology:",
        imgSection: {
          image: {
            link: "https://s3.mordorintelligence.com/static/solutions-reports.webp",
            title: "Repository Databases with over 30000+ Reports",
            altText: "Repository Databases Alt Text",
          },
          onlyImage: false,
          title: "Repository Databases with over 30000+ Reports",
          description:
            "At Mordor, our market intelligence services are strengthened by the strategic use of high-quality purchased databases. These databases are essential tools in our research methodology, providing us with extensive, reliable, and up-to-date information that enhances the accuracy and depth of our market analysis. Sourced from trusted providers, they offer accurate and validated information, boosting our analytical capabilities for benchmarking, trend identification, market sizing, segmentation, and competitive analysis. Integrating these databases with our proprietary data ensures a comprehensive approach, while adhering to ethical and legal standards.",
        },
        points: [
          {
            title: "Identifying Key Variables",
            description:
              "Relevant variables are identified and tested against historical market data through an iterative process involving industry experts. Each market demands a deep dive into distinct variables, including but not limited to player performance, product penetration, demand-supply dynamics, new product introductions, pricing, regulatory landscapes, and customer behaviour.",
            numberingIconAfter: false,
          },
          {
            title: "Secondary Databases",
            description:
              "Drawing from critical industry trends, variables, and economic indicators, we develop a bespoke market forecasting model for each sector. We determine correlations, dependencies, and weightage through a blend of extensive desk research, primary research, and expert consultations. Our growth forecasts amalgamate statistical techniques with insights gleaned from expert discussions",
            numberingIconAfter: false,
          },
        ],
      },
      {
        heading: "",
        description:
          "Surveys play a pivotal role in collecting quantitative data from industry experts and decision-makers, while also gauging market sentiment from a wider audience in real-time. Our survey team doesn't just assist clients with survey-centric projects; they also bolster our research methodology by uncovering elusive insights and data in intricate markets. Survey insights are instrumental in comprehending the behaviors, preferences, and requirements of industry players, enriching the qualitative and quantitative aspects of our data modeling. With seasoned specialists, interviewers, and project managers, our team guarantees top-notch data collection and analysis.",
        imgSection: {
          image: {
            link: "https://s3.mordorintelligence.com/static/solutions-reports.webp",
            title: "Repository Databases with over 30000+ Reports",
            altText: "Repository Databases Alt Text",
          },
          onlyImage: false,
          title: "Repository Databases with over 30000+ Reports",
          description:
            "At Mordor, our market intelligence services are strengthened by the strategic use of high-quality purchased databases. These databases are essential tools in our research methodology, providing us with extensive, reliable, and up-to-date information that enhances the accuracy and depth of our market analysis. Sourced from trusted providers, they offer accurate and validated information, boosting our analytical capabilities for benchmarking, trend identification, market sizing, segmentation, and competitive analysis. Integrating these databases with our proprietary data ensures a comprehensive approach, while adhering to ethical and legal standards.",
        },
        points: [
          {
            title: "Capabilities",
            numberingIconAfter: false,
            list: [
              "Telephonic Surveys",
              "Online Surveys",
              "CATI: Computer Assisted Telephone Interviewing ",
              "Web-Assisted Telephonic Surveys",
            ],
          },
          {
            title: "Expert Network",
            numberingIconAfter: false,
            list: [
              "Data Reporting",
              "Sampling",
              "Questionnaire Design",
              "Quality Review",
              "Data Collection",
            ],
          },
          {
            title: "Survey Coverage",
            numberingIconAfter: false,
            list: [
              "Types of survey: B2B, B2C, B2G",
              "Survey size: 10 to 5000+",
              "Countries: English & non-English surveys (60+ country)",
            ],
          },
        ],
      },
    ],
  },
  customSolution: {
    kicker: "CUSTOM SOLUTIONS",
    heading: "Solution for all your needs",
    desc: "We have to solutions for all your objectives and we have curated solutions set that take your business to the next level.",
    imgUrl: "https://s3.mordorintelligence.com/static/Video32.webp",
    image: {
      link: "https://s3.mordorintelligence.com/static/Video32.webp",
      title: "Solution for all your needs",
      altText: "Solution for all your needs Alt Text",
    },
    cta: {
      title: "Contact Us",
      link: "#contact-us-section",
    },
  },
  advisoryInsights: {
    heading: "Advisory & Insights",
    desc: "This section provides an overview of key information and features.",
    title: "Advisory & Insights",
    description: "Recommendation Go-to Market Support Strategic Inputs",
    topics: [
      {
        title: "Data Collection and Analysis Support",
        list: [
          {
            title: "Data Analytics and Visualization",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Data Collection, Manipulation incl. Web Scraping",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "B2B and B2C Surveys and Interviews",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
        ],
      },
      {
        title: "Product Intelligence Support",
        list: [
          {
            title: "Import and Export Intelligence",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Commodity Pricing Intelligence",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Product Pricing Intelligence",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Product Positioning Assessment",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "New Product Launch Tracker",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Product Claims Assessment",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Product Concept Testing",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
        ],
      },
      {
        title: "Competitive Intelligence Support",
        list: [
          {
            title: "Company Profilling",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Competition Assessment Incl. Market Share",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Drilled Down Revenue Estimations",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Employer Value Proposition",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
        ],
      },
      {
        title: "Investment Intelligence Support",
        list: [
          {
            title: "Project Feasibility Analysis",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "R&D and Patent Analysis Support",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title:
              "M&A, JV Support - Scouting, Shortlisting, Target Assessment",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
        ],
      },
      {
        title: "Market Intelligence Support",
        list: [
          {
            title: "Market Size and Segmentation",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Go to Market Strategies",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Market Dynamics and New Developments",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Go to Market Strategies",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
        ],
      },
      {
        title: "Customer, Distributor, Supplier Intelligence",
        list: [
          {
            title: "Identification of Potential Partners",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Shortlisting/Finalization of Potential Partners",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Customer Need Analysis",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Customer's Purchase and Usage Behavior",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Customer/Partners Feedback and Satisfaction*",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Brand Perception Analysis",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Key Opinion Leader Insights",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
        ],
      },
      {
        title: "Market Structure Assessment",
        list: [
          {
            title: "Macroeconomic Analysis",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Value Chain and Supply Chain Analysis",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Regulatory Assessment",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Technology Scouting and Assessment*",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
          {
            title: "Sourcing and Category Intelligence",
            desc: "In-depth Macroeconomic Analysis within Market Structure Assessment.",
          },
        ],
      },
    ],
  },
  caseStudies: {
    kicker: "CASE STUDIES",
    heading: "Our Impact of Custom Research",
    cta: {
      title: "View All Case Studies",
      link: "",
    },
    studies: [
      {
        title: "Heineken's Strategic Expansion in Emerging Markets.",
        image: {
          link: "https://s3.mordorintelligence.com/static/evonik.webp",
          title: "Heineken's Strategic Expansion in Emerging Markets.",
          altText: "Heineken Logo",
        },
        industry: "Beverage Industry",
        publishedOn: "May 2024",
        readTime: "13 Mins Read",
        CTA: {
          title: "Read Case Study",
          link: "",
        },
      },
      {
        title: "Canon’s Dominance in Global Imaging Markets.",
        image: {
          link: "https://s3.mordorintelligence.com/static/evonik.webp",
          title: "Heineken's Strategic Expansion in Emerging Markets.",
          altText: "Heineken Logo",
        },
        industry: "Imaging & Optical Products",
        publishedOn: "Jul 2024",
        readTime: "11 Mins Read",
        CTA: {
          title: "Read Case Study",
          link: "",
        },
      },
      {
        title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
        image: {
          link: "https://s3.mordorintelligence.com/static/evonik.webp",
          title: "Heineken's Strategic Expansion in Emerging Markets.",
          altText: "Heineken Logo",
        },
        industry: "Medical Devices",
        publishedOn: "Jul 2024",
        readTime: "5 Mins Read",
        CTA: {
          title: "Read Case Study",
          link: "",
        },
      },
    ],
  },
  customerStories: {
    kicker: "CUSTOMER STORIES",
    heading: "Don’t Just Take Our Words For It",
    customerTestimonials: [
      {
        comment: {
          heading: "",
          body: "Thank you for providing us with a fantastic cybersecurity market intelligence report. The report was provided quickly and covers all the key areas that show an in-depth understanding of the market. The level of detail and coverage in the report is impressive. We have used the report to shape our global go-to-market value proposition, for a multi-billion dollar business unit. The feedback from the team has been really positive. It is wonderful to see regional teams building this market intelligence into their own presentations. This is proof in itself of the quality of the report. Thank you again.",
        },
        customer: {
          profileImage: {
            title: "TD SYNNEX",
            src: "https://s3.mordorintelligence.com/static/customerStory-tdSynnex.webp",
            alt: "TD SYNNEX logo",
          },
          name: "Lawrence Roberts",
          position: "Senior Global Manager For Strategic Go-to-Market",
          company: "TD SYNNEX",
        },
        link: "https://www.mordorintelligence.com/testimonials/Recommendation-TD-SYNNEX.pdf",
      },
      {
        comment: {
          heading: "",
          body: "We used Mordor Intelligence’s Skincare research which focused on the skincare category. This gave us a view of current splits and growths, and a forecast of market sizes and growths. As a business we were able to use this information to plan around which categories were the best to focus on, based on long term growth. The research also gave us a lot of information on what competitors and brands are doing well, as well as what the global trends are with examples. The consumer behaviour analysis also gave some great insight as to how people are shopping and researching products in the skincare category. All in all the research has enabled us to make more informed business decisions.",
        },
        customer: {
          profileImage: {
            title: "Mentholatum",
            src: "https://s3.mordorintelligence.com/static/customerStory-mentholatum.webp",
            alt: "Mentholatum logo",
          },
          name: "Trish Erasmus",
          position: "Skincare Brand Manager",
          company: "Mentholatum SA",
        },
        link: "https://www.mordorintelligence.com/testimonials/Mentholatum-SA-Skin-Care.pdf",
      },
    ],
  },
};

export const termsAndConditions = {
  header: {
    title: "TERMS & CONDITIONS",
    desc: `<p>
            <span>Mordor Intelligence provides their services to you subject to the following conditions. If you visit or shop at mordorintelligence.com, you accept these conditions. Please read them carefully. We reserve the right to make changes to these terms and conditions at our absolute discretion at any time. Any such amendment shall be effective once the revised terms have been posted on the Site. Please contact the site administrator at </span>
            <a href="mailto:info@mordorintelligence.com" class="underline">
            info@mordorintelligence.com 
            </a>
            &nbsp;<span>with any queries / comments / concerns.</span>
          </p>`,
  },
  tacList: [
    {
      heading: "Shipping",
      body: `All of our industry reports are sent via email as a pdf/ Word/ Excel documents.  `,
    },
    {
      heading: "Delivery Time",
      body: `<span>When you place an order with Mordor Intelligence, we endeavor to deliver as soon as possible. Electronic delivery is generally done within 24 - 72 hours of purchase and pre-booked reports are delivered on the date of report release.  </span>`,
    },
    {
      heading: "Return/Refund Policy",
      body: `<span>The nature of the information being sold means that we cannot accept returns of or refund for products once they have been dispatched.</span>`,
    },
    {
      heading: "Disclaimer",
      body: `<span>Mordor Intelligence is not responsible for any loss or damage suffered by you directly or indirectly, as a result of our delay in/failure to deliver the data/report due to circumstances beyond our control, including but not limited to natural disasters, labor strikes, war, riot, civil disorder, embargo and government regulations or restrictions of any and all kinds. Delivery time shall be extended in such conditions, allowing us reasonable time to fulfill your requirements. Mordor Intelligence and its affiliates and sponsors are neither responsible nor liable for any direct, indirect, incidental, consequential, special, exemplary, punitive, or other damages arising out of or relating in any way to your use of our research.</span>`,
    },
    {
      heading: "Copyright",
      body: `<span>You agree not to resell any part of the data/report you receive from us in a manner that competes with our products and services, without the express written permission of Mordor Intelligence.</span>`,
    },
    {
      heading: "Terms & Conditions for use of the content on the Site",
      body: `<ul class="ml-4" style="list-style-type:disc;"><li>The Copyright in all of the Copyright works contained within these pages is either owned by Mordor Intelligence Private Limited or licensed to it. Any part or all of the contents of any of these pages may not be used, distributed or copied for any commercial purpose unless otherwise noted.
      </li><li class="mt-2">The information on this Site has been included in good faith for general informational purposes only. The information should not be relied upon for any specific purpose and no representation or warranty is given as to its accuracy or completeness.
      </li><li class="mt-2">We shall not be liable to you for any loss that you suffer (including, without limitation, damages for any consequential loss or loss of business opportunities or projects, or loss of profits) howsoever arising, whether in contract, tort or otherwise from your use or inability to use this Site, or any of its contents, or from any action or omission taken as a result of using this Site provided that nothing in these terms shall exclude or limit our liability for personal injury or death caused by our negligence.
      </li><li class="mt-2">By submitting personal information via any of the online forms on the site, you consent to being contacted (either by phone or email) by a representative of Mordor Intelligence Private Limited.
      </li></ul>`,
    },
  ],
};

export const categoryList = [
  {
    label: "Aerospace & Defense",
    link: "https://www.mordorintelligence.com/market-analysis/aerospace-defense",
    children: null,
  },
  {
    label: "Agriculture",
    link: "https://www.mordorintelligence.com/market-analysis/agriculture",
    children: null,
  },
  {
    label: "Animal Nutrition & Wellness",
    link: "https://www.mordorintelligence.com/market-analysis/animal-nutrition",
    children: null,
  },
  {
    label: "Automotive",
    link: "https://www.mordorintelligence.com/market-analysis/automotive",
    children: null,
  },
  {
    label: "Chemicals & Materials",
    link: "https://www.mordorintelligence.com/market-analysis/chemicals-materials",
    children: null,
  },
  {
    label: "Consumer Goods and Services",
    link: "https://www.mordorintelligence.com/market-analysis/consumer-goods-and-services",
    children: null,
  },
  {
    label: "Energy & Power",
    link: "https://www.mordorintelligence.com/market-analysis/energy-power",
    children: null,
  },
  {
    label: "Financial Services and Investment Intelligence",
    link: "https://www.mordorintelligence.com/market-analysis/financial-services-and-investment-intelligence",
    children: null,
  },
  {
    label: "Food & Beverage",
    link: "https://www.mordorintelligence.com/market-analysis/food-beverage",
    children: null,
  },
  {
    label: "Healthcare",
    link: "https://www.mordorintelligence.com/market-analysis/healthcare",
    children: null,
  },
  {
    label: "Home and Property Improvement",
    link: "https://www.mordorintelligence.com/market-analysis/home-property-improvement",
    children: null,
  },
  {
    label: "Hospitality and Tourism",
    link: "https://www.mordorintelligence.com/market-analysis/hospitality-and-tourism",
    children: null,
  },
  {
    label: "Logistics",
    link: "https://www.mordorintelligence.com/market-analysis/logistics",
    children: null,
  },
  {
    label: "Manufacturing Products and Services",
    link: "https://www.mordorintelligence.com/market-analysis/manufacturing-products-and-services",
    children: null,
  },
  {
    label: "Packaging",
    link: "https://www.mordorintelligence.com/market-analysis/packaging",
    children: null,
  },
  {
    label: "Professional and Commercial Services",
    link: "https://www.mordorintelligence.com/market-analysis/professional-and-commercial-services",
    children: null,
  },
  {
    label: "Real Estate and Construction",
    link: "https://www.mordorintelligence.com/market-analysis/real-estate-and-construction",
    children: null,
  },
  {
    label: "Retail",
    link: "https://www.mordorintelligence.com/market-analysis/retail",
    children: null,
  },
  {
    label: "Technology, Media and Telecom",
    link: "https://www.mordorintelligence.com/market-analysis/technology-media-and-telecom",
    children: null,
  },
];

export const privacyPolicy = {
  header: {
    title: "Privacy Policy",
    updatedAt: "Last updated: 20th May 2024",
    desc: `<div><p>We respect the privacy of everyone who visits this website. As a result, we would like to inform you regarding the way we would use your personal data in plain and simple language. We recommend you read this privacy policy so that you understand our approach towards the use of your personal data.
    </p><p class="mt-3">By submitting your data to us, you will permit us to disclose it, where necessary and appropriate, as per the following policy.
    </p><p class="mt-3">Our privacy policy explains the following things - 
    </p><ul class="list-disc ml-8"><li>What kind of personal data are we storing and why do we do it? 
    </li><li>How do we use this data and with whom do we share it? 
    </li><li>How can you update and remove your data from our systems? 
    </li></ul><p class="mt-3">Please go through our privacy policy. By submitting your details, you acknowledge that you have read, understood, and agree that we can use your data 
    </p><p class="mt-3">We have tried to keep it as simple as possible. But, in case you are not familiar with a few technical terms such as sessions duration, cookies, or IP addresses or have difficulty understanding the privacy policy, feel free to reach out to us at 
    <a href="mailto: info@mordorintelligence.com" class="underline">info@mordorintelligence.com</a></p></div>`,
  },
  faqList: [
    {
      heading: "Who Are We?",
      body: `<div><p>Mordor Intelligence is a trusted partner for businesses seeking comprehensive and actionable market intelligence. Our global reach, expert team, and tailored solutions empower organizations and individuals to make informed decisions, navigate complex markets, and achieve their strategic goals.
      </p><p class="mt-2.5">With a team of over 550 domain experts and on-ground specialists spanning 150+ countries, Mordor Intelligence possesses a unique understanding of the global business landscape. This expertise translates into comprehensive syndicated and custom research reports covering a wide spectrum of industries, including aerospace & defense, agriculture, animal nutrition and wellness, automation, automotive, chemicals & materials, consumer goods & services, electronics, energy & power, financial services, food & beverages, healthcare, hospitality & tourism, information & communications technology, investment opportunities, and logistics.
      </p></div>`,
    },
    {
      heading: "Types of Personal Data We Collect",
      body: `<div><p>We collect personal data about you when you provide it directly to us, when we collect it from third-party business partners/service providers, or when you use one of our services. Below are the types of data we collect:
      </p><ul class="list-disc ml-6"><li><span class="text-Display-Semibold-14">Contact Information:</span> The information we use to identify or contact you, including but not limited to your First Name, Last Name, Phone number, Email Address, Physical Address, the company you work with, LinkedIn and Twitter details. We collect this data when you sign up for our service.
      </li><li><span class="text-Display-Semibold-14">Log Data:</span> Information that identifies how you use our services and websites, including but not limited to the IP address, operating system, the device you use to access our platform, the browser, the downloads, the time you spent on each page, etc. We maintain this information to present you with the most relevant content and improve user experience.
      </li><li><span class="text-Display-Semibold-14">Communication Data:</span> Information that we store when you communicate with us either through email, chat, phone call, video conference, or by another means. We use this information for contextual communication and to ensure our representatives maintain appropriate behavior with the customers. </li></ul></div>`,
    },
    {
      heading: "How We Collect Your Personal Data",
      body: `<div><p>We collect the information mentioned above when a user visits our websites, signs up for a service, requests a callback, communicates, or interacts with us in any form. Some of the methods and tools we use to collect your information are:
      </p><ul class="list-disc ml-6"><li><span class="text-Display-Semibold-14">Website forms:</span> When you sign up for our service, you proactively provide your information such as Name, Email & Phone Number.
      </li><li><span class="text-Display-Semibold-14">Event Triggers:</span> We place event triggers on our products that gather information such as time spent on a page, page views, referrer URLs, the time taken to fill the form, etc. We collect this data to understand how visitors use our service on an individual basis.
      </li><li><span class="text-Display-Semibold-14">Tracking tools:</span> We use third-party tracking tools such as Google Analytics, Google Adwords, Freshchat, Wisepops, and other in-house developed tools to collect information. We use this information to analyze how visitors use our services and provide relevant information to maximize user experience.
      </li><li><span class="text-Display-Semibold-14">Cookies:</span> We use cookies and similar technologies on our websites and products to gather usage and performance data to give a personalized experience. Cookies can be session-based or persistent cookies. Session cookies are temporarily stored when you visit our website, while persistent cookies are stored on your device for a longer period. We use these to store your preferences so that they are available when you visit us next time. 
      </li><li><span class="text-Display-Semibold-14">Social Media Widgets:</span> Some of our services include social media widgets such as the share or like buttons. When you use these, a small part of your personal information may be transferred to us from respective third-party sources.
      </li><li><span class="text-Display-Semibold-14">Third-party sources:</span> We use third-party services such as search tools, CRMs, and social networks to obtain information about you, such as your company, contact information, employment information, etc.
      </li><li><span class="text-Display-Semibold-14">Online Advertising:</span> Some of our advertising tools use tracking codes to collect information on user's online activity from non-affiliated websites and applications.</li></ul></div>`,
    },
    {
      heading: "How Mordor Intelligence Uses Personal Data",
      body: `<div><p>We use your personal data to:
      <ul class="list-disc ml-6"><li>Provide you with the information requested from us relating to our products or services. 
      </li><li>Provide information on other products or services within our group of companies, subsidiaries, related companies, and affiliates, which we feel may interest you. 
      </li><li>Meet our contractual commitments to you.
      </li><li>Notify you about any changes to our website, such as improvements or service/product changes, that may affect our service
      </li><ul></p></div>`,
    },
    {
      heading: "Sharing Your Personal Data",
      body: `<div><p>We may share this information with third parties who provide us services related to data hosting, analytics, payment processing, sales, marketing, and other administrative services. 
      </p><ul class="list-disc ml-6"><li><span class="text-Display-Semibold-14">For Data Hosting:</span> We use Amazon Web Services (AWS), and Google Cloud.
      </li><li><span class="text-Display-Semibold-14">For Payment Processing:</span> We use Stripe and PayPal.
      </li><li><span class="text-Display-Semibold-14">For Sales and Marketing:</span> We use Freshsales. 
      </li><li><span class="text-Display-Semibold-14">For other administrative services:</span> We use Microsoft Office 365. 
      </li><li><span class="text-Display-Semibold-14">For Email Marketing:</span> We use Mail Chimp, OutReach, and Hubspot.  
      </li><li>Other third-party services we use are Wisepops and Google Analytics. 
      </li><ul></p></div>`,
    },
    {
      heading: "Securing Your Personal Data",
      body: `<p>We take the security of your data very seriously and implement appropriate technical and organizational measures to protect your data from unauthorized access, disclosure, alteration, or destruction. This includes encrypting sensitive information and using access controls to restrict access to your data.</p>`,
    },
    {
      heading: "How Long We Retain Your Data",
      body: `<p>We will retain your data for as long as necessary to provide you with the services you request, comply with our legal obligations, or resolve disputes.</p>`,
    },
    {
      heading: "Withdrawal of Consent",
      body: `<p>You can withdraw your consent to the processing of your personal data at any time by contacting us at info@mordorintelligence.com.</p>`,
    },
    {
      heading: "Your Rights",
      body: `<div><p>You have the right to: 
      <ul class="list-disc ml-6"><li>Access your personal data. 
      </li><li>Rectify any inaccuracies in your personal data.
      </li><li>Request erasure of your personal data.
      </li><li>Restrict the processing of your personal data.
      </li><li>Object to the processing of your personal data for direct marketing purposes.
      </li><li><span class="text-Display-Semibold-14">Data portability:</span> Receive your personal data in a structured, commonly used, and machine-readable format and transmit that data to another controller. 
      </li><ul></p></div>`,
    },
    {
      heading: "Links to Third-Party Websites",
      body: `<p>This website may contain links to third-party websites. This privacy policy does not apply to those websites. We encourage you to read the privacy policies of those websites before providing any personal information to th </p>`,
    },
    {
      heading: "Policy Updates",
      body: `<p>We may update this privacy policy from time to time. If we make any substantial changes to this privacy policy and how we use your data, we will post these changes on this page and do our best to notify you of any significant changes. Please check our privacy policy regularly.</p>`,
    },
    {
      heading: "Contact Information",
      body: `<div><p>If you have any questions about this privacy policy, please contact us at:
      <a href="mailto: info@mordorintelligence.com" class="underline">info@mordorintelligence.com</a></p></div>`,
    },
  ],
};

export const careersLandingPage = {
  heroSection: {
    heading: "Your Next Adventure Awaits at Mordor Intelligence!",
    description:
      "Recognized multiple times as a “Great Place to Work”, Mordor Intelligence is where innovation meets collaboration. We’re proud of this recognition because it reflects our dedication to creating a workplace that’s inspiring, inclusive, and just plain awesome. Ready to join us?",
    cta: {
      title: "View Open Positions",
      link: "#open-positions",
    },
    awards: [
      {
        image: GPTWLogo,
      },
      {
        image: GPTWLogo,
      },
    ],
    bgImg: "https://s3.mordorintelligence.com/static/Careers-hero.webp",
  },
  statsSection: {
    items: [
      {
        title: "Young and Dynamic",
        description: "The average age of our team is just 26 years!",
        icon: <BriefcaseBusiness height={48} width={48} color="#E03C00" />,
      },
      {
        title: "Here to Stay",
        description:
          "With an average tenure of 5 years, our employees grow with us.",
        icon: <ThumbsUp height={48} width={48} color="#E03C00" />,
      },
      {
        title: "Our Core Values",
        description:
          "Work-life balance, professional growth opportunities, and putting our people first are at the heart of everything we do.",
        icon: <UsersRound height={48} width={48} color="#E03C00" />,
      },
    ],
  },
  employeeStories: {
    kicker: "Employee Stories",
    heading: "What’s it like to work at Mordor Intelligence?",
    description:
      "Don’t just take our word for it. Here’s what some of our team members have to say:",
    testimonials: [
      {
        comment:
          "The mentality of helping each other out at every step of the way!",
        employeeDetails: {
          name: "Avinash Desamangalam",
          position: "Senior Research Manager, Agriculture, Food & Beverages",
          experience: "5+ Years with Mordor",
          image: "https://s3.mordorintelligence.com/static/ic-76u.webp",
        },
      },
      {
        comment:
          "No mountain high enough, no valley low enough, no river wide enough.",
        employeeDetails: {
          name: "Sameeksha Bansal",
          position: "Director, Human Resources",
          experience: "5+ Years with Mordor",
          image: "https://s3.mordorintelligence.com/static/ic-76u.webp",
        },
      },
      {
        comment: "Data-driven decision-making.",
        employeeDetails: {
          name: "Kartheek Puttaparthini",
          position: "Manager, Client Relations",
          experience: "5+ Years with Mordor",
          image: "https://s3.mordorintelligence.com/static/ic-76u.webp",
        },
      },
      {
        comment:
          "Consistently fostering transparency and encouraging the development and execution of innovative ideas.",
        employeeDetails: {
          name: "Rashmi Hegde",
          position: "Senior Manager, Training & Research Operations",
          experience: "5+ Years with Mordor",
          image: "https://s3.mordorintelligence.com/static/ic-76u.webp",
        },
      },
      {
        comment:
          "I have never worked in a company like Mordor, they take care of their employees and proactively involve in their well-being.",
        employeeDetails: {
          name: "Simran Kaur",
          position: "Lead researcher, Agriculture",
          experience: "5+ Years with Mordor",
          image: "https://s3.mordorintelligence.com/static/ic-76u.webp",
        },
      },
      {
        comment:
          "I have never worked in a company like Mordor, they take care of their employees and proactively involve in their well-being.",
        employeeDetails: {
          name: "Simran Kaur",
          position: "Lead researcher, Agriculture",
          experience: "5+ Years with Mordor",
          image: "https://s3.mordorintelligence.com/static/ic-76u.webp",
        },
      },
    ],
  },
  perksAndBenefits: {
    kicker: "Culture",
    heading: "Perks and Benefits",
    description:
      "At Mordor Intelligence, we invest in our people. Our country-specific benefits and company perks help employees feel valued, respected, and cared for.",
    cta: {
      title: "View Open Positions",
      link: "#",
    },
    perks: [
      {
        title: "Flexibility",
        points: [
          "Work-from-home options",
          "Flexible work hours",
          "Paid time off",
          "Remote-friendly policies",
        ],
        icon: <Shuffle height={48} width={48} color="#E03C00" />, // Placeholder for the icon
      },
      {
        title: "Career Growth",
        points: [
          "Regular performance reviews",
          "Mentorship programs",
          "Opportunities for promotions",
          "Skill development initiatives",
        ],
        icon: <ChartNoAxesCombined height={48} width={48} color="#E03C00" />,
      },
      {
        title: "Learning Opportunities",
        points: [
          "Access to online courses",
          "Industry conferences",
          "Knowledge-sharing sessions",
          "On-the-job training",
        ],
        icon: <BookMarked height={48} width={48} color="#E03C00" />,
      },
      {
        title: "Accelerated Growth",
        points: [
          "Rapid career advancement",
          "High-impact projects",
          "Challenging work environment",
          "Innovation and creativity",
        ],
        icon: <TrendingUp height={48} width={48} color="#E03C00" />,
      },
      {
        title: "Health Benefits",
        points: [
          "Comprehensive health insurance",
          "Accident insurance",
          "Holistic wellness program",
          "Attractive leave policy",
        ],
        icon: <HeartPulse height={48} width={48} color="#E03C00" />,
      },
    ],
  },
  cultureSection: {
    bgColor: "#EAF6FA",
    kicker: "Culture",
    heading: "It’s All About the People",
    description:
      "Our people are our greatest asset. At Mordor Intelligence, you’re not just an employee; you’re a valued member of a thriving community. We’re committed to creating a supportive environment where you can do your best work and grow.",
    cta: {
      title: "Join Our Team",
      link: "#",
    },
    galleryImages: Gallery,
  },
  teamsSection: {
    heading: "Teams at Mordor Intelligence",
    description:
      "We’re a diverse group of professionals working across multiple teams.",
    teams: [
      {
        title: "Research",
        image: "https://s3.mordorintelligence.com/static/research-d.webp",
      },
      {
        title: "Sales & Marketing",
        image: "https://s3.mordorintelligence.com/static/sales-d.webp",
      },
      {
        title: "Tech and Development",
        image: "https://s3.mordorintelligence.com/static/tech-d.webp",
      },
      {
        title: "HR",
        image: "https://s3.mordorintelligence.com/static/hr-d.webp",
      },
    ],
  },
  reviews: {
    kicker: "Reviews",
    glassdoorLogo: "https://s3.mordorintelligence.com/static/glassdor-8i8.webp",
    rating: 3.7, // Updated from 4.2
    stars: 5,
    reviews: [
      {
        stars: 5,
        description:
          "Be part of a leading Market intelligence company where your learning and growth will skyrocket.",
      },
      {
        stars: 4,
        description:
          "In just 3–6 months, you'll gain expertise that takes others years to achieve.",
      },
      {
        stars: 5,
        description: "A challenging yet rewarding work environment.",
      },
      {
        stars: 5,
        description:
          "A company that values innovation and employee well-being.",
      },
      {
        stars: 3,
        description: "A great place to learn but comes with challenges.",
      },
    ],
  },
  joinTeam: {
    heading: "Are you ready to join our team?",
    cta: {
      title: "View Open Positions",
      link: "#open-positions",
    },
  },
};

export const countryList = [
  { label: "India", value: "IN" },
  { label: "United America", value: "US" },
  { label: "England", value: "IG" },
];

export const revenueList = [
  { label: "Less than $1000", value: "$0 - $1000" },
  { label: "$1000 - $5000 ", value: "$1000 - $5000" },
  { label: "$5000 and above", value: "$5000" },
];

export const researchTopicsList = [
  { value: "marketOverview", label: "Market Overview" },
  {
    value: "competitiveLandscapeAnalysis",
    label: "Competitive Landscape Analysis",
  },
  {
    value: "industryTrendsAndForecasts",
    label: "Industry Trends and Forecasts",
  },
  { value: "consumerInsights", label: "Consumer Insights" },
  { value: "customResearch", label: "Custom Research" },
];

export const geographyList = [
  { value: "global", label: "Global" },
  {
    value: "regional",
    label: "Regional (e.g., Asia-Pacific, Europe, North America) ",
  },
  {
    value: "country",
    label: "Country-Specific (Text field to specify countries) ",
  },
];

export const timelineList = [
  { value: "immediate", label: "Urgent (1-2 weeks)" },
  { value: "1-3 months", label: "Short Term (1-3 months)" },
  { value: "3-6 months", label: "Flexible" },
];

export const objectivesList = [
  { value: "strategicDecisionMaking", label: "Strategic Decision-Making" },
  { value: "marketEntryStrategy", label: "Market Entry Strategy" },
  { value: "newProductDevelopment", label: "New Product Development" },
  { value: "investmentDecision", label: "Investment Decision" },
  { value: "competitiveBenchmarking", label: "Competitive Benchmarking" },
];

export const faqsPageData = {
  header: {
    title: "Mordor FAQ'S",
    desc: `<p> If you’re new here and you’re looking clear your doubts the offerings, features and policies. This answer will give you clarity</p>`,
    faqImage: "https://s3.mordorintelligence.com/static/faq-hero.webp",
  },
  faqsList: {
    title: "Topics",
    desc: [
      "What is Market Research",
      "Reports Details",
      "Online Purchase",
      "Customer Support",
    ],
  },
  faqsData: [
    {
      heading: "What is Market Research?",
      faqs: [
        {
          heading: "What is market research?",
          body: "Market research is the process of gathering, analyzing, and interpreting information about a market, including the target audience, competitors, and the overall industry. It helps businesses make informed decisions.",
        },
        {
          heading: "Why is market research important?",
          body: "Market research helps businesses understand market trends, customer preferences, and competitive landscapes, enabling them to make data-driven decisions for growth and innovation.",
        },
        {
          heading: "How does market research impact business strategies?",
          body: "Market research provides insights into consumer behavior, industry trends, and competitive dynamics, allowing businesses to create targeted strategies, mitigate risks, and seize opportunities. For example, tools like Porter's Five Forces model help analyze competitive pressures in an industry, which is crucial for strategic decision-making.",
        },
        {
          heading: "What methods are used in market research?",
          body: "Common methods include surveys, focus groups, interviews, market segmentation analysis, and competitor analysis to collect both qualitative and quantitative data.",
        },
        {
          heading:
            "How do you ensure the accuracy of the data in your reports?",
          body: "Mordor Intelligence ensures the accuracy of our data through rigorous research methods, including cross-referencing multiple sources, using reputable data providers, and continuously updating reports to reflect the latest market trends and insights.",
        },
        {
          heading: "Who benefits from market research?",
          body: "Mordor Intelligence provides valuable market research to businesses across all industries, helping business owners, marketing teams, product developers, and consultants make well-informed decisions.",
        },
        {
          heading:
            "Why choose Mordor Intelligence for your market research needs?",
          body: "Mordor Intelligence offers comprehensive, reliable, and timely market insights tailored to your specific industry and business needs. Our expert team uses advanced research methodologies, including Porter's Five Forces, and we provide customized reports to ensure your strategies are data-driven and informed by the latest market trends.",
        },
      ],
    },
    {
      heading: "Report Details",
      faqs: [
        {
          heading: "What type of reports does Mordor Intelligence offer?",
          body: "At Mordor Intelligence, we offer a wide range of market intelligence to enable informed decision-making, including:\n\nSyndicated Reports: Ready-to-use market insights that provide detailed coverage on industries, countries, and companies. These cost-effective reports offer a snapshot of market attractiveness, potential, and competitive dynamics for a broader audience.\n\nCustom Reports: Tailored intelligence designed to meet specific business needs. Our cross-functional analyst teams leverage deep industry expertise to address complex and unique requirements, ensuring actionable insights that drive success.\n\nWe cover a wide variety of industries and sectors worldwide, offering both syndicated and custom research solutions to suit your business needs.",
        },
        {
          heading: "How do I know if a report is right for my business?",
          body: "Our reports provide in-depth insights and data tailored to specific industries and market needs. You can request a sample or contact us for guidance on choosing the right report.",
        },
        {
          heading: "What is the process to purchase a report?",
          body: "Simply visit the product page, choose the report you need, and proceed with the secure online checkout. You'll have immediate access to the report after purchase. If you have any custom report requirements, our sales & research team is here to assist you in creating tailored reports that meet your specific needs.",
        },
        {
          heading: "Can I request a custom report?",
          body: "Yes, we provide customized market research based on your business needs. Fill out our Request for Proposal Form (add hyperlink to request for proposal form) to get started on a tailored solution.",
        },
        {
          heading: "How often are reports updated?",
          body: "Our reports are regularly updated based on industry developments. We ensure that all information is current and reflects the latest trends and data.",
        },
      ],
    },
    {
      heading: "Online Purchase",
      faqs: [
        {
          heading: "How can I purchase a report online?",
          body: "You can easily purchase a report through our website. Visit the report page, click 'Buy Now,' and complete the checkout process.",
        },
        {
          heading: "Is the payment process secure?",
          body: "Yes, we use secure payment gateways to ensure that all transactions are safe and protected.",
        },
        {
          heading: "Will I receive a receipt after my purchase?",
          body: "Yes, an electronic receipt will be sent to your email immediately after purchase.",
        },
        {
          heading: "Are there any discounts or offers available?",
          body: "We occasionally offer discounts and promotions. To stay updated on our latest offers, sign up for our newsletter or contact us directly for more information.",
        },
      ],
    },
    {
      heading: "Customer Support",
      faqs: [
        {
          heading: "How can I contact customer support?",
          body: "You can contact our support team by emailing info@mordorintelligence.com or using the contact form on our website.",
        },
        {
          heading:
            "What should I do if I haven't received my report after purchase?",
          body: "If you haven't received your report, please check your spam folder. If you still cannot find it, contact us at info@mordorintelligence.com, and we’ll assist you promptly.",
        },
        {
          heading: "How can I track my order?",
          body: "After purchasing a report, you will receive an order confirmation email with tracking details or download instructions for your report.",
        },
        {
          heading: "Can I update my subscription preferences on Synapse?",
          body: "Yes, you can update your preferences anytime by logging into your account or contacting us directly.",
        },
      ],
    },
  ],
  ourExpertise: {
    title: "Our Expertise",
    desc: "Get a head start with the insights to guide your decision-making process. Our expertise lies in furnishing you with market insights, empowering you to make well-informed decisions.",
    steps: [
      {
        text: "Pricing Strategy",
        link: "#",
      },
      {
        text: "Sustainability",
        link: "#",
      },
      {
        text: "Pricing Strategy",
        link: "#",
      },
      {
        text: "Supply Chain",
        link: "#",
      },
    ],
  },
  contactUs: {
    kicker: "CONTACT US",
    heading: "Today's Accessible Intelligence, Unlocking Tomorrow's Potential.",
    cta: {
      title: "Submit",
      link: "#",
    },
  },
};

export const AwardsPageData = {
  heroSection: {
    featured: {
      featuredOn: "Featured on Mint",
      featuredDate: "9th Jan , 2024",
      awardName: " Hall of Fame",
    },
    heading:
      "Discover Our Hall of Fame: Celebrating Our Journey with Prestigious Awards",
    desc: "Explore our accolades. Each award marks a milestone in our journey. Celebrate with us!",
    cta: {
      title: "Read More",
      link: "",
    },
    image: {
      link: "https://s3.mordorintelligence.com/static/Awards212w.webp",
      altText: "Awards Logo Alt Text",
      title: "Awards Logo Title",
    },
  },
  achievementSection: {
    heading: "Highlighting Our Award-Winning Achievements",
    desc: "Relive our memorable events. From launches to gatherings, each snapshot tells our story.",
    achievements: [
      {
        title:
          "Mordor Intelligence Wins Prestigious Procurement Consultancy Project Award!",
        description:
          "We're thrilled to announce that Mordor Intelligence has clinched the esteemed Procurement Consultancy Project Award at the World Procurement Awards 2024. Our transformative strategies with a global leader in life sciences have garnered this prestigious recognition.",
        featuredDate: "May 12th, 2024",
        awardName: "Consultancy Project Award",
        image: {
          link: "https://s3.mordorintelligence.com/static/heightlight-3.webp",
          altText: "Awards Achievements Alt Text",
          title:
            "Mordor Intelligence Wins Prestigious Procurement Consultancy Project Award!",
        },
      },
      {
        title:
          "Mordor Intelligence Wins Prestigious Procurement Consultancy Project Award!",
        description:
          "We're thrilled to announce that Mordor Intelligence has clinched the esteemed Procurement Consultancy Project Award at the World Procurement Awards 2024. Our transformative strategies with a global leader in life sciences have garnered this prestigious recognition.",
        featuredDate: "May 12th, 2024",
        awardName: "Consultancy Project Award",
        image: {
          link: "https://s3.mordorintelligence.com/static/heightlight-3.webp",
          altText: "Awards Achievements Alt Text",
          title:
            "Mordor Intelligence Wins Prestigious Procurement Consultancy Project Award!",
        },
      },
      {
        title:
          "Mordor Intelligence Wins Prestigious Procurement Consultancy Project Award!",
        description:
          "We're thrilled to announce that Mordor Intelligence has clinched the esteemed Procurement Consultancy Project Award at the World Procurement Awards 2024. Our transformative strategies with a global leader in life sciences have garnered this prestigious recognition.",
        featuredDate: "May 12th, 2024",
        awardName: "Consultancy Project Award",
        image: {
          link: "https://s3.mordorintelligence.com/static/heightlight-3.webp",
          altText: "Awards Achievements Alt Text",
          title:
            "Mordor Intelligence Wins Prestigious Procurement Consultancy Project Award!",
        },
      },
      {
        title:
          "Mordor Intelligence Wins Prestigious Procurement Consultancy Project Award!",
        description:
          "We're thrilled to announce that Mordor Intelligence has clinched the esteemed Procurement Consultancy Project Award at the World Procurement Awards 2024. Our transformative strategies with a global leader in life sciences have garnered this prestigious recognition.",
        featuredDate: "May 12th, 2024",
        awardName: "Consultancy Project Award",
        image: {
          link: "https://s3.mordorintelligence.com/static/heightlight-3.webp",
          altText: "Awards Achievements Alt Text",
          title:
            "Mordor Intelligence Wins Prestigious Procurement Consultancy Project Award!",
        },
      },
    ],
  },
  relatedIndustries: {
    heading: "Related Industries",
    desc: "",
    hubList: [
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/A%26S/adhesive_latest.png",
        label: "CROP PROTECTION",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/crop-protection-chemicals",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/A%26S/adhesive_latest.png",
        label: "FREIGHT AND LOGISTICS",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/freight-and-logistics",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/A%26S/adhesive_latest.png",
        label: "VEHICLES",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/vehicles",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/A%26S/adhesive_latest.png",
        label: "ADHESIVES AND SEALANTS",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/adhesives-and-sealants",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Meat/meat_latest.png",
        label: "MEATS AND MEAT SUBSTITUTES",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/meats-and-meat-substitutes",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/feed-additive/feed_additive_latest.png",
        label: "FEED ADDITIVE",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/feed-additives",
      },

      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Seeds/27.png",
        label: "SEEDS",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/seeds",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Proteins/protein_latest.png",
        label: "PROTEINS",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/protein-ingredients",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/petfoods/pet_food_latest.png",
        label: "PET FOOD",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/pet-food",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/dairy/dairy.jpg",
        label: "DAIRY AND DAIRY ALTERNATIVE",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/dairy-and-dairy-alternatives",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/engineering-plastics/Engineering+Plastics.png",
        label: "ENGINEERING PLASTICS",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/engineering-plastics",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/agriculture-biological/AGRICULTURAL+BIOLOGICALS.png",
        label: "AGRICULTURAL BIOLOGICALS",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/agricultural-biologicals",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/cmcc/cmcc_latest.png",
        label: "CONCRETE, MORTARS AND CONSTRUCTION CHEMICALS",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/concrete-mortar-and-construction-chemicals",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Fertilizers/fertilizer.png",
        label: "FERTILIZER",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/fertilizer",
      },

      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/LED/led_latest.png",
        label: "LED",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/led-lighting",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/cep/cep_latest.png",
        label: "CEP",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/courier-express-and-parcel-(cep)",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/food-services/food_services_latest.png",
        label: "FOOD SERVICE",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/foodservice",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/confectionary/CONFECTIONERY.png",
        label: "CONFECTIONERY",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/confectionery",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/datacenter/data_center_latest.png",
        label: "DATA CENTER",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/data-center",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/satellite/satellite_latest.png",
        label: "SATELLITE",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/satellite-and-launch-vehicle",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/soft-drink/Softdrinks.png",
        label: "SOFT DRINK",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/soft-drinks",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Road+Freight/3.jpg",
        label: "ROAD FREIGHT",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/road-freight-transport",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Aviation/21.jpg",
        label: "AVIATION",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/aviation",
      },

      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/ev-battery-packs/ev_battery_v2.png",
        label: "EV BATTERY PACK",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/ev-battery-pack",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Ebikes/ebike_latest.png",
        label: "E BIKES",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/e-bike",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/MLCC/mlcc_latest.png",
        label: "MLCC",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/mlcc",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/aircraft-cabin-interiors/aircraft_cabin_latest.png",
        label: "COMMERCIAL AIRCRAFT CABIN",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/commercial-aircraft-cabin-interior-market",
      },
    ],
  },
  aboutUsSection: {
    heading: "To know more About Us",
    cta: {
      title: "About Us",
      link: "",
    },
  },
  contactUs: {
    kicker: "CONTACT US",
    heading: "Today's Accessible Intelligence, Unlocking Tomorrow's Potential.",
    cta: {
      title: "Submit",
      link: "#",
    },
  },
};

export const jobsPage = {
  meta: {
    title:
      "Jobs by Mordor Intelligence | Market Research Intelligence Command Centre",
    keywords: "Jobs Mordor Intelligence, Jobs, Mordor Intelligence",
    description:
      "Learn more about Mordor Intelligence™ privacy policies. To help you understand how we protect the personal information of our website visitors.",
    ogTitle:
      "Jobs by Mordor Intelligence | Market Research Intelligence Command Centre",
    ogDescription:
      "Learn more about Mordor Intelligence™ privacy policies. To help you understand how we protect the personal information of our website visitors.",
  },
  jobsHeroSection: {
    heading: "Join Our Team",
    desc: "Ready to make an impact? At Mordor Intelligence, we’re on a mission to empower businesses with market intelligence. If you're passionate about shaping the future with insights that matter, explore our career opportunities below and join a team that’s changing the game!",
    cta: {
      title: "See Openings",
      link: "https://www.mordorintelligence.com/careers",
    },
    image: {
      link: "https://s3.mordorintelligence.com/static/job-listing-hero.webp",
      title: "Job Listing Hero",
      altText: "Job Listing Hero Image",
    },
  },
  ourExpertise: {
    title: "Our Expertise",
    desc: "Leverage Mordor Intelligence’s expertise to unlock unparalleled insights and strategic advantages for your business. Explore our specialized areas",
    steps: [
      {
        title: "Synapse Platform",
        data: "Access real-time market insights with our cutting-edge Synapse platform.",
      },
      {
        title: "AI-Powered Insights with myRA AI",
        data: "myRA AI enhances research with predictive analytics and trend forecasting.",
      },
      {
        title: "Innovation at the Core",
        data: "We drive innovation with new methodologies, tools, and strategies.",
      },
      {
        title: "Exhaustive Coverage",
        data: "Access our research library of over 18,000 reports across 20 industries, offering comprehensive insights from a vast repository.",
      },
    ],
  },
};

export const jobsFilter = [
  {
    label: "Department",
    value: "department",
    options: [
      { label: "Research", value: "research" },
      { label: "Sales", value: "sales" },
      { label: "Marketing", value: "marketing" },
      { label: "Tech & Development", value: "tech and development" },
      { label: "HR", value: "hr" },
      { label: "Accounting", value: "accounting" },
    ],
  },
  {
    label: "Location",
    value: "location",
    options: [
      { label: "Hyderabad", value: "hyderabad" },
      { label: "Remote", value: "remote" },
    ],
  },
  {
    label: "Employment Type",
    value: "employmentType",
    options: [
      { label: "Full Time", value: "full time" },
      { label: "Part Time", value: "part time" },
      { label: "Contractual", value: "contractual" },
    ],
  },
  {
    label: "Experience",
    value: "experience",
    options: [
      { label: "Freser", value: "0-1 years" },
      { label: "1-3 years", value: "1-3 years" },
      { label: "4-6 years", value: "4-6 years" },
      { label: "6-9 years", value: "6-9 years" },
      { label: "10+ years", value: "10+ year" },
    ],
  },
];

export const clientsFilter = [
  {
    label: "By Industry",
    value: "industry",
    options: [
      { label: "Healthcare", value: "healthcare" },
      { label: "Agriculture", value: "agriculture" },
      { label: "Food & Beverages", value: "food and beverages" },
    ],
  },
];

export const OurClientsPageData = {
  heroSection: {
    heading: "Our Clients",
    desc: "Mordor Intelligence serves 5500+ Clients across 100+ Countries.",
    cta: {
      title: "Contact Us",
      link: "#contact-us-section",
    },
    image: {
      link: "https://s3.mordorintelligence.com/static/our-client-hero33e.webp",
      title: "Clients Page Logo",
      altText: "Clients Page Logo Alt Text",
    },
  },
  companyStats: [
    {
      label: "Industries",
      value: 100,
    },
    {
      label: "Projects Delivered",
      value: 10000,
    },
    {
      label: "In-House Analysts",
      value: 550,
    },
  ],
  clientsListing: {
    heading: "Clients Listing",
    clients: [
      {
        title: "Microsoft",
        industry: "food and beverages",
        imgUrl: "https://s3.mordorintelligence.com/static/Microsoft.webp",
      },
      {
        title: "boeh",
        industry: "agriculture",
        imgUrl: "https://s3.mordorintelligence.com/static/boeh.webp",
      },
      {
        title: "Cargill",
        industry: "food and beverages",
        imgUrl: "https://s3.mordorintelligence.com/static/cargill.webp",
      },
      {
        title: "Epson",
        industry: "healthcare",
        imgUrl: "https://s3.mordorintelligence.com/static/Epson.webp",
      },
      {
        title: "Evonik",
        industry: "food and beverages",
        imgUrl: "https://s3.mordorintelligence.com/static/Epson.webp",
      },
      {
        title: "Coca",
        industry: "food and beverages",
        imgUrl: "https://s3.mordorintelligence.com/static/Coca.webp",
      },
      {
        title: "Cargill",
        industry: "food and beverages",
        imgUrl: "https://s3.mordorintelligence.com/static/cargill.webp",
      },
      {
        title: "Epson",
        industry: "healthcare",
        imgUrl: "https://s3.mordorintelligence.com/static/Epson.webp",
      },
      {
        title: "Evonik",
        industry: "food and beverages",
        imgUrl: "https://s3.mordorintelligence.com/static/sabre.webp",
      },
      {
        title: "Coca",
        industry: "food and beverages",
        imgUrl: "https://s3.mordorintelligence.com/static/Coca.webp",
      },
      {
        title: "Fujifilm",
        industry: "agriculture",
        imgUrl: "https://s3.mordorintelligence.com/static/sabre.webp",
      },
      {
        title: "Epson",
        industry: "healthcare",
        imgUrl: "https://s3.mordorintelligence.com/static/Epson.webp",
      },
      {
        title: "Evonik",
        industry: "food and beverages",
        imgUrl: "https://s3.mordorintelligence.com/static/sabre.webp",
      },
      {
        title: "Coca",
        industry: "food and beverages",
        imgUrl: "https://s3.mordorintelligence.com/static/Coca.webp",
      },
      {
        title: "Evonik",
        industry: "food and beverages",
        imgUrl: "https://s3.mordorintelligence.com/static/sabre.webp",
      },
      {
        title: "Coca",
        industry: "food and beverages",
        imgUrl: "https://s3.mordorintelligence.com/static/Coca.webp",
      },
      {
        title: "Cargill",
        industry: "food and beverages",
        imgUrl: "https://s3.mordorintelligence.com/static/cargill.webp",
      },
      {
        title: "Epson",
        industry: "healthcare",
        imgUrl: "https://s3.mordorintelligence.com/static/Epson.webp",
      },
      {
        title: "Evonik",
        industry: "food and beverages",
        imgUrl: "https://s3.mordorintelligence.com/static/sabre.webp",
      },
      {
        title: "Coca",
        industry: "food and beverages",
        imgUrl: "https://s3.mordorintelligence.com/static/Coca.webp",
      },
      {
        title: "Fujifilm",
        industry: "agriculture",
        imgUrl: "https://s3.mordorintelligence.com/static/sabre.webp",
      },
      {
        title: "Epson",
        industry: "healthcare",
        imgUrl: "https://s3.mordorintelligence.com/static/Epson.webp",
      },
      {
        title: "Evonik",
        industry: "food and beverages",
        imgUrl: "https://s3.mordorintelligence.com/static/sabre.webp",
      },
      {
        title: "Coca",
        industry: "food and beverages",
        imgUrl: "https://s3.mordorintelligence.com/static/Coca.webp",
      },
    ],
  },
  globalCoverage: {
    kicker: "GLOBAL COVERAGE",
    heading: "Trusted by Industry Leaders Worldwide",
    desc: "With experts in 100+ countries, we deliver localized insights and data-driven strategies, empowering businesses to navigate global markets with confidence.",
    cta: {
      title: "See All Industries",
      link: "#",
    },
    map: {
      title: "World Coverage Map",
      src: "https://s3.mordorintelligence.com/static/granularCoverage-map.webp",
      alt: "Market Coverage Map",
    },
  },
  customerStories: {
    kicker: "CUSTOMER STORIES",
    heading: "Don’t Just Take Our Words For It",
    customerTestimonials: [
      {
        comment: {
          heading: "",
          body: "Thank you for providing us with a fantastic cybersecurity market intelligence report. The report was provided quickly and covers all the key areas that show an in-depth understanding of the market. The level of detail and coverage in the report is impressive. We have used the report to shape our global go-to-market value proposition, for a multi-billion dollar business unit. The feedback from the team has been really positive. It is wonderful to see regional teams building this market intelligence into their own presentations. This is proof in itself of the quality of the report. Thank you again.",
        },
        customer: {
          profileImage: {
            title: "TD SYNNEX",
            src: "https://s3.mordorintelligence.com/static/customerStory-tdSynnex.webp",
            alt: "TD SYNNEX logo",
          },
          name: "Lawrence Roberts",
          position: "Senior Global Manager For Strategic Go-to-Market",
          company: "TD SYNNEX",
        },
        link: "https://www.mordorintelligence.com/testimonials/Recommendation-TD-SYNNEX.pdf",
      },
      {
        comment: {
          heading: "",
          body: "We used Mordor Intelligence’s Skincare research which focused on the skincare category. This gave us a view of current splits and growths, and a forecast of market sizes and growths. As a business we were able to use this information to plan around which categories were the best to focus on, based on long term growth. The research also gave us a lot of information on what competitors and brands are doing well, as well as what the global trends are with examples. The consumer behaviour analysis also gave some great insight as to how people are shopping and researching products in the skincare category. All in all the research has enabled us to make more informed business decisions.",
        },
        customer: {
          profileImage: {
            title: "Mentholatum",
            src: "https://s3.mordorintelligence.com/static/customerStory-mentholatum.webp",
            alt: "Mentholatum logo",
          },
          name: "Trish Erasmus",
          position: "Skincare Brand Manager",
          company: "Mentholatum SA",
        },
        link: "https://www.mordorintelligence.com/testimonials/Mentholatum-SA-Skin-Care.pdf",
      },
    ],
  },
  relatedIndustries: {
    heading: "Related Industries",
    desc: "",
    hubList: [
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/A%26S/adhesive_latest.png",
        label: "CROP PROTECTION",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/crop-protection-chemicals",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/A%26S/adhesive_latest.png",
        label: "FREIGHT AND LOGISTICS",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/freight-and-logistics",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/A%26S/adhesive_latest.png",
        label: "VEHICLES",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/vehicles",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/A%26S/adhesive_latest.png",
        label: "ADHESIVES AND SEALANTS",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/adhesives-and-sealants",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Meat/meat_latest.png",
        label: "MEATS AND MEAT SUBSTITUTES",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/meats-and-meat-substitutes",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/feed-additive/feed_additive_latest.png",
        label: "FEED ADDITIVE",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/feed-additives",
      },

      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Seeds/27.png",
        label: "SEEDS",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/seeds",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Proteins/protein_latest.png",
        label: "PROTEINS",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/protein-ingredients",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/petfoods/pet_food_latest.png",
        label: "PET FOOD",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/pet-food",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/dairy/dairy.jpg",
        label: "DAIRY AND DAIRY ALTERNATIVE",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/dairy-and-dairy-alternatives",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/engineering-plastics/Engineering+Plastics.png",
        label: "ENGINEERING PLASTICS",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/engineering-plastics",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/agriculture-biological/AGRICULTURAL+BIOLOGICALS.png",
        label: "AGRICULTURAL BIOLOGICALS",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/agricultural-biologicals",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/cmcc/cmcc_latest.png",
        label: "CONCRETE, MORTARS AND CONSTRUCTION CHEMICALS",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/concrete-mortar-and-construction-chemicals",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Fertilizers/fertilizer.png",
        label: "FERTILIZER",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/fertilizer",
      },

      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/LED/led_latest.png",
        label: "LED",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/led-lighting",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/cep/cep_latest.png",
        label: "CEP",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/courier-express-and-parcel-(cep)",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/food-services/food_services_latest.png",
        label: "FOOD SERVICE",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/foodservice",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/confectionary/CONFECTIONERY.png",
        label: "CONFECTIONERY",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/confectionery",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/datacenter/data_center_latest.png",
        label: "DATA CENTER",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/data-center",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/satellite/satellite_latest.png",
        label: "SATELLITE",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/satellite-and-launch-vehicle",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/soft-drink/Softdrinks.png",
        label: "SOFT DRINK",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/soft-drinks",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Road+Freight/3.jpg",
        label: "ROAD FREIGHT",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/road-freight-transport",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Aviation/21.jpg",
        label: "AVIATION",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/aviation",
      },

      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/ev-battery-packs/ev_battery_v2.png",
        label: "EV BATTERY PACK",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/ev-battery-pack",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Ebikes/ebike_latest.png",
        label: "E BIKES",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/e-bike",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/MLCC/mlcc_latest.png",
        label: "MLCC",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/mlcc",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/aircraft-cabin-interiors/aircraft_cabin_latest.png",
        label: "COMMERCIAL AIRCRAFT CABIN",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/commercial-aircraft-cabin-interior-market",
      },
    ],
  },
};

export const team = {
  heroSectionDetails: {
    title: "Our Team",
    desc: `<p>Innovative minds thrive in our vibrant workplace culture 
            where collabration fuels creativity. Our dynamic team's 
            passion for tackling intricate challanges drives our success</p>`,
  },
  founderDetails: {
    heading: "Meet the People Behind Mordor Intelligence",
    desc: "At Mordor Intelligence, we believe that great insights come from great people. Our team is a dynamic mix of passionate minds, creative problem-solvers, and forward-thinkers, all united by a shared mission to drive your business forward. Recognized as a Certified Great Place to Work twice, we take pride in fostering a collaborative, inclusive, and fun work environment.",
    name: "Bharadwaj Obula Reddy",
    position: "CEO, Mordor Intelligence",
    message:
      "Our mission is to provide clients with insights that drives and take their business to the next level",
    aboutFounder:
      "Reddy founded Mordor Intelligence in 2014 with the vision to help clients understand global business trends and anticipate butterfly effects. He bootstrapped the company to over 550 employees today. With over a decade of experience, Reddy has assisted clients, ranging from start-ups to Fortune 100 companies, in making research-based decisions.Reddy earned his AB in Mathematics from Colgate University, where he was a Lampert Fellow.",
    image: {
      title: "Bharadwaj Obula Reddy, CEO, Mordor Intelligence",
      altText: "Bharadwaj Obula Reddy, CEO, Mordor Intelligence",
      link: "https://s3.mordorintelligence.com/team/Bharadwaj-Obula-Reddy.webp",
    },
  },

  teamList: [
    {
      name: "Sameeksha Bansal",
      position: "Director, Human Resources",
      about: `Sameeksha joined Mordor Intelligence in 2017 and has been our director of Human Resources since 2021. Prior to joining Mordor Intelligence, Sameeksha was heading HR at [x]cube LABS, a digital technology services company, where she oversaw the company’s growth and key hires.Sameeksha has a bachelor's degree in computers and holds an MBA from the University of Hyderabad.`,
      image: {
        title: "Sameeksha Bansal, Director, Human Resources",
        altText: "Sameeksha Bansal, Director, Human Resources",
        link: "https://s3.mordorintelligence.com/team/Sameeksha-Bansal.webp",
      },
    },
    {
      name: "Vivek Sikaria",
      position: "Director, Research Operations",
      about: `Vivek Sikaria joined Mordor intelligence with close to 20 years of experience, as the Director of Research Operations. Prior to Mordor, Vivek worked at Infiniti Research for six years, ultimately overseeing the Competitive and Market Intelligence practice. Preceding this role, Vivek served as the head of the research division at Wipro Consulting. His career commenced with McKinsey & Company in 2006, where he spent six years, progressively taking on roles in Research & Consulting functions. Vivek is a graduate of Symbiosis College, holding a bachelor's degree, and earned an MBA from the ICFAI University.`,
      image: {
        title: "Vivek Sikaria, Director, Research Operations",
        altText: "Vivek Sikaria, Director, Research Operations",
        link: "https://s3.mordorintelligence.com/team/Vivek-Sikaria.webp",
      },
    },
    {
      name: "Prateeksha Rawat",
      position: "Director, Marketing",
      about: `Prateeksha Rawat brings over 12 years of experience in marketing and communications to her role as Marketing Director at Mordor Intelligence. She has a proven track record in developing and executing comprehensive marketing strategies that drive brand awareness and revenue growth.
          Prior to joining Mordor Intelligence, Prateeksha served as the AVP Marketing at CAMS, where she successfully launched several high-impact campaigns that increased brand visibility and market share. She also held senior marketing positions at GEP Worldwide and L&T Finance, where she was instrumental in driving product marketing initiatives and establishing strategic partnerships.
         Prateeksha holds a master's degree in business administration from SIIB, Pune and a bachelor's degree from GBPUAT, Pantnagar.`,
      image: {
        title: "Prateeksha Rawat, Director, Marketing",
        altText: "Prateeksha Rawat, Director, Marketing",
        link: "https://s3.mordorintelligence.com/static/mead-team-23.webp",
      },
    },
    {
      name: "Ashish Gautam",
      position: "Senior Manager, TMT",
      about: `Ashish has extensive experience in technology scouting, digital transformation, market-entry strategies, and building data models for business intelligence. As the leader of our TMT practice, this experience helps Ashish blend data-driven research insights with innovative methodologies and drive investment decisions within the TMT industry. Prior to Mordor Intelligence, Ashish worked as a Consultant with an Audio-Visual Integration Company. Ashish has a bachelor's degree in engineering (Computer Science) and an MBA.`,
      image: {
        title: "Ashish Gautam, Senior Manager, TMT",
        altText: "Ashish Gautam, Senior Manager, TMT",
        link: "https://s3.mordorintelligence.com/team/Ashish-Gautam.webp",
      },
    },
    {
      name: "Avinash Desamangalam",
      position: "Senior Manager, Agriculture, Food & Beverages",
      about: `Avinash has been studying the Agriculture and Food Industry for over 13 years now and heads our Agriculture, Food & Beverages practice. Avinash’s expertise lies in agricultural value chains: from seed to fork, market estimation and analysis, feasibility studies, logistics in the food industry, and in understanding competitive landscape. Before Mordor Intelligence, Avinash held various roles in Sales, Marketing, and Strategic Consulting for markets in the Agriculture & Food Industry.  
          Avinash has a bachelor's degree in agriculture and a master's degree in Agribusiness Management.`,
      image: {
        title:
          "Avinash Desamangalam, Senior Manager, Agriculture, Food & Beverages",
        altText:
          "Avinash Desamangalam, Senior Manager, Agriculture, Food & Beverages",
        link: "https://s3.mordorintelligence.com/team/Avinash-Desamangalam.webp",
      },
    },
    {
      name: "Soumya Goud",
      position: "Senior Manager, Healthcare",
      about: `At Mordor Intelligence, Soumya heads our Healthcare practice and brings with her over 12 years of Pharmaceutical and Healthcare industry experience across both, line and support functions including Laboratory testing, R&D, Market Research, Competitive & Business intelligence. Prior to Mordor Intelligence, Soumya was working as a Scientist and Medical Counsellor. Soumya’s expertise focuses on the creation of market entry lines, formulation of business strategies and a synthesis of competitive intelligence in the Healthcare Industry globally. Soumya has a bachelor's degree in science, a master's degree in biomedical genetics and an MBA.`,
      image: {
        title: "Soumya Goud, Senior Manager, Healthcare",
        altText: "Soumya Goud, Senior Manager, Healthcare",
        link: "https://s3.mordorintelligence.com/team/Soumya-Goud.webp",
      },
    },
    {
      name: "Himanshu Vasisht",
      position: "Senior Manager, Energy & Chemicals",
      about: `For a decade now, Himanshu has been keenly studying and following the dynamics of the Chemicals and the Energy Industry globally. With vast experiences in working on assignments that demand extensive market sizing exercises, feasibility studies, competitive intelligence, and strategic insights, Himanshu commands expertise in specialty chemicals, metals, plastics, and polymers. Himanshu has a bachelor's degree in engineering and an MBA.`,
      image: {
        title: "Himanshu Vasisht, Senior Manager, Energy & Chemicals",
        altText: "Himanshu Vasisht, Senior Manager, Energy & Chemicals",
        link: "https://s3.mordorintelligence.com/team/Himanshu-Vasisht.webp",
      },
    },
    {
      name: "Jayveer Vora",
      position: "Senior Manager, New & Emerging Opportunities",
      about: `Jayveer brings with him over 13 years of experience, spanning commodities market trading, equity research, investment banking and market research. At Mordor Intelligence, Jayveer heads our division that focuses on all New and Emerging Markets. Before Mordor Intelligence, Jayveer was working as an Advisor and Technical Analyst with an Investment Bank and Capital Markets before that. Jayveer has a bachelor's degree in mechanical engineering.`,
      image: {
        title: "Jayveer Vora, Senior Manager, New & Emerging Opportunities",
        altText: "Jayveer Vora, Senior Manager, New & Emerging Opportunities",
        link: "https://s3.mordorintelligence.com/team/Jayveer-Vora.webp",
      },
    },
    {
      name: "Phani Kumar",
      position: "Manager, Automotive, Aerospace, and Defense",
      about: `Phani's experience in the Automotive and Aerospace & Defense industries covers Market Intelligence and Business Advisory roles. Having worked with several OEM's and all-tier clients, focusing on Supply-Chain of the mobility and transportation Industry, Phani has an expertise in strategic and technology roadmaps and market feasibility analysis studies across emerging, niche and matured geographies. At Mordor Intelligence, Phani heads our Automotive and Aerospace team.  
          Phani has a bachelor's degree in mechanical engineering.`,
      image: {
        title: "Phani Kumar, Manager, Automotive, Aerospace, and Defense",
        altText: "Phani Kumar, Manager, Automotive, Aerospace, and Defense",
        link: "https://s3.mordorintelligence.com/team/Phani-Kumar.png",
      },
    },
    {
      name: "Apurva Singh",
      position: "Senior Manager, Partner Relations",
      about: `Apurva has over 14 years of experience in various roles surrounding Sales, consulting, and business development - managing global client and partner relationships. At Mordor Intelligence Apurva heads our Partner Relations vertical where Apurva and her team have consistently delivered exceptionally quick response rates for nearly a decade setting a remarkable standard of efficiency and excellence. Apurva has a bachelor's degree in economics and an MBA.`,
      image: {
        title: "Apurva Singh, Senior Manager, Partner Relations",
        altText: "Apurva Singh, Senior Manager, Partner Relations",
        link: "https://s3.mordorintelligence.com/team/Apurva-Singh.webp",
      },
    },
    {
      name: "Kartheek Puttaparthini",
      position: "Manager, Client Relations",
      about: `With a decade of sales and business development experience, Kartheek excels in identifying client needs, tailoring solutions, and driving revenue through strategic client partnerships. Having guided countless clients through successful ventures, Kartheek’s understanding of the industry landscape, ability to make the complex simple and the challenging attainable has resulted in remarkable ROI for businesses across various sectors. Kartheek has a bachelor's degree in Pharmaceuticals and an MBA.`,
      image: {
        title: "Kartheek Puttaparthini, Manager, Client Relations",
        altText: "Kartheek Puttaparthini, Manager, Client Relations",
        link: "https://s3.mordorintelligence.com/team/Kartheek-Puttaparthini.webp",
      },
    },
    {
      name: "Krati Agarwal",
      position: "Manager, Client Relations",
      about: `Krati brings extensive experience of Sales and Business Development in the Market Research, Intelligence, and Consulting Industry. Passionate about understanding the ever-evolving market landscape, Krati’s focus is on identifying opportunities for both clients and Mordor Intelligence. Krati has a bachelor's degree in biotechnology engineering.`,
      image: {
        title: "Krati Agarwal, Manager, Client Relations",
        altText: "Krati Agarwal, Manager, Client Relations",
        link: "https://s3.mordorintelligence.com/team/Krati-Agarwal.webp",
      },
    },
    {
      name: "Rashmi Hegde",
      position: "Senior Manager, Training & Research Operations",
      about: `Rashmi has over 15 years of experience in cross-domain and consulting experience within Automotive, Aerospace, Healthcare, and Oil and Gas industries. At Mordor Intelligence, Rashmi handles Training and Research Operations that include centrally driven initiatives to improve processes, people, and products. Before Mordor Intelligence, Rashmi worked with various companies in the field of research, analytics, management and financial consulting. Rashmi has a bachelor's degree in commerce and a master's degree as a Chartered Financial Analyst.`,
      image: {
        title: "Rashmi Hegde, Senior Manager, Training & Research Operations",
        altText: "Rashmi Hegde, Senior Manager, Training & Research Operations",
        link: "https://s3.mordorintelligence.com/team/Rashmi-Hegde.webp",
      },
    },
    {
      name: "Suryanarayan Naidu",
      position: "Manager, Primary Research",
      about: `Surya brings with him a decade of experience in the field of Primary Research. Surya’s experience focuses on designing, planning, and execution of research projects to gather first-hand data directly from sources, such as surveys, interviews, and focus groups and additionally deriving insights to aid in decision-making. At Mordor Intelligence, Surya is the leader of our Primary Research efforts. Before Mordor Intelligence, Surya was working with a Market Research and Consulting firm.  
          Surya has a bachelor's degree in commerce and an MBA.`,
      image: {
        title: "Suryanarayan Naidu, Manager, Primary Research",
        altText: "Suryanarayan Naidu, Manager, Primary Research",
        link: "https://s3.mordorintelligence.com/team/Suryanarayan-Naidu.webp",
      },
    },
    {
      name: "Abhinanda Banerjee",
      position: "Manager, Editorial",
      about: `As the leader of the Editorial Team, Abhinanda guides a group of language aficionados who meticulously refine market reports, ensuring accuracy and coherence. Abhinanda’s commitment to linguistic excellence ensures that every market report that reaches your hands is refined to precision. Abhinanda has a bachelor's degree in English literature and a Master's degree in Culture Studies.`,
      image: {
        title: "Abhinanda Banerjee, Manager, Editorial",
        altText: "Abhinanda Banerjee, Manager, Editorial",
        link: "https://s3.mordorintelligence.com/team/Abhinanda-Banerjee.webp",
      },
    },
    {
      name: "Navin Gubbala",
      position: "Manager, Delivery Operations",
      about: `Navin comes with close to a decade in optimizing collateral delivery processes while concurrently enhancing customer experiences through collateral design. Navin’s focus and expertise lies in adeptly transforming data into impactful visuals that convey essential messages. At Mordor Intelligence, Navin heads our Delivery Operations Team. Navin has a bachelor's degree in engineering.`,
      image: {
        title: "Navin Gubbala, Manager, Delivery Operations",
        altText: "Navin Gubbala, Manager, Delivery Operations",
        link: "https://s3.mordorintelligence.com/team/Naveen-Gubbala.webp",
      },
    },
    {
      name: "Jan Basha Shaik",
      position: "Lead, Technology",
      about: `Basha heads the Tech team at Mordor Intelligence and commands experience in developing complete product strategies, organizing seamless development, and displaying a distinct ability to gather requirements, architect solutions, and create cross-functional synergy. Basha and his team are responsible for all cutting-edge technology applications at Mordor Intelligence.
          Basha has a bachelor's degree in computer science engineering.`,
      image: {
        title: "Jan Basha Shaik, Lead, Technology",
        altText: "Jan Basha Shaik, Lead, Technology",
        link: "https://s3.mordorintelligence.com/team/Jan-Basha-Shaik.webp",
      },
    },
  ],
  info: {
    title: "Did you know?",
    desc: "Agriculture industry has been in top 10% of fastest growing industries.",
  },
  cultureSection: {
    bgColor: "#FFFFFF",
    kicker: "Culture",
    heading: "It’s all About the People",
    description:
      "Mordor's people-first culture continues to inspire our employees to reach their full potential through courage, agility, creativity, independence, learning, and collaboration.",
    cta: {
      title: "Join Our Team",
      link: "#",
    },
    galleryImages: Gallery,
  },
  media: {
    heading: "Media",
    mediaList: [
      {
        title: "Market Intel Conferrence",
        date: "May 05th",
        content:
          "Allow insights to guide your decision making process. Our experties lies in furnishing you with market insights, empowering you to make well-informed decisions",
        image: {
          title: "Market Intel Conference ON Agriculture",
          link: "https://s3.mordorintelligence.com/static/media3322.webp",
          altText: "Market Intel Conference ON Agriculture",
        },
        author: {
          name: "Rahul Sharma",
          position: "Lead Researcher, Agriculture",
          image: {
            title: "Rahul Sharma Profile",
            link: "https://s3.mordorintelligence.com/static/mead-team-23.webp",
            altText: "Rahul Sharma Profile",
          },
        },
        slotsLeft: 15,
        cta: {
          title: "Register For The Event",
          link: "#",
        },
      },
      {
        title: "Market Intel Conferrence",
        date: "May 10th",
        content:
          "Allow insights to guide your decision making process. Our experties lies in furnishing you with market insights, empowering you to make well-informed decisions",
        image: {
          title: "Market Intel Conference ON Agriculture",
          link: "https://s3.mordorintelligence.com/static/media3322.webp",
          altText: "Market Intel Conference ON Agriculture",
        },
        author: {
          name: "Rahul Gupta",
          position: "Manager, Agriculture",
          image: {
            title: "Rahul Gupta Profile",
            link: "https://s3.mordorintelligence.com/static/mead-team-23.webp",
            altText: "Rahul Gupta Profile",
          },
        },
        slotsLeft: 20,
        cta: {
          title: "Register For The Event",
          link: "#",
        },
      },
      {
        title: "Market Intel Conferrence",
        date: "May 05th",
        content:
          "Allow insights to guide your decision making process. Our experties lies in furnishing you with market insights, empowering you to make well-informed decisions",
        image: {
          title: "Market Intel Conference ON Agriculture",
          link: "https://s3.mordorintelligence.com/static/media3322.webp",
          altText: "Market Intel Conference ON Agriculture",
        },
        author: {
          name: "Rahul Sharma",
          position: "Lead Researcher, Agriculture",
          image: {
            title: "Rahul Sharma Profile",
            link: "https://s3.mordorintelligence.com/static/mead-team-23.webp",
            altText: "Rahul Sharma Profile",
          },
        },
        slotsLeft: 15,
        cta: {
          title: "Register For The Event",
          link: "#",
        },
      },
      {
        title: "Market Intel Conferrence",
        date: "May 10th",
        content:
          "Allow insights to guide your decision making process. Our experties lies in furnishing you with market insights, empowering you to make well-informed decisions",
        image: {
          title: "Market Intel Conference ON Agriculture",
          link: "https://s3.mordorintelligence.com/static/media3322.webp",
          altText: "Market Intel Conference ON Agriculture",
        },
        author: {
          name: "Rahul Gupta",
          position: "Manager, Agriculture",
          image: {
            title: "Rahul Gupta Profile",
            link: "https://s3.mordorintelligence.com/static/mead-team-23.webp",
            altText: "Rahul Gupta Profile",
          },
        },
        slotsLeft: 20,
        cta: {
          title: "Register For The Event",
          link: "#",
        },
      },
    ],
  },
  awards: {
    kicker: "Awards",
    heading: "You are in Safe Hands",
    text: "Trusted by brands across industries, geographies, and sizes.",
    logoList: [MRSI, ESOMAR, GPTWLogo, ISO],
    bgImg: BgImg,
  },
  newsSection: {
    heading: "In the News",
    newsPageLink: "#",
    newsList: [
      {
        date: "May 20,2024",
        headline:
          "Mordor Intelligence featured Mint for the best market research company FY.2024.",
        logo: MinyLogo,
        logoWidth: 92,
        link: "#",
      },
      {
        date: "May 20,2024",
        headline:
          "Mordor Intelligence featured in Forbes 500 for best market research company FY.24",
        logo: ForbesLogo,
        logoWidth: 92,
        link: "#",
      },
      {
        date: "May 20,2024",
        headline: "Mordor intelligence wins the best company to work in 2024",
        logo: GPTWLogo,
        logoWidth: 59,
        link: "#",
      },
    ],
  },
};

export const csr = {
  heroSection: {
    heading: "Our Commitment to Social Responsibility",
    description:
      "At Mordor Intelligence, we believe in using our expertise and resources to create a positive societal impact beyond business.",
    cta: {
      title: "About Us",
      link: "https://nextjs.mordorlabs.com/about",
    },
    image: "https://s3.mordorintelligence.com/static/csr-hero32.webp",
  },
  pastEvents: {
    heading: "Memorable Moments: Our Past Events",
    description:
      "Relive our memorable events. From launches to gatherings, each snapshot tells our story.",
    events: [
      {
        title: "Industry Networking and Knowledge Exchange",
        image: "https://s3.mordorintelligence.com/static/memory32.webp",
      },
      {
        title: "Corporate Goals",
        image: "https://s3.mordorintelligence.com/static/memory323.webp",
      },
      {
        title: "Charity Benefit Event",
        image: "https://s3.mordorintelligence.com/static/memory3221.webp",
      },
      {
        title: "Industry Networking and Knowledge Exchange",
        image: "https://s3.mordorintelligence.com/static/memory32.webp",
      },
    ],
  },
  initiativesSection: {
    heading:
      "Our CSR Initiatives: Empowering Futures & Bridging The Opportunity Gap",
    description:
      "We are committed to drive social impact by empowering India’s youth through education and skill development. Our Corporate Social Responsibility (CSR) initiatives focus on bridging the opportunity gap and fostering sustainable growth for the next generation. Through strategic programs, we aim to equip young minds with the knowledge and resources needed to thrive in an evolving world.",
    initiatives: [
      {
        title: "Nurturing Potential",
        description:
          "We believe in unlocking potential through skill development. Our upskilling programs are designed to meet the evolving demands of white-collar careers, providing targeted training, mentorship, and skill enhancement. By equipping young individuals with job-ready skills, we empower them to thrive in today’s competitive job market.",
        image: "https://s3.mordorintelligence.com/static/csr-opt3e12..webp",
      },
      {
        title: "Empowering Employment",
        description:
          "Our CSR initiatives focus on bridging the gap between talent and opportunity. By nurturing young professionals and connecting them with white-collar job opportunities, we enhance their earning potential, self-reliance, and long-term career growth. This not only transforms individual lives but also creates a ripple effect of economic and social progress across families and communities.",
        image: "https://s3.mordorintelligence.com/static/csr-opt3e12.webp",
      },
    ],
  },
  partnersSection: {
    kicker: "Our CSR Partners",
    imgList: [
      {
        label: "boeh",
        src: boeh,
      },
      {
        label: "Coca Cola",
        src: coca,
      },
      {
        label: "Epson",
        src: Epson,
      },
      {
        label: "Cargill",
        src: cargill,
      },
      {
        label: "Microsoft",
        src: Microsoft,
      },
      {
        label: "Qualcomm",
        src: Qualcomm,
      },
      {
        label: "sabre",
        src: sabre,
      },
    ],
  },
  achievementsSection: {
    heading: "Our Impact: Driving Meaningful Change",
    stats: [
      { value: "30+", description: "Initiatives worldwide" },
      { value: "850+", description: "Initiatives worldwide" },
      { value: "50+", description: "Initiatives worldwide" },
      { value: "3000+", description: "Volunteer Hours" },
      { value: "80%", description: "Employee Engagement Globally" },
      { value: "1000+", description: "Branches" },
    ],
  },
  sustainabilitySection: {
    heading: "Living Our Values Through Sustainability",
    description: "At Mordor Intelligence, we take pride in:",
    values: [
      {
        title: "Customer Satisfaction",
        description:
          "Delivering insights that drive success and build lasting partnerships.",
        icon: <Sparkles height={48} width={48} color="#E03C00" />,
      },
      {
        title: "Creativity",
        description:
          "Innovating with fresh perspectives to solve complex market challenges.",
        icon: <ThumbsUp height={48} width={48} color="#E03C00" />,
      },
      {
        title: "Granular Coverage",
        description:
          "Providing in-depth, data-driven insights across diverse industries.",
        icon: <Crosshair height={48} width={48} color="#E03C00" />,
      },
      {
        title: "Ownership",
        description:
          "Taking responsibility for delivering high-quality, actionable intelligence.",
        icon: <Lightbulb height={48} width={48} color="#E03C00" />,
      },
      {
        title: "Quality & Trust",
        description:
          "Ensuring accuracy, reliability, and transparency in every report.",
        icon: <Key height={48} width={48} color="#E03C00" />,
      },
      {
        title: "Results-Oriented",
        description:
          "Focusing on tangible outcomes that create real business impact.",
        icon: <HandHeart height={48} width={48} color="#E03C00" />,
      },
    ],
  },
  finalCTA: {
    heading: "Get to know more about us and what we do",
    description:
      "Be part of our mission to create sustainable impact in the lives of India’s youth. At Mordor Intelligence, we are not just making a difference, we are building a future of empowered individuals and thriving communities.",
    cta: {
      title: "Join Us",
      link: "https://nextjs.mordorlabs.com/jobs",
    },
  },
  contactUs: {
    kicker: "CONTACT US",
    heading: "Today's Accessible Intelligence, Unlocking Tomorrow's Potential.",
    cta: {
      title: "Submit",
      link: "#",
    },
  },
};

export const mediaPageStaticData = {
  awards: {
    kicker: "Awards",
    heading: "Excellence and Achievements",
    text: "Trusted by brands across industries, geographies, and sizes.",
    logoList: [MRSI, ESOMAR, GPTWLogo, ISO],
    bgImg: BgImg,
  },
  pressEnquiry: {
    heading: "For Press Inquiries",
    cta: {
      title: "Email Us",
      link: "media@mordorintelligence.com",
    },
  },
  contactUs: {
    kicker: "CONTACT US",
    heading: "Contact us for expert business solutions",
    cta: {
      title: "Submit",
      link: "#",
    },
  },
};

export const IndustriesOverviewData = {
  heroSection: {
    heading:
      "Explore the market, discover industries driving tomorrow's trends",
    desc: "Seeking the latest consumer trends in your industry? Access sector-specific insights for staying ahead effortlessly",
    cta: {
      title: "Explore Industry Reports",
      link: "",
    },
  },
  trendingIndustries: {
    heading: "TRENDING",
    industries: [
      {
        label: "Healthcare Market Research",
        id: "",
        description: "Best Market Research Company",
        link: "",
      },
      {
        label: "Hospitality",
        id: "",
        description: "Best Market Research Company",
        link: "",
      },
      {
        label: "Food and Beverage",
        id: "",
        description: "Best Market Research Company",
        link: "",
      },
      {
        label: "Packaging",
        id: "",
        description: "Best Market Research Company",
        link: "",
      },
    ],
  },
  companyStats: [
    {
      label: "Industries",
      value: 100,
    },
    {
      label: "Market Segments",
      value: 9,
    },
    {
      label: "Companies",
      value: 600,
    },
  ],
  popularIndustries: {
    kicker: "POPULAR INDUSTRIES",
    heading: "Industries We Serve",
    title: "Other Industries we serve as well",
    trending: [
      {
        label: "Aerospace & Defense",
        description:
          "Set your clients up for success with priceless insights on their audience",
        id: "",
        imgUrl: "https://s3.mordorintelligence.com/static/ind1.webp",
        CTA: {
          title: "Learn More",
          link: "",
        },
      },
      {
        label: "Agriculture",
        description:
          "Set your clients up for success with priceless insights on their audience",
        id: "",
        imgUrl: "https://s3.mordorintelligence.com/static/ind2.webp",
        CTA: {
          title: "Learn More",
          link: "",
        },
      },
      {
        label: "Chemical & Materials",
        description:
          "Set your clients up for success with priceless insights on their audience",
        id: "",
        imgUrl: "https://s3.mordorintelligence.com/static/Image.webp",
        CTA: {
          title: "Learn More",
          link: "",
        },
      },
    ],
    industries: [
      {
        label: "Aerospace & Defense",
        link: "https://www.mordorintelligence.com/market-analysis/aerospace-defense",
        id: "",
      },
      {
        label: "Agriculture",
        link: "https://www.mordorintelligence.com/market-analysis/agriculture",
        id: "",
      },
      {
        label: "Animal Nutrition & Wellness",
        link: "https://www.mordorintelligence.com/market-analysis/animal-nutrition",
        id: "",
      },
      {
        label: "Automotive",
        link: "https://www.mordorintelligence.com/market-analysis/automotive",
        id: "",
      },
      {
        label: "Chemicals & Materials",
        link: "https://www.mordorintelligence.com/market-analysis/chemicals-materials",
        id: "",
      },
      {
        label: "Consumer Goods and Services",
        link: "https://www.mordorintelligence.com/market-analysis/consumer-goods-and-services",
        id: "",
      },
      {
        label: "Energy & Power",
        link: "https://www.mordorintelligence.com/market-analysis/energy-power",
        id: "",
      },
      {
        label: "Financial Services and Investment Intelligence",
        link: "https://www.mordorintelligence.com/market-analysis/financial-services-and-investment-intelligence",
        id: "",
      },
      {
        label: "Food & Beverage",
        link: "https://www.mordorintelligence.com/market-analysis/food-beverage",
        id: "",
      },
      {
        label: "Healthcare",
        link: "https://www.mordorintelligence.com/market-analysis/healthcare",
        id: "",
      },
      {
        label: "Home and Property Improvement",
        link: "https://www.mordorintelligence.com/market-analysis/home-property-improvement",
        id: "",
      },
      {
        label: "Hospitality and Tourism",
        link: "https://www.mordorintelligence.com/market-analysis/hospitality-and-tourism",
        id: "",
      },
      {
        label: "Logistics",
        link: "https://www.mordorintelligence.com/market-analysis/logistics",
        id: "",
      },
      {
        label: "Manufacturing Products and Services",
        link: "https://www.mordorintelligence.com/market-analysis/manufacturing-products-and-services",
        id: "",
      },
      {
        label: "Packaging",
        link: "https://www.mordorintelligence.com/market-analysis/packaging",
        id: "",
      },
      {
        label: "Professional and Commercial Services",
        link: "https://www.mordorintelligence.com/market-analysis/professional-and-commercial-services",
        id: "",
      },
      {
        label: "Real Estate and Construction",
        link: "https://www.mordorintelligence.com/market-analysis/real-estate-and-construction",
        id: "",
      },
      {
        label: "Retail",
        link: "https://www.mordorintelligence.com/market-analysis/retail",
        id: "",
      },
      {
        label: "Technology, Media and Telecom",
        link: "https://www.mordorintelligence.com/market-analysis/technology-media-and-telecom",
        id: "",
      },
    ],
  },
  ourClients: {
    title: "OUR CLIENTS",
    heading: "Endorsed by the Premier Brands in the Industry",
    CTA: {
      link: "",
      title: "See All Clients",
    },
    clients: [
      boeh,
      coca,
      Epson,
      cargill,
      Microsoft,
      Qualcomm,
      sabre,
      boeh,
      coca,
      Epson,
      cargill,
      Microsoft,
      Qualcomm,
      sabre,
    ],
    mobileImages: {
      kicker: "OUR CUSTOMERS",
      imgList: [
        {
          label: "boeh",
          src: boeh,
        },
        {
          label: "Coca Cola",
          src: coca,
        },
        {
          label: "Epson",
          src: Epson,
        },
        {
          label: "Cargill",
          src: cargill,
        },
        {
          label: "Microsoft",
          src: Microsoft,
        },
        {
          label: "Qualcomm",
          src: Qualcomm,
        },
        {
          label: "sabre",
          src: sabre,
        },
      ],
    },
  },
  customerStories: {
    kicker: "CUSTOMER STORIES",
    heading: "Don’t Just Take Our Words For It",
    customerTestimonials: [
      {
        comment: {
          heading: "",
          body: "Thank you for providing us with a fantastic cybersecurity market intelligence report. The report was provided quickly and covers all the key areas that show an in-depth understanding of the market. The level of detail and coverage in the report is impressive. We have used the report to shape our global go-to-market value proposition, for a multi-billion dollar business unit. The feedback from the team has been really positive. It is wonderful to see regional teams building this market intelligence into their own presentations. This is proof in itself of the quality of the report. Thank you again.",
        },
        customer: {
          profileImage: TDSynnex,
          name: "Lawrence Roberts",
          position: "Senior Global Manager For Strategic Go-to-Market",
          company: "TD SYNNEX",
        },
        link: "https://www.mordorintelligence.com/testimonials/Recommendation-TD-SYNNEX.pdf",
      },
      {
        comment: {
          heading: "",
          body: "We used Mordor Intelligence’s Skincare research which focused on the skincare category. This gave us a view of current splits and growths, and a forecast of market sizes and growths. As a business we were able to use this information to plan around which categories were the best to focus on, based on long term growth. The research also gave us a lot of information on what competitors and brands are doing well, as well as what the global trends are with examples. The consumer behaviour analysis also gave some great insight as to how people are shopping and researching products in the skincare category. All in all the research has enabled us to make more informed business decisions.",
        },
        customer: {
          profileImage: Mentholatum,
          name: "Trish Erasmus",
          position: "Skincare Brand Manager",
          company: "Mentholatum SA",
        },
        link: "https://www.mordorintelligence.com/testimonials/Mentholatum-SA-Skin-Care.pdf ",
      },
    ],
  },
  ourImpact: {
    kicker: "Our Impact",
    heading: "Enabling Informed Decisions with Actionable Market Insights",
    cta: {
      title: "See All Case Studies",
      link: "#",
    },
    caseStudiesList: [
      {
        heading:
          "From consultants and Fortune 500 companies to government agencies.",
        logo: Cargill,
        link: "#",
        ctaText: "View Case Study",
      },
      {
        heading: "AI Is the new modern technology to solve complex problems.",
        logo: Ai,
        link: "#",
        ctaText: "View Case Study",
      },

      {
        heading:
          "Unlocking insights through market research for Beverage industries worldwide.",
        logo: Bottle,
        link: "#",
        ctaText: "View Case Study",
      },
    ],
  },
  contactUs: {
    kicker: "CONTACT US",
    heading: "Today's Accessible Intelligence, Unlocking Tomorrow's Potential.",
    cta: {
      title: "Submit",
      link: "#",
    },
  },
};

export const resourceAndMobile = {
  header: {
    title: "Resource Overview",
    desc: "Mordor blogs keep you current on the latest developments, insights and perspectives on supply chain and procurement software and strategy. Be it quick reads on supply chain and procurement or deep dives into specific categories, we cover every major industry.",
    headerImage: "https://s3.mordorintelligence.com/static/resource-hero.webp",
  },
};

export const reportsLandingPage = {
  heroSection: {
    title: "We have biggest reports repository with us",
    description:
      "With our expansive repository of market research reports, you gain access to comprehensive and up-to-date insights across various industries. Our curated collection ensures you have the critical data needed for informed business decisions. Trust us as your go-to source for market intelligence and drive your strategic initiatives with confidence.",
    cta: [
      {
        text: "Explore Solution",
        link: "#",
      },
      {
        text: "Contact Us",
        link: "#",
      },
    ],
    image: reportLandingPage,
  },
  trendingReports: [
    {
      title:
        "Europe Satellite Attitude and Orbit Control System Market Size & Share Analysis - Growth Trends & Forecasts Up To 2029",
      link: "#",
    },
    {
      title:
        "Europe Satellite Attitude and Orbit Control System Market Size & Share Analysis - Growth Trends & Forecasts Up To 2029",
      link: reportLandingPage,
    },
  ],
  ourCustomers: {
    kicker: "OUR CUSTOMERS",
    imgList: [
      {
        label: "boeh",
        src: boeh,
      },
      {
        label: "Coca Cola",
        src: coca,
      },
      {
        label: "Epson",
        src: Epson,
      },
      {
        label: "Cargill",
        src: cargill,
      },
      {
        label: "Microsoft",
        src: Microsoft,
      },
      {
        label: "Qualcomm",
        src: Qualcomm,
      },
      {
        label: "sabre",
        src: sabre,
      },
    ],
  },
  solutionTabs: {
    kicker: "",
    heading: "Our Offering",
    tabOptions: ["Reports", "Market Data"],
    tabData: [
      {
        heading: "Market Research Reports",
        description:
          "Get access to all our previous reports that are updated regularly for a discounted price. Use these insights that we collect for top MNC's to drive your business impact.",
        stats: [
          { label: "Companies", value: "6,000 +" },
          { label: "Reports", value: "9,000 +" },
          { label: "Industries", value: "100 +" },
        ],
        imgUrl: reports,
        ctaOne: {
          title: "View All Reports",
          link: "https://www.mordorintelligence.com/market-analysis",
        },
      },
      {
        heading: "Access Granular Market Data",
        description:
          "Uncover emerging trends shaping your industry. Make data-driven decisions with comprehensive market sizing, trends, and forecasts.",
        stats: [{ label: "Research Experts", value: "550+" }],
        imgUrl: MarketData,
        ctaOne: {
          title: "Explore Market Data Solutions",
          link: "",
        },
      },
    ],
  },
  ourExpertise: {
    title: "Our Expertise",
    desc: "Get a head start with the insights to guide your decision-making process. Our expertise lies in furnishing you with market insights, empowering you to make well-informed decisions.",
    steps: [
      {
        text: "Pricing Strategy",
        link: "#",
      },
      {
        text: "Sustainability",
        link: "#",
      },
      {
        text: "Pricing Strategy",
        link: "#",
      },
      {
        text: "Supply Chain",
        link: "#",
      },
    ],
  },
  whyUs: {
    // Add Why Us Section same as gyan prakash
    kicker: "Why Us",
    heading: "Why Choose Mordor Intelligence?",
  },
  researchMethodology: {
    heading: "Research Methodology",
    tabOptions: [
      "Overview",
      "Desk research",
      "Expert interviews",
      "Data modelling",
      "Survey",
    ],
    tabs: [
      {
        tabName: "Overview",
        type: "cards", // Defines the structure type
        data: {
          steps: [
            {
              title: "Step 01",
              description:
                "Mordor Intelligence is dedicated to providing market intelligence that offers actionable insights you can rely on. Our research methodology, which combines secondary and primary research, ensures the accuracy and credibility of our findings. Our process begins with thorough desk research, where we delve into paid databases, internal data, and a variety of publications to grasp the current market landscape. ",
            },
            {
              title: "Step 02",
              description:
                "This initial phase is then complemented by detailed primary research. Here, we engage in interviews with industry experts, utilize market surveys, and meticulously validate all data through triangulation and expert analysis. Every piece of information we gather is carefully scrutinized to draw meaningful conclusions.",
            },
            {
              title: "Step 03",
              description:
                "Our analysts and subject matter experts also employ heuristic methods for market estimates, anchoring our market models and forecasts in reliable data. Finally, we emphasize the validation process, employing rigorous methods to ensure the accuracy of our final data points.",
            },
          ],
        },
      },
      {
        tabNam: "Desk research",
        type: "list", // Defines the structure type
        data: {
          topParagraph:
            "Desk research, also referred to as secondary research, underpins our market research methodology. It entails consolidating data and insights from existing publications to discern market trends, technological advancements, and industry shifts. Below, we outline the key sources we tap into for our secondary research:",
          steps: [
            {
              title: "Purchased Databases",
              points: [
                // Allows both a paragraph (string) and a list (string[])
                "Company Databases",
                "Industry Specific Databases",
                "Content Aggregators",
                "Niche Data Sets",
              ],
              rightSectionData: {
                image:
                  "https://s3.mordorintelligence.com/static/overoff22.webp",
                text: {
                  title: "Repository Databases with over 30000+ Reports",
                  desc: "At Mordor, our market intelligence services are strengthened by the strategic use of high-quality purchased databases. These databases are essential tools in our research methodology, providing us with extensive, reliable, and up-to-date information that enhances the accuracy and depth of our market analysis. Sourced from trusted providers, they offer accurate and validated information, boosting our analytical capabilities for benchmarking, trend identification, market sizing, segmentation, and competitive analysis. Integrating these databases with our proprietary data ensures a comprehensive approach, while adhering to ethical and legal standards.",
                },
              },
            },
            {
              title: "Secondary Databases",
              points: [
                "Industry and Government Websites",
                "Think Tanks",
                "Academic and Scientific Websites",
              ],
              rightSectionData: {
                image:
                  "https://s3.mordorintelligence.com/static/overoff223232.webp",
                text: {
                  title: "Repository Databases with over 30000+ Reports",
                  desc: "At Mordor, our market intelligence services are strengthened by the strategic use of high-quality purchased databases. These databases are essential tools in our research methodology, providing us with extensive, reliable, and up-to-date information that enhances the accuracy and depth of our market analysis. Sourced from trusted providers, they offer accurate and validated information, boosting our analytical capabilities for benchmarking, trend identification, market sizing, segmentation, and competitive analysis. Integrating these databases with our proprietary data ensures a comprehensive approach, while adhering to ethical and legal standards.",
                },
              },
            },
            {
              title: "Company Websites",
              points: ["Company Roadmap", "Company Databases"],
              rightSectionData: {
                image:
                  "https://s3.mordorintelligence.com/static/overoff22.webp",
                text: {
                  title: "Repository Databases with over 30000+ Reports",
                  desc: "At Mordor, our market intelligence services are strengthened by the strategic use of high-quality purchased databases. These databases are essential tools in our research methodology, providing us with extensive, reliable, and up-to-date information that enhances the accuracy and depth of our market analysis. Sourced from trusted providers, they offer accurate and validated information, boosting our analytical capabilities for benchmarking, trend identification, market sizing, segmentation, and competitive analysis. Integrating these databases with our proprietary data ensures a comprehensive approach, while adhering to ethical and legal standards.",
                },
              },
            },

            {
              title: "Mordor’s Internal Databases",
              points: ["Our Internal Databases"],
              rightSectionData: {
                image:
                  "https://s3.mordorintelligence.com/static/overoff223232.webp",
                text: {
                  title: "Repository Databases with over 30000+ Reports",
                  desc: "At Mordor, our market intelligence services are strengthened by the strategic use of high-quality purchased databases. These databases are essential tools in our research methodology, providing us with extensive, reliable, and up-to-date information that enhances the accuracy and depth of our market analysis. Sourced from trusted providers, they offer accurate and validated information, boosting our analytical capabilities for benchmarking, trend identification, market sizing, segmentation, and competitive analysis. Integrating these databases with our proprietary data ensures a comprehensive approach, while adhering to ethical and legal standards.",
                },
              },
            },
          ],
        },
      },
      {
        tabName: "Expert Interviews",
        type: "list",
        data: {
          topParagraph:
            "For the past decade, our research process has hinged on our adeptness at swiftly tapping into our extensive expert network to glean robust insights. Expert interviews stand as pivotal pillars, offering firsthand insights and data validation. We liaise with industry experts spanning the value chain, ensuring a blend of qualitative and quantitative data. Our outreach extends to raw material suppliers, manufacturers, distributors, regulators, market players, and independent experts, tailored to each project's needs. Our interviewees, carefully selected, encompass a broad spectrum of roles, from CXOs to specialized experts and middle management.",
          steps: [
            {
              title: "Interview Methodologies",
              points: [
                "Telephonic Interviews",
                "Surveys",
                "Email Interviews",
                "Virtual Councils",
              ],
              rightSectionData: {
                image:
                  "https://s3.mordorintelligence.com/static/overoff2232.webp",
                text: {
                  title: "Repository Databases with over 30000+ Reports",
                  desc: "At Mordor, our market intelligence services are strengthened by the strategic use of high-quality purchased databases. These databases are essential tools in our research methodology, providing us with extensive, reliable, and up-to-date information that enhances the accuracy and depth of our market analysis. Sourced from trusted providers, they offer accurate and validated information, boosting our analytical capabilities for benchmarking, trend identification, market sizing, segmentation, and competitive analysis. Integrating these databases with our proprietary data ensures a comprehensive approach, while adhering to ethical and legal standards.",
                },
              },
            },
            {
              title: "Expert Network",
              points: [
                "In-house Panel",
                "Need-Based Recruitment",
                "Extended Network",
                "Regional Scope",
              ],
              rightSectionData: {
                image:
                  "https://s3.mordorintelligence.com/static/expert-interviews-2.webp",
                text: {
                  title: "Repository Databases with over 30000+ Reports",
                  desc: "At Mordor, our market intelligence services are strengthened by the strategic use of high-quality purchased databases. These databases are essential tools in our research methodology, providing us with extensive, reliable, and up-to-date information that enhances the accuracy and depth of our market analysis. Sourced from trusted providers, they offer accurate and validated information, boosting our analytical capabilities for benchmarking, trend identification, market sizing, segmentation, and competitive analysis. Integrating these databases with our proprietary data ensures a comprehensive approach, while adhering to ethical and legal standards.",
                },
              },
            },
          ],
        },
      },
      {
        tabName: "Data Modeling",
        type: "list",
        data: {
          topParagraph:
            "Market modeling is pivotal in predicting future trends, growth rates, and competitor market shares. Our meticulous data modeling process entails pinpointing crucial variables, crafting statistical and econometric models, and rigorously validating these models to ensure precise market trend and market size estimations. Here’s a detailed look at our market modeling methodology:",
          steps: [
            {
              title: "Interview Methodologies",
              points:
                "Relevant variables are identified and tested against historical market data through an iterative process involving industry experts. Each market demands a deep dive into distinct variables, including but not limited to player performance, product penetration, demand-supply dynamics, new product introductions, pricing, regulatory landscapes, and customer behavior.",
              rightSectionData: {
                image:
                  "https://s3.mordorintelligence.com/static/overoff223232.webp",
                text: {
                  title: "Repository Databases with over 30000+ Reports",
                  desc: "At Mordor, our market intelligence services are strengthened by the strategic use of high-quality purchased databases. These databases are essential tools in our research methodology, providing us with extensive, reliable, and up-to-date information that enhances the accuracy and depth of our market analysis. Sourced from trusted providers, they offer accurate and validated information, boosting our analytical capabilities for benchmarking, trend identification, market sizing, segmentation, and competitive analysis. Integrating these databases with our proprietary data ensures a comprehensive approach, while adhering to ethical and legal standards.",
                },
              },
            },
            {
              title: "Expert Network",
              points:
                "Relevant variables are identified and tested against historical market data through an iterative process involving industry experts. Each market demands a deep dive into distinct variables, including but not limited to player performance, product penetration, demand-supply dynamics, new product introductions, pricing, regulatory landscapes, and customer behavior.",
              rightSectionData: {
                image:
                  "https://s3.mordorintelligence.com/static/overoff223232.webp",
                text: {
                  title: "Repository Databases with over 30000+ Reports",
                  desc: "At Mordor, our market intelligence services are strengthened by the strategic use of high-quality purchased databases. These databases are essential tools in our research methodology, providing us with extensive, reliable, and up-to-date information that enhances the accuracy and depth of our market analysis. Sourced from trusted providers, they offer accurate and validated information, boosting our analytical capabilities for benchmarking, trend identification, market sizing, segmentation, and competitive analysis. Integrating these databases with our proprietary data ensures a comprehensive approach, while adhering to ethical and legal standards.",
                },
              },
            },
            {
              title: "Validation and Finalization",
              points:
                "Our market models undergo rigorous validation, scrutinizing historical data, stress tests, and expert evaluations. We further bolster our validation through data triangulation, employing multiple approaches to estimate variables and enhance the reliability of our projections.",
              rightSectionData: {
                image:
                  "https://s3.mordorintelligence.com/static/overoff223232.webp",
                text: {
                  title: "Repository Databases with over 30000+ Reports",
                  desc: "At Mordor, our market intelligence services are strengthened by the strategic use of high-quality purchased databases. These databases are essential tools in our research methodology, providing us with extensive, reliable, and up-to-date information that enhances the accuracy and depth of our market analysis. Sourced from trusted providers, they offer accurate and validated information, boosting our analytical capabilities for benchmarking, trend identification, market sizing, segmentation, and competitive analysis. Integrating these databases with our proprietary data ensures a comprehensive approach, while adhering to ethical and legal standards.",
                },
              },
            },
          ],
        },
      },
      {
        tabName: "Survey",
        type: "list",
        data: {
          topParagraph:
            "Surveys play a pivotal role in collecting quantitative data from industry experts and decision-makers, while also gauging market sentiment from a wider audience in real-time. Our survey team doesn't just assist clients with survey-centric projects; they also bolster our research methodology by uncovering elusive insights and data in intricate markets. Survey insights are instrumental in comprehending the behaviors, preferences, and requirements of industry players, enriching the qualitative and quantitative aspects of our data modeling. With seasoned specialists, interviewers, and project managers, our team guarantees top-notch data collection and analysis.",
          steps: [
            {
              title: "Capabilities",
              points: [
                "Telephonic Surveys",
                "Online Surveys",
                "CATI: Computer-Assisted Telephone Interviewing",
                "Web-Assisted Telephonic Surveys",
              ],
              rightSectionData: {
                image:
                  "https://s3.mordorintelligence.com/static/overoff2232.webp",
                text: {
                  title: "Repository Databases with over 30000+ Reports",
                  desc: "At Mordor, our market intelligence services are strengthened by the strategic use of high-quality purchased databases. These databases are essential tools in our research methodology, providing us with extensive, reliable, and up-to-date information that enhances the accuracy and depth of our market analysis. Sourced from trusted providers, they offer accurate and validated information, boosting our analytical capabilities for benchmarking, trend identification, market sizing, segmentation, and competitive analysis. Integrating these databases with our proprietary data ensures a comprehensive approach, while adhering to ethical and legal standards.",
                },
              },
            },
            {
              title: "Expert Network",
              points: [
                "Data Reporting",
                "Sampling",
                "Questionnaire Design",
                "Quality Review",
                "Data Collection",
              ],
              rightSectionData: {
                image:
                  "https://s3.mordorintelligence.com/static/survey-network.webp",
                text: {
                  title: "Repository Databases with over 30000+ Reports",
                  desc: "At Mordor, our market intelligence services are strengthened by the strategic use of high-quality purchased databases. These databases are essential tools in our research methodology, providing us with extensive, reliable, and up-to-date information that enhances the accuracy and depth of our market analysis. Sourced from trusted providers, they offer accurate and validated information, boosting our analytical capabilities for benchmarking, trend identification, market sizing, segmentation, and competitive analysis. Integrating these databases with our proprietary data ensures a comprehensive approach, while adhering to ethical and legal standards.",
                },
              },
            },
            {
              title: "Survey Coverage",
              points: [
                "Types of survey: B2B, B2C, B2G",
                "Survey size: 10 to 5000+",
                "Countries: English & non-English surveys (60+ countries)",
              ],
              rightSectionData: {
                image:
                  "https://s3.mordorintelligence.com/static/overoff2232.webp",
                text: {
                  title: "Repository Databases with over 30000+ Reports",
                  desc: "At Mordor, our market intelligence services are strengthened by the strategic use of high-quality purchased databases. These databases are essential tools in our research methodology, providing us with extensive, reliable, and up-to-date information that enhances the accuracy and depth of our market analysis. Sourced from trusted providers, they offer accurate and validated information, boosting our analytical capabilities for benchmarking, trend identification, market sizing, segmentation, and competitive analysis. Integrating these databases with our proprietary data ensures a comprehensive approach, while adhering to ethical and legal standards.",
                },
              },
            },
          ],
        },
      },
    ],
  },

  latestReports: {
    heading: "Latest Reports",
    button: {
      text: "Explore Reports",
      link: "#",
    },
    reports: [
      {
        category: "Food and Beverage",
        title:
          "Europe Industrial and Institutional Cleaning Chemicals Industry",
        cagr: "5.5%",
        studyPeriod: "2024-2029",
        regionsCovered: [
          "Germany",
          "United Kingdom",
          "France",
          "Italy",
          "Spain",
          "Russia",
        ],
        majorPlayers: [
          "Procter & Gamble",
          "Henkel AG & Co. KGaA",
          "BASF SE",
          "3M",
          "CLARIANT",
        ],
        price: "₹300",
        licenceType: "Single License",
        freeSampleButton: {
          text: "Download Free Sample",
          link: "#",
        },
        addToCartButton: {
          text: "Add to Cart",
          link: "#",
        },
        image:
          "https://s3.mordorintelligence.com/static/majorplayers32323.webp",
      },
      {
        category: "Food and Beverage",
        title:
          "Europe Industrial and Institutional Cleaning Chemicals Industry",
        cagr: "5.5%",
        studyPeriod: "2024-2029",
        regionsCovered: [
          "Germany",
          "United Kingdom",
          "France",
          "Italy",
          "Spain",
          "Russia",
        ],
        majorPlayers: [
          "Procter & Gamble",
          "Henkel AG & Co. KGaA",
          "BASF SE",
          "3M",
          "CLARIANT",
        ],
        price: "₹300",
        licenceType: "Single License",
        freeSampleButton: {
          text: "Download Free Sample",
          link: "#",
        },
        addToCartButton: {
          text: "Add to Cart",
          link: "#",
        },
        image:
          "https://s3.mordorintelligence.com/static/majorplayers32323.webp",
      },
      {
        category: "Food and Beverage",
        title:
          "Europe Industrial and Institutional Cleaning Chemicals Industry",
        cagr: "5.5%",
        studyPeriod: "2024-2029",
        regionsCovered: [
          "Germany",
          "United Kingdom",
          "France",
          "Italy",
          "Spain",
          "Russia",
        ],
        majorPlayers: [
          "Procter & Gamble",
          "Henkel AG & Co. KGaA",
          "BASF SE",
          "3M",
          "CLARIANT",
        ],
        price: "₹300",
        licenceType: "Single License",
        freeSampleButton: {
          text: "Download Free Sample",
          link: "#",
        },
        addToCartButton: {
          text: "Add to Cart",
          link: "#",
        },
        image:
          "https://s3.mordorintelligence.com/static/majorplayers32323.webp",
      },
    ],
  },
  ourImpact: {
    kicker: "Our Impact",
    heading: "Enabling Informed Decisions with Actionable Market Insights",
    cta: {
      title: "See All Case Studies",
      link: "#",
    },
    caseStudiesList: [
      {
        heading:
          "From consultants and Fortune 500 companies to government agencies.",
        logo: Cargill,
        link: "#",
        ctaText: "View Case Study",
      },
      {
        heading: "AI Is the new modern technology to solve complex problems.",
        logo: Ai,
        link: "#",
        ctaText: "View Case Study",
      },

      {
        heading:
          "Unlocking insights through market research for Beverage industries worldwide.",
        logo: Bottle,
        link: "#",
        ctaText: "View Case Study",
      },
    ],
  },
  awards: {
    kicker: "Awards",
    heading: "You are in Safe Hands",
    text: "Trusted by brands across industries, geographies, and sizes.",
    logoList: [MRSI, ESOMAR, GPTWLogo, ISO],
    bgImg: BgImg,
  },
  customerStories: {
    kicker: "CUSTOMER STORIES",
    heading: "Don’t Just Take Our Words For It",
    customerTestimonials: [
      {
        comment: {
          heading: "",
          body: "Thank you for providing us with a fantastic cybersecurity market intelligence report. The report was provided quickly and covers all the key areas that show an in-depth understanding of the market. The level of detail and coverage in the report is impressive. We have used the report to shape our global go-to-market value proposition, for a multi-billion dollar business unit. The feedback from the team has been really positive. It is wonderful to see regional teams building this market intelligence into their own presentations. This is proof in itself of the quality of the report. Thank you again.",
        },
        customer: {
          profileImage: TDSynnex,
          name: "Lawrence Roberts",
          position: "Senior Global Manager For Strategic Go-to-Market",
          company: "TD SYNNEX",
        },
        link: "https://www.mordorintelligence.com/testimonials/Recommendation-TD-SYNNEX.pdf",
      },
      {
        comment: {
          heading: "",
          body: "We used Mordor Intelligence’s Skincare research which focused on the skincare category. This gave us a view of current splits and growths, and a forecast of market sizes and growths. As a business we were able to use this information to plan around which categories were the best to focus on, based on long term growth. The research also gave us a lot of information on what competitors and brands are doing well, as well as what the global trends are with examples. The consumer behaviour analysis also gave some great insight as to how people are shopping and researching products in the skincare category. All in all the research has enabled us to make more informed business decisions.",
        },
        customer: {
          profileImage: Mentholatum,
          name: "Trish Erasmus",
          position: "Skincare Brand Manager",
          company: "Mentholatum SA",
        },
        link: "https://www.mordorintelligence.com/testimonials/Mentholatum-SA-Skin-Care.pdf ",
      },
    ],
  },
  contactUs: {
    kicker: "CONTACT US",
    heading: "Today's Accessible Intelligence, Unlocking Tomorrow's Potential.",
    cta: {
      title: "Submit",
      link: "#",
    },
  },
};

export const industryBlogPageDetails = {
  slug: "food-and-beverage",
  heroSectionDetails: {
    heading: "Food & Beverage",
    desc: "GEP’s blogs keep you current on the latest developments, insights and perspectives on supply chain and procurement software and strategy.Be it quick reads on supply chain and procurement or deep dives into specific categories, we cover every major industry.",
    image: {
      title: "Blog Page Hero Section Image",
      altText: "Blog Page Hero Section Image",
      link: BlogsHero1,
    },
  },
  featuredBlogDetails: {
    heading: "Featured Blogs",
    featuredBlogList: [
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
    ],
  },
  blogListingDetails: {
    heading: "Food & Beverage Blogs",
    blogList: [
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        category: "Agriculture",
        type: "Blog",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
    ],
  },
  moreResourceDetails: {
    heading: "More Resources",
    resourceList: [
      {
        image: CaseStudiesImg,
        title: "Case Studies",
        link: "#",
      },
      {
        image: FaqsImg,
        title: "FAQ's",
        link: "#",
      },
      {
        image: InsightsImg,
        title: "Insights",
        link: "#",
      },
    ],
  },
  similarCategoriesDetails: {
    heading: "Similar Categories",
    categoriesList: [
      {
        image: Aerospace,
        title: "Aerospace & Defence",
        slug: "aerospace-and-defence",
      },
      {
        image: Aerospace,
        title: "Agriculture",
        slug: "agriculture",
      },
      {
        image: Aerospace,
        title: "Automotive",
        slug: "automotive",
      },
    ],
  },
};

export const blogsPageData = {
  heroSectionDetails: {
    heading: "Mordor Intelligence Blogs",
    desc: "Mordor blogs keep you current on the latest developments, insights and perspectives on supply chain and procurement software and strategy. Be it quick reads on supply chain and procurement or deep dives into specific categories, we cover every major industry.",
    image: {
      title: "Blog Page Hero Section Image",
      altText: "Blog Page Hero Section Image",
      link: BlogsHero1,
    },
  },
  trendingBlogDetails: {
    heading: "Trending Blogs",
    list: [
      {
        title:
          "Automakers Wrapping Safety Strip to Reach USD 20.62 Billion by 2027",
        link: "#",
      },
      {
        title:
          "Ammunition Investments Making Cracks USD 1246.13 Million by 2026",
        link: "#",
      },
      {
        title:
          "Military Training Aircrafts Set for Action to Reach USD 6.62 Billion By 2030",
        link: "#",
      },
    ],
  },
  featuredBlogDetails: {
    heading: "Featured Blogs",
    featuredBlogList: [
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
    ],
  },
  keyInsightDetails: {
    heading: "Key Insights",
    insightBlog: {
      title: "Boosting agriculture with tech is the next big thing",
      description:
        "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
      type: "Research Report",
      category: "Agriculture",
      date: "25th May",
      image: {
        title: "Featured Article Image",
        altText: "Featured Article Image",
        link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
      },
      readTime: "12 Mins Read",
      author: {
        name: "Rahul Sharma",
        image: {
          title: "Featured Article Author Image",
          altText: "Featured Article Author Image",
          link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
        },
        designation: "Lead Researcher, Agriculture",
      },
      CTA: {
        title: "Read Blog",
        link: "#",
      },
    },
  },
  categoriesDetails: {
    heading: "Blog Categories",
    categoryList: [
      {
        title: "AreoSpace & Defence",
        slug: "areospace-and-defence",
      },
      {
        title: "Consumer Goods & Services",
        slug: "consumer-goods-and-services",
      },
      {
        title: "Hospitality & Tourism",
        slug: "hospitality-and-tourism",
      },
      {
        title: "Real Estate & Construction",
        slug: "real-estate-and-construction",
      },
      {
        title: "Automotive",
        slug: "automotive",
      },
      {
        title: "Energy & Power",
        slug: "energy-and-power",
      },
      {
        title: "Logistics",
        slug: "logistics",
      },
      {
        title: "Technology, Media & Telecom",
        slug: "technology-media-and-telecom",
      },
      {
        title: "Animals Nutrition & Wellness",
        slug: "animals-nutrition-and-wellness",
      },
      {
        title: "Financial Services & Investment Intelligence",
        slug: "financial-services-and-nvestment-intelligence",
      },
      {
        title: "Manufacturing Products & Services",
        slug: "manufacturing-products-and-services",
      },
      {
        title: "Agriculture",
        slug: "agriculture",
      },
      {
        title: "Chemicals & Materials",
        slug: "chemicals-and-materials",
      },
      {
        title: "Fertilizers",
        slug: "fertilizers",
      },
    ],
  },
  moreResourceDetails: {
    heading: "More Resources",
    resourceList: [
      {
        image: CaseStudiesImg,
        title: "Case Studies",
        link: "#",
      },
      {
        image: FaqsImg,
        title: "FAQ's",
        link: "#",
      },
      {
        image: InsightsImg,
        title: "Insights",
        link: "#",
      },
    ],
  },
  blogListingDetails: {
    heading: "Latest Blogs",
    blogList: [
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        category: "Agriculture",
        type: "Blog",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
    ],
  },
};

export const allBlogsPageData = {
  heroSectionDetails: {
    heading: "Mordor Intelligence Blogs",
    desc: "Mordor blogs keep you current on the latest developments, insights and perspectives on supply chain and procurement software and strategy. Be it quick reads on supply chain and procurement or deep dives into specific categories, we cover every major industry.",
    image: {
      title: "Blog Page Hero Section Image",
      altText: "Blog Page Hero Section Image",
      link: BlogsHero1,
    },
  },
  trendingBlogDetails: {
    heading: "Trending Blogs",
    list: [
      {
        title:
          "Automakers Wrapping Safety Strip to Reach USD 20.62 Billion by 2027",
        link: "#",
      },
      {
        title:
          "Ammunition Investments Making Cracks USD 1246.13 Million by 2026",
        link: "#",
      },
      {
        title:
          "Military Training Aircrafts Set for Action to Reach USD 6.62 Billion By 2030",
        link: "#",
      },
    ],
  },
  featuredBlogDetails: {
    heading: "Featured Blogs",
    featuredBlogList: [
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
    ],
  },
  keyInsightDetails: {
    heading: "Key Insights",
    insightBlog: {
      title: "Boosting agriculture with tech is the next big thing",
      description:
        "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
      type: "Research Report",
      category: "Agriculture",
      date: "25th May",
      image: {
        title: "Featured Article Image",
        altText: "Featured Article Image",
        link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
      },
      readTime: "12 Mins Read",
      author: {
        name: "Rahul Sharma",
        image: {
          title: "Featured Article Author Image",
          altText: "Featured Article Author Image",
          link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
        },
        designation: "Lead Researcher, Agriculture",
      },
      CTA: {
        title: "Read Blog",
        link: "#",
      },
    },
  },
  categoriesDetails: {
    heading: "Blog Categories",
    categoryList: [
      {
        title: "AreoSpace & Defence",
        slug: "areospace-and-defence",
      },
      {
        title: "Consumer Goods & Services",
        slug: "consumer-goods-and-services",
      },
      {
        title: "Hospitality & Tourism",
        slug: "hospitality-and-tourism",
      },
      {
        title: "Real Estate & Construction",
        slug: "real-estate-and-construction",
      },
      {
        title: "Automotive",
        slug: "automotive",
      },
      {
        title: "Energy & Power",
        slug: "energy-and-power",
      },
      {
        title: "Logistics",
        slug: "logistics",
      },
      {
        title: "Technology, Media & Telecom",
        slug: "technology-media-and-telecom",
      },
      {
        title: "Animals Nutrition & Wellness",
        slug: "animals-nutrition-and-wellness",
      },
      {
        title: "Financial Services & Investment Intelligence",
        slug: "financial-services-and-nvestment-intelligence",
      },
      {
        title: "Manufacturing Products & Services",
        slug: "manufacturing-products-and-services",
      },
      {
        title: "Agriculture",
        slug: "agriculture",
      },
      {
        title: "Chemicals & Materials",
        slug: "chemicals-and-materials",
      },
      {
        title: "Fertilizers",
        slug: "fertilizers",
      },
    ],
  },
  moreResourceDetails: {
    heading: "More Resources",
    resourceList: [
      {
        image: CaseStudiesImg,
        title: "Case Studies",
        link: "#",
      },
      {
        image: FaqsImg,
        title: "FAQ's",
        link: "#",
      },
      {
        image: InsightsImg,
        title: "Insights",
        link: "#",
      },
    ],
  },
  blogListingDetails: {
    heading: "Latest Blogs",
    blogList: [
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        category: "Agriculture",
        type: "Blog",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
    ],
  },
};

export const allBlogsPage = {
  industryBlogDetails: [
    {
      heading: "Aerospace & Defence",
      slug: "areospace-and-defence",
      blogList: [
        {
          title: "Boosting agriculture with tech is the next big thing",
          description:
            "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
          category: "Agriculture",
          type: "Blog",
          date: "25th May",
          image: {
            title: "Featured Article Image",
            altText: "Featured Article Image",
            link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
          },
          readTime: "12 Mins Read",
          author: {
            name: "Rahul Sharma",
            image: {
              title: "Featured Article Author Image",
              altText: "Featured Article Author Image",
              link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
            },
            designation: "Lead Researcher, Agriculture",
          },
          CTA: {
            title: "Read Blog",
            link: "#",
          },
        },
        {
          title: "Boosting agriculture with tech is the next big thing",
          description:
            "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
          type: "Blog",
          category: "Agriculture",
          date: "25th May",
          image: {
            title: "Featured Article Image",
            altText: "Featured Article Image",
            link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
          },
          readTime: "12 Mins Read",
          author: {
            name: "Rahul Sharma",
            image: {
              title: "Featured Article Author Image",
              altText: "Featured Article Author Image",
              link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
            },
            designation: "Lead Researcher, Agriculture",
          },
          CTA: {
            title: "Read Blog",
            link: "#",
          },
        },
        {
          title: "Boosting agriculture with tech is the next big thing",
          description:
            "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
          type: "Blog",
          category: "Agriculture",
          date: "25th May",
          image: {
            title: "Featured Article Image",
            altText: "Featured Article Image",
            link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
          },
          readTime: "12 Mins Read",
          author: {
            name: "Rahul Sharma",
            image: {
              title: "Featured Article Author Image",
              altText: "Featured Article Author Image",
              link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
            },
            designation: "Lead Researcher, Agriculture",
          },
          CTA: {
            title: "Read Blog",
            link: "#",
          },
        },
      ],
    },
    {
      heading: "Chemical & Materials",
      slug: "chemical-and-materials",
      blogList: [
        {
          title: "Boosting agriculture with tech is the next big thing",
          description:
            "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
          category: "Agriculture",
          type: "Blog",
          date: "25th May",
          image: {
            title: "Featured Article Image",
            altText: "Featured Article Image",
            link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
          },
          readTime: "12 Mins Read",
          author: {
            name: "Rahul Sharma",
            image: {
              title: "Featured Article Author Image",
              altText: "Featured Article Author Image",
              link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
            },
            designation: "Lead Researcher, Agriculture",
          },
          CTA: {
            title: "Read Blog",
            link: "#",
          },
        },
        {
          title: "Boosting agriculture with tech is the next big thing",
          description:
            "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
          type: "Blog",
          category: "Agriculture",
          date: "25th May",
          image: {
            title: "Featured Article Image",
            altText: "Featured Article Image",
            link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
          },
          readTime: "12 Mins Read",
          author: {
            name: "Rahul Sharma",
            image: {
              title: "Featured Article Author Image",
              altText: "Featured Article Author Image",
              link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
            },
            designation: "Lead Researcher, Agriculture",
          },
          CTA: {
            title: "Read Blog",
            link: "#",
          },
        },
        {
          title: "Boosting agriculture with tech is the next big thing",
          description:
            "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
          type: "Blog",
          category: "Agriculture",
          date: "25th May",
          image: {
            title: "Featured Article Image",
            altText: "Featured Article Image",
            link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
          },
          readTime: "12 Mins Read",
          author: {
            name: "Rahul Sharma",
            image: {
              title: "Featured Article Author Image",
              altText: "Featured Article Author Image",
              link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
            },
            designation: "Lead Researcher, Agriculture",
          },
          CTA: {
            title: "Read Blog",
            link: "#",
          },
        },
      ],
      info: {
        title: "Did you know?",
        desc: "Agriculture industry has been in top 10% of fastest growing industries.",
      },
    },
    {
      heading: "Food And Beverage",
      slug: "food-and-beverage",
      blogList: [
        {
          title: "Boosting agriculture with tech is the next big thing",
          description:
            "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
          category: "Agriculture",
          type: "Blog",
          date: "25th May",
          image: {
            title: "Featured Article Image",
            altText: "Featured Article Image",
            link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
          },
          readTime: "12 Mins Read",
          author: {
            name: "Rahul Sharma",
            image: {
              title: "Featured Article Author Image",
              altText: "Featured Article Author Image",
              link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
            },
            designation: "Lead Researcher, Agriculture",
          },
          CTA: {
            title: "Read Blog",
            link: "#",
          },
        },
        {
          title: "Boosting agriculture with tech is the next big thing",
          description:
            "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
          type: "Blog",
          category: "Agriculture",
          date: "25th May",
          image: {
            title: "Featured Article Image",
            altText: "Featured Article Image",
            link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
          },
          readTime: "12 Mins Read",
          author: {
            name: "Rahul Sharma",
            image: {
              title: "Featured Article Author Image",
              altText: "Featured Article Author Image",
              link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
            },
            designation: "Lead Researcher, Agriculture",
          },
          CTA: {
            title: "Read Blog",
            link: "#",
          },
        },
        {
          title: "Boosting agriculture with tech is the next big thing",
          description:
            "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
          type: "Blog",
          category: "Agriculture",
          date: "25th May",
          image: {
            title: "Featured Article Image",
            altText: "Featured Article Image",
            link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
          },
          readTime: "12 Mins Read",
          author: {
            name: "Rahul Sharma",
            image: {
              title: "Featured Article Author Image",
              altText: "Featured Article Author Image",
              link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
            },
            designation: "Lead Researcher, Agriculture",
          },
          CTA: {
            title: "Read Blog",
            link: "#",
          },
        },
      ],
    },
    {
      heading: "Healthcare",
      slug: "healthcare",
      blogList: [
        {
          title: "Boosting agriculture with tech is the next big thing",
          description:
            "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
          category: "Agriculture",
          type: "Blog",
          date: "25th May",
          image: {
            title: "Featured Article Image",
            altText: "Featured Article Image",
            link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
          },
          readTime: "12 Mins Read",
          author: {
            name: "Rahul Sharma",
            image: {
              title: "Featured Article Author Image",
              altText: "Featured Article Author Image",
              link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
            },
            designation: "Lead Researcher, Agriculture",
          },
          CTA: {
            title: "Read Blog",
            link: "#",
          },
        },
        {
          title: "Boosting agriculture with tech is the next big thing",
          description:
            "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
          type: "Blog",
          category: "Agriculture",
          date: "25th May",
          image: {
            title: "Featured Article Image",
            altText: "Featured Article Image",
            link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
          },
          readTime: "12 Mins Read",
          author: {
            name: "Rahul Sharma",
            image: {
              title: "Featured Article Author Image",
              altText: "Featured Article Author Image",
              link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
            },
            designation: "Lead Researcher, Agriculture",
          },
          CTA: {
            title: "Read Blog",
            link: "#",
          },
        },
        {
          title: "Boosting agriculture with tech is the next big thing",
          description:
            "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
          type: "Blog",
          category: "Agriculture",
          date: "25th May",
          image: {
            title: "Featured Article Image",
            altText: "Featured Article Image",
            link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
          },
          readTime: "12 Mins Read",
          author: {
            name: "Rahul Sharma",
            image: {
              title: "Featured Article Author Image",
              altText: "Featured Article Author Image",
              link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
            },
            designation: "Lead Researcher, Agriculture",
          },
          CTA: {
            title: "Read Blog",
            link: "#",
          },
        },
      ],
    },
    {
      heading: "Product Manufacturing & Services",
      slug: "product-manufacturing-and-services",
      blogList: [
        {
          title: "Boosting agriculture with tech is the next big thing",
          description:
            "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
          category: "Agriculture",
          type: "Blog",
          date: "25th May",
          image: {
            title: "Featured Article Image",
            altText: "Featured Article Image",
            link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
          },
          readTime: "12 Mins Read",
          author: {
            name: "Rahul Sharma",
            image: {
              title: "Featured Article Author Image",
              altText: "Featured Article Author Image",
              link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
            },
            designation: "Lead Researcher, Agriculture",
          },
          CTA: {
            title: "Read Blog",
            link: "#",
          },
        },
        {
          title: "Boosting agriculture with tech is the next big thing",
          description:
            "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
          type: "Blog",
          category: "Agriculture",
          date: "25th May",
          image: {
            title: "Featured Article Image",
            altText: "Featured Article Image",
            link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
          },
          readTime: "12 Mins Read",
          author: {
            name: "Rahul Sharma",
            image: {
              title: "Featured Article Author Image",
              altText: "Featured Article Author Image",
              link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
            },
            designation: "Lead Researcher, Agriculture",
          },
          CTA: {
            title: "Read Blog",
            link: "#",
          },
        },
        {
          title: "Boosting agriculture with tech is the next big thing",
          description:
            "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
          type: "Blog",
          category: "Agriculture",
          date: "25th May",
          image: {
            title: "Featured Article Image",
            altText: "Featured Article Image",
            link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
          },
          readTime: "12 Mins Read",
          author: {
            name: "Rahul Sharma",
            image: {
              title: "Featured Article Author Image",
              altText: "Featured Article Author Image",
              link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
            },
            designation: "Lead Researcher, Agriculture",
          },
          CTA: {
            title: "Read Blog",
            link: "#",
          },
        },
      ],
    },
  ],
};
export const caseStudiesDetailsPage = {
  bannerSection: {
    heading:
      "Cargill Implements Strategy to Achieve 2X Faster Product Launches",
    bannerImage: {
      title: "Banner Image",
      altText: "banner",
      link: caseStudiesFeatureBanner,
    },
    slug: "mordern",
    industrySlug: "fertilizer",
    industry: "Food & Beverage",
    author: {
      name: "Andrew Jonson",
      position: "Manager, Agriculture",
      image: {
        title: "Rahul Gupta Profile",
        link: "https://s3.mordorintelligence.com/static/mead-team-23.webp",
        altText: "Rahul Gupta Profile",
      },
    },
    published: "25th May 2021",
    readTime: "25th May 2023",
    content: `<div class="text-Neutrals-950"><h3 class="mb-4 text-Display-Semibold-24">Problem Statement</h3>
      <p class="mb-4">With almost 55 million metric tons of e-waste being produced every year, e-waste is a rising concern with serious environmental and health effects. Procurement teams can help mitigate this by prioritizing responsible sourcing, supporting EPR policies and adopting a circular economy strategy. E-waste also provides a chance for procurement to collect valuable materials recovered from gadgets.</p>
      <p>This complicated topic poses a double-edged sword for business executives. On the one hand, it is a growing environmental problem as incorrect disposal results in harmful pollution and health concerns. On the other side, e-waste includes rich resources such as gold, copper, and rare-earth elements, making it a possible source of green gold.</p>
      <h3 class="mb-4 mt-6 text-Display-Semibold-24">Research Methodology</h3>
      <p class="mb-4">According to the United Nations Environment Programmed (UNEP), e-waste is the fastest-growing waste stream globally. Although regulations like the Basel Convention regulate and control the transboundary movements of hazardous wastes and their disposal, the world generated approximately 8 kg of e-waste per person in 2023, with just about17% being properly collected and recycled.</p>
      <p class="mb-4">Africa has become one of the major e-waste dumping areas in the world. We from developed nations is carried to Ghana, Nigeria and other African countries in containers and by road, often disguised as used electronics.</p>
      <p>The e-waste management infrastructure in these countries is weak and underdeveloped, creating a hazardous environment where informal recycling activities, such as open burning and acid leaching, expose workers and communities to noxious vapors.This inappropriate disposal presents serious environmental and health dangers.</p>
      <h3 class="my-4 text-Display-Semibold-24">Impact</h3>
      <p class="my-4">With almost 55 million metric tons of e-waste being produced every year, e-waste is a rising concern with serious environmental and health effects. Procurement teams can help mitigate this by prioritizing responsible sourcing, supporting EPR policies and adopting a circular economy strategy. E-waste also provides a chance for procurement to collect valuable materials recovered from gadgets.</p>
      <p>This complicated topic poses a double-edged sword for business executives. On the one hand, it is a growing environmental problem as incorrect disposal results in harmful pollution and health concerns. On the other side, e-waste includes rich resources such as gold, copper, and rare-earth elements, making it a possible source of green gold.</p>
      </div>`,
  },
  moreResourceDetails: {
    heading: "More Resources",
    resourceList: [
      {
        image: CaseStudiesImg,
        title: "Case Studies",
        link: "#",
      },
      {
        image: FaqsImg,
        title: "FAQ's",
        link: "#",
      },
      {
        image: InsightsImg,
        title: "Insights",
        link: "#",
      },
    ],
  },
  relatedBlogs: {
    heading: "Related Blogs",
    blogList: [
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        category: "Agriculture",
        type: "Blog",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
    ],
  },
  relatedReports: {
    heading: "Related Reports",
    reportList: [
      {
        slug: "",
        title: "Meat Industries & Snack Industries Global 2019-2023",
        shortTitle: "Food & Beverage",
        industryName: "",
        industrySlug: "",
        marketSizeData: [
          {
            key: "CAGR",
            value: "5.5%",
          },
          {
            key: "Study Period",
            value: "2024-2029",
          },
          {
            key: "Regions Covered",
            value: "Asia-Pacific, North America, Europe",
          },
        ],
      },
      {
        slug: "",
        title: "Meat Industries & Snack Industries Global 2019-2023",
        shortTitle: "Food & Beverage",
        industryName: "",
        industrySlug: "",
        marketSizeData: [
          {
            key: "CAGR",
            value: "5.5%",
          },
          {
            key: "Study Period",
            value: "2024-2029",
          },
          {
            key: "Regions Covered",
            value: "Asia-Pacific, North America, Europe",
          },
        ],
      },
    ],
  },
  suggestion: {
    title: "Synapse",
    desc: "Intelligent market analysis tool to get your insights straight Intelligent market analysis tool to get your insights straight.",
    image: {
      title: "Synapse",
      altText: "Synapse",
      link: "https://s3.mordorintelligence.com/static/s21s.webp",
    },
    CTA: {
      title: "Book A Demo",
      link: "#",
    },
  },
  newsLetterSection: {
    title: "Subscribe To Our Newsletter And Stay Updated",
    desc: "Subscribe to get updates on new reports launches, Synapse tool and interesting insights",
  },
};

export const IndustryCaseStudiesPage = {
  caseStudiesHeroSection: {
    heading: "Food & Beverage",
    desc: "Mordor case studies keep you current on the latest developments, insights and perspectives on supply chain and procurement software and strategy. Be it quick reads on supply chain and procurement or deep dives into specific categories, we cover every major industry.",
    globe: caseStudiesBanner,
  },
  featuredBlogDetails: {
    heading: "Featured Case Studies",
    featuredBlogList: [
      {
        title: "2X Faster launch of product",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Case Studies",
        category: "Food & Beverage",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: caseStudiesFeatureBanner,
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "2X Faster launch of product",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Case Studies",
        category: "Food & Beverage",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "2X Faster launch of product",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Case Studies",
        category: "Food & Beverage",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
    ],
  },
  caseStudies: {
    kicker: "CASE STUDIES",
    heading: "Food & Beverage Case Studies",
    allCategoryList: [
      {
        heading: "Aerospace & defence",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            imgUrl: Company1,
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            imgUrl: Company2,
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            imgUrl: Company3,
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
      {
        heading: "Chemicals & Materials",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            imgUrl: Company1,
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            imgUrl: Company2,
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            imgUrl: Company3,
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
      {
        heading: "Food & Baverage",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            imgUrl: Company1,
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            imgUrl: Company2,
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            imgUrl: Company3,
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
      {
        heading: "Healthcare Reports",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            imgUrl: Company1,
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            imgUrl: Company2,
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            imgUrl: Company3,
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
      {
        heading: "Manufacturing Products & Services",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            imgUrl: Company1,
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            imgUrl: Company2,
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            imgUrl: Company3,
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
      {
        heading: "Logistics",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            imgUrl: Company1,
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            imgUrl: Company2,
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            imgUrl: Company3,
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
      {
        heading: "Energy & Power",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            imgUrl: Company1,
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            imgUrl: Company2,
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            imgUrl: Company3,
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
      {
        heading: "Media & Telecom",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            imgUrl: Company1,
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            imgUrl: Company2,
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            imgUrl: Company3,
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
      {
        heading: "Hospitality & Tourism",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            imgUrl: Company1,
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            imgUrl: Company2,
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            imgUrl: Company3,
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
    ],
  },

  categoriesDetails: {
    heading: "Case Studies Categories",
    categoryList: [
      {
        title: "AreoSpace & Defence",
        slug: "areospace-and-defence",
      },
      {
        title: "Consumer Goods & Services",
        slug: "consumer-goods-and-services",
      },
      {
        title: "Hospitality & Tourism",
        slug: "hospitality-and-tourism",
      },
      {
        title: "Real Estate & Construction",
        slug: "real-estate-and-construction",
      },
      {
        title: "Automotive",
        slug: "automotive",
      },
      {
        title: "Energy & Power",
        slug: "energy-and-power",
      },
      {
        title: "Logistics",
        slug: "logistics",
      },
      {
        title: "Technology, Media & Telecom",
        slug: "technology-media-and-telecom",
      },
      {
        title: "Animals Nutrition & Wellness",
        slug: "animals-nutrition-and-wellness",
      },
      {
        title: "Financial Services & Investment Intelligence",
        slug: "financial-services-and-nvestment-intelligence",
      },
      {
        title: "Manufacturing Products & Services",
        slug: "manufacturing-products-and-services",
      },
      {
        title: "Agriculture",
        slug: "agriculture",
      },
      {
        title: "Chemicals & Materials",
        slug: "chemicals-and-materials",
      },
      {
        title: "Fertilizers",
        slug: "fertilizers",
      },
    ],
  },
  moreResourceDetails: {
    heading: "More Resources",
    resourceList: [
      {
        image: CaseStudiesImg,
        title: "Case Studies",
        link: "#",
      },
      {
        image: FaqsImg,
        title: "FAQ's",
        link: "#",
      },
      {
        image: InsightsImg,
        title: "Insights",
        link: "#",
      },
    ],
  },
  newsLetterSection: {
    title: "Subscribe To Our Newsletter And Stay Updated",
    desc: "Subscribe to get updates on new reports launches, Synapse tool and interesting insights",
  },
};
export const allCaseStudiesPage = {
  caseStudies: {
    kicker: "CASE STUDIES",
    heading: "All Case Studies",
    allCategoryList: [
      {
        heading: "Aerospace & defence",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            image: { link: Company1, title: "MI", altText: "MI" },
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            image: { link: Company2, title: "MI", altText: "MI" },
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            image: { link: Company3, title: "MI", altText: "MI" },
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
      {
        heading: "Chemicals & Materials",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            image: { link: Company1, title: "MI", altText: "MI" },
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            image: { link: Company2, title: "MI", altText: "MI" },
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            image: { link: Company3, title: "MI", altText: "MI" },
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
      {
        heading: "Food & Baverage",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            image: { link: Company1, title: "MI", altText: "MI" },
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            image: { link: Company2, title: "MI", altText: "MI" },
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            image: { link: Company3, title: "MI", altText: "MI" },
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
      {
        heading: "Healthcare Reports",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            image: { link: Company1, title: "MI", altText: "MI" },
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            image: { link: Company2, title: "MI", altText: "MI" },
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            image: { link: Company3, title: "MI", altText: "MI" },
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
      {
        heading: "Manufacturing Products & Services",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            image: { link: Company1, title: "MI", altText: "MI" },
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            image: { link: Company2, title: "MI", altText: "MI" },
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            image: { link: Company3, title: "MI", altText: "MI" },
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
      {
        heading: "Logistics",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            image: { link: Company1, title: "MI", altText: "MI" },
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            image: { link: Company2, title: "MI", altText: "MI" },
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            image: { link: Company3, title: "MI", altText: "MI" },
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
      {
        heading: "Energy & Power",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            image: {
              link: Company1,
              title: "MI",
              altText: "MI",
            },
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            image: {
              link: Company2,
              title: "MI",
              altText: "MI",
            },
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            image: {
              link: Company3,
              title: "MI",
              altText: "MI",
            },
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
      {
        heading: "Media & Telecom",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            image: {
              link: Company3,
              title: "MI",
              altText: "MI",
            },
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            image: {
              link: Company2,
              title: "MI",
              altText: "MI",
            },
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            image: {
              link: Company3,
              title: "MI",
              altText: "MI",
            },
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
      {
        heading: "Hospitality & Tourism",
        cta: {
          title: "View All Case Studies",
          link: "",
        },
        studies: [
          {
            title: "Heineken's Strategic Expansion in Emerging Markets.",
            image: {
              link: Company1,
              title: "MI",
              altText: "MI",
            },
            industry: "Beverage Industry",
            publishedOn: "May 2024",
            readTime: "13 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Canon’s Dominance in Global Imaging Markets.",
            image: {
              link: Company2,
              title: "MI",
              altText: "MI",
            },
            industry: "Imaging & Optical Products",
            publishedOn: "Jul 2024",
            readTime: "11 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
          {
            title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
            image: {
              link: Company3,
              title: "MI",
              altText: "MI",
            },
            industry: "Medical Devices",
            publishedOn: "Jul 2024",
            readTime: "5 Mins Read",
            CTA: {
              title: "Read Case Study",
              link: "",
            },
          },
        ],
      },
    ],
  },

  newsLetterSection: {
    title: "Subscribe To Our Newsletter And Stay Updated",
    desc: "Subscribe to get updates on new reports launches, Synapse tool and interesting insights",
  },
};

export const caseStudiesPage = {
  caseStudiesHeroSection: {
    heading: "Case Studies",
    desc: "Mordor case studies keep you current on the latest developments, insights and perspectives on supply chain and procurement software and strategy. Be it quick reads on supply chain and procurement or deep dives into specific categories, we cover every major industry.",
    globe: caseStudiesBanner,
  },
  trendingBlogDetails: {
    heading: "Trending Case Studies",
    list: [
      {
        title: "2X Faster launch of product in the market.",
        link: "#",
      },
      {
        title: "Ammunition Investments Making Cracks.",
        link: "#",
      },
      {
        title: "Military Training Aircrafts Set for Action.",
        link: "#",
      },
    ],
  },
  featuredBlogDetails: {
    heading: "Featured Case Studies",
    featuredBlogList: [
      {
        title: "2X Faster launch of product",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Case Studies",
        category: "Food & Beverage",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: caseStudiesFeatureBanner,
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "2X Faster launch of product",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Case Studies",
        category: "Food & Beverage",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "2X Faster launch of product",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Case Studies",
        category: "Food & Beverage",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
    ],
  },
  keyInsightDetails: {
    heading: "Key Insights",
    insightBlog: {
      title: "Boosting agriculture with tech is the next big thing",
      description:
        "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
      type: "Research Report",
      category: "Agriculture",
      date: "25th May",
      image: {
        title: "Featured Article Image",
        altText: "Featured Article Image",
        link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
      },
      readTime: "12 Mins Read",
      author: {
        name: "Rahul Sharma",
        image: {
          title: "Featured Article Author Image",
          altText: "Featured Article Author Image",
          link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
        },
        designation: "Lead Researcher, Agriculture",
      },
      CTA: {
        title: "Read Blog",
        link: "#",
      },
    },
  },
  categoriesDetails: {
    heading: "Case Studies Categories",
    categoryList: [
      {
        title: "AreoSpace & Defence",
        slug: "areospace-and-defence",
      },
      {
        title: "Consumer Goods & Services",
        slug: "consumer-goods-and-services",
      },
      {
        title: "Hospitality & Tourism",
        slug: "hospitality-and-tourism",
      },
      {
        title: "Real Estate & Construction",
        slug: "real-estate-and-construction",
      },
      {
        title: "Automotive",
        slug: "automotive",
      },
      {
        title: "Energy & Power",
        slug: "energy-and-power",
      },
      {
        title: "Logistics",
        slug: "logistics",
      },
      {
        title: "Technology, Media & Telecom",
        slug: "technology-media-and-telecom",
      },
      {
        title: "Animals Nutrition & Wellness",
        slug: "animals-nutrition-and-wellness",
      },
      {
        title: "Financial Services & Investment Intelligence",
        slug: "financial-services-and-nvestment-intelligence",
      },
      {
        title: "Manufacturing Products & Services",
        slug: "manufacturing-products-and-services",
      },
      {
        title: "Agriculture",
        slug: "agriculture",
      },
      {
        title: "Chemicals & Materials",
        slug: "chemicals-and-materials",
      },
      {
        title: "Fertilizers",
        slug: "fertilizers",
      },
    ],
  },
  moreResourceDetails: {
    heading: "More Resources",
    resourceList: [
      {
        image: CaseStudiesImg,
        title: "Case Studies",
        link: "#",
      },
      {
        image: FaqsImg,
        title: "FAQ's",
        link: "#",
      },
      {
        image: InsightsImg,
        title: "Insights",
        link: "#",
      },
    ],
  },

  caseStudies: {
    kicker: "CASE STUDIES",
    heading: "Latest Case Studies",
    cta: {
      title: "View All Case Studies",
      link: "case-studies/all",
    },
    studies: [
      {
        title: "Heineken's Strategic Expansion in Emerging Markets.",
        image: {
          link: Company1,
          title: "MI",
          altText: "MI",
        },

        industry: "Beverage Industry",
        publishedOn: "May 2024",
        readTime: "13 Mins Read",
        CTA: {
          title: "Read Case Study",
          link: "",
        },
      },
      {
        title: "Canon’s Dominance in Global Imaging Markets.",
        image: {
          link: Company2,
          title: "MI",
          altText: "MI",
        },
        industry: "Imaging & Optical Products",
        publishedOn: "Jul 2024",
        readTime: "11 Mins Read",
        CTA: {
          title: "Read Case Study",
          link: "",
        },
      },
      {
        title: "Biosensors Breakthroughs in Cardiovascular Solutions.",
        image: {
          link: Company3,
          title: "MI",
          altText: "MI",
        },
        industry: "Medical Devices",
        publishedOn: "Jul 2024",
        readTime: "5 Mins Read",
        CTA: {
          title: "Read Case Study",
          link: "",
        },
      },
    ],
  },

  newsLetterSection: {
    title: "Subscribe To Our Newsletter And Stay Updated",
    desc: "Subscribe to get updates on new reports launches, Synapse tool and interesting insights",
  },
};

export const industryDetailsPage = {
  heroSection: {
    heading: "Agriculture",
    desc: "Advancing technology and new farming methods offer a new approach to agricultural production with the potential to drastically change its effect on the environment. From drones and satellites to IoT and Artificial Intelligence, technological innovation is reshaping the farming industry. ",
    ctaOne: {
      title: "See Reports In This Industry",
      link: "#",
    },
    ctaTwo: {
      title: "View Solutions",
      link: "#",
    },
    image: "https://s3.mordorintelligence.com/static/industry-de-hero.webp",
  },
  info: {
    title: "Did you know?",
    desc: "Agriculture industry has been in top 10% of fastest growing industries.",
  },
  ourCustomers: {
    kicker: "OUR CUSTOMERS",
    imgList: [
      {
        label: "boeh",
        src: boeh,
      },
      {
        label: "Coca Cola",
        src: coca,
      },
      {
        label: "Epson",
        src: Epson,
      },
      {
        label: "Cargill",
        src: cargill,
      },
      {
        label: "Microsoft",
        src: Microsoft,
      },
      {
        label: "Qualcomm",
        src: Qualcomm,
      },
      {
        label: "sabre",
        src: sabre,
      },
    ],
  },
  featuredArticle: {
    heading: "Featured Article",
    article: {
      title: "Boosting agriculture with tech is the next big thing",
      description:
        "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
      imgUrl:
        "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
      readTime: "13 Mins Read",
      author: {
        name: "Rahul Sharma",
        imgUrl: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
        designation: "Lead Researcher, Agriculture",
      },
      CTA: {
        title: "Read Article",
        link: "",
      },
    },
  },

  solutionTabs: {
    kicker: "Our Solution",
    heading: "Solution that Drives Business Impact",
    tabOptions: [
      "Reports",
      "Custom Research",
      "Market Data",
      "Trends",
      "Synapse Tool",
    ],
    tabData: [
      {
        heading: "Market Research Reports",
        description: `Expert market research reports to guide your decision-
          making / Ready-to-use market analysis reports across industries, countries, and companies.`,
        stats: [
          { label: "Companies", value: "6,000 +" },
          { label: "Reports", value: "20,000 +" },
          { label: "Industries", value: "100 +" },
        ],
        imgUrl: reports,
        ctaOne: {
          title: "See Reports in this Industry",
          link: "#",
        },
        ctaTwo: {
          title: "See All Industries",
          link: "#",
        },
      },
      {
        heading: "Tailored Solutions for Specific Needs",
        description:
          "Get in-depth analysis addressing your unique business challenges. Our expert teams deliver customized reports to meet your exact requirements.",
        stats: [{ label: "Research Network", value: "100 +" }],
        imgUrl: customResearch,
      },
      {
        heading: "Access Granular Market Data",
        description:
          "Uncover emerging trends shaping your industry. Make data-driven decisions with comprehensive market sizing, trends, and forecasts.",
        stats: [{ label: "Research Experts", value: "550+" }],
        imgUrl: MarketData,
        ctaOne: {
          title: "Explore Market Data Solutions",
          link: "",
        },
      },
      {
        heading: "Trends",
        description:
          "Forget cookie-cutter solutions. Our on-demand Market Intelligence delivers the intel you need, when you need it.",
        stats: [{ label: "Projects Delivered", value: "10,000+" }],
        imgUrl: trends,
        ctaOne: {
          title: "Explore Solutions",
          link: "#",
        },
        ctaTwo: {
          title: "Case Studies",
          link: "#",
        },
      },
      {
        heading: "Your Market Intelligence Command Centre",
        description:
          "Mordor Intelligence's Synapse cuts through the noise, empowering your team with a single, collaborative market intelligence platform to conquer any market challenge.",
        stats: [{ label: "Decade of experience" }],
        imgUrl: synapseTool,
        ctaOne: {
          title: "Request a Free Trial",
          link: "#",
        },
        ctaTwo: {
          title: "Learn More",
          link: "#",
        },
      },
    ],
  },

  ourExpertise: {
    title: "Our Expertise",
    desc: "Get a head start with the insights to guide your decision-making process. Our expertise lies in furnishing you with market insights, empowering you to make well-informed decisions.",
    steps: [
      {
        text: "Pricing Strategy",
        link: "#",
      },
      {
        text: "Sustainability",
        link: "#",
      },
      {
        text: "Pricing Strategy",
        link: "#",
      },
      {
        text: "Supply Chain",
        link: "#",
      },
    ],
  },
  whyUs: {
    kicker: "WHY US",
    heading: "Why Choose Mordor Intelligence",
    list: [
      {
        icon: <Award height={64} width={64} className="text-[#E03C00]" />,
        title: "Distributed Expertise",
        desc: "No organization can seemingly hire all the necessary expertise to answer every business problem. We realize this challenge and turn it into our advantage by using a distributed expertise model.",
      },
      {
        icon: <BookCheck height={64} width={64} className="text-[#E03C00]" />,
        title: "Granular Coverage",
        desc: "We believe our location in India offers a strategic advantage. Without the overheads of other firms, we can provide high-accuracy intelligence at a significantly lower cost to your organization.",
      },
      {
        icon: <ThumbsUp height={64} width={64} className="text-[#E03C00]" />,
        title: "Quality and Trust",
        desc: "With our vast database of market intelligence and an ever-growing network of experts across the value chain, we make sure you get top-notch solutions with swift turnarounds that suit your deadlines.",
      },
    ],
  },
  teamSection: {
    title: "Meet Our Leader",
    teamMember: [
      {
        name: "Rahul Sharma",
        position: "Senior Manager, New & Emerging Opportunities Source ",
        link: TeamMember1,
      },
      {
        name: "Rahul Sharma 2",
        position: "Sales & Marketing",
        link: TeamMember1,
      },
      {
        name: "Rahul Sharma 3",
        position: "Senior Manager, New & Emerging Opportunities Source ",
        link: TeamMember1,
      },
      {
        name: "Rahul Sharma 4",
        position: "Senior Manager, New & Emerging Opportunities Source ",
        link: TeamMember1,
      },
      {
        name: "Rahul Sharma 5",
        position: "Senior Manager, New & Emerging Opportunities Source ",
        link: TeamMember1,
      },
      {
        name: "Rahul Sharma 6",
        position: "Senior Manager, New & Emerging Opportunities Source ",
        link: TeamMember1,
      },
      {
        name: "Rahul Sharma 7",
        position: "Senior Manager, New & Emerging Opportunities Source ",
        link: TeamMember1,
      },
      {
        name: "Rahul Sharma 8",
        position: "Senior Manager, New & Emerging Opportunities Source ",
        link: TeamMember1,
      },
    ],
    CTA: {
      title: "Meet Our Team",
      link: "#",
    },
  },
  awards: {
    kicker: "Awards",
    heading: "You are in Safe Hands",
    text: "Trusted by brands across industries, geographies, and sizes.",
    logoList: [MRSI, ESOMAR, GPTWLogo, ISO],
    bgImg: BgImg,
  },
  customerStories: {
    kicker: "CUSTOMER STORIES",
    heading: "Don’t Just Take Our Words For It",
    customerTestimonials: [
      {
        comment: {
          heading: "",
          body: "Thank you for providing us with a fantastic cybersecurity market intelligence report. The report was provided quickly and covers all the key areas that show an in-depth understanding of the market. The level of detail and coverage in the report is impressive. We have used the report to shape our global go-to-market value proposition, for a multi-billion dollar business unit. The feedback from the team has been really positive. It is wonderful to see regional teams building this market intelligence into their own presentations. This is proof in itself of the quality of the report. Thank you again.",
        },
        customer: {
          profileImage: TDSynnex,
          name: "Lawrence Roberts",
          position: "Senior Global Manager For Strategic Go-to-Market",
          company: "TD SYNNEX",
        },
        link: "https://www.mordorintelligence.com/testimonials/Recommendation-TD-SYNNEX.pdf",
      },
      {
        comment: {
          heading: "",
          body: "We used Mordor Intelligence’s Skincare research which focused on the skincare category. This gave us a view of current splits and growths, and a forecast of market sizes and growths. As a business we were able to use this information to plan around which categories were the best to focus on, based on long term growth. The research also gave us a lot of information on what competitors and brands are doing well, as well as what the global trends are with examples. The consumer behaviour analysis also gave some great insight as to how people are shopping and researching products in the skincare category. All in all the research has enabled us to make more informed business decisions.",
        },
        customer: {
          profileImage: Mentholatum,
          name: "Trish Erasmus",
          position: "Skincare Brand Manager",
          company: "Mentholatum SA",
        },
        link: "https://www.mordorintelligence.com/testimonials/Mentholatum-SA-Skin-Care.pdf ",
      },
    ],
  },
  media: {
    heading: "Media",
    mediaList: [
      {
        title: "Market Intel Conferrence",
        date: "May 05th",
        content:
          "Allow insights to guide your decision making process. Our experties lies in furnishing you with market insights, empowering you to make well-informed decisions",
        image: {
          title: "Market Intel Conference ON Agriculture",
          link: "https://s3.mordorintelligence.com/static/media3322.webp",
          altText: "Market Intel Conference ON Agriculture",
        },
        author: {
          name: "Rahul Sharma",
          position: "Lead Researcher, Agriculture",
          image: {
            title: "Rahul Sharma Profile",
            link: "https://s3.mordorintelligence.com/static/mead-team-23.webp",
            altText: "Rahul Sharma Profile",
          },
        },
        slotsLeft: 15,
        cta: {
          title: "Register For The Event",
          link: "#",
        },
      },
      {
        title: "Market Intel Conferrence",
        date: "May 10th",
        content:
          "Allow insights to guide your decision making process. Our experties lies in furnishing you with market insights, empowering you to make well-informed decisions",
        image: {
          title: "Market Intel Conference ON Agriculture",
          link: "https://s3.mordorintelligence.com/static/media3322.webp",
          altText: "Market Intel Conference ON Agriculture",
        },
        author: {
          name: "Rahul Gupta",
          position: "Manager, Agriculture",
          image: {
            title: "Rahul Gupta Profile",
            link: "https://s3.mordorintelligence.com/static/mead-team-23.webp",
            altText: "Rahul Gupta Profile",
          },
        },
        slotsLeft: 20,
        cta: {
          title: "Register For The Event",
          link: "#",
        },
      },
      {
        title: "Market Intel Conferrence",
        date: "May 05th",
        content:
          "Allow insights to guide your decision making process. Our experties lies in furnishing you with market insights, empowering you to make well-informed decisions",
        image: {
          title: "Market Intel Conference ON Agriculture",
          link: "https://s3.mordorintelligence.com/static/media3322.webp",
          altText: "Market Intel Conference ON Agriculture",
        },
        author: {
          name: "Rahul Sharma",
          position: "Lead Researcher, Agriculture",
          image: {
            title: "Rahul Sharma Profile",
            link: "https://s3.mordorintelligence.com/static/mead-team-23.webp",
            altText: "Rahul Sharma Profile",
          },
        },
        slotsLeft: 15,
        cta: {
          title: "Register For The Event",
          link: "#",
        },
      },
      {
        title: "Market Intel Conferrence",
        date: "May 10th",
        content:
          "Allow insights to guide your decision making process. Our experties lies in furnishing you with market insights, empowering you to make well-informed decisions",
        image: {
          title: "Market Intel Conference ON Agriculture",
          link: "https://s3.mordorintelligence.com/static/media3322.webp",
          altText: "Market Intel Conference ON Agriculture",
        },
        author: {
          name: "Rahul Gupta",
          position: "Manager, Agriculture",
          image: {
            title: "Rahul Gupta Profile",
            link: "https://s3.mordorintelligence.com/static/mead-team-23.webp",
            altText: "Rahul Gupta Profile",
          },
        },
        slotsLeft: 20,
        cta: {
          title: "Register For The Event",
          link: "#",
        },
      },
    ],
  },

  whatsNewSection: {
    heading: "Resources",
    contentCardList: [
      {
        type: "report",
        eyebrow: {
          tag1: "Research Report",
          tag2: "Food & Beverage",
        },
        title:
          "Unlocking insights through market research for Beverage industries worldwide.",
        link: {
          text: "Read Report",
          href: "#",
        },
        img: Bottle,
      },
      {
        type: "article",
        eyebrow: {
          tag1: "Latest News",
          tag2: "AI",
        },
        title: "AI is the new modern technology to solve complex problems.",
        link: {
          text: "Read Article",
          href: "#",
        },
        img: Ai,
      },
      {
        type: "caseStudy",
        eyebrow: {
          tag1: "",
          tag2: "",
        },
        title:
          "From consultants and Fortune 500 companies to government agencies.",
        link: {
          text: "Read Case Study",
          href: "#",
        },
        img: Cargill,
      },
    ],
  },
  relatedIndustries: {
    heading: "Related Industries",
    desc: "",
    hubList: [
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/ev-battery-packs/ev_battery_v2.png",
        label: "Food & Beverages",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/ev-battery-pack",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/Ebikes/ebike_latest.png",
        label: "Artificial Intelligence",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/e-bike",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/MLCC/mlcc_latest.png",
        label: "Agriculture Services",
        value: "30+ Reports",
        HubLink: "https://www.mordorintelligence.com/hubs/mlcc",
      },
      {
        img: "https://subscription-public.s3.us-west-2.amazonaws.com/static-assets/aircraft-cabin-interiors/aircraft_cabin_latest.png",
        label: "Animals Nutrition & Wellness",
        value: "30+ Reports",
        HubLink:
          "https://www.mordorintelligence.com/hubs/commercial-aircraft-cabin-interior-market",
      },
    ],
  },
  contactUs: {
    kicker: "CONTACT US",
    heading: "Today's Accessible Intelligence, Unlocking Tomorrow's Potential.",
    cta: {
      title: "Submit",
      link: "#",
    },
  },
};

export const blogsFilter = [
  {
    label: "Industry",
    value: "industry",
    options: [
      { label: "Agriculture", value: "agriculture" },
      { label: "Automotive", value: "automotive" },
      { label: "Aerospace & Defence", value: "aerospace & defence" },
      { label: "Road Freight", value: "road freight" },
      { label: "Global Gaming Market", value: "global gaming market" },
      { label: "Healthcare", value: "healthcare" },
    ],
  },
];

export const partnersPageData = {
  whyPartnerWithUs: {
    title: "Why Partner With Us?",
    benefits: [
      {
        icon: <HandHeart height={64} width={64} />,
        title: "Grow your Customer Base",
        desc: "Imagine having everything you need reports, market estimates, and shares at your fingertips on a single, intuitive dashboard.",
      },
      {
        icon: <Footprints height={64} width={64} />,
        title: "Extend Your Footprint",
        desc: "Imagine having everything you need reports, market estimates, and shares at your fingertips on a single, intuitive dashboard.",
      },
      {
        icon: <ChartPie height={64} width={64} />,
        title: "Secure a Promised ROI",
        desc: "Imagine having everything you need reports, market estimates, and shares at your fingertips on a single, intuitive dashboard.",
      },
    ],
  },
  ourSolutions: {
    heading: "Partnership Program",
    tabOptions: [
      "Channel Partner",
      "Alliance Partner",
      "Tech Partner",
      "Referral Partner",
    ],
    tabData: [
      {
        heading:
          "Mordor Intelligence Partner United’s channel partners include value-added resellers who leverage their regional expertise to develop customized Mordor Intelligence solutions tailored to meet the diverse needs of customers worldwide.",
        CTA: {
          title: "Become a Partner1",
          link: "#",
        },
        clients: [
          boeh,
          coca,
          Epson,
          cargill,
          Microsoft,
          Qualcomm,
          sabre,
          boeh,
          coca,
          Epson,
          cargill,
          Microsoft,
          Qualcomm,
          sabre,
        ],
        mobileImages: {
          kicker: "OUR CUSTOMERS",
          imgList: [
            {
              label: "boeh",
              src: boeh,
            },
            {
              label: "Coca Cola",
              src: coca,
            },
            {
              label: "Epson",
              src: Epson,
            },
            {
              label: "Cargill",
              src: cargill,
            },
            {
              label: "Microsoft",
              src: Microsoft,
            },
            {
              label: "Qualcomm",
              src: Qualcomm,
            },
            {
              label: "sabre",
              src: sabre,
            },
          ],
        },
      },
      {
        heading:
          "Mordor Intelligence Partner United’s channel partners include value-added resellers who leverage their regional expertise to develop customized Mordor Intelligence solutions tailored to meet the diverse needs of customers worldwide.",
        CTA: {
          title: "Become a Partner 2",
          link: "#",
        },
        clients: [
          boeh,
          coca,
          Epson,
          cargill,
          Microsoft,
          Qualcomm,
          sabre,
          boeh,
          coca,
          Epson,
          cargill,
          Microsoft,
          Qualcomm,
          sabre,
        ],
        mobileImages: {
          kicker: "OUR CUSTOMERS",
          imgList: [
            {
              label: "boeh",
              src: boeh,
            },
            {
              label: "Coca Cola",
              src: coca,
            },
            {
              label: "Epson",
              src: Epson,
            },
            {
              label: "Cargill",
              src: cargill,
            },
            {
              label: "Microsoft",
              src: Microsoft,
            },
            {
              label: "Qualcomm",
              src: Qualcomm,
            },
            {
              label: "sabre",
              src: sabre,
            },
          ],
        },
      },
      {
        heading:
          "Mordor Intelligence Partner United’s channel partners include value-added resellers who leverage their regional expertise to develop customized Mordor Intelligence solutions tailored to meet the diverse needs of customers worldwide.",
        CTA: {
          title: "Become a Partner 3",
          link: "#",
        },
        clients: [
          boeh,
          coca,
          Epson,
          cargill,
          Microsoft,
          Qualcomm,
          sabre,
          boeh,
          coca,
          Epson,
          cargill,
          Microsoft,
          Qualcomm,
          sabre,
        ],
        mobileImages: {
          kicker: "OUR CUSTOMERS",
          imgList: [
            {
              label: "boeh",
              src: boeh,
            },
            {
              label: "Coca Cola",
              src: coca,
            },
            {
              label: "Epson",
              src: Epson,
            },
            {
              label: "Cargill",
              src: cargill,
            },
            {
              label: "Microsoft",
              src: Microsoft,
            },
            {
              label: "Qualcomm",
              src: Qualcomm,
            },
            {
              label: "sabre",
              src: sabre,
            },
          ],
        },
      },
      {
        heading:
          "Mordor Intelligence Partner United’s channel partners include value-added resellers who leverage their regional expertise to develop customized Mordor Intelligence solutions tailored to meet the diverse needs of customers worldwide.",
        CTA: {
          title: "Become a Partner 4",
          link: "#",
        },
        clients: [
          boeh,
          coca,
          Epson,
          cargill,
          Microsoft,
          Qualcomm,
          sabre,
          boeh,
          coca,
          Epson,
          cargill,
          Microsoft,
          Qualcomm,
          sabre,
        ],
        mobileImages: {
          kicker: "OUR CUSTOMERS",
          imgList: [
            {
              label: "boeh",
              src: boeh,
            },
            {
              label: "Coca Cola",
              src: coca,
            },
            {
              label: "Epson",
              src: Epson,
            },
            {
              label: "Cargill",
              src: cargill,
            },
            {
              label: "Microsoft",
              src: Microsoft,
            },
            {
              label: "Qualcomm",
              src: Qualcomm,
            },
            {
              label: "sabre",
              src: sabre,
            },
          ],
        },
      },
    ],
  },
  customerStories: {
    heading: "Trusted by the Best in the Business",
    customerTestimonials: [
      {
        comment: {
          heading: "",
          body: "Thank you for providing us with a fantastic cybersecurity market intelligence report. The report was provided quickly and covers all the key areas that show an in-depth understanding of the market. The level of detail and coverage in the report is impressive. We have used the report to shape our global go-to-market value proposition, for a multi-billion dollar business unit. The feedback from the team has been really positive. It is wonderful to see regional teams building this market intelligence into their own presentations. This is proof in itself of the quality of the report. Thank you again.",
        },
        customer: {
          profileImage: {
            src: TDSynnex,
            title: "Lawrence Roberts",
            alt: "Lawrence Roberts",
          },
          name: "Lawrence Roberts",
          position: "Senior Global Manager For Strategic Go-to-Market",
          company: "TD SYNNEX",
        },
        link: "https://www.mordorintelligence.com/testimonials/Recommendation-TD-SYNNEX.pdf",
      },
      {
        comment: {
          heading: "",
          body: "We used Mordor Intelligence’s Skincare research which focused on the skincare category. This gave us a view of current splits and growths, and a forecast of market sizes and growths. As a business we were able to use this information to plan around which categories were the best to focus on, based on long term growth. The research also gave us a lot of information on what competitors and brands are doing well, as well as what the global trends are with examples. The consumer behaviour analysis also gave some great insight as to how people are shopping and researching products in the skincare category. All in all the research has enabled us to make more informed business decisions.",
        },
        customer: {
          profileImage: {
            src: Mentholatum,
            title: "Trish Erasmus",
            alt: "Trish Erasmus",
          },
          name: "Trish Erasmus",
          position: "Skincare Brand Manager",
          company: "Mentholatum SA",
        },
        link: "https://www.mordorintelligence.com/testimonials/Mentholatum-SA-Skin-Care.pdf ",
      },
    ],
  },
};

export const blogDetailsPageData = {
  bannerSection: {
    heading: "E-WASTE: A RISING CONCERN OR GREEN GOLD?",
    bannerImage: {
      title: "Banner Image",
      altText: "banner",
      link: "https://s3.mordorintelligence.com/static/csamcm09.webp",
    },
    slug: "mordern",
    industrySlug: "fertilizer",
    industry: "Professional & Commercial Services",
    author: {
      name: "Andrew Jonson",
      position: "Manager, Agriculture",
      image: {
        title: "Rahul Gupta Profile",
        link: "https://s3.mordorintelligence.com/static/mead-team-23.webp",
        altText: "Rahul Gupta Profile",
      },
    },
    published: "25th May 2021",
    readTime: "5 Min Read",
    content: `<div class="text-Neutrals-950">
      <p class="mb-4">With almost 55 million metric tons of e-waste being produced every year, e-waste is a rising concern with serious environmental and health effects. Procurement teams can help mitigate this by prioritizing responsible sourcing, supporting EPR policies and adopting a circular economy strategy. E-waste also provides a chance for procurement to collect valuable materials recovered from gadgets.</p>
      <p>This complicated topic poses a double-edged sword for business executives. On the one hand, it is a growing environmental problem as incorrect disposal results in harmful pollution and health concerns. On the other side, e-waste includes rich resources such as gold, copper, and rare-earth elements, making it a possible source of green gold.</p>
      <h2 class="mb-4 mt-6 text-Display-Semibold-24">The Looming Shadow: E-Waste as a Growing Environmental Threat</h2>
      <p class="mb-4">According to the United Nations Environment Programmed (UNEP), e-waste is the fastest-growing waste stream globally. Although regulations like the Basel Convention regulate and control the transboundary movements of hazardous wastes and their disposal, the world generated approximately 8 kg of e-waste per person in 2023, with just about17% being properly collected and recycled.</p>
      <p class="mb-4">Africa has become one of the major e-waste dumping areas in the world. We from developed nations is carried to Ghana, Nigeria and other African countries in containers and by road, often disguised as used electronics.</p>
      <p>The e-waste management infrastructure in these countries is weak and underdeveloped, creating a hazardous environment where informal recycling activities, such as open burning and acid leaching, expose workers and communities to noxious vapors.This inappropriate disposal presents serious environmental and health dangers.</p>
      
       <h3 class="text-Display-Semibold-20 text-Neutrals-950 my-4">Toxic Components</h3>
       <p>The e-waste management infrastructure in these countries is weak and underdeveloped, creating a hazardous environment where informal recycling activities, such as open burning and acid leaching, expose workers and communities to noxious vapors.This inappropriate disposal presents serious environmental and health dangers.</p>
       <h3 class="text-Display-Semibold-20 text-Neutrals-950 my-4">Resource Depletion</h3>
       <p>The e-waste management infrastructure in these countries is weak and underdeveloped, creating a hazardous environment where informal recycling activities, such as open burning and acid leaching, expose workers and communities to noxious vapors.This inappropriate disposal presents serious environmental and health dangers.</p>
      
       <div class="w-full my-4 overflow-hidden">
       <img src="https://s3.mordorintelligence.com/static/csamcm09.webp" width="100%" />
       </div>
      </div>`,
  },
  moreResourceDetails: {
    heading: "More Resources",
    resourceList: [
      {
        image: CaseStudiesImg,
        title: "Case Studies",
        link: "#",
      },
      {
        image: FaqsImg,
        title: "FAQ's",
        link: "#",
      },
      {
        image: InsightsImg,
        title: "Insights",
        link: "#",
      },
    ],
  },
  relatedBlogs: {
    heading: "Related Blogs",
    blogList: [
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        category: "Agriculture",
        type: "Blog",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
      {
        title: "Boosting agriculture with tech is the next big thing",
        description:
          "Unparalleled insights have transformed our decisions. Thanks to Mordor's expertise, our strategies and outcomes have improved remarkably.",
        type: "Blog",
        category: "Agriculture",
        date: "25th May",
        image: {
          title: "Featured Article Image",
          altText: "Featured Article Image",
          link: "https://s3.mordorintelligence.com/static/rectangle-s3462464.webp",
        },
        readTime: "12 Mins Read",
        author: {
          name: "Rahul Sharma",
          image: {
            title: "Featured Article Author Image",
            altText: "Featured Article Author Image",
            link: "https://s3.mordorintelligence.com/static/Ellipse1202.webp",
          },
          designation: "Lead Researcher, Agriculture",
        },
        CTA: {
          title: "Read Blog",
          link: "#",
        },
      },
    ],
  },
  relatedReports: {
    heading: "Related Reports",
    reportList: [
      {
        slug: "",
        title: "Meat Industries & Snack Industries Global 2019-2023",
        shortTitle: "Food & Beverage",
        industryName: "",
        industrySlug: "",
        marketSizeData: [
          {
            key: "CAGR",
            value: "5.5%",
          },
          {
            key: "Study Period",
            value: "2024-2029",
          },
          {
            key: "Regions Covered",
            value: "Asia-Pacific, North America, Europe",
          },
        ],
      },
      {
        slug: "",
        title: "Meat Industries & Snack Industries Global 2019-2023",
        shortTitle: "Food & Beverage",
        industryName: "",
        industrySlug: "",
        marketSizeData: [
          {
            key: "CAGR",
            value: "5.5%",
          },
          {
            key: "Study Period",
            value: "2024-2029",
          },
          {
            key: "Regions Covered",
            value: "Asia-Pacific, North America, Europe",
          },
        ],
      },
    ],
  },
  suggestion: {
    title: "Synapse",
    desc: "Intelligent market analysis tool to get your insights straight Intelligent market analysis tool to get your insights straight.",
    image: {
      title: "Synapse",
      altText: "Synapse",
      link: "https://s3.mordorintelligence.com/static/s21s.webp",
    },
    CTA: {
      title: "Book A Demo",
      link: "#",
    },
  },
};

export const pricingPage = {
  topSection: {
    heading: "Pricing",
    logoList: [MRSI_whitebg, ESOMAR_whitebg, GPTWLogo, ISO],
  },
  reportNameSection: {
    kicker: "Reports",
    button: "Explore report",
  },
  pricingStructure: {
    topSection: {
      heading: "Select a report plan that works for you.",
      currencySelector: ["USD", "INR", "JPY", "EUR", "GBP"],
      image: Pci_Approved,
    },
    licenseTypes: [
      {
        type: "single",
        heading: "Single User License",
        included: {
          heading: "What's Included",
          items: [
            "PDF Report & Data Sheet",
            "Delivered in 24 - 72 hrs of Purchase",
            "3 Months Analyst Support",
            "Limited to a Single Designated User",
          ],
        },
      },
      {
        type: "team",
        heading: "Team License",
        included: {
          heading: "What's Included",
          items: [
            "PDF Report & Data Sheet",
            "Delivered in 24 - 72 hrs of Purchase",
            "3 Months Analyst Support",
            "Up to 7 employees can access report",
          ],
        },
      },
      {
        type: "enterprise",
        heading: "Enterprise Corporate License",
        included: {
          heading: "What's Included",
          items: [
            "PDF Report & Data Sheet",
            "Delivered in 24 - 72 hrs of Purchase",
            "3 Months Analyst Support",
            "All employees can access report",
          ],
        },
      },
    ],
    pricingComparison: {
      heading: "Compare all Plans & Features",
      table: [
        {
          Feature: "Data Sheet & PDF Report",
          "Single User License": true,
          "Team License": true,
          "Enterprise/Corporate License": true,
        },
        {
          Feature: "PDF Report & Data Sheet",
          "Single User License": true,
          "Team License": true,
          "Enterprise/Corporate License": true,
        },
        {
          Feature: "Data Sheet & PDF Report",
          "Single User License": true,
          "Team License": true,
          "Enterprise/Corporate License": true,
        },
        {
          Feature: "PDF Report & Data Sheet",
          "Single User License": true,
          "Team License": true,
          "Enterprise/Corporate License": true,
        },
        {
          Feature: "Data Sheet & PDF Report",
          "Single User License": true,
          "Team License": true,
          "Enterprise/Corporate License": true,
        },
        {
          Feature: "PDF Report & Data Sheet",
          "Single User License": true,
          "Team License": true,
          "Enterprise/Corporate License": true,
        },
        {
          Feature: "Data Sheet & PDF Report",
          "Single User License": false,
          "Team License": true,
          "Enterprise/Corporate License": true,
        },
        {
          Feature: "PDF Report & Data Sheet",
          "Single User License": false,
          "Team License": true,
          "Enterprise/Corporate License": true,
        },
        {
          Feature: "Data Sheet & PDF Report",
          "Single User License": false,
          "Team License": false,
          "Enterprise/Corporate License": true,
        },
        {
          Feature: "PDF Report & Data Sheet",
          "Single User License": false,
          "Team License": false,
          "Enterprise/Corporate License": true,
        },
        {
          Feature: "Data Sheet & PDF Report",
          "Single User License": false,
          "Team License": false,
          "Enterprise/Corporate License": true,
        },
        {
          Feature: "PDF Report & Data Sheet",
          "Single User License": false,
          "Team License": false,
          "Enterprise/Corporate License": true,
        },
      ],
    },
  },
  ourCustomers: ourCustomers,
  customerStories: customerStories,
  faqSection: {
    title: "More questions? We have Answers.",
    faqData: [
      {
        question: "What is a market intelligence tool?",
        answer:
          "A market intelligence tool is a software or platform that collects and analyzes data to help businesses understand market trends, competitors, and customer behavior.",
      },
      {
        question: "How does a market intelligence tool work?",
        answer:
          "It gathers data from multiple sources, processes it using AI and analytics, and provides insights through reports and dashboards to help businesses make informed decisions.",
      },
      {
        question: "What data does the market intelligence tool gather?",
        answer:
          "The tool collects data such as competitor pricing, customer sentiment, industry trends, sales performance, and demographic insights.",
      },
      {
        question: "How is the data in the tool sourced and verified?",
        answer:
          "Data is sourced from reliable databases, web scraping, social media, surveys, and company reports. It is verified using AI algorithms, cross-referencing, and manual validation.",
      },
      {
        question: "How is the data in the tool sourced and verified?",
        answer:
          "Data accuracy is ensured through AI-driven validation, machine learning models, and human review to filter out inconsistencies.",
      },
      {
        question: "How is the data in the tool sourced and verified?",
        answer:
          "The tool uses advanced analytics and real-time updates to keep data fresh and relevant for business strategies.",
      },
      {
        question: "How is the data in the tool sourced and verified?",
        answer:
          "Cross-checking multiple data sources and leveraging predictive analytics help maintain high data reliability and accuracy.",
      },
    ],
  },
  contactSection: {
    heading: "Still need clarity? Reach out to us",
    contactData: [
      {
        icon: <Phone className="h-5 w-5" />,
        heading: "Call us",
        description: "Get in touch with our analyst",
        link: "+1 617-765-2493",
        type: "number",
      },
      {
        icon: <Mail className="h-5 w-5" />,
        heading: "Write an Email",
        description: "We usually respond in within an hour",
        link: "Mordor.askus@mordorintelligence.com",
        type: "email",
      },
      {
        icon: <Link className="h-5 w-5" />,
        heading: "Section Wise Pricing",
        description: "Get to know about the princing",
        link: "section-wise-pricing",
        type: "link",
      },
    ],
  },
};
