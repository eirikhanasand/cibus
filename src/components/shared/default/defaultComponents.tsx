import { StatusBar, Text, useColorScheme, View } from 'react-native'
import DefaultStyles from '@components/shared/default/defaultComponentStyles'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import LightTheme from '@themes/lightTheme.json'
import type { PropsWithChildren } from 'react'
import DarkTheme from '@themes/darkTheme.json'
import React from 'react'

type SectionProps = PropsWithChildren<{
    title: string
}>

type CardProps = PropsWithChildren<{
    color?: string
    title?: string
}>

export default function CustomStatusBar(): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

    return (
        <StatusBar
            barStyle={isDark ? 'light-content' : 'dark-content'}
            backgroundColor={theme.darker}
        />
    )
}

/**
 * Styled outline for other elements
 * 
 * @param children Reactnodes inside of this element
 * @returns Styled outline
 */
export function Card({children, color, title}: CardProps): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

    return(
        <View style={{
            ...DefaultStyles.cardView, 
            backgroundColor: color ? color : theme.card}}>
            {title && <Text style={{
                ...DefaultStyles.sectionTitle, 
                color: theme.contrast
            }}>
                {title}
            </Text>}
            {children}
        </View>
    )
}

export function Section({children, title}: SectionProps): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

    return (
        <Card>
            <Text
                style={[DefaultStyles.sectionTitle, {color: theme.contrast}]}>
                {title}
            </Text>
            <Text
                style={[DefaultStyles.sectionDescription, {color: theme.contrast}]}>
                {children}
            </Text>
        </Card>
    )
}
