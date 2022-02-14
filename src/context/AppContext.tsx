import React, { createContext, useState } from "react";
import { Movie, StatusTypes } from "../types";

export interface AppState {
  movies: Movie[];
  currentMovie: { title: string; overview: string } | undefined;
  hiddenString: string[] | undefined;
  guessedRight: number;
  guessedWrong: number;
  hintsTaken: number;
  status: StatusTypes;
}

export const initialAppState: AppState = {
  movies: [],
  currentMovie: undefined,
  hiddenString: undefined!,
  guessedRight: 0,
  guessedWrong: 0,
  hintsTaken: 0,
  status: StatusTypes.preGame,
};

export const AppContext = createContext<{
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}>({ state: initialAppState, setState: () => {} });

const AppProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(initialAppState);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
