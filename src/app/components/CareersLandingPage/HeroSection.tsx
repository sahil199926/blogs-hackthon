import { ICareerHeroSection } from "@/types";
import Image from "next/image";
import Link from "next/link";
import DotBg from "../common/DotBg";

function HeroSection({ heroSection }: { heroSection: ICareerHeroSection }) {
  return (
    <section className="flex justify-center bg-primary-gradient">
      <div className="flex flex-col  gap-8  lg:flex-row-reverse w-full max-w-[1440px] px-0 lg:pl-[88px] justify-between">

        {/*Right Background Image */}
        <div className="flex w-full  sm:min-w-[500px]  px-0 sm:px-10 lg:px-0">
            <Image src="https://s3.mordorintelligence.com/static/Careers-hero.webp"
        alt="Hero Image"
        width={670} 
        height={620} 
        className="object-cover w-full h-auto mix-blend-multiply "
        priority={true} 
        sizes="(max-width: 640px) 100vw, 670px"
        quality={75}/>
        </div>

        {/*Left Content */}
        <div className="flex justify-start lg:max-w-[650px] flex-col gap-8 z-10 pb-10 md:pb-20 px-4 sm:px-10 lg:px-0 pt-0 lg:pt-20">
          <div className="flex flex-col gap-4">
            <h1 className="text-Display-Semibold-28 sm:text-Display-Semibold-40 text-Neutrals-950">
              {heroSection.heading}
            </h1>
            <p className="text-body text-Body-Regular-14 sm:text-Body-Regular-18 text-Neutrals-900">
              {heroSection.description}
            </p>
          </div>
          <button className="bg-Primary-Blue-950 hover:bg-Primary-Blue-800 self-start">
            <Link href={heroSection.cta.link}>
              <h2 className="px-4 py-3 text-Link-medium-16 text-Neutrals-white">
                {heroSection.cta.title}
              </h2>
            </Link>
          </button>
          <div className="flex gap-8">
            {heroSection.awards.map((logo) => (
              <Image key={logo.image} src={logo.image} alt="Awards Logo" />
            ))}
          </div>
          
        </div>

        {/* Background Pattern bottom left*/}
      <div className="sm:hidden absolute right-0 bottom-[-400px] h-[340px] max-w-[803px]">
          <DotBg
            cropWidthStart={0}
            cropWidthEnd={280}
            cropHeightStart={0}
            cropHeightEnd={489}
          />
        </div>

        
        
      </div>
    </section>
  );
}

export default HeroSection;
