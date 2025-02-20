import { IPerksAndBenefitsSection } from "@/types";
import Link from "next/link";
import PerkCard from "./PerkCard";
import DotBg from "../../common/DotBg";
function PerksAndBenefitsSection({
  perksAndBenefits,
}: {
  perksAndBenefits: IPerksAndBenefitsSection;
}) {
  return (
    <section className="flex justify-center relative">
      <div className="container flex w-full max-w-[1440px] flex-col gap-10 px-4 py-10 sm:px-10 md:py-12 lg:px-[88px] z-10">

        {/* Upper Div - Text & Button*/}
        <div className="flex flex-col items-center gap-8 px-4 sm:px-10 md:px-[88]">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-Display-FullCaps-18 uppercase text-Neutrals-900">
              {perksAndBenefits.kicker}
            </h2>

            <div className="flex max-w-[720px] flex-col items-center gap-4">
              <h3 className="text-Display-Semibold-24 md:text-Display-Semibold-32">
                {perksAndBenefits.heading}
              </h3>
              <p className="text-center text-Body-Regular-14 text-Neutrals-900 md:text-Body-Regular-16">
                {perksAndBenefits.description}
              </p>
            </div>
          </div>

          <button className="self-centre bg-Primary-Blue-950 hover:bg-Primary-Blue-800">
            <Link href={perksAndBenefits.cta.link}>
              <h3 className="px-4 py-3 text-Link-medium-14 md:text-Link-medium-16 text-Neutrals-white">
                {perksAndBenefits.cta.title}
              </h3>
            </Link>
          </button>
        </div>
        
        {/* Lower Div - Perk Points*/}
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col lg:flex-row gap-3 sm:gap-0 lg:gap-4 justify-center w-full">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <PerkCard {...perksAndBenefits.perks[0]} />
              <span className="hidden sm:flex h-full w-[1px] bg-Neutrals-300 max-h-[312px] "/>
              <PerkCard {...perksAndBenefits.perks[1]}/>
            </div>
            <span className="hidden sm:flex lg:flex lg:h-full h-[1px] lg:w-[0.8px] w-full bg-Neutrals-300 max-h-[312px]"/>
            <div className="flex w-full justify-left sm:justify-center lg:block lg:w-auto"><PerkCard {...perksAndBenefits.perks[2]} /></div>
          </div>
          <span className="hidden sm:flex h-[1px] w-full bg-Neutrals-300 max-h-[332px] max-w-[1028px]"/>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
            <PerkCard {...perksAndBenefits.perks[3]} />
            <span className="hidden sm:flex h-full w-[0.8px] bg-Neutrals-300"/>
            <PerkCard {...perksAndBenefits.perks[4]} />
          </div>
        </div>
        
        

        
      </div>
      {/* Background Pattern top right*/}
      <div className="hidden sm:block absolute right-0 top-0 ">
          <DotBg
            cropWidthStart={0}
            cropWidthEnd={340}
            cropHeightStart={110}
            cropHeightEnd={489}
          />
        </div>
      {/* Background Pattern bottom left*/}
      <div className="absolute transform rotate-180 left-[-200px] sm:left-0 bottom-[-220px] sm:bottom-[-200px] ">
          <DotBg
            cropWidthStart={0}
            cropWidthEnd={343}
            cropHeightStart={0}
            cropHeightEnd={489}
          />
        </div>
    </section>
  );
}

export default PerksAndBenefitsSection;
