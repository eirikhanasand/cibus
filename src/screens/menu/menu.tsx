import { SafeAreaView, ScrollView } from 'react-native'
import { MenuStyles } from "@screens/menu/menuStyles"
import CustomStatusBar from '@components/shared/default/defaultComponents'
import { useSelector } from 'react-redux'

export default function MenuScreen(): JSX.Element {
    const { theme } = useSelector((state: ReduxState) => state.theme)

    return (
        <SafeAreaView style={{
                ...MenuStyles.content, 
                backgroundColor: theme.content
            }}>
            <CustomStatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Content here */}
            </ScrollView>
        </SafeAreaView>
    )
}
