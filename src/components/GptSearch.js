import React from "react";
import { background_logo } from "../Utils/constant";
import { GptSearchBar } from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={background_logo} alt="background-logo" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
