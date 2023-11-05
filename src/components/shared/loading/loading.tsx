import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import LoadingStyles from "./loadingStyles"

export default function Loading() {
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { theme } = useSelector((state: ReduxState) => state.theme)

    return (
        <View style={LoadingStyles.view}>
            <Text style={{...LoadingStyles.text, color: theme.contrast}}>{lang ? "Laster..." : "Loading..."}</Text>
        </View>
    )
}
