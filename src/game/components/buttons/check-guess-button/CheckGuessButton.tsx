import React, { useContext, FC } from "react";
import { ButtonProps } from "@mui/material";
import { Grid } from "@mui/material";
import { AppContext } from "../../../../context/AppContext";
import getRandomMovie from "../../../../utils/getRandomMovie";
import { StatusTypes, MessageTypes } from "../../../../types";
import GameActionButton from "../../../../components/game-action-button/GameActionButton";

interface CheckGuessButtonProps extends ButtonProps {
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<MessageTypes>>;
}

const CheckGuessButton: FC<CheckGuessButtonProps> = ({
  guess,
  setGuess,
  setMessage,
}) => {
  const { state, setState } = useContext(AppContext);
  const handleGuess = () => {
    if (guess === "") {
      setMessage(MessageTypes.noGuess);
    } else {
      if (guess.toLowerCase() === state.currentMovie!.title.toLowerCase()) {
        if (state.movies.length === 1) {
          setState({ ...state, status: StatusTypes.gameOver });
        } else {
          setMessage(MessageTypes.niceJob);
          setGuess(MessageTypes.noMessage);
          setTimeout(() => {
            setState({
              ...state,
              guessedRight: state.guessedRight + 1,
              movies: state.movies.filter((movie) => {
                return movie.title !== state.currentMovie!.title;
              }),
              currentMovie: getRandomMovie(state.movies),
            });
            setMessage(MessageTypes.noMessage);
          }, 500);
        }
      } else {
        if (state.guessedWrong === 2) {
          setState({
            ...state,
            status: StatusTypes.gameOver,
          });
        } else setState({ ...state, guessedWrong: state.guessedWrong + 1 });
        setMessage(MessageTypes.tryAgain);
        setGuess(MessageTypes.noMessage);
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
