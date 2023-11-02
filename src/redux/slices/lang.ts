import { createSlice } from "@reduxjs/toolkit"

// Declares Lang Slice
export const LangSlice = createSlice({
    // Slice name
    name: "lang",
    // Initial state
    initialState: {
        // true for Norwegian, false for English
        lang: true,
    },
    // Declares reducers
    reducers: {
        setLang(state, action) {
            state.lang = action.payload
        },
    }
})

// Exports reducers
export const { setLang } = LangSlice.actions

// Exports the language slice
export default LangSlice.reducer
