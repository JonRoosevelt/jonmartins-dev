import React from "react";

export default function VideoFrame({ videoUrl }: { videoUrl: string }) {
  return (
    <div className="video-responsive">
      <iframe
        width="100%"
        height="400vh"
        src={`https://www.youtube.com/embed/${videoUrl}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
