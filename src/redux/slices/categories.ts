import { createSlice } from "@reduxjs/toolkit"

// Declares Category Slice
export const CategorySlice = createSlice({
    name: "category",
    initialState: {
        // Category object
        category: {} as Category
    },
    // Declares reducers
    reducers: {
        // Function to set categories
        setCategories(state, action) {
            state.category = action.payload
        },
    }
})

// Exports the change function
export const { setCategories } = CategorySlice.actions

// Exports the lang slice
export default CategorySlice.reducer
