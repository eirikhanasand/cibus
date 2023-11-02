import { createSlice } from "@reduxjs/toolkit"

// Declares Animate Slice
export const AnimateSlice = createSlice({
    // Slice name
    name: "animate",
    // Initial state
    initialState: {
        // Decides if the user action should be animated
        animate: true
    },
    // Declares slice reducer
    reducers: {
        // Function to change state
        setAnimate(state, action) {
            state.animate = action.payload
        },
    }
})

// Exports the change function
export const { setAnimate } = AnimateSlice.actions

// Exports the language slice
export default AnimateSlice.reducer
