import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import endpoints, { getImageUrl } from "../services/fetchSettings";
import axios from "axios";
import { MdStarRate } from "react-icons/md";
import leftChevron from "../assets/Icons/left-arrow.svg";

const InfoMovie = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    const detailsEndpoint = `${endpoints.detailsBaseURL}${id}?${endpoints.apiKEY}`;
    // Fetching data for the specific movie
    axios.get(detailsEndpoint).then((response) => {
      setMovieDetails(response.data);
    });
  }, []);

  const {
    title,
    backdrop_path,
    release_date,
    overview,
    tagline,
    vote_count,
    vote_average,
  } = movieDetails;

  return (
    <div className="relative h-screen w-full min-w-[360px]  ">
      <div className="absolute  h-[100vh] w-full bg-black opacity-30 "></div>

      <div className="h-[50vh] w-full">
        <img
          src={`${getImageUrl(backdrop_path, "original")}`}
          alt={title}
          className="h-full max-h-screen w-full  object-cover object-top"
        />
      </div>

      <div className="absolute left-5 z-10 mx-auto flex h-[40vh] w-[90vw] space-x-4 md:left-10 md:top-[30%] ">
        <div className="hidden h-full w-[30%] md:block">
          <img
            src={`${getImageUrl(backdrop_path, "original")}`}
            alt={title}
            className="h-full max-h-screen w-full object-cover object-top"
          />
        </div>
        <div className="flex flex-col justify-evenly bg-transparent px-5 md:w-[70%]">
          <div className="space-y-1 ">
            <Link to={`/home`}>
              <div className="my-4 flex flex-row items-center space-x-4">
                <img
                  src={leftChevron}
                  className="w-6 md:w-8  "
                  alt="left arrow previous "
                />
                <span className="uppercase">Return</span>
              </div>
            </Link>
            <h1 className="text-4xl font-bold">{title}</h1>
            <h2 className="text">" {tagline} "</h2>
            <div className="flex space-x-1">
              <p>{vote_average}</p>
              <span className="text-yellow-300">
                <MdStarRate size={20} />
              </span>
              <p>{`(${vote_count}) votes`}</p>
            </div>
            <p>Release date: {release_date}</p>
          </div>
          <div className="flex  flex-col">
            <p className="mb-4 text-xl font-bold">Synopsis :</p>
            <p className="">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoMovie;
