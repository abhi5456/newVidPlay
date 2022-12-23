import { useRef, useEffect } from 'react';

import { getNextVideo } from "../../core/api/video-api";

export type VideoContainerProps = {
  video: any;
};

const VideoContainer = ({ video }: VideoContainerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.load();
  }, [video])

  console.log("here is the video", video);
  return (
    <div className="video-container">
      {video && (
        <video loop muted autoPlay ref={videoRef}>
          <source src={encodeURI(video.url)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoContainer;
