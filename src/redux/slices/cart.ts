import { createSlice } from "@reduxjs/toolkit"

// Declares cart slice
export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        // Cart items (number array of ad ids)
        cart: [] as number[]
    },
    // Declares reducers
    reducers: {
        // Function to set cart
        setCart(state, action) {
            state.cart = action.payload
        },
    }
})

// Exports the change function
export const { setCart } = CartSlice.actions

// Exports the cart slice
export default CartSlice.reducer
