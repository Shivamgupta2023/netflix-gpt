import React from "react";
import { isMobileDevice } from "../Utils/constant";

const VideoTitle = ({ title, overview }) => {
  const isMobile = isMobileDevice()
  return (
    <div className="w-screen aspect-video px-12 text-white absolute pt-28 md:pt-52 bg-gradient-to-r from-black">
      <div className="text-lg md:text-2xl font-bold">{title}</div>
      {!isMobile && <p className="mt-4 w-96 text-lg">{overview}</p>}
      <div className="flex mt-2 md:mt-6">
        <button className="bg-slate-200 text-black w-20 h-7 rounded-md md:w-24 md:h-10 md:rounded-lg">Play</button>
        <button className="mx-6 bg-slate-700 bg-opacity-50 w-20 h-7 rounded-md md:w-24 md:h-10 md:rounded-lg">More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
