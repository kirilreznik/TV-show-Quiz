import { StyledError } from "./ErrorMessage.styled";
import { Grid } from "@mui/material";
const ErrorMessage = (props: { message: string }) => {
  return (
    <Grid item>
      <StyledError
        variant="h1"
        color={props.message === "TRY AGAIN" ? "error" : "green"}
      >
        {props.message}
      </StyledError>
    </Grid>
  );
};
export default ErrorMessage;
