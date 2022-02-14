import { AppContext } from "./context/AppContext";
import StartGameButton from "./game/components/buttons/start-game-button/StartGameButton";
import { useContext, useEffect, useState } from "react";
import Game from "./game/Game";
import GameOver from "./components/game-over/GameOver";
import getRandomMovie from "./utils/getRandomMovie";
import hideString from "./utils/hideString";
import { StatusTypes, MessageTypes, GameOverTypes, Movie } from "./types";
const App = () => {
  const { state, setState } = useContext(AppContext);
  const [isHintOpen, setHintOpen] = useState(false);
  const [isHintTaken, setHintTaken] = useState(false);
  const [guessCheckMessage, setGuessCheckMessage] = useState(
    MessageTypes.noMessage
  );
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=8df65f7dc852b216b40bf6ab3cabb73c&language=en-US&page=1&region=US"
    )
      .then((response) => response.json())
      .then(({ results }) => {
        const movies = results.filter((result: Movie) => {
          return result.original_language === "en";
        });
        setState({
          ...state,
          currentMovie: getRandomMovie(movies),
          movies: movies,
        });
      });
  }, []);
  useEffect(() => {
    if (state.currentMovie) {
      setState({
        ...state,
        hiddenString: hideString(state.currentMovie.title),
      });
      setHintOpen(false);
      setHintTaken(false);
      setGuessCheckMessage(MessageTypes.noMessage);
    }
  }, [state.currentMovie]);
  return (
    <>
      {state.status === StatusTypes.preGame && <StartGameButton />}
      {state.status === StatusTypes.playing && (
        <Game
          isHintOpen={isHintOpen}
          setHintOpen={setHintOpen}
          isHintTaken={isHintTaken}
          setHintTaken={setHintTaken}
          guessCheckMessage={guessCheckMessage}
          setGuessCheckMessage={setGuessCheckMessage}
        />
      )}
      {state.status === StatusTypes.gameOver && (
        <GameOver
          message={
            state.movies.length > 1
              ? GameOverTypes.looser
              : GameOverTypes.winner
          }
        />
      )}
    </>
  );
};

export default App;
