import React from "react";
import { background_logo } from "../Utils/constant";
import { GptSearchBar } from "./GptSearchBar";
import GptMovieRecommendedList from "./GptMovieRecommendedList";

const GptSearch = () => {
  return (
    <div className="bg-black -z-20">
      <div className="absolute -z-10">
        <img src={background_logo} alt="background-logo" />
      </div>
      <GptSearchBar />
      <GptMovieRecommendedList/>
    </div>
  );
};

export default GptSearch;
