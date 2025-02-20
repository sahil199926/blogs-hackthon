import { ICompanyStats } from "@/types"

export default function CompanyStats({ companyStats , bgColorClass } : {companyStats :ICompanyStats[] , bgColorClass ?: string}){

    return (
        <div className={`w-full relative h-full ${ bgColorClass ? bgColorClass :"bg-Primary-Mordor-Blue-Bg-200"}`}>
            <div className="z-20 m-auto  mx-auto flex justify-center items-center p-4 md:px-12  h-full max-w-8xl  lg:min-h-[8.5rem] py-4 " >
                <div className="grid grid-cols-3 justify-between w-[26rem] md:w-[52rem]">
                    {companyStats.map((item,index)=>(
                        <div key={index} className={`flex ${(index % 3) === 1 ? "justify-center" :"justify-evenly md:justify-between"}  w-full flex-row items-center`}>
                            { (index + 1)%3 === 0 && <div className="h-8 w-[1px] bg-Neutrals-950 opacity-30"></div>}
                            <div className="flex flex-col items-center justify-center ">
                                <h3 className="text-Accent-Orange-950 text-center font-bold text-2xl">{item.value}+</h3>
                                <h3 className="text-Neutrals-950 text-center text-Body-Medium-12 md:text-Body-Medium-16">{item.label}</h3>
                            </div>
                            { index %3 === 0 && <div className="h-8 w-[1px] bg-Neutrals-950 opacity-30"></div>}


                        </div>
                    ))}
                </div>
            </div>

        </div>
    )

}
