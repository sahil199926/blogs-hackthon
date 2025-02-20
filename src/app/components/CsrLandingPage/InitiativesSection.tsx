import { IInitiativesSection } from "@/types";
import Image from "next/image";

function InitiativesSection({ initiativesSection }: { initiativesSection: IInitiativesSection }) {
  return (
    <section className="flex justify-center bg-Primary-Mordor-Green-Bg-100">
      <div className="flex flex-col gap-10 md:gap-12 max-w-[1440px] px-4 sm:px-10 md:px-[88px] py-10 md:py-14">
        {/* upper Text */}
        <div className="flex flex-col gap-4 max-w-[768px]">
          <h2 className="text-Display-Semibold-24 md:text-Display-Semibold-32 text-Neutrals-950">{initiativesSection.heading}</h2>
          <p className="text-Body-Regular-14 md:text-Body-Regular-16 text-Neutrals-900">{initiativesSection.description}</p>
        </div>

        {/* Initiatives */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 lg:gap-5">
          {initiativesSection.initiatives.map((initiative, index) => (
            <div key={index} className="flex flex-[1] flex-col bg-white shadow-mordorCustom">

              {/* Image */}
              <div className="flex h-[200px] md:h-[236px]">
                <Image src={initiative.image} alt={initiative.title} width={622} height={236} className="object-cover" sizes="(max-width: 640px) 200px, 100vw, (max-width: 1024px) 236px, 622px"
            quality={75}/>
              </div>
              
              {/* Text */}
              <div className="flex flex-col gap-4 p-6">
                <h3 className="text-Display-Semibold-20 text-Neutrals-950">{initiative.title}</h3>
                <p className="text-Body-Regular-14 md:text-Body-Regular-16 text-Neutrals-900">{initiative.description}</p>
              </div >
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InitiativesSection;
