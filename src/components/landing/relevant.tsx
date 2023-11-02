import { Image, ScrollView, Text, TouchableOpacity, View, useColorScheme } from "react-native"
import RelevantStyles from "@components/landing/relevantStyles"
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import { ScreenProps } from "@interfaces"

type RelevantImage = {
    name: string
    icon: number
}

/**
 * Contains car and boat section shortcuts
 */
export default function Relevant({navigation}: ScreenProps): JSX.Element {
    
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

    // Images available
    const images: RelevantImage[] = [
        {
            name: "CARS",
            icon: require("@assets/car.jpg"),
        },
        {
            name: "BOATS",
            icon: require("@assets/boat.jpg")
        },
        {
            name: "SKIWEAR",
            icon: require("@assets/ski.jpg")
        },
        {
            name: "DOG TOYS",
            icon: require("@assets/dog.jpg")
        }
    ]

    return (
        <View style={RelevantStyles.content}>
            <Text style={{...RelevantStyles.title, color: theme.contrast}}>
                RELEVANT
            </Text>
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
            >
                {images.map((image) => (
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
