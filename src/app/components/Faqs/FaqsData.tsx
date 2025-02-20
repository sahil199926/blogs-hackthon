import CommonFaqs from "../common/CommonFaqs";
import { IFaqsData } from "@/types";

const FaqsData = ({ faqsData }: { faqsData: IFaqsData[] }) => {

  return (
    <section className="col-span-3 md:col-span-2">
      {faqsData.map((faq, index) => (
        <div key={index} id={`faq-${index}`}>
          <h2 className="text-Display-Semibold-24 px-2 ml-0 py-2 md:ml-2 md:px-0">{faq.heading}</h2>
          <CommonFaqs faq={faq.faqs} customFaqSectionStyle="flex w-full max-w-8xl flex-col gap-2 py-4"/>
        </div>
      ))}
    </section>
  );
};

export default FaqsData;
