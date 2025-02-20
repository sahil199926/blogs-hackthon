import { ICSRHeroSection } from "@/types";
import Image from "next/image";
import Link from "next/link";

function HeroSection({ heroSection }: { heroSection: ICSRHeroSection }) {
  return (
    <section className="flex justify-center overflow-hidden bg-primary-gradient">
      <div className="flex w-full max-w-[1440px] flex-col justify-between px-0 lg:flex-row-reverse lg:pl-[88px]">
        {/*Right Background Image */}
        <div className="relative flex h-full w-full items-center justify-center lg:max-w-[500px]">
          <Image
            src={heroSection.image}
            width={780}
            height={610}
            className="max-h-[304px] max-w-[737px] object-contain mix-blend-multiply sm:max-h-[520px] lg:absolute"
            alt="Hero Image"
            priority={true}
            sizes="(max-width: 640px) 304, 100vw, (max-width: 1024px) 520px, 737px"
            quality={75}
          />
        </div>

        {/*Left Content */}
        <div className="z-10 flex flex-col justify-start gap-8 px-4 pb-10 pt-0 sm:px-10 md:pb-[100px] lg:max-w-[730px] lg:px-0 lg:pt-[100px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-Display-Semibold-28 text-Neutrals-950 sm:text-Display-Semibold-40">
              {heroSection.heading}
            </h1>
            <p className="text-body text-Body-Regular-14 text-Neutrals-900 sm:text-Body-Regular-18">
              {heroSection.description}
            </p>
          </div>
          <button className="self-start bg-Primary-Blue-950 hover:bg-Primary-Blue-800">
            <Link href={heroSection.cta.link}>
              <h2 className="px-4 py-3 text-Link-medium-14 text-Neutrals-white md:text-Link-medium-16">
                {heroSection.cta.title}
              </h2>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;