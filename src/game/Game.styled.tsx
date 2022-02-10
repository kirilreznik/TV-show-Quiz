import { Grid } from "@mui/material";
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
