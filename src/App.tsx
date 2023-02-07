import { useEffect, useState } from "react";
import "./App.css";
import RedditAwwJson from "./models/RedditAwwJsonModel";
import { getRedditAwwData } from "./services/RedditAwwApiService";

function App() {
  const [redditData, setRedditData] = useState<RedditAwwJson>();
  useEffect(() => {
    getRedditAwwData().then((res) => setRedditData(res));
  });
  console.log(redditData?.data);
  return <div className="App"></div>;
}

export default App;
