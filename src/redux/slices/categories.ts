import { createSlice } from "@reduxjs/toolkit"

// Declares Category Slice
export const CategorySlice = createSlice({
    name: "category",
    initialState: {
        // Category object
        category: {
            categories_no: [],
            categories_en: []
        } as Category,
        clickedCategories: {
            categories_no: [],
            categories_en: []
        } as Category
    },
    // Declares reducers
    reducers: {
        // Function to set categories
        setCategories(state, action) {
            state.category = action.payload
        },
        setClickedCategories(state, action) {
            state.clickedCategories = action.payload
        },
    }
})

// Exports the change function
export const { setCategories, setClickedCategories } = CategorySlice.actions

// Exports the lang slice
export default CategorySlice.reducer
