import { ITeamsSection } from "@/types";
import Image from "next/image";

function TeamsSection({ teamsSection }: { teamsSection: ITeamsSection }) {
  return (
    <section className="flex justify-center bg-Primary-Mordor-Blue-Bg-100">
      <div className="container max-w-[1440px] flex flex-col gap-12 py-14 px-4 md:px-10 lg:px-[88px] z-20">

        {/* Heading and Description */}
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-Display-Semibold-24 md:text-Display-Semibold-32 text-Neutrals-950">
            {teamsSection.heading}
          </h2>
          <p className="text-Body-Regular-14 md:text-Body-Regular-16 text-Neutrals-900">
            {teamsSection.description}
          </p>
        </div>

        {/* Teams Divs */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5">
          {teamsSection.teams.map((team, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-0 md:gap-4 items-center bg-white shadow-mordorCustom w-full max-w-[169px] sm:min-w-[240px] sm:max-w-[301px]"
            >
              <Image
                src={team.image}
                alt={team.title}
                width={705}
                height={503}
                className="flex w-full md:w-[96px] h-[96px] object-cover"
              />
              <h3 className="text-Body-Medium-14 md:text-Body-Medium-16 text-Neutrals-950 p-3 md:pl-0 text-center md:text-start">{team.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamsSection;
