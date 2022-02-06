import { Grid } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { StyledButton } from "../../game/Game.styled";
const HintButton = () => {
  const { state, dispatch } = useContext(AppContext);

  const toggleHint = () => {
    if (state.hintOpen) {
      dispatch({ type: "CLOSE_HINT" });
    } else if (!state.hintOpen && state.hintTaken) {
      dispatch({ type: "OPEN_HINT" });
    } else if (!state.hintOpen && !state.hintTaken) {
      dispatch({ type: "OPEN_HINT" });
      dispatch({ type: "SET_HINT_TAKEN" });
      dispatch({ type: "INCREMENT_HINTS" });
    }
  };
  return (
    <Grid item>
      <StyledButton
        color="error"
        onClick={() => {
          toggleHint();
        }}
        variant="contained"
        size="large"
      >
        Hint
      </StyledButton>
    </Grid>
  );
};
export default HintButton;
