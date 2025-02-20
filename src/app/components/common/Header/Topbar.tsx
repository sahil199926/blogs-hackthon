"use client";
import { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import Image from "next/image";
import LanguageSelector from "../Footer/LanguageSelector";
import ChevronDownWhite from "@/assets/ChevronDown_white.svg";
// import searchIcon from "@/assets/SearchBlack.svg";
import searchIcon from "@/assets/Search.svg";
import closeIcon from "@/assets/close.svg";
import Cart from "@/assets/Cart.svg";
import { IMobileNavbarBanner, TNavData } from ".";
import { useRouter } from "next/navigation";


const Topbar = ({ topBarData, mobileTabData,mobileNavbarBanner}:{topBarData  : TNavData[] , mobileTabData : TNavData[] ,mobileNavbarBanner:IMobileNavbarBanner}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the event target is not null and if the click happened outside the .header element
      const target = event.target as HTMLElement | null;
      if (target && !target.closest(".header") && openSearch) {
        setOpenSearch(false); // Close the search
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openSearch]);

  const handleSearchReport = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    const target = event.target as HTMLInputElement;
    const text = target?.value;
    if ("key" in event && event.key === "Enter") {
      router.push(`/search?q=${text}`)
    }
  };

  
  return (
    <div className=" w-full">
      <MobileNavbar navigationData={mobileTabData} mobileNavbarBanner={mobileNavbarBanner}/>
      <div className="hidden fixed w-full z-50 justify-center bg-slate-950 lg:flex">

        <nav className={`mx-10 flex h-[50px] ${openSearch ? "hidden" : "flex"} w-full max-w-[1264px] items-center justify-end gap-[18px] text-sm text-slate-50 mx-auto h-[100%]  min-w-max `}>
          <div id="Links" className="flex h-full items-center gap-4">
            {
              topBarData.map((item,index)=>{
                if(item.link){
                  return (<Link key={index} href={item.link} className="h-full flex items-center hover:underline">
                  {item.label}
                </Link>)
                }else{
                  return(<div id="Resources Dropdown" onMouseEnter={() => setIsOpen(true)}
                      onMouseLeave={()=>{
                        if(isOpen){
                          setIsOpen(false)
                        }
                      }}
                      key={index} className="relative h-full z-100">
                    <button
                      

                      className="flex items-center h-full gap-1 py-2"
                    >
                      {item.label}
                      {isOpen ? (
                        <Image
                          src={ChevronDownWhite}
                          className="rotate-180"
                          alt="down"
                          height={24}
                          width={24}
                        />
                      ) : (
                        <Image
                          src={ChevronDownWhite}
                          alt="down"
                          height={24}
                          width={24}
                        />
                      )}
                    </button>
                    {isOpen && (
                      <div  className="absolute left-0 top-full  w-48 bg-Neutrals-white text-Neutrals-950 shadow-lg">
                        {
                         item.children && item.children.length && item.children.map((child,index)=>{
                          if(child.link){
                            return (
                            <Link key={index} href={child.link} className="block px-4 py-2 hover:text-Accent-Orange-950 ">
                              {child.label}
                            </Link>
                           )
                          }
                        }
                        ) 
                        }
                      </div>
                    )}
                  </div>)

                }

              }
              )
            }
            
          </div>
          <div id="Search & Cart" className="flex items-center gap-[18px]">
            <div id="divider" className="h-3 w-[1px] bg-slate-50"></div>
            <div
              className={
                openSearch
                  ? "absolute z-100 flex h-[60px] w-[100%] items-center justify-start bg-white px-[3%] transition-all duration-500 ease-in-out"
                  : " flex z-100 min-w-max items-center justify-center "
              }>
              {openSearch ? (
                <input
                  onInput={handleSearchReport}
                  onKeyDown={handleSearchReport}
                  id="search-report-input"
                  placeholder="Search Reports..."
                  className="h-[100%] flex-1 focus:outline-none"
                  type="text"
                  autoFocus={openSearch}
                />
              ) : null}
              {openSearch ? (
                <Image
                  onClick={() => setOpenSearch(false)}
                  className="h-[100%] cursor-pointer"
                  src={closeIcon}
                  alt="close-icon"
                />
              ) : (
                <Image
                  onClick={() => setOpenSearch(true)}
                  className="cursor-pointer"
                  src={searchIcon}
                  alt="search-icon"
                />
              )}
            </div>
            <Link href="#">
              <Image src={Cart} alt="cart icon" height={24} width={24} />
            </Link>
            <div id="divider" className="h-3 w-[1px] bg-slate-50"></div>
          </div>
          <div id="Language Selector">
            <LanguageSelector />
          </div>
        </nav>
        <div
        className={
          openSearch
            ? "relative right-0 top-0 z-100 flex h-[50px] w-[100%] items-center justify-start bg-white px-[3%] transition-all duration-500 ease-in-out"
            : "hidden"
        }>
        {openSearch ? (
          <input
            onInput={handleSearchReport}
            onKeyDown={handleSearchReport}
            id="search-report-input"
            placeholder="Search Reports..."
            className="h-[100%] flex-1 focus:outline-none"
            type="text"
            autoFocus={openSearch}
          />
        ) : null}
        {openSearch && (
          <Image
            onClick={() => setOpenSearch(false)}
            className="h-[100%] cursor-pointer"
            src={closeIcon}
            alt="close-icon"
          />
        )}
      </div>
      </div>
    </div>
  );
};



export default Topbar;

