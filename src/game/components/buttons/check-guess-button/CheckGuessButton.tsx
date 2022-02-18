import React, { useContext, FC } from "react";
import { ButtonProps } from "@mui/material";
import { Grid } from "@mui/material";
import { GameContext } from "../../../../context/GameContext";
import { MoviesContext } from "../../../../context/MovieContext";
import getRandomMovie from "../../../../utils/getRandomMovie";
import { StatusTypes, MessageTypes } from "../../../../types";
import GameActionButton from "../../../../components/game-action-button/GameActionButton";

interface CheckGuessButtonProps extends ButtonProps {
  message: string;
  setGuessCheckMessage: React.Dispatch<React.SetStateAction<MessageTypes>>;
  setStatus: React.Dispatch<React.SetStateAction<StatusTypes>>;
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
}

const CheckGuessButton: FC<CheckGuessButtonProps> = ({
  setGuessCheckMessage,
  setStatus,
  guess,
  setGuess,
}) => {
  const { movies, setMovies, currentMovie, setCurrentMovie } =
    useContext(MoviesContext);

  const {
    setHintOpen,
    setHintTaken,
    guessedWrong,
    guessedRight,
    setGuessedRight,
    setGuessedWrong,
  } = useContext(GameContext);

  const handleGuess = () => {
    if (guess === "") {
      setGuessCheckMessage(MessageTypes.noGuess);
    } else {
      if (guess.toLowerCase() === currentMovie!.title.toLowerCase()) {
        if (movies.length === 1) {
          setStatus(StatusTypes.gameOver);
        } else {
          setGuessCheckMessage(MessageTypes.niceJob);
          setGuess(MessageTypes.noMessage);
          setHintOpen(false);
          setHintTaken(false);
          setTimeout(() => {
            setGuessedRight(guessedRight + 1);
            setMovies(
              movies.filter((movie) => {
                return movie.title !== currentMovie!.title;
              })
            );
            setCurrentMovie(getRandomMovie(movies));
            setGuessCheckMessage(MessageTypes.noMessage);
          }, 500);
        }
      } else {
        if (guessedWrong === 2) {
          setStatus(StatusTypes.gameOver);
        } else {
          setGuessedWrong(guessedWrong + 1);
          setGuessCheckMessage(MessageTypes.tryAgain);
          setGuess(MessageTypes.noMessage);
        }
      }
    }
  };

  return (
    <Grid item>
      <GameActionButton onClick={handleGuess}>Check Guess</GameActionButton>
    </Grid>
  );
};
export default CheckGuessButton;
