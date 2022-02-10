import { StyledStartAgainButton } from "./StartAgianButton.styled";
import { useContext } from "react";
import { AppContext, initialAppState } from "../../../../context/AppContext";
import { StatusTypes } from "../../../../types/types";
import getTvShow from "../../../../utils/getTvShow";
import hideString from "../../../../utils/hideString";

const StartAgainButton = () => {
  const { state, setState } = useContext(AppContext);
  const handleStartAgain = () => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=8df65f7dc852b216b40bf6ab3cabb73c&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then(({ results }) => {
        const tvShows = results;
        return tvShows;
      })
      .then((tvShows) => {
        const tvShow = getTvShow(tvShows);
        setState({
          ...initialAppState,
          tvShows: tvShows,
          currentTvShow: tvShow,
          hiddenString: hideString(state.currentTvShow!.name),
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
