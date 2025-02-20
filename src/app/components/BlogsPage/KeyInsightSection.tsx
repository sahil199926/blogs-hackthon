"use client"
import { IKeyInsightDetails} from "@/types"
// import DotBg from "../common/DotBg";
import BlogCard from "./BlogCard";


function KeyInsightSection({keyInsightDetails}:{keyInsightDetails: IKeyInsightDetails}) {

    return (
    <section className="relative bg-Primary-Mordor-Blue-Bg-100">
      <div className="mx-auto max-w-8xl px-3 py-10 md:px-[68px]">
      <div>
        <h2 className="mb-4 text-2xl font-semibold lg:mb-3 lg:text-[32px] lg:leading-[46px]">
          {keyInsightDetails.heading}
        </h2>
      </div>
            <BlogCard  blog={keyInsightDetails.insightBlog} />
      </div>

    </section>
  );
}



export default KeyInsightSection;