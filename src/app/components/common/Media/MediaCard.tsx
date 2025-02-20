import { IMediaItem } from "@/types";
import Link from "next/link";
import Image from "next/image";

export default function MediaCard({ mediaItem }: { mediaItem: IMediaItem }) {
  return (
    <article className="box-border flex flex-col justify-center md:flex-row md:justify-between">
      <div className="md:w-101 md:h-95 flex flex-shrink-0 items-center justify-center">
        <Image
          className="h-full w-full object-cover"
          src={mediaItem.image.link}
          alt={mediaItem.image.altText}
          title={mediaItem.image.title}
          width={350}
          height={295}
        />
      </div>

      <div className="box-border bg-white p-6">
        <p className="text-Display-Semibold-16">
          <span>{mediaItem.title}</span> | <span>{mediaItem.date}</span>
        </p>
        <div className="my-4 flex gap-4">
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <Image
              className="h-full w-full object-cover"
              src={mediaItem.author.image.link}
              alt={mediaItem.author.image.altText}
              title={mediaItem.author.image.title}
              width={48}
              height={48}
            />
          </div>
          <div>
            <cite className="non-italic text-Display-Semibold-16 text-black">
              {mediaItem.author.name}
            </cite>
            <p className="text-Caption-Regular-14 text-gray-900">
              {mediaItem.author.position}
            </p>
          </div>
        </div>
        <div className="text-Body-Regular-16 text-gray-700">
          {mediaItem.content}
        </div>
        <div>
          <span className="my-2 inline-block rounded-sm bg-red-200 px-2 py-1 text-red-700 md:text-black">
            {mediaItem.slotsLeft} Slots Left
          </span>
          <br />
          <button className="self-centre bg-Primary-Blue-950 hover:bg-Primary-Blue-800">
            <Link href={mediaItem.cta.link}>
              <p className="px-4 py-3 text-Link-medium-16 text-Neutrals-white">
                {mediaItem.cta.title}
              </p>
            </Link>
          </button>
        </div>
      </div>
    </article>
  );
}
