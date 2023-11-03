import { createSlice } from "@reduxjs/toolkit"

// Declares Theme Slice
export const ThemeSlice = createSlice({
    name: "lang",
    initialState: {
        // true for dark, false for light
        theme: true,
    },
    // Declares reducers
    reducers: {
        // Function to change theme
        setTheme(state) {
            state.theme = !state.theme
        },
    }
})

// Exports the change function
export const { setTheme } = ThemeSlice.actions

// Exports the lang slice
export default ThemeSlice.reducer
