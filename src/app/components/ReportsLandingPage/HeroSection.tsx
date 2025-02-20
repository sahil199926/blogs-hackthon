import { IReportHeroSection } from "@/types";
import Image from "next/image";
import Link from "next/link";

function HeroSection({ heroSection }: { heroSection: IReportHeroSection }) {
  return (
    <section className="flex justify-center  overflow-hidden bg-Light-Gradient-Horizontal">
      <div className="flex w-full max-w-[1440px]  flex-col justify-between px-0 lg:flex-row-reverse lg:pl-[88px]">
        {/*Right Background Image desktop:max-w-[737px],max-h-[620px]  mobile: max-*/}
        <div className="flex justify-center items-center w-full lg:max-w-[500px]  h-[304px] md:h-[620px]">
          <Image
            src={heroSection.image}
            width={780}
            height={610}
            alt="Hero Image"
            className="lg:absolute flex right-0 object-contain mix-blend-multiply w-full max-w-[737px]"
          /> 
        </div>

        {/*Left Content */}
        <div className="z-10 flex flex-col justify-start gap-8 px-4 pb-10 pt-0 sm:px-10 md:pb-[100px] lg:max-w-[740px] lg:px-0 lg:pt-20">
          <div className="flex flex-col gap-4">
            <h1 className="text-Display-Semibold-28 text-Neutrals-950 sm:text-Display-Semibold-40 lg:max-w-[650px]">
              {heroSection.title}
            </h1>
            <p className="text-body text-Body-Regular-14 text-Neutrals-900 sm:text-Body-Regular-18">
              {heroSection.description}
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="flex gap-3">
            {heroSection.cta.map((button, index) => (
              <Link key={index} href={button.link}>
                <button
                  className={`px-4 py-3 text-Link-medium-14 md:text-Link-medium-16 ${
                    index === 0
                      ? "bg-Primary-Blue-950 text-white hover:bg-Primary-Blue-800"
                      : "border border-Primary-Blue-950 text-Primary-Blue-950 hover:bg-Primary-Blue-100"
                  }`}>
                  {button.text}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
