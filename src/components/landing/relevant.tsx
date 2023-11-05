import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import RelevantStyles from "@components/landing/relevantStyles"
import { Navigation } from "@interfaces"
import { useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native"

/**
 * JSX Element containing the sport images with text found on the landing screen.
 * @returns Relevant section
 */
export default function Relevant(): JSX.Element {
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const navigation: Navigation = useNavigation()

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
        <View style={RelevantStyles.content}>
            <Text style={{...RelevantStyles.title, color: theme.contrast}}>
                Relevant
            </Text>
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
            >
                {images.map((image) => (
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
                ))}
            </ScrollView>
        </View>
    )
}
