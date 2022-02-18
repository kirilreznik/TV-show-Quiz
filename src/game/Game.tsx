import { useContext, FC, useEffect, useState } from "react";
import FlipCard from "../components/flip-card/FlipCard";
import { Grid } from "@mui/material";
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
import { GameActionButton } from "../components/game-action-button/GameActionButton.styled";

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
    movies,
    hiddenString,
    currentMovie,
    setCurrentMovie,
    setMovies,
    setHiddenString,
  } = useContext(MoviesContext);
  const {
    guessedRight,
    guessedWrong,
    numberOfHints,
    isHintTaken,
    isHintOpen,
    isStatsOpen,
    setStatsOpen,
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

  const handleHintClick = () => {
    if (isHintTaken) {
      setHintOpen(!isHintOpen);
    } else if (!isHintTaken) {
      setNumberOfHints(numberOfHints + 1);
      setHintTaken(true);
      setHintOpen(!isHintOpen);
    }
  };
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
  const toggleStats = () => {
    setStatsOpen(!isStatsOpen);
  };

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
        <Grid item>
          <GameActionButton onClick={handleHintClick}>HINT</GameActionButton>
        </Grid>
        <Grid item>
          <GameActionButton onClick={handleGuess}>CHECK GUESS</GameActionButton>
        </Grid>
        <Grid item>
          <GameActionButton onClick={toggleStats}>STATISTICS</GameActionButton>
        </Grid>
      </ButtonsGrid>
      {isHintOpen && <Hint hintText={currentMovie?.overview} />}
      <StatisticsAlert />
    </StyledGrid>
  );
};
export default Game;
