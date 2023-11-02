import { SafeAreaView, useColorScheme, Text, ScrollView } from 'react-native'
import { MenuStyles } from "@screens/menu/menuStyles"
import CustomStatusBar from '@components/shared/default/defaultComponents'
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import { ScreenProps } from "@interfaces"

export default function MenuScreen({ navigation }: ScreenProps): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

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
