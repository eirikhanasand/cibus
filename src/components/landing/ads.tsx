import AdStyles from "@components/landing/adStyles"
import { Text, TouchableOpacity, View, useColorScheme } from "react-native"
import { Card } from "@components/shared/default/defaultComponents"
import LightTheme from '@themes/lightTheme'
import DarkTheme from '@themes/darkTheme'
import { Navigation, ScreenProps } from "@interfaces"
import { useDispatch, useSelector } from "react-redux"
import { setAnimate } from "@redux/slices/animate"

type AdContentProps = {
    titles: string[]
    theme: ThemeProps
    navigation: Navigation
}

export default function Ads({navigation}: ScreenProps): JSX.Element {
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme
    const titlesNO = {
        two: ["Gensere", "Bukser"],
        three: ["Sko", "T-skjorter", "Alle klær"]
    }
    const titlesEN = {
        two: ["Sweaters", "Pants"],
        three: ["Shoes", "Shirts", "All clothes"]
    }
    const titles = lang ? titlesNO : titlesEN
    const dispatch = useDispatch()
    dispatch(setAnimate(true))
    
    return (
        <Card title={lang ? "Klær" : "Clothes"}>
            <AdContent 
                titles={titles.two}
                theme={theme} 
                navigation={navigation}
            />
            <AdContent 
                titles={titles.three} 
                theme={theme}
                navigation={navigation}
            />
        </Card>
    )
}

function AdContent({theme, titles, navigation}: AdContentProps): JSX.Element {
    if (titles.length === 3) {
        return (
            <View style={AdStyles.viewThree}>
                {titles.map((title) => {
                    return (
                        <TouchableOpacity
                            key={title}
                            onPress={() => {navigation.navigate("PlayScreen", 
                            {category: title})}}
                            style={{
                            ...AdStyles.touchableThree, 
                            backgroundColor: theme.green
                            }}
                        >
                            <Text key={title} style={{
                                ...AdStyles.textThree, 
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
            <View style={AdStyles.viewTwo}>
                {titles.map((title) => (
                    <TouchableOpacity
                        key={title}
                        onPress={() => {navigation.navigate("PlayScreen", 
                            {category: title})}}
                        style={{
                            ...AdStyles.touchableTwo, 
                            backgroundColor: theme.green
                        }}
                    >
                        <Text key={title} style={{
                            ...AdStyles.textTwo, 
                            color: theme.contrast, 
                            backgroundColor: theme.green
                        }}>
                            {title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }
}