import Link from "next/link";
import Quote from "@/assets/Quote.svg";
import OpenLink from "@/assets/OpenLink.svg";
import Image from "next/image";
import { IReview } from "@/types";

const Review = ({ review }: { review: IReview }) => {
  return (
    <div className="relative z-10 flex h-full w-full min-w-[342px] flex-col gap-4 border border-Neutrals-100 bg-white p-4 md:min-w-[535px] md:gap-8 md:p-8">
      <div className="flex h-full flex-col justify-between gap-5 md:gap-8">
        {" "}
        <div id="Content" className="flex flex-col gap-2">
          <div className="h-[14px] w-[20px] md:h-[21px] md:w-[32px]">
            <Image src={Quote} alt="quotation mark logo" />
          </div>
          <div className="flex flex-col gap-2 lg:gap-3">
            <div className="text-sm font-semibold text-Neutrals-950 md:text-Display-Semibold-20 md:text-xl">
              {review.comment.heading}
            </div>
            <p className="text-xs text-Neutrals-800 lg:text-base">
              {review.comment.body}
            </p>
          </div>
        </div>
        <div id="Customer Details" className="flex items-center gap-3">
          <div className="h-[36px] w-[36px] md:h-[50px] md:w-[50px]">
            <Image
              src={review.customer.profileImage.src}
              alt={review.customer.profileImage.alt}
              title={review.customer.profileImage.title}
              width={50}
              height={50}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-xs font-medium md:text-base">
              {review.customer.name}
            </p>
            <p className="text-xs md:text-base">
              {review.customer.position}
              {", "}
              {review.customer.company}
            </p>
          </div>
        </div>
      </div>
      <div
        id="Segregation Line"
        className="h-[1px] w-full bg-Neutrals-200"></div>
      <div className="flex gap-1">
        <Link
          target={review.link ? "_blank" : ""}
          href={review.link || ""}
          className="text-sm font-medium text-Accent-Orange-950 hover:underline lg:text-base">
          Letter of Recommendation
        </Link>
        <Image src={OpenLink} alt="Open link logo" />
      </div>
    </div>
  );
};
export default Review;
