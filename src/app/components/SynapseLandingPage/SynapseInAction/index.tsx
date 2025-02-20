// import pattern from "@/assets/pattern.svg";
import dynamic from "next/dynamic";
import { ISynapseAction } from "@/types";
import DotBg from "../../common/DotBg";
const DemoVideo = dynamic(() => import("./DemoVideo"), { ssr: false });
function SynapseInAction({ synapseAction,dotbgClass }: { synapseAction: ISynapseAction,dotbgClass?:string }) {
  return (
    <div className="relative bg-Primary-Mordor-Blue-Bg-100">
      <div className="mx-auto max-w-8xl">
        <div className="mx-auto flex w-[90%] flex-col md:flex-row md:items-center flex-wrap gap-8 py-10 ">
          <div className="flex-1 lg:w-[40%]">
            {synapseAction?.subTitle && (
              <h2 className="text-[1rem] leading-[1.5rem] md:text-Display-FullCaps-18 mb-2">
                {synapseAction.subTitle}
              </h2>
            )}
            <h3 className="mb-2 text-2xl font-semibold lg:mb-3 lg:text-[32px] lg:leading-[46px] max-w-xl">
              {synapseAction.title}
            </h3>
            <p className="text-sm font-normal lg:text-[16px] lg:leading-[24px] xl:w-[80%]">
              {synapseAction.desc}
            </p>
          </div>

          <div className="z-20 flex-1 sm:h-[358px] md:h-[400px] lg:w-[50%]">
            <DemoVideo url={synapseAction.url} />
          </div>
        </div>
      </div>

      <div className={`${dotbgClass?dotbgClass:'absolute -bottom-5 right-0 z-10'}`}>
        <DotBg
          cropWidthStart={0}
          cropWidthEnd={360}
          cropHeightStart={0}
          cropHeightEnd={489}
        />
      </div>
    </div>
  );
}

export default SynapseInAction;
