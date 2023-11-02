import { StyleSheet } from "react-native"

const GameStyles = StyleSheet.create({
    // View containg two buttons
    viewTwo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6,
    },
    // View containg three buttons
    viewThree: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    // Text for two buttons section
    textTwo: {
        height: 50,
        fontSize: 20,
        borderRadius: 10,
        textAlign: "center",
        lineHeight: 50,
        overflow: "hidden",
        fontWeight: "600",
    },
    // Text for three buttons section
    textThree: {
        fontSize: 16,
        height: 50,
        borderRadius: 10,
        textAlign: "center",
        lineHeight: 50,
        overflow: "hidden",
        fontWeight: "700",
    },
    // TouchableOpacity for two buttons section
    touchableTwo: {
        height: 50,
        borderRadius: 10,
        width: "49%"
    },
    // TouchableOpacity for three buttons section
    touchableThree: {
        height: 50,
        borderRadius: 10,
        width: "32%",
    }
})

export default GameStyles
