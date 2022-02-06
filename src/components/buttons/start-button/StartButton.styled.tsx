import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledStartButton = styled(Button)`
  position: absolute;
  top: 60vh;
  left: 15vw;
  border-radius: 15px;
  font-size: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 700px) {
    top: 70vh;
    left: 10vw;
    right: 10vw;
  }
`;
