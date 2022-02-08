import { StyledHint } from "./Hint.styled";
const Hint = (props: { hintText: string | undefined }) => {
  return (
    <StyledHint variant="subtitle1" color="white">
      {props.hintText}
    </StyledHint>
  );
};
export default Hint;
