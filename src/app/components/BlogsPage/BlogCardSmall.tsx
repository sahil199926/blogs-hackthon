import { IBlog } from "@/types"
import Image from "next/image";
import Link from "next/link";
import OpenLink from "@/assets/OpenLink.svg";

function BlogCardSmall({blog}:{blog: IBlog}) {
    return (
    <article className="relative bg-Primary-Mordor-Blue-Bg-100  flex-[0_1_98%] md:flex-[0_1_32%] z-10">
   
          <div className="flex-1 flex flex-col bg-Neutrals-white shadow-lg items-center w-full z-20 bg-neutrals-50 ">
            
            <Image
                height={439}
                width={622}
                className="w-full  h-auto object-contain"
                src={blog.image.link}
                alt={blog.image.altText}
                title={blog.image.title}
                loading="lazy"
            />
           
            <div className="flex-1 flex  flex-col py-3 ">
                <div className="w-[90%] h-full flex gap-8 flex-col mx-auto justify-around"> 
                    <div className="flex flex-col gap-2">
                        <div className="h-[20px] md:h-[21px] flex col items-center">
                            
                            <span className="text-Caption-Regular-14 text-Neutrals-800 pr-2 border-r border-Colors-Neutrals-800">{blog.type}</span>
                            <span className="text-Caption-Regular-14 text-Neutrals-800 px-2">{blog.category}</span>
                            <span className="mx-2 bg-black rounded-full  inline-block h-[6px] w-[6px]"></span>
                            <span className="text-Body-Medium-14 text-Colors-Neutrals-950 px-2">{blog.date}</span>
                        </div>
                        <h3 className="text-Display-Semibold-20 text-Neutrals-950 md:leading-6 ">{blog.title}</h3>
   
                        <div className="flex flex-row pt-2 gap-3">
                            <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-[1] border-black">
                                <Image 
                                height={50}
                                width={50}
                                className="object-contain"
                                src={blog.author.image.link}
                                alt={blog.author.image.altText}
                                title={blog.author.image.title}
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <cite className="text-Display-Semibold-16 text-Neutrals-950">{blog.author.name}</cite>
                                <p className="text-Caption-Regular-14 text-Neutrals-800">{blog.author.designation}</p>
                            </div>
                        </div>
                    </div>
                    <div
                      id="Segregation Line"
                      className="h-[1px] w-full bg-Neutrals-200"
                    ></div>
                    <div className="flex flex-row-reverse md:flex-row justify-between">
                    <p className="text-sm font-medium text-neutrals-950 bg-Primary-Blue-50 py-[10px] px-2 rounded">{blog.readTime}</p>
                    <div className="flex items-center  gap-1">
                            <Link
                            target={blog.CTA.link ? "_blank" : ""}
                            href={blog.CTA.link || ""}
                            className="text-sm font-medium text-Accent-Orange-950 hover:underline lg:text-base"
                            >
                            {blog.CTA.title}
                            </Link>
                            <Image src={OpenLink} alt="Open link logo" />
                        </div>
                        
                      
                    </div>
                </div>
            </div>
          </div>


    </article>
  );
}



export default BlogCardSmall;