import CustomLinkTag from "@/components/Tags/CustomLinkTag";
import { ICustomResearchHeroSection } from "@/types";
import Head from "next/head";
import Image from "next/image";

function CustomResearchHeroSection({ heroSection }: { heroSection: ICustomResearchHeroSection }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href={heroSection.image.link}
          as="image"
          type="image/jpeg"
          imageSizes="(max-width: 1440px) 100vw"
        />
      </Head>
      <section className="bg-Light-Gradient-Vertical md:bg-Light-Gradient-Horizontal">
        <div className="mx-auto flex gap-6 h-max max-w-8xl flex-col-reverse items-center justify-end md:pb-0 lg:h-auto lg:flex-row">
          {/* LEFT SECTION */}
          <div className=" flex flex-col flex-[0.85] gap-8 w-[100%] lg:items-end p-4 pb-8 lg:p-0 lg:py-8 lg:w-max">
            <div className="flex flex-col w-full  gap-8">
              <div className="flex  flex-col gap-4">
                  <h1 className="text-[28px] text-Neutrals-950 pr-10 font-semibold leading-[40px] md:pr-0 lg:text-left lg:text-[2.5rem] lg:leading-[56px]">
                  {heroSection.heading}
                  </h1>
                  <p className="w-[100%]  text-sm text-Neutrals-900 lg:text-left lg:text-lg lg:leading-[30px]">
                  {heroSection.desc}
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
          <div className="flex lg:max-w-[50%] justify-center  lg:h-full shrink lg:w-max ">
            <Image
              src={heroSection.image.link}
              width={626}
              height={520}
              alt={heroSection.image.altText}
              title={heroSection.image.title}
              className=" mix-blend-multiply"
              priority={true}
              sizes="(max-width: 640px) 100vw, (max-width: 1440px) 80vw, 1446px"
            />
           </div>
        </div>
      </section>
    </>
  );
}

export default CustomResearchHeroSection;
