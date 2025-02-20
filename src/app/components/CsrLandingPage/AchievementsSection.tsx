import { IAchievementsSection } from "@/types";

function AchievementsSection({ achievementsSection }: { achievementsSection: IAchievementsSection }) {
  return (
    <section className="flex justify-center bg-Primary-Mordor-Blue-Bg-100">
      <div className="flex w-full max-w-[1440px] text-center flex-col px-4 py-10 sm:px-14 md:py-20 gap-6 md:gap-12 md:px-[88px]">
        <h2 className="text-Display-Semibold-24 md:text-Display-Semibold-32 text-Neutrals-950">{achievementsSection.heading}</h2>
        <div className="relative before:absolute before:inset-0 before:border-[3px] before:border-[#eaf6fa] before:pointer-events-none before:-m-[1px]">
          <div className="grid grid-cols-2 md:grid-cols-3 text-center">
              {achievementsSection.stats.map((stat, index) => (
                <div key={index} className="flex flex-col h-[158px] md:h-[166px] gap-2 justify-center items-center border-[0.5px] border-Neutrals-200 p-5 ">
                  <span className="text-Display-Semibold-32 text-Accent-Orange-950">{stat.value}</span>
                  <h3 className="text-Body-Medium-14 md:text-Body-Medium-20 text-Neutrals-950  max-w-[235px]">{stat.description}</h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;
