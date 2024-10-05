import { createSlice } from "@reduxjs/toolkit";


const gptSearchSlice = createSlice({
    name: 'gpt',
    initialState: {
        gptToggleBtn: false,
        gptMovies: null,
    },
    reducers: {
        toggleGptBtn: (state) => {
            state.gptToggleBtn = !state.gptToggleBtn
        },
        addGptMovies: (state, action) => {
            state.gptMovies = action.payload
        }
    }
})

export const {toggleGptBtn, addGptMovies} = gptSearchSlice.actions

export default gptSearchSlice.reducer;