import { ICustomSolutionSection } from "@/types"
import Image from "next/image";
import DotBg from "../common/DotBg";
import CustomLinkTag from "@/components/Tags/CustomLinkTag";



function CustomSolution({customSolution}:{customSolution : ICustomSolutionSection}) {
    return (
    <section className="relative z-0 bg-Primary-Mordor-Blue-Bg-100 ">
      <div className="z-20 relative  mx-auto max-w-8xl">
        <div className="mx-auto flex w-full gap-4 flex-col md:flex-row px-4 py-10  md:px-[88px] items-center md:justify-between md:py-16">
            <div className="flex-[0.75] flex  flex-col gap-8 items-center md:items-start">
              <div className="flex flex-col gap-4">
                <h2 className="uppercase text-Display-FullCaps-16 md:text-Display-FullCaps-18 text-Neutrals-900 text-center md:text-start ">{customSolution.kicker}</h2> 
                <div className="flex flex-col gap-4">
                  <h3 className="text-Display-Semibold-24 md:text-Display-Semibold-32 text-center  text-Neutrals-950 md:text-start">{customSolution.heading}</h3>
                  <p className="text-Body-Regular-16  text-Neutrals-900 text-center md:text-start">{customSolution.desc}</p>
                </div>
              </div>
              <CustomLinkTag
                className="hero-section-btn min-w-max bg-Primary-Blue-950 text-sm font-medium text-Primary-Blue-50 hover:bg-Primary-Blue-800 py-4 lg:text-[16px] lg:leading-6"
                href={customSolution.cta.link}
                target=""
              >
                {customSolution.cta.title}
              </CustomLinkTag>
            </div>  
            <Image
              height={400}
              width={622}
              className="w-full md:w-1/2 h-auto object-contain"
              src={customSolution.image.link}
              title={customSolution.image.title}
              alt={customSolution.image.altText}
              loading="lazy"

            />        
        </div>
      </div>
      <div className="absolute hidden md:block rotate-45 -bottom-20 left-0 z-10">
        <DotBg
          cropWidthStart={0}
          cropWidthEnd={280}
          cropHeightStart={0}
          cropHeightEnd={300}
        />
      </div>
    </section>
  );
}



export default CustomSolution