'use client';

import React from 'react';
import YouTube from 'react-youtube';

interface YouTubeVideoProps {
  videoId: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
  return (
    <div className="my-8">
      <YouTube
        videoId={videoId}
        opts={{
          width: '100%',
          height: '500',
          playerVars: {
            autoplay: 0,
          },
        }}
      />
    </div>
  );
};

export default YouTubeVideo;
