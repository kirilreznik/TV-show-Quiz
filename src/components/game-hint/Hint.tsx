import { StyledHint } from "./Hint.styled";
import { FC } from "react";

interface HintProps {
  hintText: string | undefined;
}

const Hint: FC<HintProps> = ({ hintText }) => {
  return (
    <StyledHint variant="subtitle1" color="white">
      {hintText}
    </StyledHint>
  );
};
export default Hint;
