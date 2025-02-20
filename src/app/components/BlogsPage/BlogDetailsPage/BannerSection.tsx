import { IBannerSection } from "@/types"
import { Facebook, Link, Linkedin, X } from "lucide-react"
import Image from "next/image"

function BannerSection({ bannerSection }: { bannerSection: IBannerSection }) {
  return (
    <div className="overflow-hidden relative flex justify-center">
      <section className='w-full max-w-8xl mx-auto'>
        <div className="pt-6 px-4 pb-[10px] md:px-[88px] md:py-[48px] text-Neutrals-950">
          <div className="flex gap-4 justify-between md:justify-start items-center text-Body-Medium-12 md:text-Body-Medium-14">
            <div className="bg-Accent-Orange-100 px-2 py-1">{bannerSection.industry}</div>
            <div className="text-Neutrals-800">{bannerSection.readTime}</div>
          </div>
          <h1 className="mt-3 md:mt-6 text-Display-Semibold-24 md:text-Display-Semibold-32">{bannerSection.heading}</h1>
          <div className="mt-3 md:mt-10">
            <Image alt={bannerSection.bannerImage.altText} src={bannerSection.bannerImage.link} width={1264} height={400} className="h-[230px] md:h-[400px]" />
          </div>
          <div className="mt-3 md:mt-6 md:flex justify-between items-center ">
            <div className="flex justify-between md:justify-start gap-12 text-Body-Regular-12 md:text-Body-Regular-16  ">
              <p>
                <span className="text-Neutrals-800">Written By </span>
                {bannerSection.author.name}
              </p>
              <p>
                <span className="text-Neutrals-800">Published On </span>
                {bannerSection.published}
              </p>
            </div>
            <div className="mt-3 md:mt-0 flex justify-end items-center gap-2">
              <div className="flex justify-center items-center w-6 h-6 md:w-8 md:h-8 bg-Neutrals-50 rounded-full">
                <Link className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="flex justify-center items-center w-6 h-6 md:w-8 md:h-8 bg-[#2F6FB6] rounded-full">
                <Facebook className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="flex justify-center items-center w-6 h-6 md:w-8 md:h-8 bg-black rounded-full">
                <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="flex justify-center items-center w-6 h-6 md:w-8 md:h-8 bg-[#0077B5] rounded-full">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BannerSection