import { FC } from "react";
import { StatusTypes } from "../../../../types";
import Header from "../../header/Header";
import { StyledStartGameButton } from "./StartGameButton.styled";

interface StyledStartButtonProps {
  setStatus: React.Dispatch<React.SetStateAction<StatusTypes>>;
}

const StyledStartButton: FC<StyledStartButtonProps> = ({ setStatus }) => {
  const handleStartGame = () => {
    setStatus(StatusTypes.playing);
  };

  return (
    <>
      <Header />
      <StyledStartGameButton onClick={handleStartGame}>
        Play Now
      </StyledStartGameButton>
    </>
  );
};
export default StyledStartButton;
