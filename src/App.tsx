import Header from "./game/components/header/Header";
import { useState } from "react";
import Game from "../src/game/Game";
import GameOver from "./components/game-over/GameOver";
import { StatusTypes } from "./types";
import { GameState } from "./context/GameContext";
import { MoviesState } from "./context/MovieContext";
const App = () => {
  const [status, setStatus] = useState(StatusTypes.preGame);

  return (
    <GameState>
      <MoviesState>
        {status === StatusTypes.preGame && (
          <Header setStatus={setStatus}>PLAY NOW</Header>
        )}
        {status === StatusTypes.playing && (
          <Game setStatus={setStatus} status={status} />
        )}
        {status === StatusTypes.gameOver && <GameOver setStatus={setStatus} />}
      </MoviesState>
    </GameState>
  );
};

export default App;
