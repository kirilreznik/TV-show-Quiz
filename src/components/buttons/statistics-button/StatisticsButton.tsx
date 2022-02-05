import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { StyledButton } from "../../game/Game.styled";
const StatisticsButton = () => {
  const { state, dispatch } = useContext(AppContext);
  const handleClick = () => {
    dispatch({ type: "TOGGLE_STATISTICS" });
  };
  return (
    <StyledButton
      onClick={handleClick}
      color="error"
      variant="contained"
      size="large"
    >
      Statistics
    </StyledButton>
  );
};
export default StatisticsButton;
