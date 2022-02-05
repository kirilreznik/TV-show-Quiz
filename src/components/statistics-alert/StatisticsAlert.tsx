import { Grid, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { StyledButton } from "../game/Game.styled";

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
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        color="error"
      >
        <Grid
          container
          justifyContent="center"
          direction="column"
          style={{
            width: "20rem",
            paddingTop: "10%",
            paddingLeft: "20%",
            paddingRight: "20%",
            marginBottom: "10%",
          }}
        >
          <Grid item>
            <DialogTitle color="white" id="alert-dialog-title">
              {"Your Statistics:"}
            </DialogTitle>
          </Grid>
          <Grid item>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Typography color="white">
                  Guessed Right:{state.guessedRight}
                </Typography>
                <Typography color="white">
                  Guessed Wrong:{state.guessedWrong}
                </Typography>
                <Typography color="white">
                  Hints Used :{state.hintsTaken}
                </Typography>
              </DialogContentText>
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
        </Grid>
      </Dialog>
    </div>
  );
};
export default StatisticsAlert;
