const VideoFrame = (videoUrl: string, videoName: string) => {
  return (
    <iframe
      src={"https://www.youtube.com/embed/" + videoUrl}
      width={320}
      height={240}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
    ></iframe>
  );
};

export default VideoFrame;
