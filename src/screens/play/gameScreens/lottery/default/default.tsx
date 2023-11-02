import { Section } from "@components/shared/default/defaultComponents"
import { Text, useColorScheme, SafeAreaView } from "react-native"
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import DefaultStyles from "./defaultStyles"
import text from "@text/play/default.json"

export default function DefaultScreen() {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

    return (
        <SafeAreaView style={{
            ...DefaultStyles.content, 
            backgroundColor: theme.content
        }}>
            <Section title={text.title}>
                <Text style={{color: theme.contrast}}>{text.description}</Text>
            </Section>
        </SafeAreaView>
    )
}