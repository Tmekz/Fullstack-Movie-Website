import React, { useState } from "react";
import { getImageUrl } from "../services/fetchSettings";

import { FaHeart, FaRegHeart } from "react-icons/fa";

const MovieItem = ({ movie }) => {
  // state for like
  const [like, setLike] = useState(false);
  // destructuring
  const { title, backdrop_path, poster_path } = movie;

  return (
    <div className="relative m-2 inline-block h-60 w-[160px] cursor-pointer overflow-hidden rounded-lg sm:w-[200px] md:h-[200px] md:w-[240px] lg:w-[400px]">
      <img
        className="block h-full w-full object-cover object-top"
        src={getImageUrl(backdrop_path ?? poster_path, "w500")}
        alt={title}
      />

      <div className="absolute left-0 top-0 h-full w-full bg-black/80 opacity-0 hover:opacity-100">
        <p className="0 flex h-full w-full items-center justify-center whitespace-normal text-center text-xs font-bold text-white md:text-lg ">
          {title}
        </p>
        <p>
          {like ? (
            <FaHeart
              size={30}
              className="absolute left-2 top-2  text-gray-300"
            />
          ) : (
            <FaRegHeart
              size={30}
              className="absolute left-2 top-2 text-gray-300"
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
