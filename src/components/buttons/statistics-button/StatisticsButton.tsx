import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { StyledButton } from "../../game/Game.styled";
import { Grid } from "@mui/material";
const StatisticsButton = () => {
  const { dispatch } = useContext(AppContext);
  const handleClick = () => {
    dispatch({ type: "TOGGLE_STATISTICS" });
  };
  return (
    <Grid item>
      <StyledButton
        onClick={handleClick}
        color="error"
        variant="contained"
        size="large"
      >
        Statistics
      </StyledButton>
    </Grid>
  );
};
export default StatisticsButton;
