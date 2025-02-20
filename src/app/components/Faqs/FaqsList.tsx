import CustomLinkTag from "@/components/Tags/CustomLinkTag";
import DotBg from "../common/DotBg";
import { IFaqsList } from "@/types";

const FaqsList = ({ faqsList }: { faqsList: IFaqsList }) => {
  return (
    <section className="hidden flex-col md:flex relative">
      <div className="bg-Primary-Mordor-Blue-Bg-100 px-8 py-2">
        <h2 className="py-2 text-Display-Semibold-24">{faqsList.title}</h2>
        {faqsList.desc.map((list, index) => (
          <CustomLinkTag
            href={`#faq-${index}`}
            key={index}
            className="flex cursor-pointer text-Body-Medium-14 md:px-4 md:py-3 hover:bg-Primary-Mordor-Blue-Bg-300">
            {list}
          </CustomLinkTag>
        ))}
      </div>
      <button
        type="submit"
        className="flex w-full justify-center bg-Accent-Orange-950 px-4 text-white hover:bg-Accent-Orange-900 md:py-0 lg:py-2">
        Contact Us
      </button>
      <div className="right-4 mt-20 z-0 hidden md:block">
        <DotBg
          cropWidthStart={750}
          cropWidthEnd={1156}
          cropHeightStart={0}
          cropHeightEnd={489}
        />
      </div>
    </section>
  );
};

export default FaqsList;
