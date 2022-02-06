import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const StyledGrid = styled(Grid)`
  width: 80%;
  align-items: center;
  justify-items: center;
  position: absolute;
  margin-left: 10vw;
  margin-right: 10vw;
  @media (max-width: 600px) {
    margin-top: 40%;
  }
  @media (max-width: 420px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
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

export const StyledError = styled(Typography)`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 30px;
  margin-top: 20px;
`;

export const StyledHint = styled(Typography)`
  margin-top: 20px;
  margin-bottom: 10px;
`;
