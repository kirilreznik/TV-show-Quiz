import React, { createContext, useState } from "react";
import { AppState, StatusTypes } from "../types/types";

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
