import { StyledButton } from "../../game/Game.styled";
import { Grid } from "@mui/material";

const StatisticsButton = (props: { handleClick: Function }) => {
  return (
    <>
      <Grid item>
        <StyledButton
          onClick={() => {
            props.handleClick();
          }}
          color="error"
          variant="contained"
          size="large"
        >
          Statistics
        </StyledButton>
      </Grid>
    </>
  );
};
export default StatisticsButton;
