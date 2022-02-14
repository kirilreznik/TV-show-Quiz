import { StyledStartAgainButton } from "./StartAgianButton.styled";
import { useContext } from "react";
import { AppContext, initialAppState } from "../../../../context/AppContext";
import { Movie, StatusTypes } from "../../../../types";
import getRandomMovie from "../../../../utils/getRandomMovie";
import hideString from "../../../../utils/hideString";

const StartAgainButton = () => {
  const { state, setState } = useContext(AppContext);
  const handleStartAgain = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=8df65f7dc852b216b40bf6ab3cabb73c&language=en-US&page=1&region=US"
    )
      .then((response) => response.json())
      .then(({ results }) => {
        const movies = results.filter((result: Movie) => {
          return result.original_language === "en";
        });
        const movie = getRandomMovie(movies);
        setState({
          ...initialAppState,
          movies: movies,
          currentMovie: movie,
          hiddenString: hideString(state.currentMovie!.title),
          status: StatusTypes.playing,
        });
      });
  };
  return (
    <StyledStartAgainButton
      onClick={handleStartAgain}
      variant="contained"
      size="large"
      color="error"
    >
      PLAY AGAIN
    </StyledStartAgainButton>
  );
};

export default StartAgainButton;
