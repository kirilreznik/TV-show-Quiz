import FlipCard from "../flip-card/FlipCard";
import { Grid } from "@mui/material";
import StartAgainButton from "../buttons/start-again-button/StartAgainButton";
import { StyledGrid } from "../game/Game.styled";
const message = ["G", "A", "M", "E", " ", "O", "V", "E", "R"];
const GameOver = () => {
  return (
    <>
      <StyledGrid container direction="column" marginTop="18rem">
        <Grid item marginBottom="2rem">
          <Grid container>
            {message.map((letter, index) => {
              return (
                <Grid item key={index}>
                  <FlipCard letter={letter} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <StartAgainButton />
      </StyledGrid>
    </>
  );
};
export default GameOver;
