import PlayStyles from "@components/play/playStyles"
import { Text, TouchableOpacity, View, useColorScheme } from "react-native"
import { Card } from "@components/shared/default/defaultComponents"
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import { Navigation, ScreenProps } from "@interfaces"
import text from "@text/play/play.json"
import React, { useEffect, useState } from "react"
import { useFocusEffect } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { setAnimate } from "@redux/slices/animate"

type GameContentProps = {
    titles: string[]
    theme: ThemeProps
    navigation: Navigation
}

type GameProps = {
    title: string
    theme: ThemeProps
    navigation: Navigation
}

interface PlayComponentProps extends ScreenProps {
    category: string
}

export default function Play({navigation, category}: PlayComponentProps): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme
    const [color, setColor] = useState("")
    const { animate } = useSelector((state: ReduxState) => state.animate)
    const dispatch = useDispatch()

    useFocusEffect(() => {
        if (animate) {
            setColor("#fd8738")
            setTimeout(() => {
                setColor("")
            }, 500)
        }
        dispatch(setAnimate(false))
    })

    useEffect(() => {
        setColor("#fd8738")
        setTimeout(() => {
            setColor("")
        }, 500)
    }, [category])

    return (
        <View style={PlayStyles.content}>
            {text.games.map((game) => (
                    <Card 
                    key={game.category}
                    title={game.category} 
                    color={category === game.category.toUpperCase() ? color : ""}>
                    <PlayContent
                        titles={game.titles}
                        theme={theme}
                        navigation={navigation}
                    />
                </Card>
                ))}
        </View>
    )
}

function PlayContent({theme, titles, navigation}: GameContentProps): JSX.Element {
    return (
        <>
            {titles.map((title, index) => {
                if (index % 2 == 0) {
                    return (
                        <View key={title} style={PlayStyles.viewTwo}>
                            <Game theme={theme} title={title} navigation={navigation} />
                            <Game theme={theme} title={titles[index+1]} navigation={navigation} />
                        </View>
                    )
                }
            })}
        </>
    )
}

function Game({theme, title, navigation}: GameProps) {
    const dispatch = useDispatch()

    function handleClick() {
        let screen = ""

        switch (title) {
            case "LUCKSPIN":    screen = "LuckspinScreen";  break
            case "JACKPOT":     screen = "JackpotScreen";   break
            default:            screen = "DefaultScreen";   break
        }

        dispatch(setAnimate(false))
        navigation.navigate(screen)
    }

    if (title) return (
        <TouchableOpacity 
            key={title}
            onPress={handleClick}
            style={{
                ...PlayStyles.touchableTwo, 
                backgroundColor: theme.green
            }}
        >
            <Text key={title} style={{
                ...PlayStyles.textTwo, 
                color: theme.contrast, 
                backgroundColor: theme.green
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}