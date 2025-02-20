import { IAdvisoryInsights } from "@/types"
import TopicsWrapper from "./TopicsWrapper";



function AdvisoryInsights({advisoryInsights}:{advisoryInsights : IAdvisoryInsights}) {
    return (
    <section className="relative z-10 bg-Neutrals-white">
      <div className="mx-auto max-w-8xl z-20">
        <div className="mx-auto flex w-full md:w-[90%] flex-col flex-wrap gap-8 px-4 py-10  items-start lg:justify-between lg:py-16">
           <div className="hidden w-full md:flex flex-col items-center">
                <h2 className="text-Neutrals-950 text-Display-Semibold-32">
                    {advisoryInsights.heading}
                </h2>
                <p className="text-Neutrals-900 text-Body-Regular-16">{advisoryInsights.desc}</p>
           </div>
           <TopicsWrapper topics={advisoryInsights.topics} title={advisoryInsights.title} description={advisoryInsights.description} />
        </div>
      </div>

    </section>
  );
}



export default AdvisoryInsights