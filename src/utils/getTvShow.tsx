import { Show, CurrentShow } from "../types/types";

const getTvShow = (showsArray: Show[]): CurrentShow => {
  const randomNum = Math.floor(Math.random() * showsArray.length);
  return {
    name: showsArray[randomNum].name,
    overview: showsArray[randomNum].overview,
  };
};

export default getTvShow;
