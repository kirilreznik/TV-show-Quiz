import { TextField, Grid } from "@mui/material";
import { FC } from "react";

interface GuessInputProps {
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
}

const GuessInput: FC<GuessInputProps> = ({ guess, setGuess }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(event.target.value);
  };

  return (
    <Grid item marginTop="7%">
      <TextField
        label="YOUR GUESS HERE"
        value={guess}
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
        onChange={handleChange}
      ></TextField>
    </Grid>
  );
};

export default GuessInput;
