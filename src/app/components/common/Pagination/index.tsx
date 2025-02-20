import { } from "@/types";

 
const Pagination = () => {
  return (
    <>
   <div className="hidden md:flex justify-center items-center gap-2 pb-8 md:px-[68px]" >
    <button className="py-2 px-3 border text-Body-Regular-16 text-Neutrals-950 border-[rgba(224, 224, 224, 1)] hover:bg-Primary-Blue-950 hover:text-white hover:border-Primary-Blue-950">
      {"<< First"}
    </button>
    <button className="py-2 px-3 border text-Body-Regular-16 text-Neutrals-950 border-[rgba(224, 224, 224, 1)] hover:bg-Primary-Blue-950 hover:text-white hover:border-Primary-Blue-950">
      {"< Back"}
    </button>
    <button className="py-2 px-3 h-10 w-10 border text-Body-Regular-16 text-Neutrals-950 border-[rgba(224, 224, 224, 1)] hover:bg-Primary-Blue-950 hover:text-white hover:border-Primary-Blue-950">
      {"1"}
    </button>
    <button className="py-2 px-3 h-10 w-10 border text-Body-Regular-16 text-Neutrals-950 border-[rgba(224, 224, 224, 1)] hover:bg-Primary-Blue-950 hover:text-white hover:border-Primary-Blue-950">
      {"2"}
    </button>
    <button className="py-2 px-3 h-10 w-10 border text-Body-Regular-16 text-Neutrals-950 border-[rgba(224, 224, 224, 1)] hover:bg-Primary-Blue-950 hover:text-white hover:border-Primary-Blue-950">
      {"3"}
    </button>
    <button className="py-2 px-3 h-10 w-10 border text-Body-Regular-16 text-Neutrals-950 border-[rgba(224, 224, 224, 1)] hover:bg-Primary-Blue-950 hover:text-white hover:border-Primary-Blue-950">
      {"4"}
    </button>
    <div className="py-2 px-3 h-10 border text-Body-Regular-16 text-Neutrals-950 border-[rgba(224, 224, 224, 1)] flex justify-center items-center gap-1">
      <span className="rounded-full h-[6px] w-[6px] inline-block bg-[rgba(25,25,25,1)]">
      </span>
      <span className="rounded-full h-[6px] w-[6px] inline-block bg-[rgba(25,25,25,1)]">
      </span>
      <span className="rounded-full h-[6px] w-[6px] inline-block bg-[rgba(25,25,25,1)]">
      </span>
    </div>
    <button className="py-2 px-3 h-10 w-10 border text-Body-Regular-16 text-Neutrals-950 border-[rgba(224, 224, 224, 1)] hover:bg-Primary-Blue-950 hover:text-white hover:border-Primary-Blue-950">
      {"20"}
    </button>
    <button className="py-2 px-3 border text-Body-Regular-16 text-Neutrals-950 border-[rgba(224, 224, 224, 1)] hover:bg-Primary-Blue-950 hover:text-white hover:border-Primary-Blue-950">
      {"Next >"}
    </button>
    <button className="py-2 px-3 border text-Body-Regular-16 text-Neutrals-950 border-[rgba(224, 224, 224, 1)] hover:bg-Primary-Blue-950 hover:text-white hover:border-Primary-Blue-950">
      {"Last >>"}
    </button>
   </div>
   </>
  );
};
 
export default Pagination;