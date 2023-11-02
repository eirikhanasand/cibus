import { SafeAreaView, useColorScheme, ScrollView } from 'react-native'
import { StatsStyles } from "@screens/stats/statsStyles"
import CustomStatusBar from '@components/shared/default/defaultComponents'
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import { ScreenProps } from "@interfaces"
import Header from '@nav/header'
import Footer from '@nav/footer'
import { useState } from 'react'

export default function StatsScreen({ navigation }: ScreenProps): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

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
