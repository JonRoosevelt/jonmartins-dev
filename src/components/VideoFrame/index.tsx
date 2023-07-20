import { ReactNode } from "react";

const VideoFrame = (videoUrl: string, videoName: string) => {
  return (
    <iframe
      width="320"
      height="240"
      src="https://www.youtube.com/embed/8bxXlv9vpik"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    />
  );
};

export default VideoFrame;
