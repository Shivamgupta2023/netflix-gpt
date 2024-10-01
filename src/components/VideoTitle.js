import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-52 px-12 text-white absolute bg-gradient-to-r from-black">
      <div className="text-2xl font-bold">{title}</div>
      <p className="mt-4 w-96 text-lg">{overview}</p>
      <div className="flex mt-6">
        <button className="bg-slate-600 w-24 h-10 rounded-lg ">Play</button>
        <button className="mx-6 bg-slate-600 w-24 h-10 rounded-lg">More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
