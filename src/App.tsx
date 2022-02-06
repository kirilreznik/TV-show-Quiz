import "./App.css";
import { AppContext } from "./context/AppContext";
import StartButton from "./components/buttons/start-button/StartButton";
import { useContext, useEffect } from "react";
import Game from "./components/game/Game";
import GameOver from "./components/game-over/GameOver";
import GameWinner from "./components/game-winner/GameWinner";
function App() {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=8df65f7dc852b216b40bf6ab3cabb73c&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_DATA", payload: data.results }))
      .then(() => {
        dispatch({ type: "SET_CURRENT_SHOW" });
      });
  }, []);
  useEffect(() => {
    if (state.currentShow) {
      dispatch({ type: "HIDE_STRING", payload: state.currentShow.name });
    }
  }, [state.currentShow]);
  return (
    <>
      {state.status === "pregame" && <StartButton />}
      {state.status === "playing" && <Game />}
      {state.status === "game_over" && <GameOver />}
      {state.status === "game_won" && <GameWinner />}
    </>
  );
}

export default App;
