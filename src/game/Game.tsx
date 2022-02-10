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
import Hint from "../components/hint/Hint";
import { MessageTypes } from "../types/types";

interface GameProps {
  hintOpen: boolean;
  setHintOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hintTaken: boolean;
  setHintTaken: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<MessageTypes>>;
}

const Game: FC<GameProps> = ({
  hintOpen,
  setHintOpen,
  hintTaken,
  setHintTaken,
  message,
  setMessage,
}) => {
  const { state } = useContext(AppContext);
  const [guess, setGuess] = useState("");
  const [statsOpen, setStatsOpen] = useState(false);

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
          {state.hiddenString!.map((letter, index) => {
            return <FlipCard key={index} letter={letter} />;
          })}
        </Grid>
      </Grid>
      <GuessInput guess={guess} handleChange={handleChange} />
      {message && <ErrorMessage message={message} />}
      <ButtonsGrid container spacing={2}>
        <HintButton
          hintOpen={hintOpen}
          setHintOpen={setHintOpen}
          hintTaken={hintTaken}
          setHintTaken={setHintTaken}
        />
        <CheckGuessButton
          guess={guess}
          setGuess={setGuess}
          message={message}
          setMessage={setMessage}
        />
        <StatisticsButton onClick={toggleStats} />
      </ButtonsGrid>
      {hintOpen && <Hint hintText={state.currentTvShow?.overview} />}
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
