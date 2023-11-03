import { createSlice } from "@reduxjs/toolkit"

// Declares Login Slice
export const LoginSlice = createSlice({
    // Slice name
    name: "login",
    // Initial state
    initialState: {
        // Boolean for if the user is logged in
        login: false,
        // Controls if the login component should be displayed
        displayLogin: false
    },
    // Declares slice reducer
    reducers: {
        // Function to change state
        setLogin(state) {
            state.login = true
        },
        setLogout(state) {
            state.login = false
        },
        setDisplayLogin(state) {
            state.displayLogin = !state.displayLogin
        }
    }
})

// Exports the change function
export const { setLogin, setLogout, setDisplayLogin } = LoginSlice.actions

// Exports the language slice
export default LoginSlice.reducer
