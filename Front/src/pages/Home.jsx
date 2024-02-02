import MovieRow from "../components/MovieRow";
import Hero from "../components/Hero";
import endpoints from "../services/fetchSettings";

const Home = () => {
  return (
    <div className="h-full w-full min-w-[360px]">
      <Hero />
      <MovieRow title={"upcoming"} url={endpoints.upcoming} />
      <MovieRow title={"trending"} url={endpoints.trending} />
      <MovieRow title={"top rated"} url={endpoints.topRated} />
      <MovieRow title={"upcoming"} url={endpoints.upcoming} />
      <MovieRow title={"popular"} url={endpoints.popular} />
    </div>
  );
};

export default Home;
