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
    <div className="w-full h-full  ">
      <div className="h-full w-full absolute bg-black opacity-30 "></div>
      <img
        src={`${endpoints.originalIMG}${backdrop_path}`}
        alt={title}
        className="object-cover aspect-video h-full w-full"
      />
    </div>
  );
};

export default Hero;
