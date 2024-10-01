import React, { useEffect } from 'react'
import { API_options } from '../Utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMoviesData } from '../Utils/movieSlice';

const useGetPopularMovies = () => {

    const dispatch = useDispatch()

    const getNowPlayingMoviesData = async () => {
        const moviesData =  await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_options)
        const moviesDataJson = await moviesData.json()
        dispatch(addPopularMoviesData(moviesDataJson?.results))
    }

    useEffect(() => {
        getNowPlayingMoviesData()
    }, [])
}

export default useGetPopularMovies