import { IFaqsHeroSection } from "@/types";
import Image from "next/image";

function FaqHeroSection({ headerSection }: { headerSection: IFaqsHeroSection }) {
  return (
    <div className="relative flex justify-center overflow-hidden bg-Primary-Mordor-Blue-Bg-100">
      <section className="w-full max-w-8xl flex flex-col-reverse md:flex-row">
        <div className="p-4 md:px-[88px] md:py-20">
          <h1 className="text-left text-[26px] font-semibold leading-[38px] lg:text-[2rem] lg:leading-[46px]">
            {headerSection.title}
          </h1>
          <div
            className="mt-4 text-left text-[14px] leading-5 text-black/70 md:mt-6 md:text-[16px] lg:leading-[24px]"
            dangerouslySetInnerHTML={{ __html: headerSection.desc }}
          />
        </div>
        <div className="sec-2 mb-8">
          <Image
            src={headerSection.faqImage}
            alt="faq-banner"
            width={500}
            height={500}
          />
        </div>
      </section>
    </div>
  );
}

export default FaqHeroSection;
