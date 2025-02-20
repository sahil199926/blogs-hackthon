import { Facebook, Link, Linkedin, X } from "lucide-react";
import Image from "next/image";

interface bannerSection {
  title: string;
  bannerURL: string;
  category: string[];
  author: string;
}

function BannerSection({ data }: { data: bannerSection }) {
  return (
    <div className="relative flex justify-center overflow-hidden">
      <section className="mx-auto w-full max-w-8xl">
        <div className="px-4 pb-[10px] pt-6 text-Neutrals-950 md:px-[88px] md:py-[48px]">
          <div className="flex items-center justify-between gap-4 text-Body-Medium-12 md:justify-start md:text-Body-Medium-14">
            <div className="bg-Accent-Orange-100 px-2 py-1">
              {data.category[0]}
            </div>
            <div className="text-Neutrals-800">{"10 mins"}</div>
          </div>
          <h1 className="mt-3 text-Display-Semibold-24 md:mt-6 md:text-Display-Semibold-32">
            {data.title}
          </h1>
          <div className="mt-3 md:mt-10">
            <Image
              alt={data.title}
              src={data.bannerURL}
              width={1264}
              height={400}
              className="h-[230px] md:h-[400px]"
            />
          </div>
          <div className="mt-3 items-center justify-between md:mt-6 md:flex">
            <div className="flex justify-between gap-12 text-Body-Regular-12 md:justify-start md:text-Body-Regular-16">
              <p>
                <span className="text-Neutrals-800">Written By </span>
                {data.author}
              </p>
              <p>
                <span className="text-Neutrals-800">Published On </span>
                {/* {new (data.date)} */}
                time
              </p>
            </div>
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
