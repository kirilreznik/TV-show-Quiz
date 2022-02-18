import StartGameButton from "../src/game/components/buttons/start-game-button/StartGameButton";
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
          <StartGameButton setStatus={setStatus} />
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
