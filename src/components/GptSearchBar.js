import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LanguageList } from "../Utils/LanguageConstants";
import { API_options } from "../Utils/constant";
import { addGptMovies } from "../Utils/GptSearchSlice";

export const GptSearchBar = () => {

  const gptSearch = useRef(null)

  const langKey = useSelector((store) => store.config?.lang);

  const dispatch = useDispatch()


  const fetchSearchMoviesData = async (movieName) => {
    let data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&page=1`, API_options)
    let jsonData = data.json()
    return jsonData;
  }


  const handleGPTsearch = async () => {
    debugger
    console.log('sfdsfdsf')
    let searchText = `The result for this value ${gptSearch.current.value} should return 5 movie names in a string. For example the result should look like ${'Andaz Apna Apna, Race 2, Agneepath, Tumbaad, Stree'}`
      // const chatCompletion = await client.chat.completions.create({
      //   messages: [{ role: 'user', content: searchText }],
      //   model: 'gpt-3.5-turbo',
      // });
      // let arrayData = chatCompletion?.choices[0]?.message?.content.split(', ');
      let arrayData = ['Andaz Apna Apna', 'Race 2', 'Agneepath', 'Tumbaad', 'Stree']

      let promiseArray = arrayData.map(movie => fetchSearchMoviesData(movie));
      
      let AllMoviesData = await Promise.all(promiseArray);

      dispatch(addGptMovies({moviesName: arrayData, moviesData:AllMoviesData}))
  }


  return (
    <div className="flex justify-center rounded-lg">
      <form onSubmit={(e) => e.preventDefault()} className="bg-black p-4 mt-[8%] w-1/2 grid grid-cols-12 bg-opacity-75">
        <input
          type="text"
          placeholder={LanguageList[langKey]?.searchText}
          className="col-span-9 p-2 rounded-md"
          ref={gptSearch}
        ></input>
        <button onClick={handleGPTsearch} className="bg-red-500 text-white col-span-3 mx-2 rounded-md">
          {LanguageList[langKey]?.search}
        </button>
      </form>
    </div>
  );
};
