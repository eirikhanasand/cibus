import { StatusBar, Text, View } from 'react-native'
import DefaultStyles from '@components/shared/default/defaultComponentStyles'
import type { PropsWithChildren } from 'react'
import React from 'react'
import { useSelector } from 'react-redux'

type SectionProps = PropsWithChildren<{
    title: string
}>

type CardProps = PropsWithChildren<{
    color?: string
    title?: string
}>

export default function CustomStatusBar(): JSX.Element {
    const { theme, value } = useSelector((state: ReduxState) => state.theme)

    return (
        <StatusBar
            barStyle={value ? 'light-content' : 'dark-content'}
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
    const { theme } = useSelector((state: ReduxState) => state.theme)

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
    const { theme } = useSelector((state: ReduxState) => state.theme)

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
