"use client";
import { ITeamMember } from "@/types";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const TeamMemberCard = ({ teamMember }: { teamMember: ITeamMember }) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  return (
    <div
      className="relative h-[400px] w-[360px] flex-shrink-0 overflow-hidden bg-cover bg-center md:h-[416px] md:w-[405px]"
      style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 68.58%, #006FAB 97.36%), url(${teamMember.image.link})`,
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}>
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col justify-between p-3 text-white"
        style={{
          backgroundColor: isDetailOpen ? "#006FABA2" : "",
          top: isDetailOpen ? "0" : "",
        }}>
        {isDetailOpen ? (
          <p className="text-[12px] md:text-[14px]">{teamMember.about}</p>
        ) : null}
        <div>
          <p className="flex justify-between">
            <span className="text-6 font-semibold leading-9">
              {teamMember.name}
            </span>
            <span
              className="hover:cursor-pointer"
              onClick={() => setIsDetailOpen(!isDetailOpen)}>
              {isDetailOpen ? <ChevronDown /> : <ChevronUp />}
            </span>
          </p>
          <p className="text-Body-Regular-16">{teamMember.position}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
