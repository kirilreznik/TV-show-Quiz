import "./App.css";
import { AppContext } from "./context/AppContext";
import StartGameButton from "./game/components/buttons/start-game-button/StartGameButton";
import { useContext, useEffect, useState } from "react";
import Game from "./game/Game";
import GameOver from "./components/game-over/GameOver";
import getTvShow from "./utils/getTvShow";
import hideString from "./utils/hideString";
import { StatusTypes, MessageTypes, GameOverTypes } from "./types/types";
const App = () => {
  const { state, setState } = useContext(AppContext);
  const [hintOpen, setHintOpen] = useState(false);
  const [hintTaken, setHintTaken] = useState(false);
  const [message, setMessage] = useState(MessageTypes.noMessage);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=8df65f7dc852b216b40bf6ab3cabb73c&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        const tvShows = data.results;
        return tvShows;
      })
      .then((tvShows) => {
        setState({
          ...state,
          currentTvShow: getTvShow(tvShows),
          tvShows: tvShows,
        });
      });
  }, []);
  useEffect(() => {
    if (state.currentTvShow) {
      setState({
        ...state,
        hiddenString: hideString(state.currentTvShow.name),
      });
      setHintOpen(false);
      setHintTaken(false);
      setMessage(MessageTypes.noMessage);
    }
  }, [state.currentTvShow]);
  return (
    <>
      {state.status === StatusTypes.preGame && <StartGameButton />}
      {state.status === StatusTypes.playing && (
        <Game
          hintOpen={hintOpen}
          setHintOpen={setHintOpen}
          hintTaken={hintTaken}
          setHintTaken={setHintTaken}
          message={message}
          setMessage={setMessage}
        />
      )}
      {state.status === StatusTypes.gameOver && (
        <GameOver
          message={
            state.tvShows.length > 1
              ? GameOverTypes.looser
              : GameOverTypes.winner
          }
        />
      )}
    </>
  );
};

export default App;
