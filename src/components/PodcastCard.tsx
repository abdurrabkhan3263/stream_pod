import React from "react";
import Image from "next/image";

function PodcastCard({ imgURL, title, description, id }) {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2 overflow-hidden rounded-lg">
        <Image
          src={imgURL}
          height={174}
          width={174}
          alt={title}
          className="aspect-square object-cover h-fit w-full rounded-xl 2xl:size-[200px]"
        />
        <div className="text-white flex flex-col">
          <h2 className="font-bold truncate text-16">{title}</h2>
          <p className="text-12 text-dark capitalize font-normal truncate">
            {description}
          </p>
        </div>
      </figure>
    </div>
  );
}

export default PodcastCard;
