import { useContext, FC } from "react";
import { AppContext } from "../../../../context/AppContext";
import GameActionButton from "../../../../components/game-action-button/GameActionButton";
import { Grid } from "@mui/material";
import { ButtonProps } from "@mui/material";

interface HintButtonProps extends ButtonProps {
  hintOpen: boolean;
  setHintOpen: React.Dispatch<React.SetStateAction<boolean>>;
  hintTaken: boolean;
  setHintTaken: React.Dispatch<React.SetStateAction<boolean>>;
}

const HintButton: FC<HintButtonProps> = ({
  hintOpen,
  setHintOpen,
  hintTaken,
  setHintTaken,
}) => {
  const { state, setState } = useContext(AppContext);
  const handleHintClick = () => {
    if (hintTaken) {
      setHintOpen(!hintOpen);
    } else if (!hintTaken) {
      setState({ ...state, hintsTaken: state.hintsTaken + 1 });
      setHintTaken(true);
      setHintOpen(!hintOpen);
    }
  };
  return (
    <Grid item>
      <GameActionButton onClick={handleHintClick}>Hint</GameActionButton>
    </Grid>
  );
};
export default HintButton;
