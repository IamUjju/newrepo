import "./App.css";
import React, { useEffect, useState } from "react";
import icons from "./icons8-search.svg";
import YoutubeIcons from "./youtube.png";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import VideoCard from "./Card";

function App() {
  const [searchVideos, setSearchVideos] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    data("Cricket");
  }, []);

  const data = (query) => {
    fetchFromAPI(`search?part=snippet&q=${query}`).then((data) =>
      setVideos(data.items)
    );
    setSearchVideos("");
    console.log(videos);
  };
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img className="logo" src={YoutubeIcons} alt=".." />
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={searchVideos}
            onChange={(e) => setSearchVideos(e.target.value)}
          />
          <img
            className="search-icon"
            src={icons}
            alt="search"
            onClick={() => data(searchVideos)}
          />
        </div>
      </div>
      <div className="video-body">
        {videos.map((video, index) => {
          return <VideoCard video={video} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
