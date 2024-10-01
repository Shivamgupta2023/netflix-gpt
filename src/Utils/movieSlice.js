import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        movieVideos: null,
        popularMovies: null,
        topRatedMovies: null
    },
    reducers: {
        addMoviesData: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addMoviesVideo: (state, action) => {
            state.movieVideos = action.payload
        },
        addPopularMoviesData: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMoviesData: (state, action) => {
            state.topRatedMovies = action.payload
        }  
    }
})

export const {addMoviesData, addMoviesVideo, addPopularMoviesData, addTopRatedMoviesData} = movieSlice.actions

export default movieSlice.reducer;