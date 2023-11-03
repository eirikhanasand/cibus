import { SafeAreaView, useColorScheme, ScrollView } from 'react-native'
import { PlayStyles } from "@screens/play/playStyles"
import CustomStatusBar from '@components/shared/default/defaultComponents'
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import { PlayScreenProps } from "@interfaces"
import Play from '@components/play/play'
import { useRef } from 'react'

export default function PlayScreen({ route, navigation }: PlayScreenProps): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme
    const { category } = route.params
    const scrollViewRef = useRef<ScrollView | null>(null)

    // Scrolls to the location of the category (1200 is the bottom)
    switch (category) {
        case "ALL GAMES":
        case "LOTTERY":         scrollToPosition(0);    break;
        case "SPORT":           scrollToPosition(270);  break;
        case "CELEBRITIES":     scrollToPosition(610);  break;
        case "WEATHER":         scrollToPosition(1200); break;
        case "ENTERTAINMENT":   scrollToPosition(1200); break;
    }

    function scrollToPosition(y: number) {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ x: 0, y, animated: true })
        }
    }

    return (
        <SafeAreaView style={{
            ...PlayStyles.content, 
            backgroundColor: theme.content
        }}>
            <CustomStatusBar />
            <ScrollView 
                style={PlayStyles.top} 
                showsVerticalScrollIndicator={false} 
                ref={scrollViewRef}
            >
                <Play navigation={navigation} category={category} />
            </ScrollView>
        </SafeAreaView>
    )
}
