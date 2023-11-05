import { SafeAreaView, ScrollView } from 'react-native'
import { StatsStyles } from "@screens/stats/statsStyles"
import CustomStatusBar from '@components/shared/default/defaultComponents'
import { useSelector } from 'react-redux'

export default function StatsScreen(): JSX.Element {
    const { theme } = useSelector((state: ReduxState) => state.theme)

    return (
        <SafeAreaView style={{
                ...StatsStyles.content, 
                backgroundColor: theme.content
            }}>
            <CustomStatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Content here */}
            </ScrollView>
        </SafeAreaView>
    )
}
