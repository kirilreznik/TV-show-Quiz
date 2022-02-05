import React, { createContext, useReducer } from "react";
import AppReducer from "../reducers/AppReducer";
import { Show } from "./../utils/getShow";

export interface AppState {
  shows: Show[];
  currentShow: { name: string; overview: string } | undefined;
  hiddenString: string | undefined;
  guessedRight: number;
  guessedWrong: number;
  lifesLeft: number;
  hintsTaken: number;
  hintOpen: boolean;
  statisticsOpen: boolean;
  message: string | undefined;
  status: "pregame" | "playing" | "error" | "game_over";
}

export type AppAction =
  | { type: "SET_DATA"; payload: [] }
  | { type: "CLEAR_STATE" }
  | { type: "SET_CURRENT_SHOW" }
  | { type: "HIDE_STRING"; payload: string }
  | { type: "INCREMENT_GUESSED_RIGHT" }
  | { type: "INCREMENT_GUESSED_WRONG" }
  | { type: "DECREMENT_LIFE" }
  | { type: "INCREMENT_HINTS" }
  | { type: "TOGGLE_HINT" }
  | { type: "REMOVE_GUESSED_SHOW"; payload: string }
  | {
      type: "SET_STATUS";
      payload: "pregame" | "playing" | "error" | "game_over";
    }
  | { type: "TOGGLE_STATISTICS" }
  | { type: "SET_MESSAGE"; payload: string | undefined };

export const initialAppState: AppState = {
  shows: [],
  currentShow: undefined,
  hiddenString: undefined!,
  guessedRight: 0,
  guessedWrong: 0,
  lifesLeft: 3,
  hintsTaken: 0,
  hintOpen: false,
  status: "pregame",
  statisticsOpen: false,
  message: undefined,
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({ state: initialAppState, dispatch: () => {} });

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialAppState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
