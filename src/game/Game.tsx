import { useContext, useState, FC } from "react";
import { AppContext } from "../context/AppContext";
import FlipCard from "../components/flip-card/FlipCard";
import { Grid } from "@mui/material";
import HintButton from "./components/buttons/hint-button/HintButton";
import CheckGuessButton from "./components/buttons/check-guess-button/CheckGuessButton";
import StatisticsButton from "./components/buttons//statistics-button/StatisticsButton";
import StatisticsAlert from "./components/statistics-alert/StatisticsAlert";
import GuessInput from "./components/guess-input/GuessInput";
import { StyledGrid, ButtonsGrid } from "./Game.styled";
import ErrorMessage from "../components/error-message/ErrorMessage";
import Hint from "../components/game-hint/Hint";
import { MessageTypes } from "../types";

interface GameProps {
  isHintOpen: boolean;
  setHintOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isHintTaken: boolean;
  setHintTaken: React.Dispatch<React.SetStateAction<boolean>>;
  guessCheckMessage: string;
  setGuessCheckMessage: React.Dispatch<React.SetStateAction<MessageTypes>>;
}

const Game: FC<GameProps> = ({
  isHintOpen,
  setHintOpen,
  isHintTaken,
  setHintTaken,
  guessCheckMessage,
  setGuessCheckMessage,
}) => {
  const { state } = useContext(AppContext);
  const [guess, setGuess] = useState("");
  const [isStatsOpen, setStatsOpen] = useState(false);

  const toggleStats = () => {
    setStatsOpen(!isStatsOpen);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(event.target.value);
  };
  return (
    <StyledGrid container direction="column">
      <Grid item marginTop="10%">
        <Grid container>
          {state.hiddenString!.map((letter, index) => {
            return <FlipCard key={index} letter={letter} />;
          })}
        </Grid>
      </Grid>
      <GuessInput guess={guess} handleChange={handleChange} />
      {guessCheckMessage && <ErrorMessage message={guessCheckMessage} />}
      <ButtonsGrid container spacing={2}>
        <HintButton
          hintOpen={isHintOpen}
          setHintOpen={setHintOpen}
          hintTaken={isHintTaken}
          setHintTaken={setHintTaken}
        />
        <CheckGuessButton
          guess={guess}
          setGuess={setGuess}
          message={guessCheckMessage}
          setMessage={setGuessCheckMessage}
        />
        <StatisticsButton onClick={toggleStats} />
      </ButtonsGrid>
      {isHintOpen && <Hint hintText={state.currentMovie?.overview} />}
      <StatisticsAlert
        open={isStatsOpen}
        openHandler={toggleStats}
        guessedRight={state.guessedRight}
        guessedWrong={state.guessedWrong}
        hintsTaken={state.hintsTaken}
      />
    </StyledGrid>
  );
};
export default Game;
