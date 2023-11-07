import AsyncStorage from "@react-native-async-storage/async-storage"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import ThemeReducer from "./slices/theme"
import thunk from "redux-thunk"
import LangReducer from "./slices/lang"
import AdReducer from "./slices/ad"
import CategoryReducer from "./slices/categories"
import BookmarkReducer from "./slices/bookmarks"
import CartReducer from "./slices/cart"
import SearchReducer from "./slices/search"

// Combines all reducers
const reducers = combineReducers({
    lang: LangReducer,
    theme: ThemeReducer,
    ad: AdReducer,
    category: CategoryReducer,
    bookmarks: BookmarkReducer,
    cart: CartReducer,
    search: SearchReducer
})

// Declares key and storage to store the redux states in, and whitelists states
const saveState = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["theme", "lang", "search", "ad", "category", "bookmarks", "cart"]
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
