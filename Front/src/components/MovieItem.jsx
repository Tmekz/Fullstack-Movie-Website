import React from "react";
import { getImageUrl } from "../services/fetchSettings";

const MovieItem = ({ movie }) => {
  const { title, backdrop_path, poster_path } = movie;

  return (
    <div className="relative m-2 inline-block w-[160px] cursor-pointer overflow-hidden rounded-lg sm:w-[200px] md:w-[240px] lg:w-[300px]">
      <img
        className="block h-60 w-full object-cover object-top"
        src={getImageUrl(backdrop_path ?? poster_path, "w500")}
        alt={title}
      />

      <div className="absolute left-0 top-0 h-60 w-full   ">
        <p className="flex h-full w-full items-center justify-center whitespace-normal bg-black/80 text-xs font-bold text-white opacity-0 hover:opacity-100 md:text-lg text-center ">
          {title}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
