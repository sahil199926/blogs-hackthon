import { IIndustryDetailsHero } from "@/types";
import Image from "next/image";
import Link from "next/link";

function HeroSection({ heroSection }: { heroSection: IIndustryDetailsHero }) {
  return (
    <div className="flex justify-center bg-Linear-Gradient-Degree overflow-hidden">
      <section className="w-full max-w-8xl">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="px-4 pb-10 pt-3 md:pl-[88px] md:pt-20 max-w-[650px]">
            <h1 className="text-left text-Display-Semibold-28 md:text-Display-Semibold-40 text-Neutrals-950">
              {heroSection.heading}
            </h1>
            <p className="mt-4 text-Body-Regular-18 md:text-Body-Regular-14 text-Neutrals-900">
              {heroSection.desc}
            </p>
            <div className="flex gap-3 relative z-20 mt-8 text-Body-Medium-16">
              <Link href={heroSection.ctaOne.link}>
                <button className="px-4 py-[11px] text-Link-medium-14 md:text-Link-medium-16 bg-Primary-Blue-950 text-white">{heroSection.ctaOne.title}</button>
              </Link>
              <Link href={heroSection.ctaTwo.link}>
                <button className="px-4 py-[11px] text-Link-medium-14 md:text-Link-medium-16 bg-Primary-Blue-50 text-Primary-Blue-950">{heroSection.ctaTwo.title}</button>
              </Link>
            </div>
          </div>

          <div className="flex w-full max-h-[620px] max-w-[737px] px-0 md:pr-5">
            <Image src={heroSection.image} width={1106} height={930} alt="Hero Image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
