import { IJobsHeroSection } from "@/types";
import Image from "next/image";
import Link from "next/link";

function JobsHeroSection({ jobsHeroSection }: { jobsHeroSection: IJobsHeroSection }) {
  return (
    <div className="flex justify-center bg-primary-gradient overflow-hidden">
      <section className="w-full max-w-8xl">
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <div className="px-4 py-10 md:pl-[88px] md:pt-20 max-w-[650px]">
            <h1 className="text-left text-Display-Semibold-28 md:text-Display-Semibold-40 text-Neutrals-950">
              {jobsHeroSection.heading}
            </h1>
            <p className="mt-4 text-Body-Regular-18 md:text-Body-Regular-14 text-Neutrals-900">
              {jobsHeroSection.desc}
            </p>
            <div className="relative z-20 mt-8 text-Body-Medium-16">
              <Link href={jobsHeroSection.cta.link}>
                <button className="px-4 py-[11px] bg-Primary-Blue-950 text-white">{jobsHeroSection.cta.title}</button>
              </Link>
            </div>
          </div>

          <div className="flex w-full max-h-[620px] max-w-[737px] px-0 sm:px-10 lg:px-0">
            <Image src={jobsHeroSection.image.link} width={1106} height={930} alt={jobsHeroSection.image.altText} className="object-cover mix-blend-darken" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default JobsHeroSection;
