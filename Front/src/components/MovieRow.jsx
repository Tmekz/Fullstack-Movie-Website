import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { doc } from "firebase/firestore";

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setMovies(response.data.results));
  }, [url]);

  // function to slide left or right
  const slide = (offset) => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  console.log(document.getElementById("slider"));
  return (
    <div>
      <h2 className="p-4 capitalize md:text-xl ">{title}</h2>
      <div className="group relative flex items-center">
        <MdChevronLeft
          onClick={() => slide(-500)}
          size={40}
          className="absolute left-5 z-10 hidden cursor-pointer rounded-full bg-white text-gray-700 opacity-80 md:group-hover:block"
        />
        <div
          id={"slider"}
          className="scrollbar-hide h-full w-full select-none overflow-x-scroll whitespace-nowrap"
        >
          {movies.map((movie) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </div>
        <MdChevronRight
          onClick={() => slide(500)}
          size={40}
          className="absolute right-5 z-10 hidden cursor-pointer rounded-full bg-white text-gray-700 opacity-80 md:group-hover:block"
        />
      </div>
    </div>
  );
};

export default MovieRow;
