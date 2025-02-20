import { IBannerSection } from "@/types";
import { Facebook, Link, Linkedin, X } from "lucide-react";
import Image from "next/image";

function BannerSection({ bannerSection }: { bannerSection: IBannerSection }) {
  return (
    <div className="relative flex justify-center overflow-hidden">
      <section className="mx-auto w-full max-w-8xl">
        <div className="px-4 pb-[10px] pt-6 text-Neutrals-950 md:px-[88px] md:py-[48px]">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full">
              <div className="flex items-center justify-between gap-4 text-Body-Medium-12 md:justify-start md:text-Body-Medium-14">
                <div className="bg-Accent-Orange-100 px-2 py-1">
                  {bannerSection.industry}
                </div>
                <div className="text-Neutrals-800">
                  {bannerSection.readTime}
                </div>
              </div>
              <h1 className="mt-3 text-Display-Semibold-24 md:mt-6 md:text-Display-Semibold-32">
                {bannerSection.heading}
              </h1>
              <div className="mt-3 hidden items-center justify-between md:mt-6 md:flex">
                <div className="mt-3 flex items-center justify-end gap-2 md:mt-0">
                  <button className="flex items-center self-center bg-Accent-Orange-950 px-4 py-2 text-white hover:bg-Accent-Orange-900">
                    Download PDF
                  </button>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-Neutrals-50 md:h-8 md:w-8">
                    <Link className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2F6FB6] md:h-8 md:w-8">
                    <Facebook className="h-4 w-4 text-white md:h-5 md:w-5" />
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black md:h-8 md:w-8">
                    <X className="h-4 w-4 text-white md:h-5 md:w-5" />
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0077B5] md:h-8 md:w-8">
                    <Linkedin className="h-4 w-4 text-white md:h-5 md:w-5" />
                  </div>
                </div>
              </div>
            </div>
              <Image
                alt={bannerSection.bannerImage.altText}
                src={bannerSection.bannerImage.link}
                width={322}
                // height={400}
                className="md:w-[322px] w-full"
              />
          </div>
          <div className="mt-3 flex items-center justify-between md:mt-6 md:hidden">
            <button className="flex items-center self-center bg-Accent-Orange-950 px-4 py-2 text-white hover:bg-Accent-Orange-900">
              Download PDF
            </button>
            <div className="mt-3 flex items-center justify-end gap-2 md:mt-0">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-Neutrals-50 md:h-8 md:w-8">
                <Link className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2F6FB6] md:h-8 md:w-8">
                <Facebook className="h-4 w-4 text-white md:h-5 md:w-5" />
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black md:h-8 md:w-8">
                <X className="h-4 w-4 text-white md:h-5 md:w-5" />
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0077B5] md:h-8 md:w-8">
                <Linkedin className="h-4 w-4 text-white md:h-5 md:w-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BannerSection;
