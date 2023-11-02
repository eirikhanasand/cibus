import { createSlice } from "@reduxjs/toolkit"

// Declares Name Slice
export const NameSlice = createSlice({
    // Slice name
    name: "name",
    // Initial state
    initialState: {
        // Name of the user
        name: ''
    },
    // Declares slice reducer
    reducers: {
        // Function to change state
        setName(state, action) {
            state.name = action.payload
        },
    }
})

// Exports the change function
export const { setName } = NameSlice.actions

// Exports the language slice
export default NameSlice.reducer
