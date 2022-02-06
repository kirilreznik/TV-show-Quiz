import { styled } from "@mui/system";
import { Paper, Container, Typography } from "@mui/material";

export const FlipPaper = styled(Paper)`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  @media (max-width: 600px) {
    width: 33px;
    height: 33px;
    border-radius: 7px;
  }
`;

export const LetterContainer = styled(Container)`
  position: relative;
  right: 0.625rem;
  top: 2px;
`;

export const Letter = styled(Typography)`
  font-size: 2.25rem;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
