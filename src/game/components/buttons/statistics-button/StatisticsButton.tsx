import GameActionButton from "../../../../components/game-action-button/GameActionButton";
import { Grid } from "@mui/material";
import { ButtonProps } from "@mui/material";
import { FC, useContext } from "react";
import { GameContext } from "../../../../context/GameContext";
const StatisticsButton: FC<ButtonProps> = () => {
  const { isStatsOpen, setStatsOpen } = useContext(GameContext);
  const toggleStats = () => {
    setStatsOpen(!isStatsOpen);
  };

  return (
    <Grid item>
      <GameActionButton onClick={toggleStats}>Statistics</GameActionButton>
    </Grid>
  );
};
export default StatisticsButton;
