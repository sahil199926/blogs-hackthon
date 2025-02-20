import { IIndustriesOverviewHeroSection } from "@/types";
import DotBg from "../common/DotBg";
import Link from "next/link";

function IndustriesOverviewHeroSection({ heroSection }: { heroSection: IIndustriesOverviewHeroSection }) {
  return (
    <>
      <section className="relative bg-Primary-Mordor-Blue-Bg-50 md:bg-Primary-Mordor-Blue-Bg-100 overflow-hidden">
        <div className="relative z-20 mx-auto flex justify-center items-center  gap-6  h-max p-4   max-w-8xl  md:pb-0 lg:h-[32.5rem] md:flex-row">
         
            <div className=" flex flex-col w-full md:w-[80%] lg:w-[60%] py-6 gap-8">
                <div className="flex  flex-col gap-4">
                    <h1 className="text-center text-Neutrals-950 text-Display-Semibold-28 md:text-Display-Semibold-40 ">
                    {heroSection.heading}
                    </h1>
                    <p className="text-center text-Neutrals-900 text-Body-Regular-14 md:text-Body-Regular-18">
                    {heroSection.desc}
                    </p>
                </div>

                    <Link
                        className="hero-section-btn mx-auto min-w-max text-Link-medium-14 md:text-Link-medium-16 bg-Primary-Blue-950  text-Primary-Blue-50 hover:bg-Primary-Blue-800"
                        href={heroSection.cta.link}
                        target=""
                    >
                        {heroSection.cta.title}
                    </Link>
            </div>

        </div>
        <div className="z-10 absolute left-0 -bottom-[350px] md:-bottom-[250px] lg:-bottom-[150px] rotate-180">
          <DotBg
              cropWidthStart={0}
              cropWidthEnd={500}
              cropHeightStart={0}
              cropHeightEnd={550}
          />
        </div>
        <div className="z-10 absolute right-0 -bottom-[400px] md:-bottom-[300px] lg:-bottom-[200px]">
          <DotBg
              cropWidthStart={0}
              cropWidthEnd={500}
              cropHeightStart={0}
              cropHeightEnd={550}
          />
        </div>
      </section>
    </>
  );
}

export default IndustriesOverviewHeroSection;
