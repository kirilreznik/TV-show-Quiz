export interface Show {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}
type CurrentShow = {
  name: string;
  overview: string;
};
const getShow = (showsArray: Show[]) => {
  const randomNum = Math.floor(Math.random() * showsArray.length);
  return {
    name: showsArray[randomNum].name,
    overview: showsArray[randomNum].overview,
  } as CurrentShow;
};

export default getShow;
