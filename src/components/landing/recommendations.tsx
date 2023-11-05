import { Image, ScrollView, Text, TouchableOpacity, View, useColorScheme } from "react-native"
import RecommendationStyles from "@components/landing/recommendationStyles"
import LightTheme from '@themes/lightTheme'
import DarkTheme from '@themes/darkTheme'
import { ScreenProps } from "@interfaces"
import { useSelector } from "react-redux"

/**
 * JSX Element containing the sport images with text found on the landing screen.
 * @returns Relevant section
 */
export default function Recommendations({navigation}: ScreenProps): JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme
    const { lang } = useSelector((state: ReduxState) => state.lang)

    // Images available
    const images = [
        {
            name: lang ? "Biler" : "Cars",
            icon: require("@assets/car.jpg"),
        },
        {
            name: lang ? "Båter" : "Boats",
            icon: require("@assets/boat.jpg"),
        },
        {
            name: lang ? "Skiutstyr" : "Skiwear",
            icon: require("@assets/ski.jpg"),
        },
        {
            name: lang ? "Hundeleker" : "Dog toys",
            icon: require("@assets/dog.jpg")
        }
    ]

    return (
        <View style={RecommendationStyles.content}>
            <Text style={{...RecommendationStyles.title, color: theme.contrast}}>
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
                            <View style={RecommendationStyles.imageView}>
                                <Text style={RecommendationStyles.imageText}>
                                    {image.name}
                                </Text>
                                <Text style={RecommendationStyles.imageTextOpacity} />
                                <Image 
                                    style={RecommendationStyles.image}
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
