"use client"
import {useEffect, useState } from "react";
import Image from "next/image";
import mordorLogo from "@/assets/mordor_logo.svg";
import mordorMobileLogo from "@/assets/mobile_mordor_logo.webp";
import Link from "next/link";
import searchIcon from "@/assets/SearchBlack.svg";
import closeIcon from "@/assets/close.svg";
import hamburgerIcon from "@/assets/Burger.svg";
import { IMobileNavbarBanner, TNavData } from ".";
import SideComponent from "./SideComponent";
import { useRouter } from "next/navigation";


function MobileNavbar({ navigationData , mobileNavbarBanner }: { navigationData: TNavData[] , mobileNavbarBanner : IMobileNavbarBanner }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [mobileNavChild,setMobileNavChild] = useState< TNavData | null>(null)
  const router = useRouter();

  const [redirectUrl, setRedirectUrl] = useState(
    "https://www.mordorintelligence.com"
  );
  // get cuttent websiter domain
  useEffect(() => {
    if (typeof window === "undefined") return;
    const currentDomain = window.location.hostname;
    if (
      [
        "https://www.mordorintelligence.com",
        "https://www.mordorlabs.com",
      ].includes(currentDomain)
    ) {
      setRedirectUrl("https://www.mordorintelligence.com");
    } else {
      setRedirectUrl("/");
    }
  }, []);

  

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

  const handleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  const handleMobileNavChild = (child : TNavData | null )=>{
    setMobileNavChild(child)
    setIsMobileNavOpen((prev) => !prev);
  }

  return (
    <header className="header lg:hidden top-0 ">
      <div className={`mx-auto relative h-[100%] flex w-[95%] min-w-max max-w-[1300px] items-center justify-between gap-3 lg:hidden ${openSearch ? "hidden" : "flex"}`}>
        <div className="flex flex-row gap-3">

          <Image
            onClick={handleMobileNav}
            className="lg:hidden"
            src={hamburgerIcon}
            alt="icon"
          />
          <Link href={redirectUrl}>
            <Image
              className="hidden lg:block"
              width={240}
              src={mordorLogo}
              alt="logo"
            />
            <Image
              className="lg:hidden"
              width={60}
              src={mordorMobileLogo}
              alt="logo mobile"
            />
          </Link>
        </div>
        <div
          className={
            openSearch
              ? "absolute z-100 flex h-[60px] w-[100%] items-center justify-start bg-white px-[3%] transition-all duration-500 ease-in-out"
              : "flex z-100 min-w-max items-center justify-center "
          }>
              
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
        

        {!mobileNavChild ? 
         (<nav
          className={`navbar left-0 top-0 z-[100] fixed flex h-[100vh] overflow-y-auto p-[1rem] lg:overflow-visible lg:p-0 ${isMobileNavOpen ? "w-[100vw] opacity-100" : "w-0 opacity-0"} flex-col items-start bg-white transition-all duration-500 ease-in-out lg:static lg:z-auto lg:flex lg:h-[60px] lg:w-max lg:flex-row lg:items-center lg:opacity-100`}>
          <ul className="flex w-full gap-2 flex-col items-start lg:flex-row lg:items-center">
            <li>
              <Image
                onClick={handleMobileNav}
                className="lg:hidden"
                src={hamburgerIcon}
                alt="icon"
              />
            </li>
            {/* Navigation Button static impletation */}
            <li className="flex flex-row  justify-between p-2 w-full">
              <p className="max-w-[70%] text-Body-Medium-14">{mobileNavbarBanner.heading}</p>
              <Link href={mobileNavbarBanner.cta.link} className="max-w-[30%] py-[1rem] px-3 bg-Primary-Blue-950 text-Neutrals-white text-[10px] leading-3 font-medium" >
                {mobileNavbarBanner.cta.label}
              </Link>
            </li>
            <NavigationBar data={navigationData}  handleMobileNavChild={handleMobileNavChild}/>
          </ul>
        </nav>)
          :(<SideComponent data={mobileNavChild} handleMobileNavChild={handleMobileNavChild} fromMobileNav={true}/>)  
      }

      </div>
      <div
          className={
            openSearch
              ? "relative z-50 flex h-[50px] w-[100%] items-center justify-start bg-white px-[3%] transition-all duration-500 ease-in-out"
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

      
    </header>
  );
}

function NavigationBar({ data , handleMobileNavChild  }: { data: TNavData[] ;  handleMobileNavChild : (child : TNavData | null) => void }): JSX.Element {
  
  return (
    <>
      {data.map((item) => (
        <li
          key={item.label}

          className={`w-full `}
        >
          {item.link ?
          
            (<Link
              href={item.link}
              className=""
              // className={`${item.children || item.link.includes("tel:") ? "flex" : ""} items-center justify-center`}
            >
              <p className="w-full text-Body-Medium-14 bg-Primary-Mordor-Blue-Bg-100 p-3">{item.label}</p>
            </Link>) :
            item.children && item.children.length ?
            (
                    <details className="w-full group bg-Primary-Mordor-Blue-Bg-100">
                      <summary className="w-full flex p-3 cursor-pointer list-none justify-between text-base font-medium text-Neutrals-950">
                        <p className="text-Body-Medium-14 md:text-Body-Medium-16">
                          {item.label}
                        </p>
                        <div className="flex h-6 w-6 rotate-180 items-center justify-center">
                          <span className="chevron"></span>
                        </div>
                      </summary>
                      {item.children.map((child, index) => {
                          if(child.link ){
                            return (
                          <button key={index}  className="p-3 min-w-full text-Body-Medium-14 whitespace-pre-line text-justify sm:text-left bg-Neutrals-white">
                            {child.label}
                          </button>
                        )
                          }
                          if(child.subSections){
                            return (<button key={index} onClick={()=>{handleMobileNavChild(child)}} className="cursor-pointer p-3 w-full text-Body-Medium-14 whitespace-pre-line text-justify sm:text-left bg-Neutrals-white">
                                      {child.label}
                                    </button>)
                          }
                        }
                      )}
              
                  </details>
            )
            : null
          }
        </li>
      ))}
    </>
  );
}


export default MobileNavbar;
