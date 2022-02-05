import { Button, Grid } from "@mui/material";
import { styled } from "@mui/system";

export const StyledGrid = styled(Grid)`
  width: 80%;
  align-items: center;
  justify-items: center;
  position: absolute;
  margin-left: 10vw;
  margin-right: 10vw;
  @media (max-width: 600px) {
    margin-top: 20%;
  }
`;

export const ButtonsGrid = styled(Grid)`
  justify-content: center;
  margin-top: 7%;
  @media (max-width: 825px) {
    width: 50vw;
    margin-top: 20%;
  }
`;

export const StyledButton = styled(Button)`
  width: 12.5rem;
  border-radius: 15px;
`;
