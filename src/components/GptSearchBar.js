import React from "react";
import { useSelector } from "react-redux";
import { LanguageList } from "../Utils/LanguageConstants";

export const GptSearchBar = () => {

  const langKey = useSelector((store) => store.config?.lang);

  return (
    <div className="flex justify-center rounded-lg">
      <form className="bg-black p-4 mt-[8%] w-1/2 grid grid-cols-12 bg-opacity-75">
        <input
          type="text"
          placeholder={LanguageList[langKey]?.searchText}
          className="col-span-9 p-2 rounded-md"
        ></input>
        <button className="bg-red-500 text-white col-span-3 mx-2 rounded-md">
          {LanguageList[langKey]?.search}
        </button>
      </form>
    </div>
  );
};
