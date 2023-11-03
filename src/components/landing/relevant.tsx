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
            name: "Cars",
            icon: require("@assets/car.jpg"),
        },
        {
            name: "Boats",
            icon: require("@assets/boat.jpg"),
        },
        {
            name: "Skiwear",
            icon: require("@assets/ski.jpg"),
        },
        {
            name: "Dog toys",
            icon: require("@assets/dog.jpg")
        }
    ]

    return (
        <View style={RelevantStyles.content}>
            <Text style={{...RelevantStyles.title, color: theme.contrast}}>
                Relevant
            </Text>
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
            >
                {images.map((image) => {
                    return (
                        // Navigates to the PlayScreen with the proper category
                        <TouchableOpacity key={image.name} onPress={() => {
                            navigation.navigate("PlayScreen", {category: image.name})
                        }}>
                            <View style={RelevantStyles.imageView}>
                                <Text style={RelevantStyles.imageText}>
                                    {image.name}
                                </Text>
                                <Text style={RelevantStyles.imageTextOpacity} />
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
