import { createSlice } from "@reduxjs/toolkit"

// Declares bookmark slice
export const BookmarkSlice = createSlice({
    name: "bookmarks",
    initialState: {
        // Bookmarks
        bookmarks: [] as Bookmark[]
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

// Exports the lang slice
export default BookmarkSlice.reducer
