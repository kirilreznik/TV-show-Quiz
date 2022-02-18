import { useContext, FC, useEffect, useState } from "react";
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
import { MessageTypes, StatusTypes, Movie } from "./../types";
import { MoviesContext } from "../context/MovieContext";
import { GameContext } from "../context/GameContext";
import getRandomMovie from "../utils/getRandomMovie";
import hideString from "../utils/hideString";

interface GameProps {
  setStatus: React.Dispatch<React.SetStateAction<StatusTypes>>;
  status: string;
}

const Game: FC<GameProps> = ({ setStatus, status }) => {
  const [guess, setGuess] = useState("");
  const [guessCheckMessage, setGuessCheckMessage] = useState(
    MessageTypes.noMessage
  );
  const {
    hiddenString,
    currentMovie,
    setCurrentMovie,
    setMovies,
    setHiddenString,
  } = useContext(MoviesContext);
  const {
    isHintOpen,
    setHintOpen,
    setHintTaken,
    setGuessedRight,
    setGuessedWrong,
    setNumberOfHints,
  } = useContext(GameContext);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=8df65f7dc852b216b40bf6ab3cabb73c&language=en-US&page=1&region=US"
    )
      .then((response) => response.json())
      .then(({ results }) => {
        const movies = results.filter((result: Movie) => {
          return result.original_language === "en";
        });
        setCurrentMovie(getRandomMovie(movies));
        setMovies(movies);
        setGuessCheckMessage(MessageTypes.noMessage);
        setGuess("");
        setHintOpen(false);
        setHintTaken(false);
        setGuessedRight(0);
        setGuessedWrong(0);
        setNumberOfHints(0);
      });
  }, [status]);

  useEffect(() => {
    if (currentMovie) {
      setHiddenString(hideString(currentMovie.title));
    }
  }, [currentMovie]);

  return (
    <StyledGrid container direction="column">
      <Grid item marginTop="10%">
        <Grid container>
          {hiddenString?.map((letter, index) => {
            return <FlipCard key={index} letter={letter} />;
          })}
        </Grid>
      </Grid>
      <GuessInput guess={guess} setGuess={setGuess} />
      {guessCheckMessage && <ErrorMessage message={guessCheckMessage} />}
      <ButtonsGrid container spacing={2}>
        <HintButton />
        <CheckGuessButton
          setStatus={setStatus}
          message={guessCheckMessage}
          setGuessCheckMessage={setGuessCheckMessage}
          guess={guess}
          setGuess={setGuess}
        />

        <StatisticsButton />
      </ButtonsGrid>
      {isHintOpen && <Hint hintText={currentMovie?.overview} />}
      <StatisticsAlert />
    </StyledGrid>
  );
};
export default Game;
