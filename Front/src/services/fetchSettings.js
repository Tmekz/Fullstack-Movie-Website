// Key from .env
const myKey = import.meta.env.VITE_TMDB_API_KEY;
const baseURL = import.meta.env.VITE_BASE_URL;

// endpoints from TMDB API
const endpoints = {
  popular: `${baseURL}/movie/popular?api_key=${myKey}`,
  topRated: `${baseURL}/movie/top_rated?api_key=${myKey}`,
  trending: `${baseURL}/movie/popular?api_key=${myKey}&language=en-US&page=2`,
  comedy: `${baseURL}/search/movie?api_key=${myKey}&language=en-US&query=comedy&page=1&include_adult=false`,
  upcoming: `${baseURL}/movie/upcoming?api_key=${myKey}`,
};

export default endpoints;
