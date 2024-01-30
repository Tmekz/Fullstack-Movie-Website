import React from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import endpoints from "../services/fetchSettings";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="h-full w-full  ">
      <Slider />
      <MovieRow title={"upcoming"} url={endpoints.upcoming} />
      <MovieRow title={"trending"} url={endpoints.trending} />
      <MovieRow title={"top rated"} url={endpoints.topRated} />
      <MovieRow title={"upcoming"} url={endpoints.upcoming} />
      <MovieRow title={"popular"} url={endpoints.popular} />
    </div>
  );
};

export default Home;
