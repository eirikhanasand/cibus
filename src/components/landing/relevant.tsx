import { Image, ScrollView, Text, TouchableOpacity, View, useColorScheme } from "react-native"
import RelevantStyles from "@components/landing/relevantStyles"
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import { ScreenProps } from "@interfaces"

/**
 * JSX Element containing the sport images with text found on the landing screen.
 * @returns Relevant section
 */
export default function Relevant({navigation}: ScreenProps): JSX.Element {
    // Theme
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

    // Images available
    const images = [
        {
            name: "GAMBLING",
            icon: require("@assets/controller.jpg"),
        },
        {
            name: "SPORTS",
            icon: require("@assets/soccer.jpg")
        }
    ]

    return (
        <View style={RelevantStyles.content}>
            {/* Section title */}
            <Text style={{...RelevantStyles.title, color: theme.contrast}}>
                RELEVANT
            </Text>
            {/* Horizontal scrollview containing different activites */}
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
            >
                {/* Renders each category with text and background */}
                {images.map((image) => {
                    return (
                        // Navigates to the PlayScreen with the proper category
                        <TouchableOpacity key={image.name} onPress={() => {
                            navigation.navigate("PlayScreen", {category: image.name})
                        }}>
                            <View style={RelevantStyles.imageView}>
                                {/* Image title */}
                                <Text style={RelevantStyles.imageText}>
                                    {image.name}
                                </Text>
                                {/* Image opacity */}
                                <Text style={RelevantStyles.imageTextOpacity} />
                                {/* Image background */}
                                <Image 
                                    style={RelevantStyles.image}
                                    source={image.icon} 
                                />
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    )
}
