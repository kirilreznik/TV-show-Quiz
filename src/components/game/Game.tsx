import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import FlipCard from "../flip-card/FlipCard";
import { Grid } from "@mui/material";
import HintButton from "../buttons/hint-button/HintButton";
import CheckGuessButton from "../buttons/check-guess-button/CheckGuessButton";
import StatisticsButton from "../buttons/statistics-button/StatisticsButton";
import StatisticsAlert from "../statistics-alert/StatisticsAlert";
import GuessInput from "../guess-input/GuessInput";
import { StyledGrid, ButtonsGrid } from "./Game.styled";
import ErrorMessage from "../error-message/ErrorMessage";
import Hint from "../Hint/Hint";

const Game = () => {
  const { state } = useContext(AppContext);
  const [guess, setGuess] = useState("");
  const [statsOpen, setStatsOpen] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);
  const toggleStats = () => {
    setStatsOpen(!statsOpen);
  };
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
      <GuessInput guess={guess} handleChange={handleChange} />
      {state.message && <ErrorMessage message={state.message} />}
      <ButtonsGrid container spacing={2}>
        <HintButton />
        <CheckGuessButton guess={guess} setGuess={setGuess} />
        <StatisticsButton handleClick={toggleStats} />
      </ButtonsGrid>
      {hintOpen && <Hint hintText={state.currentShow?.overview} />}
      <StatisticsAlert
        open={statsOpen}
        openHandler={toggleStats}
        guessedRight={state.guessedRight}
        guessedWrong={state.guessedWrong}
        hintsTaken={state.hintsTaken}
      />
    </StyledGrid>
  );
};
export default Game;
