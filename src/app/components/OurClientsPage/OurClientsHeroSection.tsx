import CustomLinkTag from "@/components/Tags/CustomLinkTag";
import { IOurClientsHeroSection } from "@/types";
import Head from "next/head";
import Image from "next/image";
import DotBg from "../common/DotBg";
import { highlightString } from "@/utils/highlightString";

function OurClientsHeroSection({ heroSection }: { heroSection: IOurClientsHeroSection }) {
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
      <section className="relative bg-Light-Gradient-Vertical md:bg-Light-Gradient-Horizontal overflow-hidden lg:overflow-visible">
        <div className="z-20 mx-auto flex gap-6  h-max py-4   max-w-8xl flex-col-reverse items-center justify-end md:pb-0 lg:h-[32.5rem] md:flex-row">
          {/* LEFT SECTION */}
          <div className=" flex flex-col flex-[0.75] gap-8 p-4 lg:p-0 md:pl-[88px] lg:pl-[88px] ">
            <div className="flex flex-col w-full  gap-8">
              <div className="flex  flex-col gap-4">
                  <h1 className="text-[28px] text-Neutrals-950 pr-10 font-semibold leading-[40px] md:pr-0 lg:text-left lg:text-[2.5rem] lg:leading-[56px]">
                  {heroSection.heading}
                  </h1>
                  <p className="w-[100%]  text-sm text-Neutrals-900 lg:text-left lg:text-lg lg:leading-[30px]">
                  {highlightString(heroSection.desc,["clients","countries"],"+")}
                  </p>
              </div>

              <div className=" w-[100%]  lg:w-max ">
                <CustomLinkTag
                  className="hero-section-btn min-w-max bg-Primary-Blue-950 text-sm font-medium text-Primary-Blue-50 hover:bg-Primary-Blue-800 lg:py-[11px] lg:text-[16px] lg:leading-6"
                  href={heroSection.cta.link}
                  target=""
                >
                  {heroSection.cta.title}
                </CustomLinkTag>
              </div>
            </div>

            </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-1 justify-end  lg:h-full shrink lg:w-max ">
            <Image
            src={heroSection.image.link}
            width={766}
            height={566}
            alt={heroSection.image.altText}
            title={heroSection.image.title}
            className="object-contain  mix-blend-multiply"
            sizes="(max-width: 640px) 100vw, (max-width: 1440px) 80vw, 766px"
            priority={true}
            />
           </div>
        </div>
        <div className="z-10 absolute right-0 -bottom-[350px]">
          <DotBg
              cropWidthStart={0}
              cropWidthEnd={250}
              cropHeightStart={0}
              cropHeightEnd={550}
          />
        </div>
      </section>
    </>
  );
}

export default OurClientsHeroSection;
