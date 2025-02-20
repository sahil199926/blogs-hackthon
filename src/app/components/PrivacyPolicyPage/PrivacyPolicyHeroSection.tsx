import { IPrivacyPolicyHeroSection } from "@/types";
import DotBg from "../common/DotBg";

function PrivacyPolicyHeroSection({ headerSection }: { headerSection: IPrivacyPolicyHeroSection }) {
  return (
    <div className="flex justify-center relative bg-Primary-Mordor-Blue-Bg-100 overflow-hidden">
      <div className="z-1 absolute top-0 left-[200px] md:left-auto md:right-0">
        <DotBg
          cropWidthStart={130}
          cropWidthEnd={819}
          cropHeightStart={351}
          cropHeightEnd={489}
        />
      </div>
      <section className="w-full max-w-8xl">
        <div className="p-4 md:px-[88px] md:py-20">
          <h1 className="text-left text-[26px] font-semibold leading-[38px] lg:text-[2rem] lg:leading-[46px]">
            {headerSection.title}
          </h1>
          <p className="mt-5 md:mt-6 text-[14px] md:text-[16px] font-medium text-left leading-5 lg:leading-[22px] text-Neutrals-950">
            {headerSection.updatedAt}
          </p>
          <div className="mt-3 md:mt-6 text-[14px] md:text-[16px] text-left leading-5 lg:leading-[24px] text-black/70" dangerouslySetInnerHTML={{ __html: headerSection.desc }} />
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicyHeroSection;
