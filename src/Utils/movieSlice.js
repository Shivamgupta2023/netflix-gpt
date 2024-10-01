import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        movieVideos: null
    },
    reducers: {
        addMoviesData: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addMoviesVideo: (state, action) => {
            state.movieVideos = action.payload
        }
    }
})

export const {addMoviesData, addMoviesVideo} = movieSlice.actions

export default movieSlice.reducer;