import React, { useEffect } from 'react'
import { API_options } from '../Utils/constant';
import { useDispatch } from 'react-redux';
import { addTopRatedMoviesData } from '../Utils/movieSlice';

const useGetTopRatedMovies = () => {

    const dispatch = useDispatch()

    const getMoviesData = async () => {
        const moviesData =  await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_options)
        const moviesDataJson = await moviesData.json()
        dispatch(addTopRatedMoviesData(moviesDataJson?.results))
    }

    useEffect(() => {
        getMoviesData()
    }, [])
}

export default useGetTopRatedMovies