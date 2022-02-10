import { TextField, Grid } from "@mui/material";

const GuessInput = (props: {
  guess: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Grid item marginTop="7%">
      <TextField
        label="YOUR GUESS HERE"
        value={props.guess}
        fullWidth
        focused
        inputProps={{
          style: {
            fontSize: 20,
            color: "white",
            paddingInline: "3rem",
          },
        }}
        variant="standard"
        onChange={props.handleChange}
      ></TextField>
    </Grid>
  );
};
export default GuessInput;
