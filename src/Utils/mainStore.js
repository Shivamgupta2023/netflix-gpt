import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const mainStore = configureStore({
    reducer: {
        user: userSlice
    }
})

export default mainStore