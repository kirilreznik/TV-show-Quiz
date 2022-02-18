import { StyledStartAgainButton } from "./StartAgianButton.styled";
import { FC } from "react";
import { StatusTypes } from "../../../../types";

interface StartAgaingButtonProps {
  setStatus: React.Dispatch<React.SetStateAction<StatusTypes>>;
}

const StartAgainButton: FC<StartAgaingButtonProps> = ({ setStatus }) => {
  const handleStartAgain = () => {
    setStatus(StatusTypes.playing);
  };

  return (
    <StyledStartAgainButton onClick={handleStartAgain}>
      PLAY AGAIN
    </StyledStartAgainButton>
  );
};

export default StartAgainButton;
