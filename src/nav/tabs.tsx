import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LandingScreen from '@screens/landing/landing'
import CartScreen from '@screens/cart/cart'
import { ImageProps } from "react-native"
import MenuScreen from '@screens/menu/menu'
import PlayScreen from '@screens/categories/play'
import { TabOptions } from '@interfaces'
import Footer from "@nav/footer"
import { useState } from 'react'
import Header from '@nav/header'
import React from "react"
import { useSelector } from 'react-redux'
import AdScreen from '@screens/ad/ad'
import BookmarkScreen from '@screens/bookmarks/bookmarks'

type TabProps = {
    name: string
    component: React.FC<any>
    focusedIcon?: ImageProps
    icon?: ImageProps
}

const Tab = createBottomTabNavigator()

export default function Navigator(): JSX.Element {
    const { name } = useSelector((state: ReduxState) => state.name)
    const { value } = useSelector((state: ReduxState) => state.theme)
    const [login, setLogin] = useState(false)
    
    const screens = [
        {
            name: "LandingScreen",
            component: LandingScreen,
            focusedIcon: require("@assets/house-green.png"),
            icon: value
            ? require("@assets/house.png")
            : require("@assets/house.png")
        },
        { 
            name: "BookmarkScreen", 
            component: BookmarkScreen,
            focusedIcon: require("@assets/bookmark-green.png"),
            icon: value
            ? require("@assets/bookmark.png")
            : require("@assets/bookmark.png")
        },
        {
            name: "CartScreen",
            login: login,
            component: CartScreen,
            focusedIcon: require("@assets/cart-green.png"),
            icon: value
            ? require("@assets/cart.png")
            : require("@assets/cart.png")
        },
        { name: "AdScreen", component: AdScreen }
    ]
    
    return (
        <Tab.Navigator
        initialRouteName={screens[0].name}
        backBehavior="history"
        screenOptions={({
            headerShown: true,
            header: () => <Header />,
        })}
        tabBar={props => <Footer 
            state={props.state} 
                descriptors={props.descriptors} 
                navigation={props.navigation} 
                insets={props.insets} 
            />}
        >
            {screens.map((screen: TabProps) => (
                <Tab.Screen 
                    key={screen.name} 
                    options={({
                        display: true,
                        focusedIcon: screen.focusedIcon,
                        icon: screen.icon,
                    }) as TabOptions}
                    name={screen.name}
                    children={(props) => <screen.component {...props} />}
                />
            ))}
        </Tab.Navigator>
    )
}
