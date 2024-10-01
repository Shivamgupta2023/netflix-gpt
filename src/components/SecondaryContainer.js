import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';
import useGetPopularMovies from '../Hooks/useGetPopularMovies';
import useGetTopRatedMovies from '../Hooks/useGetTopRatedMovies';

const SecondaryContainer = () => {

    useGetPopularMovies()
    useGetTopRatedMovies()
    const moviesNowPlayingList = useSelector(store => store.movies?.nowPlayingMovies)
    const moviesPopularList = useSelector(store => store.movies?.popularMovies)
    const moviesTopRatedList = useSelector(store => store.movies?.topRatedMovies)

  return (
    <div className='bg-black'>
        <div className='-mt-24 relative z-20 text-white'>
        {moviesNowPlayingList?.length>0 && <MovieList titleHeading={'Now Playing Movies'} MovieListData={moviesNowPlayingList}/>}
        {moviesPopularList?.length > 0 && <MovieList titleHeading={'Popular Movies'} MovieListData={moviesPopularList}/>}
        {moviesTopRatedList && <MovieList titleHeading={'Top Rated Movies'} MovieListData={moviesTopRatedList}/>}
        {/* <MovieList titleHeading={'Now Playing'} MovieListData={moviesNowPlayingList}/> */}
        </div>
    </div>
  )
}

export default SecondaryContainer