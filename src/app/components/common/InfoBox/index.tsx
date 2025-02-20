import { IInfo } from "@/types";
import { Info } from "lucide-react";

const InfoBox = ({ info }: { info: IInfo }) => {
  return (
    <div className="flex justify-center bg-Primary-Mordor-Blue-Bg-200">
      <div className="container flex max-w-[1440px] flex-col px-4 py-6 md:flex-row md:px-[68px]">
        <div className="flex items-center border-gray-600 pr-3 md:border-r">
          <Info />
          <p className="ml-3 text-Display-FullCaps-14">{info?.title}</p>
        </div>
        <div className="mt-3 pl-0 md:mt-0 md:pl-3">
          <p className="text-Display-Semibold-16 md:text-Display-Semibold-20">{info?.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
