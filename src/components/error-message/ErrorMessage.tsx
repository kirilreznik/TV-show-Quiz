import { FC } from "react";
import { StyledError } from "./ErrorMessage.styled";
import { Grid } from "@mui/material";
import { MessageTypes } from "../../types/types";

interface ErrorMessageProps {
  message: string;
}
const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Grid item>
      <StyledError
        variant="h1"
        color={message === MessageTypes.tryAgain ? "error" : "green"}
      >
        {message}
      </StyledError>
    </Grid>
  );
};
export default ErrorMessage;
