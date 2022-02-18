import React, { createContext, useState } from "react";
import { Movie } from "../types";

export interface MovieState {
  movies: Movie[] | [];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]> | []>;
  currentMovie: { title: string; overview: string } | undefined;
  setCurrentMovie: React.Dispatch<
    React.SetStateAction<{ title: string; overview: string } | undefined>
  >;
  hiddenString: string[] | undefined;
  setHiddenString: React.Dispatch<React.SetStateAction<string[] | undefined>>;
}

export const initialMovieState: MovieState = {
  movies: [],
  setMovies: () => {},
  currentMovie: undefined,
  setCurrentMovie: () => {},
  hiddenString: undefined!,
  setHiddenString: () => {},
};

export const MoviesContext = createContext<MovieState>(initialMovieState);

const MoviesState: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentMovie, setCurrentMovie] =
    useState<{ title: string; overview: string }>();
  const [hiddenString, setHiddenString] = useState<string[]>();

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies,
        currentMovie,
        setCurrentMovie,
        hiddenString,
        setHiddenString,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesState };
