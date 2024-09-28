import userSlice from "./userSlice";

const { configureStore } = require("@reduxjs/toolkit");

const mainStore = configureStore({
    reducer: {
        user: userSlice
    }
})

export default mainStore