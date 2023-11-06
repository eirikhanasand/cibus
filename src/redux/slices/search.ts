import { createSlice } from "@reduxjs/toolkit"

// Declares Search Slice
export const SearchSlice = createSlice({
    name: "search",
    initialState: {
        input: "",
        highlighted: false,
        filter: false
    },
    // Declares reducers
    reducers: {
        // Function to search
        setSearch(state, action) {
            state.input = action.payload
        },
        setSearchHighlighted(state, action) {
            state.highlighted = action.payload
        },
        setFilter(state) {
            state.filter = !state.filter
        }
    }
})

// Exports the change function
export const { setSearch, setSearchHighlighted, setFilter } = SearchSlice.actions

// Exports the lang slice
export default SearchSlice.reducer
