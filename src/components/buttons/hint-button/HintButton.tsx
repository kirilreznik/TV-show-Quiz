import { Grid } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { StyledButton } from "../../game/Game.styled";
const HintButton = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <Grid item>
      <StyledButton
        color="error"
        onClick={() => {}}
        variant="contained"
        size="large"
      >
        Hint
      </StyledButton>
    </Grid>
  );
};
export default HintButton;
