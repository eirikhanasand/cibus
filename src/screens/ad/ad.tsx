import { SafeAreaView, useColorScheme, ScrollView } from 'react-native'
import { LandingStyles } from "@screens/landing/landingStyles"
import CustomStatusBar from '@components/shared/default/defaultComponents'
import LightTheme from '@themes/light'
import DarkTheme from '@themes/dark'
import Ad from '@components/ad/ad'

export default function AdScreen(): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

    return (
        <SafeAreaView style={{
                ...LandingStyles.content, 
                backgroundColor: theme.content
            }}>
            <CustomStatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Ad />
            </ScrollView>
        </SafeAreaView>
    )
}