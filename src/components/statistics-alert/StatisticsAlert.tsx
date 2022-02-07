import { Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { StyledButton } from "../game/Game.styled";
import { GridContainer } from "./Statistics.Alert.styled";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const StatisticsAlert = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleClose = () => {
    dispatch({ type: "TOGGLE_STATISTICS" });
  };

  return (
    <div>
      <Dialog
        PaperProps={{
          style: { backgroundColor: "black", border: "0.3px solid white" },
        }}
        open={state.statisticsOpen}
        onClose={handleClose}
        color="error"
      >
        <GridContainer container>
          <Grid item>
            <DialogTitle color="white">{"Your Statistics:"}</DialogTitle>
          </Grid>
          <Grid item>
            <DialogContent>
              <Typography color="white">
                Guessed Right:{state.guessedRight}
              </Typography>
              <Typography color="white">
                Guessed Wrong:{state.guessedWrong}
              </Typography>
              <Typography color="white">
                Hints Used :{state.hintsTaken}
              </Typography>
            </DialogContent>
          </Grid>
          <Grid item>
            <DialogActions>
              <StyledButton
                variant="contained"
                color="error"
                autoFocus
                onClick={handleClose}
              >
                Got it
              </StyledButton>
            </DialogActions>
          </Grid>
        </GridContainer>
      </Dialog>
    </div>
  );
};
export default StatisticsAlert;
