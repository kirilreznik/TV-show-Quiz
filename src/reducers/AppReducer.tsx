import { initialAppState } from "../context/AppContext";
import { AppAction } from "../context/AppContext";
import getShow from "../utils/getShow";
import hideString from "../utils/hideString";
const AppReducer = (state = initialAppState, action: AppAction) => {
  switch (action.type) {
    default:
      return state;
    case "SET_DATA":
      return { ...state, shows: action.payload };
    case "CLEAR_STATE":
      return { ...initialAppState };
    case "SET_CURRENT_SHOW":
      return { ...state, currentShow: getShow(state.shows) };
    case "HIDE_STRING":
      return { ...state, hiddenString: hideString(action.payload) };
    case "SET_STATUS":
      return { ...state, status: action.payload };
    case "INCREMENT_GUESSED_RIGHT":
      return { ...state, guessedRight: state.guessedRight + 1 };
    case "INCREMENT_GUESSED_WRONG":
      return { ...state, guessedWrong: state.guessedWrong + 1 };
    case "DECREMENT_LIFE":
      return { ...state, lifesLeft: state.lifesLeft - 1 };
    case "INCREMENT_HINTS":
      return { ...state, hintsTaken: state.hintsTaken + 1 };
    case "OPEN_HINT":
      return { ...state, hintOpen: true };
    case "CLOSE_HINT":
      return { ...state, hintOpen: false };
    case "SET_HINT_TAKEN":
      return { ...state, hintTaken: true };
    case "CLEAR_HINT_TAKEN":
      return { ...state, hintTaken: false };
    case "TOGGLE_STATISTICS":
      return { ...state, statisticsOpen: !state.statisticsOpen };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    case "REMOVE_GUESSED_SHOW":
      return {
        ...state,
        shows: state.shows.filter((show) => {
          return show.name !== action.payload;
        }),
      };
  }
};
export default AppReducer;
