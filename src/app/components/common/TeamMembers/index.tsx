import { ITeamMember} from "@/types";
import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = ({
  teamMemberList,
}: {
  teamMemberList: ITeamMember[];
}) => {
  return (
    <section className="flex justify-center">
      <div className="container mt-10 max-w-[1440px] md:mb-6 px-4 md:mt-12 md:px-[88px]">

        <div className="row flex w-full flex-wrap justify-center gap-6 align-top md:justify-start">
          {teamMemberList.map((member) => {
            return <TeamMemberCard key={member.name} teamMember={member} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
