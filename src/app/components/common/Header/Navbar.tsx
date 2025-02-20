"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import ChevronDownBlack from "@/assets/ChevronDown_black.svg";
import Link from "next/link";
import { TNavData  ,ICaseStudyTabNavbar} from ".";
import DropdownMainComponent from "./DropdownMainComponent";
import SideComponent from "./SideComponent";
import React from "react";



const Navbar = ({navbarData , caseStudiesNavbar }:{navbarData : INavbarData[] , caseStudiesNavbar : ICaseStudyTabNavbar }) => {
  const [activeTab , setActiveTab] = useState<string>("");
  
  const handleDropdownClick =(title : string)=>{
    setActiveTab(title)
  }

  return (
    <nav className="relative z-1000 mx-auto px-10 hidden h-20 w-full max-w-[1440px] items-center justify-between text-slate-950 lg:flex">
      <Image src={Logo} alt="Company Logo" width={255} height={32} />
      <div id="Dropdowns & Buttons" onMouseLeave={()=>{handleDropdownClick("")}} className="flex h-full items-center gap-6">
        {navbarData.map((dropdown,index)=>(
            <Dropdown
              key={index}
              title={dropdown.label}
              subSection={dropdown}
              activeTab = {activeTab}
              caseStudiesNavbar = {caseStudiesNavbar}
              handleDropdownClick = {()=>{handleDropdownClick(dropdown.label)}}
            />

        ))}
        <button className="h-[46px] border-2 border-Primary-Blue-950 px-4 py-2 text-Primary-Blue-950">
          Explore Reports
        </button>
      </div>
    </nav>
    
  );
};

const Dropdown = ({ title , subSection ,activeTab  , caseStudiesNavbar, handleDropdownClick }: { title: string;  subSection:TNavData  ; activeTab : string ; caseStudiesNavbar :ICaseStudyTabNavbar ; handleDropdownClick : (title : string)=>void; }) => {
  const [sideComponentData , setSideComponentData] = useState<TNavData | null>(null);

  useEffect(()=>{
    let firstSideComponent:TNavData|null = null;
    if(subSection.children){
      for(const child of subSection.children){
        if(child.subSections && child.subSections.length){
          firstSideComponent = child;
          break
        }
      }
    }
    setSideComponentData(firstSideComponent);

  },[])

  const handleSideComponentClick = (data : TNavData)=>{
    setSideComponentData(data);
  }
  const noSideComponent = subSection.children && subSection.children.every((child)=>!child.subSections)
  return (
    <div 
        className="mx-2 h-full flex flex-row items-center">
     
      <button
        className="flex gap-1 py-auto"
         onMouseEnter={()=>{
          handleDropdownClick(title)
        }}
        onMouseLeave={()=>{
          handleDropdownClick("")
        }}
      >
        {title}
        {activeTab === title ? (
          <Image
            src={ChevronDownBlack}
            className="rotate-180"
            alt="down"
            height={24}
            width={24}
          />
        ) : (
          <Image src={ChevronDownBlack} alt="down" height={24} width={24} />
        )}
      </button>
      {activeTab && activeTab === title && (
        <div  onMouseLeave={()=>{handleDropdownClick("")}} className={`absolute z-50 left-0 top-[90%]  min-h-[40rem] w-[100%] mt-2  bg-white text-black shadow-lg`}>
          {noSideComponent ?
            <DropdownMainComponent title={title} subSection={subSection} caseStudiesNavbar={caseStudiesNavbar}/>
          :
          <div className="flex flex-row">
            <div className="relative w-[30%] flex flex-col">
              <p className="bg-Primary-Mordor-Blue-Bg-100 pl-16 py-8 text-Display-Semibold-20 text-Neutrals-950">{title}</p>
              {subSection.children?.length && subSection.children.map((child,ind)=>{
                if(child.link){
                  return(<Link key={ind} href={child.link} target="_blank" className="pl-16 flex flex-row items-center gap-2 justify-between pr-2 text-Body-Medium-16 py-4 bg-Primary-Mordor-Blue-Bg-50 ">
                    <p className="hover:underline">{child.label}</p>
                    {child.kicker && <span className="p-2 font-normal text-xs  bg-Accent-Orange-400 text-Neutrals-white ">{child.kicker}</span>}
                  </Link>)
                }
                return(<button key={ind} className={`pl-16 py-4 text-left text-Body-Medium-16 ${sideComponentData?.label === child.label ? "bg-Primary-Blue-500" : "bg-Primary-Mordor-Blue-Bg-50"}`} onClick={()=>{handleSideComponentClick(child)}}>{child.label}</button>)
              })}
            </div>
            <SideComponent data={sideComponentData} fromMobileNav={false}/>
          </div>
          }
        </div>
      )}
    </div>
  );
};

export default Navbar;


export type SubSection = {
  title : string ;
  sectionItems : {
    label : string ;
    link ?: string ;
    data ?: {
      label : string;
      link : string;
    }[]
  }[];
};



export type INavbarData = {
  label : string ;
  children :  TNavData[];
  kicker ?: string;
  description ?: string;
  cta ?: {
    link : string;
    label : string;
  },
  
};