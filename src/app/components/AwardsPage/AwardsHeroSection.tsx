import CustomLinkTag from "@/components/Tags/CustomLinkTag";
import { IAwardsHeroSection } from "@/types";
import Head from "next/head";
import Image from "next/image";
import { Calendar } from "lucide-react";

function AwardsHeroSection({ heroSection }: { heroSection: IAwardsHeroSection }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href={heroSection.image.link}
          as="image"
          type="image/jpeg"
          imageSizes="(min-width: 768px) 100vw"
        />
      </Head>
      <section className="bg-gradient-to-b from-white   to-[#EBF7FF]">
        <div className="mx-auto flex h-max max-w-8xl flex-col-reverse items-center justify-center lg:pl-[88px]  px-4 lg:h-[39rem] md:flex-row">
          {/* LEFT SECTION */}
          <div className="w-[100%] flex flex-col  gap-4  pb-8 md:pt-8 justify-start lg:min-w-[50%]">
            <p className="text-Link-medium-14 w-fit bg-gradient-to-r from-[#46CDCF] to-[#2985B2]  text-Neutrals-white py-[5px] px-[13px] rounded-sm">
              {heroSection.featured.featuredOn}
            </p>
            <div className="flex flex-row gap-2 items-center">
              <Calendar size={16} className="text-Accent-Orange-950" />
              <p className="text-Body-Medium-14 text-Neutrals-950">
                {heroSection.featured.featuredDate}
              </p>
              <div className="w-[2px] h-[14px] bg-Neutrals-950"></div>
              <p className="text-Body-Medium-14 text-Neutrals-800">
                {heroSection.featured.awardName}
              </p>
            </div>
            <h1 className="text-left text-Display-Semibold-28 text-Neutrals-950 md:text-Display-Semibold-40 ">
              {heroSection.heading}
            </h1>
            <p className="text-Body-Semibold-14 md:text-Body-Regular-18 text-Neutrals-900 text-left ">
              {heroSection.desc}
            </p>

            <div className="mt-4 md:mt-8">
              <CustomLinkTag
                href={heroSection.cta.link}
                className="hero-section-btn min-w-max bg-Primary-Blue-950 text-sm font-medium text-Primary-Blue-50 hover:bg-Primary-Blue-800 lg:py-[11px] lg:text-[16px] lg:leading-6"
              >
                {heroSection.cta.title}
              </CustomLinkTag>
              
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex object-cover  w-[70%] md:w-full py-4 md:h-auto items-center justify-center ">
            <Image
              src={heroSection.image.link}
              alt={heroSection.image.altText}
              title={heroSection.image.title}
              className="object-contain md:max-w-[400px] lg:max-w-[500px] mix-blend-multiply"
              priority={true}
              sizes="(max-width: 640px) 100vw, (max-width: 1440px) 80vw, 955px"
              width={955}
              height={1060}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AwardsHeroSection;
