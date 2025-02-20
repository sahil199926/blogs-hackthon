import React from 'react'
import BannerSection from './BannerSection'
import Enquires from './EnquiresSection'
import FeedbackSection from './FeedbackSection'
import NewsLetter from './NewsLetterSection'
import { ContactUs as ContactUsInterface, ContactUsPageProps,  
  // FeedbackFormData, InquiryFormData, NewsLetterSection,
  FAQSection as FAQSectionInterface
 } from './../../../types/index';
import FAQSection from './FAQSection'


const ContactUs = ({ data }: ContactUsPageProps) => {
  // Assuming `data` is the object containing the `ContactUs` data
const contactUsData: ContactUsInterface = data.contactUs as ContactUsInterface;
const categoryList: TCategoryListItem[] = data.categoryList as TCategoryListItem[];

// Extracting InquiryFormData
// const inquiryFormData: InquiryFormData = contactUsData.inquiryFormData;

// Extracting FeedbackFormData
// const feedbackFormData: FeedbackFormData = contactUsData.feedbackFormData;

// Extracting FAQSection
const faqSection: FAQSectionInterface = contactUsData.faqSection;

// Extracting NewsLetterSection
// const newsLetterSection: NewsLetterSection = contactUsData.NewsLetterSection;

  return (
    <>
   <BannerSection
    heading={contactUsData.heading}
    desc={contactUsData.desc}
    headerImage={contactUsData.headerImage}
   />
   <Enquires />
   <FeedbackSection />
   <FAQSection 
   title={
    faqSection.title
   }
   faqData={faqSection.faqData}
   />
   <NewsLetter categoryList={categoryList} />
   </>
  )
}

export default ContactUs

type TCategoryListItem = {
  label: string;
  link: string;
  children: null | TCategoryListItem[];
};