import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { StyledButton } from "./StartAgianButton.styled";

const StartAgainButton = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <StyledButton
      color="error"
      variant="contained"
      onClick={() => {
        dispatch({ type: "CLEAR_STATE" });
        fetch(
          "https://api.themoviedb.org/3/tv/top_rated?api_key=8df65f7dc852b216b40bf6ab3cabb73c&language=en-US&page=1"
        )
          .then((response) => response.json())
          .then((data) => dispatch({ type: "SET_DATA", payload: data.results }))
          .then(() => {
            dispatch({ type: "SET_CURRENT_SHOW" });
          });
        if (state.currentShow) {
          dispatch({
            type: "HIDE_STRING",
            payload: state.currentShow.name,
          });
        }
        dispatch({ type: "SET_STATUS", payload: "playing" });
      }}
    >
      PLAY AGAIN
    </StyledButton>
  );
};

export default StartAgainButton;
