import React from "react";

const Video = ({ video1Ref, video2Ref, filteredUrl, haveWidth }) => {
  return (
    <video
      ref={video1Ref || video2Ref}
      width={filteredUrl.Name != 'Sparklines' && haveWidth && '200'}
      playsInline
      loop
      muted
      className={
        video1Ref
          ? "absolute z-10 rounded-2xl shadow-2xl drop-shadow-2xl"
          : "absolute pb-5 bg-black z-10 rounded-2xl shadow-2xl drop-shadow-2xl"
      }
    >
      <source
        src={video1Ref ? filteredUrl.video1 : filteredUrl.video2}
        type="video/mp4"
      />
    </video>
  );
};

export default Video;
