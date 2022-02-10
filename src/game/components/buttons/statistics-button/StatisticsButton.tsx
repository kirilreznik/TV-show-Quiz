import GameActionButton from "../../../../components/game-action-button/GameActionButton";
import { Grid } from "@mui/material";
import { ButtonProps } from "@mui/material";
import { FC } from "react";

const StatisticsButton: FC<ButtonProps> = ({ onClick }) => {
  return (
    <Grid item>
      <GameActionButton onClick={onClick}>Statistics</GameActionButton>
    </Grid>
  );
};
export default StatisticsButton;
