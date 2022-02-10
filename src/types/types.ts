export interface Show {
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export type CurrentShow = {
  name: string;
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
  tvShows: Show[];
  currentTvShow: { name: string; overview: string } | undefined;
  hiddenString: string[] | undefined;
  guessedRight: number;
  guessedWrong: number;
  hintsTaken: number;
  status: StatusTypes;
}
