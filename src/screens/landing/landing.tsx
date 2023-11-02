import { SafeAreaView, useColorScheme, Text, ScrollView } from 'react-native'
import { LandingStyles } from "@screens/landing/landingStyles"
import CustomStatusBar from '@components/shared/default/defaultComponents'
import Relevant from '@components/landing/relevant'
import { Section } from '@components/shared/default/defaultComponents'
import Welcome from '@components/landing/welcome'
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import Games from '@components/landing/games'
import { LandingScreenProps } from '@interfaces'
import en from "@text/landing.json"

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
                <Section title="PLAY">
                    <Text style={{color: theme.contrast}}>{en.play}</Text>
                </Section>
                <Games navigation={navigation} />
                <Relevant navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}
