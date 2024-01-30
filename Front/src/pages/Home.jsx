import React from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";

const Home = () => {
  return (
    <div className="h-full w-full  ">
      <Hero />
      <MovieRow />
    </div>
  );
};

export default Home;
