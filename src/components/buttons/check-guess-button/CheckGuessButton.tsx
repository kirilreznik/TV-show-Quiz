import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { StyledButton } from "../../game/Game.styled";
import { Grid } from "@mui/material";
const CheckGuessButton = (props: {
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { state, dispatch } = useContext(AppContext);
  const handleGuess = () => {
    if (props.guess === state.currentShow!.name) {
      if (state.shows.length === 1) {
        dispatch({ type: "SET_STATUS", payload: "game_won" });
      } else {
        dispatch({ type: "SET_MESSAGE", payload: "NICE JOB" });
        dispatch({ type: "CLOSE_HINT" });
        dispatch({ type: "CLEAR_HINT_TAKEN" });
        props.setGuess("");
        setTimeout(() => {
          dispatch({ type: "INCREMENT_GUESSED_RIGHT" });
          dispatch({
            type: "REMOVE_GUESSED_SHOW",
            payload: state.currentShow!.name,
          });
          dispatch({ type: "SET_CURRENT_SHOW" });
          dispatch({ type: "SET_MESSAGE", payload: undefined });
        }, 500);
      }
    } else {
      if (state.lifesLeft === 1) {
        dispatch({ type: "SET_STATUS", payload: "game_over" });
      }
      dispatch({ type: "INCREMENT_GUESSED_WRONG" });
      dispatch({ type: "DECREMENT_LIFE" });
      dispatch({ type: "SET_MESSAGE", payload: "TRY AGAIN" });
      props.setGuess("");
    }
  };
  return (
    <Grid item>
      <StyledButton
        onClick={handleGuess}
        color="error"
        variant="contained"
        size="large"
      >
        Check Guess
      </StyledButton>
    </Grid>
  );
};
export default CheckGuessButton;
