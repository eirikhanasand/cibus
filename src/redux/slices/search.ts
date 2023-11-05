import { createSlice } from "@reduxjs/toolkit"

// Declares Search Slice
export const SearchSlice = createSlice({
    name: "search",
    initialState: {
        input: "",
    },
    // Declares reducers
    reducers: {
        // Function to search
        setSearch(state, action) {
            state.input = action.payload
        },
    }
})

// Exports the change function
export const { setSearch } = SearchSlice.actions

// Exports the lang slice
export default SearchSlice.reducer
