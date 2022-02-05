import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const StyledText = styled(Typography)`
  font-size: 3.75rem;
  color: white;
  margin: 0;
  display: block;
  @media (max-width: 700px) {
  }
`;

export const HeaderBox = styled(Box)`
  position: relative;
  top: 34vh;
  left: 10vw;
  width: 60vw;
  @media (max-width: 700px) {
    top: 20vh;
    left: 25vw;
    right: 25vw;
  }
`;
