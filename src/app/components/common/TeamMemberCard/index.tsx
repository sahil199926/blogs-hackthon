import { ITeamMember } from "@/types";

 
const TeamMemberCard = ({ teamMember }: { teamMember: ITeamMember }) => {
  return (
<div className="relative w-[320px] md:w-[405px] h-[380px] md:h-[416px]  bg-cover bg-center overflow-hidden flex-shrink-0"
style={{background:`linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 68.58%, #006FAB 97.36%), url(${teamMember.link})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-6 font-semibold leading-9">{teamMember.name}</h3>
                    <p className="text-Body-Regular-16">{teamMember.position}</p>
                </div>
            </div>
  );
};
 
export default TeamMemberCard;