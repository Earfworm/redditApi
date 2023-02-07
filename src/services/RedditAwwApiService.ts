import axios from "axios";
import RedditAwwJson from "../models/RedditAwwJsonModel";

export const getRedditAwwData = (): Promise<RedditAwwJson> => {
  return axios
    .get(`https://www.reddit.com/r/aww/.json`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
