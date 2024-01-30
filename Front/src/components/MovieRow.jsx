import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setMovies(response.data.results));
  }, [url]);


  return (
    <div>
      <h2 className="p-4 capitalize md:text-xl ">{title}</h2>
      <div className="relative flex items-center">
        <div
          id={"sldier"}
          className="scrollbar-hide h-full w-full overflow-x-scroll whitespace-nowrap"
        >
          {movies.map((movie) => (
            <MovieItem movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
