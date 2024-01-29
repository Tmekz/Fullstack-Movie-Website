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
      const randomMovie = movies[5];
      setMovie(randomMovie);
    });

    // add conditions if no data etc
  }, []);

  // destructuring
  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="">
      <div className="relative ">
        <div className="h-[100vh] w-full absolute opacity-30 bg-red "></div>
        <img
          src={`${endpoints.originalIMG}${backdrop_path}`}
          alt={title}
          className="object-cover w-full aspect-video max-h-screen h-screen"
        />
        <div className="absolute bottom-[30%] left-[5%] md:left-[2%] w-5/6 md:w-1/2 space-y-2">
          <h2 className="text-2xl font-bold md:text-6xl">{title}</h2>
          <p className="text-xl">{overview}</p>
          {/* <p>{release_date}</p> */}
          <div className="space-x-4">
            <button className="px-6 py-2 rounded text-xl border text-black bg-gray-300 hover:brightness-150 ">
              Play
            </button>
            <button className="px-6 py-2 rounded text-xl border bg-gray-500 opacity-50 hover:brightness-150">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
