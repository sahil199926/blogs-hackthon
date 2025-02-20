import { IPartnersHeroSection } from "@/types";
import Image from "next/image";
import Link from "next/link";

function PartnersHeroSection({
  headerSection,
}: {
  headerSection: IPartnersHeroSection;
}) {
  return (
    <div className="relative flex justify-center overflow-hidden bg-Primary-Mordor-Blue-Bg-100">
      <section className="flex w-full max-w-8xl flex-col-reverse md:flex-row">
        <div className="p-4 md:px-[88px] md:py-20">
          <h1 className="text-left text-Display-Semibold-28 text-[26px] font-semibold leading-[38px] md:text-Display-Semibold-40 lg:text-[2rem] lg:leading-[46px]">
            {headerSection.title}
          </h1>
          <div
            className="mt-4 text-left text-Body-Regular-18 text-[14px] leading-5 text-black/70 md:mt-6 md:text-[16px] lg:leading-[24px]"
            dangerouslySetInnerHTML={{ __html: headerSection.desc }}
          />
          <div className="mt-4">
            <button className="bg-Primary-Blue-950 px-4 py-[11px] text-Link-medium-16 text-Neutrals-white">
              <Link href={headerSection.cta.link}>
                {headerSection.cta.title}
              </Link>
            </button>
          </div>
        </div>
        <div className="sec-2 mt-2">
          <Image
            src="https://s3.mordorintelligence.com/static/part4rde.webp"
            alt="faq-banner"
            width={900}
            height={550}
          />
        </div>
      </section>
    </div>
  );
}

export default PartnersHeroSection;
