import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Grid, Typography } from "@mui/material";
import { GameActionButton } from "../../../components/game-action-button/GameActionButton.styled";
import { GridContainer } from "./Statistics.Alert.styled";
import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";

const StatisticsAlert = () => {
  const {
    numberOfHints,
    isStatsOpen,
    setStatsOpen,
    guessedRight,
    guessedWrong,
  } = useContext(GameContext);

  const toggleStats = () => {
    setStatsOpen(!isStatsOpen);
  };

  return (
    <div>
      <Dialog
        PaperProps={{
          style: { backgroundColor: "black", border: "0.3px solid white" },
        }}
        open={isStatsOpen}
        onClose={toggleStats}
        color="error"
      >
        <GridContainer container>
          <Grid item>
            <DialogTitle color="white">{"Your Statistics:"}</DialogTitle>
          </Grid>
          <Grid item>
            <DialogContent>
              <Typography color="white">
                Guessed Right:{guessedRight}
              </Typography>
              <Typography color="white">
                Guessed Wrong:{guessedWrong}
              </Typography>
              <Typography color="white">Hints Used :{numberOfHints}</Typography>
            </DialogContent>
          </Grid>
          <Grid item>
            <DialogActions>
              <GameActionButton autoFocus onClick={toggleStats}>
                Got it
              </GameActionButton>
            </DialogActions>
          </Grid>
        </GridContainer>
      </Dialog>
    </div>
  );
};
export default StatisticsAlert;
