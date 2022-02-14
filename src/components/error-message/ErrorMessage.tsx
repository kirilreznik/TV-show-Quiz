import { FC } from "react";
import { StyledError } from "./ErrorMessage.styled";
import { Grid } from "@mui/material";
import { MessageTypes } from "../../types";

interface ErrorMessageProps {
  message: string;
}

enum MessageColor {
  succsess = "green",
  error = "error",
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Grid item>
      <StyledError
        variant="h1"
        color={
          message === MessageTypes.niceJob
            ? MessageColor.succsess
            : MessageColor.error
        }
      >
        {message}
      </StyledError>
    </Grid>
  );
};
export default ErrorMessage;
