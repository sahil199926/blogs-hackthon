import { ICompanyFacts } from "@/types"
import { Info } from "lucide-react"

export default function CompanyFacts({ companyFacts } : {companyFacts :ICompanyFacts}){

    return (
        <div className="w-full relative h-full bg-Primary-Mordor-Blue-Bg-200">
            <div className=" m-auto  mx-auto  h-full max-w-8xl  lg:h-32 py-4 " >
                <div className="flex flex-col w-full md:px-[88px] justify-center h-full lg:justify-start lg:items-center  gap-4  p-4 md:py-0 lg:flex-row">
                    <div className="flex flex-row gap-2 my-auto justify-left items-start lg:items-center lg:justify-center ">
                        <Info className="my-auto text-Primary-Blue-900 " size={18} strokeWidth={1.5} />
                        <h2 className="uppercase text-sm text-left font-medium text-Neutrals-950 lg:text-lg  ">{companyFacts.heading}</h2>
                    </div>
                    <div className="hidden my-auto w-[0.15rem] h-8 bg-Neutrals-900 lg:block"></div>
                    <div className="w-[100%] my-auto lg:w-[60%]">
                        <p className="text-base text-Neutrals-950 font-semibold lg:text-xl lg:leading-[30px]">{companyFacts.desc}</p>
                    </div>
                </div>
            </div>

        </div>
    )

}
