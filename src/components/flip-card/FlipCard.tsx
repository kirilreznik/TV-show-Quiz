import ReactCardFlip from "react-card-flip";
import { useEffect, useState, FC } from "react";
import { FlipPaper, LetterContainer, Letter } from "./FlipCard.styled";
import { Grid } from "@mui/material";

interface FlipCardProps {
  letter: string;
}

const FlipCard: FC<FlipCardProps> = ({ letter }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsFlipped(true);
    }, 40);
  });
  return (
    <Grid item>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <FlipPaper onMouseEnter={handleClick}></FlipPaper>
        <FlipPaper onMouseEnter={handleClick}>
          <LetterContainer>
            <Letter variant="h2">{letter}</Letter>
          </LetterContainer>
        </FlipPaper>
      </ReactCardFlip>
    </Grid>
  );
};
export default FlipCard;
