import { IMediaHeroSection } from "@/types";
import Image from "next/image";
import Link from "next/link";

function MediaHeroSection({ mediaHeroSection }: { mediaHeroSection: IMediaHeroSection }) {
  return (
    <div className="flex justify-center bg-primary-gradient overflow-hidden">
      <section className="w-full max-w-8xl">
        <div className="relative z-20 flex flex-col-reverse md:flex-row justify-between">
          <div className="px-4 py-10 md:pl-[88px] md:pt-20 max-w-[650px]">
            <p className="text-Caption-Regular-14">
              <span className="text-Neutrals-800">{mediaHeroSection.createdAt} | Latest :</span>{" "}
              <span className="text-Neutrals-950">{mediaHeroSection.coverage}</span>
            </p>
            <h1 className="mt-4 text-left font-semibold leading-[38px] text-[26px] md:text-Display-Semibold-40 text-Neutrals-950">
              {mediaHeroSection.heading}
            </h1>
            <p className="mt-4 text-Body-Regular-14 md:text-Body-Regular-18 text-Neutrals-900">
              {mediaHeroSection.desc}
            </p>
            <div className="mt-8 text-Body-Medium-16">
              <Link href={mediaHeroSection.cta.link}>
                <button className="px-4 py-[11px] bg-Primary-Blue-950 text-white">{mediaHeroSection.cta.title}</button>
              </Link>
            </div>
          </div>
          <div className="flex lg:max-w-[50%] justify-center lg:h-full shrink lg:w-max">
            <Image src={mediaHeroSection.cup} width={780} height={620} alt="Hero Image" className="mix-blend-multiply bg-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MediaHeroSection;
