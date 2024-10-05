import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieRecommendedList = () => {

    const moviesAllData = useSelector(store => store.gpt?.gptMovies)

    if(!moviesAllData) return;

    const {moviesName, moviesData} = moviesAllData

  return (
    <div className='w-screen bg-black text-white bg-opacity-65'>
        {moviesData.map((itm, id) => {
            return <MovieList titleHeading={moviesName[id]} MovieListData={itm?.results} />
        })}
    </div>
  )
}

export default GptMovieRecommendedList