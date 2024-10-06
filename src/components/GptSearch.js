import React from "react";
import { background_logo } from "../Utils/constant";
import { GptSearchBar } from "./GptSearchBar";
import GptMovieRecommendedList from "./GptMovieRecommendedList";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={background_logo} alt="background-logo" />
      </div>
      <GptSearchBar />
      <GptMovieRecommendedList/>
    </div>
  );
};

export default GptSearch;
