import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import FlipCard from "../flip-card/FlipCard";
import { StyledGrid, ButtonsGrid, StyledButton } from "./Game.styled";
import { TextField, Grid, Typography } from "@mui/material";
import HintButton from "../buttons/hint-button/HintButton";
import CheckGuessButton from "../buttons/check-guess-button/CheckGuessButton";
import StatisticsButton from "../buttons/statistics-button/StatisticsButton";
import StatisticsAlert from "../statistics-alert/StatisticsAlert";
const Game = () => {
  const { state, dispatch } = useContext(AppContext);
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
      <Grid item marginTop="20px">
        <TextField
          label="YOUR GUESS HERE"
          value={guess}
          fullWidth
          focused
          inputProps={{
            style: {
              fontSize: 20,
              color: "white",
              paddingInline: "5rem",
            },
          }}
          variant="standard"
          onChange={handleChange}
        ></TextField>
      </Grid>
      {state.message && (
        <Grid item>
          <Typography
            variant="h1"
            fontSize="30px"
            marginTop="20px"
            color={state.message === "TRY AGAIN" ? "error" : "green"}
          >
            {state.message}
          </Typography>
        </Grid>
      )}
      <ButtonsGrid container spacing={2}>
        <Grid item>
          <HintButton />
        </Grid>
        <Grid item>
          <CheckGuessButton guess={guess} setGuess={setGuess} />
        </Grid>
        <Grid item>
          <StatisticsButton />
        </Grid>
      </ButtonsGrid>
      {state.hintOpen && (
        <Typography
          marginTop="20px"
          marginBottom="10px"
          variant="subtitle1"
          color="white"
        >
          {state.currentShow?.overview}
        </Typography>
      )}
      <StatisticsAlert />
    </StyledGrid>
  );
};
export default Game;
