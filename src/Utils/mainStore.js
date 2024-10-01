import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import GptSearchSlice from "./GptSearchSlice";
import configSlice from "./configSlice";

const mainStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice,
        gpt: GptSearchSlice,
        config: configSlice
    }
})

export default mainStore