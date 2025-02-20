import { IResearchMethodologyCardsTabData } from "@/types";
import { Star } from "lucide-react";

function CardsTab({ data }: { data: IResearchMethodologyCardsTabData }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {data.steps?.map((step, index) => (
        <div
          key={index}
          className="bg-Primary-Mordor-Blue-Bg-50 md:bg-Primary-Mordor-Blue-Bg-100 flex flex-col gap-4 p-3 md:p-8 md:shadow-mordorCustom transition shadow-blogAndCasecard border border-Neutrals-100 md:border-none">
          <div className="flex gap-2 md:gap-1 items-center pb-3 md:pb-0 border-b border-Neutrals-100 md:border-none">
            <Star className="hidden md:block text-Accent-Orange-950"/>
            <p className="md:hidden text-Display-Semibold-16 md:text-Display-Semibold-20 text-Neutrals-950">Step</p>
            <p className="hidden md:flex text-Display-Semibold-16 md:text-Display-Semibold-20 text-Neutrals-950">{step.title}</p>
            <div className="flex md:hidden items-center justify-center w-5 h-5 bg-Accent-Orange-700 text-white text-Body-Regular-12 rounded-full">{index+1}</div>
          </div>
          <p className="text-Body-Regular-12 md:text-Body-Regular-16 text-Neutrals-900">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CardsTab;
