import React, { useEffect } from 'react'
import { API_options } from '../Utils/constant';
import { useDispatch } from 'react-redux';
import { addMoviesData } from '../Utils/movieSlice';

const useGetNowPlayingMovies = () => {

    const dispatch = useDispatch()

    const getNowPlayingMoviesData = async () => {
        const moviesData =  await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options)
        const moviesDataJson = await moviesData.json()
        dispatch(addMoviesData(moviesDataJson?.results))
    }

    useEffect(() => {
        getNowPlayingMoviesData()
    }, [])
}

export default useGetNowPlayingMovies