import { createSlice } from "@reduxjs/toolkit"
import DarkTheme from "@themes/dark"
import LightTheme from "@themes/light"

// Declares Theme Slice
export const ThemeSlice = createSlice({
    name: "theme",
    initialState: {
        // true for dark, false for light
        value: true,
        theme: DarkTheme
    },
    // Declares reducers
    reducers: {
        // Function to change theme
        setTheme(state) {
            state.value = !state.value
            state.theme = state.value ? DarkTheme : LightTheme
        },
    }
})

// Exports the change function
export const { setTheme } = ThemeSlice.actions

// Exports the lang slice
export default ThemeSlice.reducer
