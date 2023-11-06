import { StyleSheet, Dimensions } from "react-native"

const OptionStyles = StyleSheet.create({
    view: {
        borderRadius: 10,
        height: 80,
        width: Dimensions.get('window').width / 2.2,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 25,
        fontWeight: "600"
    }
})

export default OptionStyles
