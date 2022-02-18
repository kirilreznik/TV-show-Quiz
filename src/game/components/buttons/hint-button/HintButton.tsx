import { useContext, FC } from "react";
import GameActionButton from "../../../../components/game-action-button/GameActionButton";
import { Grid } from "@mui/material";
import { GameContext } from "../../../../context/GameContext";

const HintButton = () => {
  const {
    isHintOpen,
    isHintTaken,
    setHintOpen,
    setHintTaken,
    numberOfHints,
    setNumberOfHints,
  } = useContext(GameContext);

  const handleHintClick = () => {
    if (isHintTaken) {
      setHintOpen(!isHintOpen);
    } else if (!isHintTaken) {
      setNumberOfHints(numberOfHints + 1);
      setHintTaken(true);
      setHintOpen(!isHintOpen);
    }
  };

  return (
    <Grid item>
      <GameActionButton onClick={handleHintClick}>Hint</GameActionButton>
    </Grid>
  );
};
export default HintButton;
