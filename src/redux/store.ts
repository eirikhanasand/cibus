import AsyncStorage from "@react-native-async-storage/async-storage"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import AnimateReducer from "./slices/animate"
import NameReducer from "./slices/name"
import LoginReducer from "./slices/login"
import ThemeReducer from "./slices/theme"
import thunk from "redux-thunk"
import LangReducer from ".//slices/lang"

// Combines all reducers
const reducers = combineReducers({
    animate: AnimateReducer,
    name: NameReducer,
    login: LoginReducer,
    lang: LangReducer,
    theme: ThemeReducer
})

// Declares key and storage to store the redux states in, and whitelists states
const saveState = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["animate", "name", "login", "theme", "lang"]
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
