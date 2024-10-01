import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";

const mainStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice
    }
})

export default mainStore