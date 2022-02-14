import { useContext } from "react";
import { AppContext } from "../../../../context/AppContext";
import { StatusTypes } from "../../../../types";
import Header from "../../header/Header";
import { StyledStartGameButton } from "./StartGameButton.styled";
const StyledStartButton = () => {
  const { state, setState } = useContext(AppContext);
  const handleStartGame = () => {
    setState({ ...state, status: StatusTypes.playing });
  };
  return (
    <>
      <Header />
      <StyledStartGameButton
        onClick={handleStartGame}
        variant="contained"
        size="large"
        color="error"
      >
        Play Now
      </StyledStartGameButton>
    </>
  );
};
export default StyledStartButton;
