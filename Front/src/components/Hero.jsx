import React, { useEffect, useState } from "react";
import axios from "axios";
import endpoints from "../services/fetchSettings";

const Hero = () => {
  // fetch in DB
  const [movie, setMovie] = useState([]);
  console.log(movie);

  useEffect(() => {
    // fetch data + select a random movie on the 20 results
    axios.get(endpoints.popular).then((response) => {
      const movies = response.data.results;
      // const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      const randomMovie = movies[0];
      setMovie(randomMovie);
    });

    // add conditions if no data etc
  }, []);

  // destructuring
  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="relative">
      {/* layer with opacity  */}
      <div className="absolute h-[80vh] w-full bg-black opacity-30 sm:h-full"></div>

      {/* div with main picture */}
      <div className="h-[80vh] sm:h-full ">
        <img
          src={`${endpoints.originalIMG}${backdrop_path}`}
          alt={title}
          className="aspect-video h-full max-h-screen  w-full object-cover"
        />
        <div className="absolute bottom-[10%] left-[5%] w-5/6 space-y-2 md:bottom-[25%] md:left-[4%] md:w-1/2 ">
          <h2 className="text-4xl font-bold md:text-6xl">{title}</h2>
          <p className="line-clamp-6 text-sm md:line-clamp-none md:overflow-visible md:text-wrap ">
            {overview}
          </p>

          <div className="space-x-4">
            <button className="rounded bg-gray-300 px-6 py-2  text-xl text-black hover:brightness-150 ">
              Play
            </button>
            <button className="rounded bg-gray-500 px-6 py-2  text-xl opacity-80 hover:brightness-150">
              More
            </button>
          </div>
          <p className="text-sm text-gray-400 opacity-75">{release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
