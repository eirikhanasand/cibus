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
    },
    optionsView: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        marginHorizontal: 10, 
        marginTop: -10
    }
})

export default OptionStyles
