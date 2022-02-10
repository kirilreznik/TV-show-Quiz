import { FC } from "react";
import { StyledButton } from "./GameActionButton.styled";
import { ButtonProps } from "@mui/material";

const GameActionButton: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <>
      <StyledButton
        color="error"
        variant="contained"
        size="large"
        onClick={onClick}
      >
        {children}
      </StyledButton>
    </>
  );
};
export default GameActionButton;
