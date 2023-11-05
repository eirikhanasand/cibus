import { SafeAreaView, useColorScheme, Text, ScrollView } from 'react-native'
import { LandingStyles } from "@screens/landing/landingStyles"
import CustomStatusBar from '@components/shared/default/defaultComponents'
import Relevant from '@components/landing/relevant'
import Welcome from '@components/landing/welcome'
import LightTheme from '@themes/light'
import DarkTheme from '@themes/dark'
import Ads from '@components/landing/ads'
import { LandingScreenProps } from '@interfaces'

export default function LandingScreen({ navigation }: LandingScreenProps): JSX.Element {
    
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

    return (
        <SafeAreaView style={{
            ...LandingStyles.content, 
            backgroundColor: theme.content
        }}>
            <CustomStatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Welcome />
                <Ads navigation={navigation} />
                <Relevant navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}
