import React from 'react';


const VideoCard = ({video}) => {
  return (
    
    <div className="video-card">
      <div className="thumbnail">
        <img src={video.snippet.thumbnails.high.url} alt="Video Thumbnail" />
      </div>
      <div className="video-details">
        <div className="title">{video.snippet.title}</div>
        <div className="author">{video.snippet.channelTitle}</div>
        <div className="views">1,000,000 views</div>
      </div>
    </div>
  );
};

export default VideoCard;
