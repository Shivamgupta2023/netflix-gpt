const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: 'login',
    initialState: null,
    reducer: {
        addUser: (state, action) => {
            return action.payload
        },
        removeUser: (state, action) => {
            return null
        }
    }
})

export const {addUser, removeUser} = userSlice.actions

export default userSlice;