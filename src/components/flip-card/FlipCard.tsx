import ReactCardFlip from "react-card-flip";
import { useEffect, useState, FC } from "react";
import { FlipPaper, LetterContainer, Letter } from "./FlipCard.styled";
import { Grid } from "@mui/material";

interface FlipCardProps {
  letter: string;
}

enum VisibleTypes {
  hidden = "hidden",
  visible = "visible",
}

const FlipCard: FC<FlipCardProps> = ({ letter }) => {
  const visible = letter === " " ? VisibleTypes.hidden : VisibleTypes.visible;
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFlipped(true);
    }, 40);
  });

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Grid item sx={{ visibility: visible }}>
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
