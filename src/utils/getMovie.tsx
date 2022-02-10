import { Movie, CurrentMovie } from "../types/types";

const getMovie = (moviesArray: Movie[]): CurrentMovie => {
  const randomNum = Math.floor(Math.random() * moviesArray.length);
  return {
    title: moviesArray[randomNum].title,
    overview: moviesArray[randomNum].overview,
  };
};

export default getMovie;
