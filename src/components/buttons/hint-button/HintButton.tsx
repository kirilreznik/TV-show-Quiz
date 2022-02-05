import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { StyledButton } from "../../game/Game.styled";
const HintButton = () => {
  const { state, dispatch } = useContext(AppContext);
  const [hintTaken, setHintTaken] = useState(false);
  const toggleHint = () => {
    if (!hintTaken) {
      setHintTaken(true);
      dispatch({ type: "INCREMENT_HINTS" });
      dispatch({ type: "TOGGLE_HINT" });
    } else {
      dispatch({ type: "TOGGLE_HINT" });
    }
  };
  return (
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
  );
};
export default HintButton;
