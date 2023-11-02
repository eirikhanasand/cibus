import AsyncStorage from "@react-native-async-storage/async-storage"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import AnimateReducer from "./slices/animate"
import NameReducer from "./slices/name"
import LoginReducer from "./slices/login"
import thunk from "redux-thunk"

// Combines all reducers
const reducers = combineReducers({
    animate: AnimateReducer,
    name: NameReducer,
    login: LoginReducer
})

// Declares key and storage to store the redux states in, and whitelists states
const saveState = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["animate", "name", "login"]
}

// Persistor to remember the state
const persistedReducer = persistReducer(saveState, reducers)

// Configures the store, combinds the reducers and adds thunk middleware
const Store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

// Exporst the full Redux Store
export default Store
