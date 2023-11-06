import { SafeAreaView, ScrollView } from 'react-native'
import { LandingStyles } from "@screens/landing/landingStyles"
import CustomStatusBar from '@components/shared/default/defaultComponents'
import Ad from '@components/ad/ad'
import { useSelector } from 'react-redux'

export default function AdScreen(): JSX.Element {
    const { theme } = useSelector((state: ReduxState) => state.theme)

    return (
        <SafeAreaView style={{
                ...LandingStyles.content, 
                backgroundColor: theme.content
            }}>
            <CustomStatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <Ad /> */}
            </ScrollView>
        </SafeAreaView>
    )
}