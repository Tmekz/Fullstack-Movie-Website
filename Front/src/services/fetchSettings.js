// Key from .env (i add a random key to be able to show on netlify)
const myKey = "bb72fc0b37e06f289cec812d99c5fb8c";
const baseURL = import.meta.env.VITE_BASE_URL;

// endpoints from TMDB API
const endpoints = {
  originalIMG: "https://image.tmdb.org/t/p/original/",
  popular: `${baseURL}/movie/popular?api_key=${myKey}`,
  topRated: `${baseURL}/movie/top_rated?api_key=${myKey}`,
  trending: `${baseURL}/movie/popular?api_key=${myKey}&language=en-US&page=2`,
  comedy: `${baseURL}/search/movie?api_key=${myKey}&language=en-US&query=comedy&page=1&include_adult=false`,
  upcoming: `${baseURL}/movie/upcoming?api_key=${myKey}`,
};

export function getImageUrl(path, size, kaka) {
  return `https://image.tmdb.org/t/p/original/${path}/${size}`;
}

export default endpoints;
