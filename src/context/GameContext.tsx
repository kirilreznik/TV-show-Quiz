import React, { createContext, useState } from "react";
import { StatusTypes } from "../types";

interface GameState {
  isHintOpen: boolean;
  setHintOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isHintTaken: boolean;
  setHintTaken: React.Dispatch<React.SetStateAction<boolean>>;
  numberOfHints: number;
  setNumberOfHints: React.Dispatch<React.SetStateAction<number>>;
  isStatsOpen: boolean;
  setStatsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  status: StatusTypes;
  setStatus: React.Dispatch<React.SetStateAction<StatusTypes>>;
  guessedRight: number;
  setGuessedRight: React.Dispatch<React.SetStateAction<number>>;
  guessedWrong: number;
  setGuessedWrong: React.Dispatch<React.SetStateAction<number>>;
}

const initialAppState: GameState = {
  isHintOpen: false,
  setHintOpen: () => {},
  isHintTaken: false,
  setHintTaken: () => {},
  numberOfHints: 0,
  setNumberOfHints: () => {},
  isStatsOpen: false,
  setStatsOpen: () => {},
  status: StatusTypes.preGame,
  setStatus: () => {},
  guessedRight: 0,
  setGuessedRight: () => {},
  guessedWrong: 0,
  setGuessedWrong: () => {},
};
export const GameContext = createContext<GameState>(initialAppState);

const GameState: React.FC = ({ children }) => {
  const [isHintOpen, setHintOpen] = useState<boolean>(false);
  const [isHintTaken, setHintTaken] = useState<boolean>(false);
  const [numberOfHints, setNumberOfHints] = useState<number>(0);
  const [isStatsOpen, setStatsOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<StatusTypes>(StatusTypes.preGame);
  const [guessedRight, setGuessedRight] = useState<number>(0);
  const [guessedWrong, setGuessedWrong] = useState<number>(0);

  return (
    <GameContext.Provider
      value={{
        isHintOpen,
        setHintOpen,
        isHintTaken,
        setHintTaken,
        numberOfHints,
        setNumberOfHints,
        isStatsOpen,
        setStatsOpen,
        status,
        setStatus,
        guessedWrong,
        setGuessedWrong,
        guessedRight,
        setGuessedRight,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
export { GameState };
