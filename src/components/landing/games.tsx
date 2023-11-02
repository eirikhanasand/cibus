import GameStyles from "@components/landing/gameStyles"
import { Text, TouchableOpacity, View, useColorScheme } from "react-native"
import { Card } from "@components/shared/default/defaultComponents"
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import { Navigation, ScreenProps } from "@interfaces"
import { useDispatch } from "react-redux"
import { setAnimate } from "@redux/slices/animate"

type GameContentProps = {
    titles: string[]
    theme: ThemeProps
    navigation: Navigation
}

export default function Games({navigation}: ScreenProps): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme
    const dispatch = useDispatch()
    dispatch(setAnimate(true))
    
    return (
        <Card title="GAMES">
            <GameContent 
                titles={["LOTTERY", "SPORT"]}
                theme={theme} 
                navigation={navigation}
            />
            <GameContent 
                titles={["CELEBRITIES", "WEATHER", "ALL GAMES"]} 
                theme={theme}
                navigation={navigation}
            />
        </Card>
    )
}

function GameContent({theme, titles, navigation}: GameContentProps): JSX.Element {
    if (titles.length === 3) {
        return (
            <View style={GameStyles.viewThree}>
                {titles.map((title) => {
                    return (
                        <TouchableOpacity
                            key={title}
                            onPress={() => {navigation.navigate("PlayScreen", 
                            {category: title})}}
                            style={{
                            ...GameStyles.touchableThree, 
                            backgroundColor: theme.green
                            }}
                        >
                            <Text key={title} style={{
                                ...GameStyles.textThree, 
                                color: theme.contrast, 
                                backgroundColor: theme.green
                            }}>
                                {title}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    } else {
        return (
            <View style={GameStyles.viewTwo}>
                {titles.map((title) => {
                    return (
                        <TouchableOpacity 
                            key={title}
                            onPress={() => {navigation.navigate("PlayScreen", 
                                {category: title})}}
                            style={{
                                ...GameStyles.touchableTwo, 
                                backgroundColor: theme.green
                            }}
                        >
                            <Text key={title} style={{
                                ...GameStyles.textTwo, 
                                color: theme.contrast, 
                                backgroundColor: theme.green
                            }}>
                                {title}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}