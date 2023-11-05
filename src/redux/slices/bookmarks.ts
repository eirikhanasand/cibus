import { createSlice } from "@reduxjs/toolkit"

// Declares bookmark slice
export const BookmarkSlice = createSlice({
    name: "bookmarks",
    initialState: {
        // Bookmarks
        bookmarks: [] as number[]
    },
    // Declares reducers
    reducers: {
        // Function to set ad
        setBookmarks(state, action) {
            state.bookmarks = action.payload
        },
    }
})

// Exports the change function
export const { setBookmarks } = BookmarkSlice.actions

// Exports the bookmark slice
export default BookmarkSlice.reducer
