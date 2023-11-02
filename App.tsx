import Navigator from "@nav/tabs"
import { NavigationContainer } from "@react-navigation/native"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import { AppRegistry } from "react-native"
import { Provider } from "react-redux"
import Store from "./src/redux/store"
import React from "react"

let persistor = persistStore(Store)

/**
 * Main entry point of the application
 * 
 * @returns Entire application as a JSX Component
 */
export default function App(): JSX.Element {

    AppRegistry.registerComponent("app", () => App)

    return (
        <Provider store={Store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Navigator/>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    )
}
