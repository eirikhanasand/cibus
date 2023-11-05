import { SafeAreaView, ScrollView } from 'react-native'
import { PlayStyles } from "@screens/categories/playStyles"
import CustomStatusBar from '@components/shared/default/defaultComponents'
import { PlayScreenProps } from "@interfaces"
import { useRef } from 'react'
import { useSelector } from 'react-redux'

export default function PlayScreen({ route }: PlayScreenProps): JSX.Element {
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const { category } = route.params
    const scrollViewRef = useRef<ScrollView | null>(null)

    // Scrolls to the location of the category (1200 is the bottom)
    switch (category) {
        case "All clothes":
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
                {/* <Play category={category} /> */}
            </ScrollView>
        </SafeAreaView>
    )
}
