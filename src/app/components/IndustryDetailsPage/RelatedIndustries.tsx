import { IRelatedIndustries } from "@/types";
import Image from "next/image";
import Link from "next/link";

function RelatedIndustries({ relatedIndustries }: { relatedIndustries: IRelatedIndustries }) {
  return (
    <section className="bg-Primary-Mordor-Blue-Bg-100">
      <div className="w-full max-w-8xl mx-auto px-4 py-10 md:px-[88px]">
        <h2 className="mb-6 md:mb-12 text-Display-Semibold-24 md:text-Display-Semibold-32">{relatedIndustries.heading}</h2>
        <ul className="grid grid-cols-12 gap-5">
          {
            relatedIndustries?.hubList.map((hub, index) => (
              <li key={index} className="col-span-6 lg:col-span-4 xl:col-span-3">
                <Link
                  target="_blank"
                  href={hub.HubLink}
                  className="relative flex md:gap-1 h-full cursor-pointer flex-col items-center overflow-hidden bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl md:flex-row"
                >
                  <div className="relative h-[100px] w-full flex-shrink-0 md:h-full md:w-24 lg:h-[130px] lg:w-24 xl:h-24 xl:w-24">
                    <Image
                      src={hub.img}
                      alt={hub.label}
                      width={286}
                      height={180}
                      className="h-full w-full"
                    />
                  </div>
                    <h3 className="mt-0 p-3 text-center text-Body-Medium-16 text-Neutrals-950 md:mt-2 md:text-left">
                      {hub.label}
                    </h3>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}

export default RelatedIndustries;