export interface Movie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export type CurrentMovie = {
  title: string;
  overview: string;
};

export enum MessageTypes {
  tryAgain = "TRY AGAIN",
  niceJob = "NICE JOB",
  noMessage = "",
}

export enum GameOverTypes {
  winner = "GOOD JOB",
  looser = "GAME OVER",
}

export enum StatusTypes {
  preGame = "pregame",
  playing = "playing",
  error = "error",
  gameOver = "game_over",
  gameWon = "game_won",
}

export interface AppState {
  movies: Movie[];
  currentMovie: { title: string; overview: string } | undefined;
  hiddenString: string[] | undefined;
  guessedRight: number;
  guessedWrong: number;
  hintsTaken: number;
  status: StatusTypes;
}
