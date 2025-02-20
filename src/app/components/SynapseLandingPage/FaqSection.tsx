import { IFaq } from "@/types";
import React from "react";

const FaqSection = ({ faq }: { faq: IFaq }) => {
  return (
    <div className="flex justify-center bg-Primary-Mordor-Blue-Bg-100">
      <section className="flex w-full max-w-[944px] flex-col gap-8 px-4 py-10 md:px-10 md:py-20 lg:px-[88px]">
        <h4 className="mb-4 max-w-[720px] text-center text-Display-Semibold-24 md:text-Display-Semibold-32">
          {faq.title}
        </h4>

        <ul>
          {faq.faqList.map((faq, index) => (
            <li key={index} className="border-b border-Neutrals-200 py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none justify-between text-base font-medium text-Neutrals-900">
                  <p className="text-Body-Medium-14 md:text-Body-Medium-16">
                    {faq.question}
                  </p>
                  <div className="flex h-6 w-6 rotate-180 items-center justify-center">
                    <span className="chevron"></span>
                  </div>
                </summary>
                <p className="whitespace-pre-line text-justify text-Body-Regular-14 text-gray-600 sm:text-left md:text-Body-Regular-16">
                  {faq.answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FaqSection;
