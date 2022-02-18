import { HeaderBox, StyledText } from "./Header.styled";
import { FC } from "react";
import { StatusTypes } from "../../../types";
import { StyledStartGameButton } from "../../../components/start-game-button/StartGameButton.styled";
interface StyledStartButtonProps {
  setStatus: React.Dispatch<React.SetStateAction<StatusTypes>>;
}

const Header: FC<StyledStartButtonProps> = ({ setStatus }) => {
  const handleStartGame = () => {
    setStatus(StatusTypes.playing);
  };
  return (
    <>
      <HeaderBox>
        <StyledText variant="h1">Guess the </StyledText>
        <StyledText variant="h1"> movie n_me</StyledText>
      </HeaderBox>
      <StyledStartGameButton onClick={handleStartGame}>
        Play Now
      </StyledStartGameButton>
    </>
  );
};
export default Header;
