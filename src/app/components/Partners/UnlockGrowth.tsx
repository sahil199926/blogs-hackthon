import { IUnlockGrowth } from "@/types";
import Image from "next/image";
import DotBg from "../common/DotBg";

const UnlockGrowth = ({ unlockGrowth }: { unlockGrowth: IUnlockGrowth }) => {
  return (
    <section className="relative">
      <div className="m-auto flex max-w-8xl flex-col items-center justify-center gap-8 overflow-hidden p-4 md:flex-row md:px-20 md:py-14">
        <Image
          src={unlockGrowth.url}
          alt="faq-banner"
          width={500}
          height={500}
        />
        <div className="">
          <h2 className="text-Display-Semibold-24 md:text-Display-Semibold-32">
            {unlockGrowth.title}
          </h2>
          <div
            className="mt-4 text-left text-Body-Regular-16 text-[14px] leading-5 text-black/70 md:mt-6 md:text-[16px] lg:leading-[24px]"
            dangerouslySetInnerHTML={{ __html: unlockGrowth.desc }}
          />
        </div>
      </div>
      <div className="absolute -bottom-40 right-0 hidden md:block">
        <DotBg
          cropWidthStart={0}
          cropWidthEnd={350}
          cropHeightStart={0}
          cropHeightEnd={400}
        />
      </div>
    </section>
  );
};

export default UnlockGrowth;
