import { createSlice } from "@reduxjs/toolkit"

// Declares Lang Slice
export const LangSlice = createSlice({
    name: "lang",
    initialState: {
        // true for norwegian, false for English
        lang: true,
    },
    // Declares reducers
    reducers: {
        // Function to change lang
        setLang(state) {
            state.lang = !state.lang
        },
    }
})

// Exports the change function
export const { setLang } = LangSlice.actions

// Exports the lang slice
export default LangSlice.reducer
