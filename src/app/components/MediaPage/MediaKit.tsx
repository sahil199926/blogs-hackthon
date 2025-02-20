import { IMediaKit } from "@/types";
import Image from "next/image";
import Link from "next/link";

function MediaKit({ mediaKit }: { mediaKit: IMediaKit }) {
  return <div>
    <section className="bg-Neutrals-white">
      <div className="w-full max-w-8xl mx-auto px-4 py-10 md:px-[88px]">
        <div className="flex flex-col gap-8 md:flex-row justify-between">
          {/* LEFT SECTION */}
          <div className="flex flex-col justify-center gap-3 md:gap-8 w-[100%] lg:w-[45%]">
            <h2 className="text-Display-Semibold-24 md:text-Display-Semibold-32">
              {mediaKit.heading}
            </h2>
            <p className="text-Body-Regular-14 md:text-Body-Regular-16 text-neutral-900">
              {mediaKit.desc}
            </p>
            <div>
              <Link href={mediaKit.cta.link} className="py-[11px]">
                <button className="py-[11px] px-4 border-0 text-Link-medium-16 text-Neutrals-white bg-Primary-Mordor-Blue-Bg-950">
                  {mediaKit.cta.title}
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex w-[100%] items-center justify-center lg:w-max lg:max-w-[50%]">
            <Image
              src={mediaKit.image}
              alt={mediaKit.heading}
              className="block"
              priority={true}
              width={622}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  </div>
}

export default MediaKit