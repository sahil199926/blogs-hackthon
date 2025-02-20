import { IGlobalCoverage } from "@/types";
import Image from "next/image";
import Link from "next/link";

const GlobalCoverage = ({globalCoverage}:{globalCoverage : IGlobalCoverage}) => {
  return (
    <div className="bg-Primary-Mordor-Blue-Bg-50 flex w-full justify-center">
      <section className="container flex max-w-[1440px] flex-col gap-6 sm:items-center px-4 sm:px-10 lg:px-[88px] md:flex-row md:justify-between py-[88px]">
        {/* Left Section */}
        <div className="flex flex-[1] flex-col gap-8 sm:text-center lg:max-w-[530px] md:text-left">
          <div className="flex flex-col gap-3 md:gap-4">
            <h2 className="text-Display-FullCaps-16 md:text-Display-FullCaps-18 text-Neutrals-900">
              {globalCoverage.kicker}
            </h2>
            <h3 className="text-Display-Semibold-24 md:text-Display-Semibold-32 text-Neutrals-950">
              {globalCoverage.heading}
            </h3>
            <p className="text-Body-Regular-14 md:text-Body-Regular-16 text-Neutrals-900">
              {globalCoverage.desc}
            </p>
          </div>
          <div className=" hidden md:flex justify-center gap-3 text-Link-medium-16 md:justify-start">
            <Link 
                target={globalCoverage.cta.link ? "_blank" : ""}
                href={globalCoverage.cta.link || ""}
                className="hero-section-btn min-w-max bg-Primary-Blue-950 text-sm font-medium text-Primary-Blue-50 hover:bg-Primary-Blue-800 py-4 lg:text-[16px] lg:leading-6"
                >
                {globalCoverage.cta.title}
            </Link>
          </div>
        </div>

        {/* Right Map */}
        <div className="flex flex-[1] justify-center">
          <Image src={globalCoverage.map.src} alt={globalCoverage.map.alt} title={globalCoverage.map.title}  height={359} width={729}/>
        </div>

        {/* Buttons for mobile */}
        <div className="md:hidden flex justify-start gap-2 text-Link-medium-14">
            <Link 
            target={globalCoverage.cta.link ? "_blank" : ""}
            href={globalCoverage.cta.link || ""}
            className="hero-section-btn min-w-max bg-Primary-Blue-950 text-sm font-medium text-Primary-Blue-50 hover:bg-Primary-Blue-800 py-4 lg:text-[16px] lg:leading-6"
            >
            {globalCoverage.cta.title}
            </Link>
        </div>
      </section>
    </div>
  );
};

export default GlobalCoverage;
