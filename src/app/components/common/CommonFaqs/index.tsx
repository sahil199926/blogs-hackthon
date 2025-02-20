import { ICommonFaqs } from "@/types";

const CommonFaqs = ({
  faq,
  customFaqSectionStyle = "flex w-full max-w-8xl flex-col gap-2 px-4 py-10 md:px-10 md:py-12 lg:px-[88px]",
}: {
  faq: ICommonFaqs[];
  customFaqSectionStyle?: string;
}) => {
  return (
    <div className="flex justify-center">
      <section className={`${customFaqSectionStyle}`}>
        <ul>
          {faq.map((faq, index) => (
            <li key={index} className="tac-card">
              <details className="group border-b border-Neutrals-200 p-4 open:border-0 open:shadow-mordorCustom">
                <summary className="flex cursor-pointer list-none justify-between gap-1 text-base font-medium text-Neutrals-900">
                  <span>{index + 1}.</span>
                  <h2 className="flex-1 text-left text-Body-Medium-16">
                    <span>{faq.heading}</span>
                  </h2>
                  <div className="flex h-[22px] w-[22px] rotate-180 items-center justify-center">
                    <span className="chevron"></span>
                  </div>
                </summary>
                <div
                  className="whitespace-pre-line text-justify text-Body-Regular-14 text-gray-600"
                  dangerouslySetInnerHTML={{ __html: faq.body }}
                />
              </details>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CommonFaqs;
