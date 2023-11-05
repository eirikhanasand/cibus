import AdStyles from "@components/landing/adStyles"
import { Text, TouchableOpacity, View } from "react-native"
import { Card } from "@components/shared/default/defaultComponents"
import { Navigation, ScreenProps } from "@interfaces"
import { useDispatch, useSelector } from "react-redux"
import { setAnimate } from "@redux/slices/animate"
import { useNavigation } from "@react-navigation/native"

type AdContentProps = {
    titles: string[]
}

export default function Ads(): JSX.Element {
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const navigation: Navigation = useNavigation()
    const titlesNO = {
        two: ["Gensere", "Bukser"],
        three: ["Sko", "T-skjorter", "Alle klær"]
    }
    const titlesEN = {
        two: ["Sweaters", "Pants"],
        three: ["Shoes", "Shirts", "All clothes"]
    }
    const titles = lang ? titlesNO : titlesEN
    const dispatch = useDispatch()
    dispatch(setAnimate(true))
    
    return (
        <Card title={lang ? "Klær" : "Clothes"}>
            <AdContent titles={titles.two} />
            <AdContent titles={titles.three} />
        </Card>
    )
}

function AdContent({titles}: AdContentProps): JSX.Element {
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const navigation: Navigation = useNavigation()

    if (titles.length === 3) {
        return (
            <View style={AdStyles.viewThree}>
                {titles.map((title) => {
                    return (
                        <TouchableOpacity
                            key={title}
                            onPress={() => {navigation.navigate("PlayScreen", 
                            {category: title})}}
                            style={{
                            ...AdStyles.touchableThree, 
                            backgroundColor: theme.green
                            }}
                        >
                            <Text key={title} style={{
                                ...AdStyles.textThree, 
                                color: theme.contrast, 
                                backgroundColor: theme.green
                            }}>
                                {title}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    } else {
        return (
            <View style={AdStyles.viewTwo}>
                {titles.map((title) => (
                    <TouchableOpacity
                        key={title}
                        onPress={() => {navigation.navigate("PlayScreen", 
                            {category: title})}}
                        style={{
                            ...AdStyles.touchableTwo, 
                            backgroundColor: theme.green
                        }}
                    >
                        <Text key={title} style={{
                            ...AdStyles.textTwo, 
                            color: theme.contrast, 
                            backgroundColor: theme.green
                        }}>
                            {title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }
}