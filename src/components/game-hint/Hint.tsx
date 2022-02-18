import { StyledHint } from "./Hint.styled";

interface HintProps {
  hintText: string | undefined;
}

const Hint: (props: HintProps) => JSX.Element = ({ hintText }) => {
  return (
    <StyledHint variant="subtitle1" color="white">
      {hintText}
    </StyledHint>
  );
};
export default Hint;
