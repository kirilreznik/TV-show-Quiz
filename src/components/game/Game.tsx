import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import FlipCard from "../flip-card/FlipCard";
import { TextField, Grid } from "@mui/material";
import HintButton from "../buttons/hint-button/HintButton";
import CheckGuessButton from "../buttons/check-guess-button/CheckGuessButton";
import StatisticsButton from "../buttons/statistics-button/StatisticsButton";
import StatisticsAlert from "../statistics-alert/StatisticsAlert";
import {
  StyledGrid,
  ButtonsGrid,
  StyledError,
  StyledHint,
} from "./Game.styled";
const Game = () => {
  const { state } = useContext(AppContext);
  const [guess, setGuess] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(event.target.value);
  };
  return (
    <StyledGrid container direction="column">
      <Grid item marginTop="10%">
        <Grid container>
          {state.hiddenString!.split("").map((letter, index) => {
            return <FlipCard key={index} letter={letter} />;
          })}
        </Grid>
      </Grid>
      <Grid item marginTop="7%">
        <TextField
          label="YOUR GUESS HERE"
          value={guess}
          fullWidth
          focused
          inputProps={{
            style: {
              fontSize: 20,
              color: "white",
              paddingInline: "3rem",
            },
          }}
          variant="standard"
          onChange={handleChange}
        ></TextField>
      </Grid>
      {state.message && (
        <Grid item>
          <StyledError
            variant="h1"
            color={state.message === "TRY AGAIN" ? "error" : "green"}
          >
            {state.message}
          </StyledError>
        </Grid>
      )}
      <ButtonsGrid container spacing={2}>
        <HintButton />
        <CheckGuessButton guess={guess} setGuess={setGuess} />
        <StatisticsButton />
      </ButtonsGrid>
      {state.hintOpen && (
        <StyledHint variant="subtitle1" color="white">
          {state.currentShow?.overview}
        </StyledHint>
      )}
      <StatisticsAlert />
    </StyledGrid>
  );
};
export default Game;
