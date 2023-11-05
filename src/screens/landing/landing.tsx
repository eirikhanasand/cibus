import { SafeAreaView, ScrollView } from 'react-native'
import { LandingStyles } from "@screens/landing/landingStyles"
import CustomStatusBar from '@components/shared/default/defaultComponents'
import Relevant from '@components/landing/relevant'
import Welcome from '@components/landing/welcome'
import Ads from '@components/landing/ads'
import { useSelector } from 'react-redux'

export default function LandingScreen(): JSX.Element {
    const { theme } = useSelector((state: ReduxState) => state.theme)

    return (
        <SafeAreaView style={{
                ...LandingStyles.content, 
                backgroundColor: theme.content
            }}>
            <CustomStatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Welcome />
                <Ads />
                <Relevant />
            </ScrollView>
        </SafeAreaView>
    )
}
