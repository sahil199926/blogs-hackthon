
import { ISimilarCategoriesDetails } from "@/types";
import Link from "next/link";
import Image from "next/image";

function SimilarCategoriesSection({
  similarCategoriesDetails
}: {
  similarCategoriesDetails: ISimilarCategoriesDetails
}) {


  return (
    <>
    <section className="relative bg-white py-6">
      <div className="mx-auto max-w-8xl px-6  py-10  md:px-[68px] lg:pt-0">

      <div >
        <h2 className="mb-6  md:mb-[32px] text-2xl font-semibold  lg:text-[32px] lg:leading-[46px] text-center ">
          {similarCategoriesDetails.heading}
        </h2>
      </div>
      <div className="flex justify-between items-center flex-wrap">
        {
          similarCategoriesDetails.categoriesList.map((category)=>{
             return <Link
              href={`/blog/all/${category.slug}`}
              key={category.title}
              className="border-b
              md:border 
              flex-[0_1_98%]
              md:flex-[0_1_32%]
              max-h-[96px]
              text-Neutrals-950
              text-Body-Medium-20
              flex justify-left items-center
              gap-4
              "
              >
                <div>
                <Image
                  src={category.image} 
                  alt={`${category.title} Image`} 
                  width={96} 
                  height={96} />
                </div>
                <h3 className="text-Body-Medium-16 text-Neutrals-950">
                  {category.title}
                </h3>
       
             </Link>
          })
        }
    
      </div>
      </div>
    </section>
    </>
  );
}

export default SimilarCategoriesSection;
