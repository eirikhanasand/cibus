import { createSlice } from "@reduxjs/toolkit"

// Declares Ad Slice
export const AdSlice = createSlice({
    name: "ad",
    initialState: {
        // Ad object
        ad: {} as Ad
    },
    // Declares reducers
    reducers: {
        // Function to set ad
        setAd(state, action) {
            state.ad = action.payload
        },
    }
})

// Exports the change function
export const { setAd } = AdSlice.actions

// Exports the lang slice
export default AdSlice.reducer
