import React, { useEffect, useState } from "react";
import axios from "axios";
import endpoints, { getImageUrl } from "../services/fetchSettings";
import leftChevron from "../assets/Icons/left-arrow.svg";
import rightChevron from "../assets/Icons/right-arrow.svg";

const Hero = () => {
  // initilization index 0
  const [sliderIndex, setSliderIndex] = useState(0);

  // fetch DB TMDB with index
  const [movie, setMovie] = useState([]);

  // using the index to select wich object
  useEffect(() => {
    // fetch data + select a random movie on the 20 results
    axios.get(endpoints.popular).then((response) => {
      const movies = response.data.results;
      // const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      // const randomMovie = movies[sliderIndex];
      setMovie(movies[sliderIndex]);
    });

    // add conditions if no data etc
  }, [sliderIndex]);

  // permet de changer l'index pour changer d'images
  const toggleImage = (indexPayload) => {
    // ici va utiliser une fonction call back directement dans l'élément qui change le state : "setSliderIndex". Pas svt utilisé
    setSliderIndex((state) => {
      if (indexPayload + state > 19) {
        return 0;
      } else if (indexPayload + state < 1) {
        return 19;
      } else {
        return state + indexPayload;
      }
    });
  };

  // AUTOMATIQUE SLIDER
  // useEffect(() => {
  //   const intervalID = setInterval(() => toggleImage(+1), 5000);
  //   return () => clearInterval(intervalID);
  // }, []);

  // Destructuring
  const { title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="relative">
      {/* layer with opacity  */}
      <div className="absolute h-[100vh] w-full bg-black opacity-30"></div>

      {/* div with main picture */}
      {movie && (
        <div className="h-[100vh] ">
          <div className="relative  h-full">
            <img
              src={`${getImageUrl(backdrop_path, "original")}`}
              alt={title}
              className="aspect-video h-full max-h-screen  w-full object-cover"
            />
            <button
              onClick={() => toggleImage(-1)}
              className="navigation-button prev-button absolute left-[100px] top-2/4 flex h-12 w-12 -translate-y-2/4 cursor-pointer items-center justify-center rounded-full border-2 bg-transparent hover:bg-[#4e4e4e56]"
            >
              <img
                src={leftChevron}
                className="w-4"
                alt="left arrow previous "
              />
            </button>
            <button
              onClick={() => toggleImage(+1)}
              className="navigation-button prev-button absolute right-[100px] top-2/4 flex h-12 w-12 -translate-y-2/4 cursor-pointer items-center justify-center rounded-full border-2 bg-transparent"
            >
              <img src={rightChevron} className="w-4" alt="rigth arrow next " />
            </button>
          </div>
          <div className="sticky  bottom-[10%] left-[5%]  w-5/6 space-y-2 sm:w-[40%] md:left-[4%]">
            <h2 className="text-4xl font-bold md:text-6xl">{title}</h2>
            <p
              className={` line-clamp-2 text-xs hover:line-clamp-none md:text-wrap`}
            >
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
      )}
    </div>
  );
};

export default Hero;
