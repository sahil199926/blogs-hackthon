import { IPointCard } from "@/types";

function PointCard({point , number}:{point : IPointCard , number:number}){
    return (
        <div className="flex flex-col border-[1px] border-Neutrals-100">   
            {point.numberingIconAfter ? (
                <>
                    <div className="flex flex-row items-center gap-2 px-5 py-4 py border-b-[1px] border-Neutrals-100">
                        <h2 className="text-Display-Semibold-16 text-Neutrals-950">{point.title}</h2>
                        <span className="text-Body-Regular-12 flex items-center justify-center w-6 h-6 rounded-full bg-Accent-Orange-700 text-white">{number}</span>
                    </div>
                    {point.description && (<p className="text-Body-Regular-12 md:text-Body-Regular-14 px-5 py-4">{point.description}</p>)}
                    {point.list && point.list.length > 0 && (
                        <ul className="flex flex-wrap list-disc flex-row justify-start gap-6 px-10  py-4 md:px-12">
                            {point.list.map((item, index) => (
                                <li key={index} className={`text-Body-Medium-14 w-full flex-grow ${item.length > 33 ? "w-full" : "md:w-[40%]"}  text-Neutrals-950`}>{item}</li>
                            ))}
                        </ul>
                    )}

                </>
            ) : (
                <>
                    <div className="flex flex-row items-center px-5 py-4 gap-2 border-b-[1px] border-Neutrals-100">
                        <span className="text-Body-Regular-12 flex items-center justify-center w-6 h-6 rounded-full bg-Accent-Orange-700 text-white">{number}</span>
                        <h2 className="text-Display-Semibold-16 text-Neutrals-950">{point.title}</h2>
                    </div>
                    {point.description && (<p className=" text-Body-Regular-12 md:text-Body-Regular-14 px-5 py-4">{point.description}</p>)}
                    {point.list && point.list.length > 0 && (
                        <ul className="flex flex-wrap list-disc flex-row justify-start gap-6 px-10  py-4 md:px-12">
                            {point.list.map((item, index) => (
                                <li key={index} className={`text-Body-Medium-14 w-full flex-grow ${item.length > 33 ? "w-full" : "md:w-[40%]"}  text-Neutrals-950`}>{item}</li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    )
    

}

export default PointCard