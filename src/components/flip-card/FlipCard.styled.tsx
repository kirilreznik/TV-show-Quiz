import { styled } from "@mui/system";
import { Paper, Container, Typography } from "@mui/material";

export const FlipPaper = styled(Paper)`
  width: 50px;
  height: 50px;
  border-radius: 12px;
`;

export const LetterContainer = styled(Container)`
  position: relative;
  right: 0.625rem;
  top: 2px;
  @media (max-width: 600px) {
    right: auto;
    top: auto;
  }
`;

export const Letter = styled(Typography)`
  font-size: 2.25rem;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
`;
