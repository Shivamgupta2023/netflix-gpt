import React, { useEffect } from 'react'
import { API_options } from '../Utils/constant';
import { useDispatch } from 'react-redux';
import { addMoviesVideo } from '../Utils/movieSlice';

const useGetMovieTrailer = (movieid) => {

    const dispatch = useDispatch()

    const getMovieTrailer = async () => {
     const videoData = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos`, API_options)
     const videoDateJson = await videoData.json()
     const movieTrailer = videoDateJson.results.filter(data => data.name == "Official Trailer")
     dispatch(addMoviesVideo(movieTrailer))
    }

    useEffect(() => {
        getMovieTrailer()
    }, [])
}

export default useGetMovieTrailer