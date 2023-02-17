import { useEffect, useState } from "react";
import "./App.css";
import Children from "./models/RedditAwwJsonModel";
import Data from "./models/RedditAwwJsonModel";
import RedditAwwJson from "./models/RedditAwwJsonModel";
import { getRedditAwwData } from "./services/RedditAwwApiService";

function App() {
  const [redditData, setRedditData] = useState<Children[]>();
  useEffect(() => {
    getRedditAwwData().then((res) => setRedditData(res));
  }, []);
  console.log(redditData);
  return (
    <div className="App">
      {redditData?.map((gif) => (
        <li>
          <p>{gif.data.title}</p>
          <img src={gif.data.thumbnail} alt={gif.data.thumbnail} />
          <a href={gif.data.permalink}>Click Here to Visit Reddit</a>
        </li>
      ))}
    </div>
  );
}

export default App;
