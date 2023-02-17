import axios from "axios";
import Children from "../models/RedditAwwJsonModel";

export const getRedditAwwData = (): Promise<Children[]> => {
  return axios
    .get(`https://www.reddit.com/r/aww/.json`)
    .then((res) => res.data.data.children)
    .catch((error) => console.log(error));
};
