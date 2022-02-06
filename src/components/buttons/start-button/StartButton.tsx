import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import Header from "../../header/Header";
import { StyledStartButton } from "./StartButton.styled";

const StartButton = () => {
  const { dispatch } = useContext(AppContext);
  const handleStartGame = () => {
    dispatch({ type: "SET_STATUS", payload: "playing" });
  };
  return (
    <>
      <Header />
      <StyledStartButton
        onClick={handleStartGame}
        variant="contained"
        size="large"
        color="error"
      >
        Play Now
      </StyledStartButton>
    </>
  );
};
export default StartButton;
