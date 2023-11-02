import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import LandingScreen from '@screens/landing/landing'
import StatsScreen from '@screens/stats/stats'
import { ImageProps, useColorScheme } from "react-native"
import MenuScreen from '@screens/menu/menu'
import PlayScreen from '@screens/play/play'
import { TabOptions } from '@interfaces'
import Footer from "@nav/footer"
import { useState } from 'react'
import LuckspinScreen from '@screens/play/gameScreens/lottery/luckspin/luckspin'
import Header from '@nav/header'
import React from "react"
import DefaultScreen from '@screens/play/gameScreens/lottery/default/default'
import JackpotScreen from '@screens/play/gameScreens/lottery/jackpot/jackpot'
import { useSelector } from 'react-redux'

type TabProps = {
    name: string
    component: React.FC<any>
    focusedIcon?: ImageProps
    icon?: ImageProps
}

const Tab = createBottomTabNavigator()

export default function Navigator(): JSX.Element {
    const { name } = useSelector((state: ReduxState) => state.name)
    const isDark = useColorScheme() === 'dark'
    const [login, setLogin] = useState(false)
    
    const screens = [
        {
            name: "LandingScreen",
            component: LandingScreen,
            focusedIcon: require("@assets/house-green.png"),
            icon: isDark
                ? require("@assets/house.png")
                : require("@assets/house.png")
        },
        {
            name: "PlayScreen",
            component: PlayScreen,
            focusedIcon: require("@assets/plus-green.png"),
            icon: isDark
                ? require("@assets/plus.png")
                : require("@assets/plus.png")
        },
        {
            name: "StatsScreen",
            login: login,
            component: StatsScreen,
            focusedIcon: require("@assets/stats-green.png"),
            icon: isDark
                ? require("@assets/stats.png")
                : require("@assets/stats.png")
        },
        {
            name: "MenuScreen",
            login: login,
            component: MenuScreen,
            focusedIcon: require("@assets/menu-green.png"),
            icon: isDark
                ? require("@assets/menu.png")
                : require("@assets/menu.png")
        },
        { name: "LuckspinScreen", component: LuckspinScreen },
        { name: "DefaultScreen", component: DefaultScreen },
        { name: "JackpotScreen", component: JackpotScreen }
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
            {screens.map((screen: TabProps) => {
                return (
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
                )
            })}
        </Tab.Navigator>
    )
}
