import { createSlice } from "@reduxjs/toolkit";


const gptSearchSlice = createSlice({
    name: 'gpt',
    initialState: {
        gptToggleBtn: false
    },
    reducers: {
        toggleGptBtn: (state) => {
            state.gptToggleBtn = !state.gptToggleBtn
        },
    }
})

export const {toggleGptBtn} = gptSearchSlice.actions

export default gptSearchSlice.reducer;