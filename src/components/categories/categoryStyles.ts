import { StyleSheet } from "react-native"

const PlayStyles = StyleSheet.create({
    // Content of the play view
    content: {
        // Added margin bottom as content was hidden below the bottom menu
        marginBottom: 95
    },
    // View containg two buttons
    viewTwo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6,
    },
    // Text for two buttons section
    textTwo: {
        height: 60,
        fontSize: 20,
        borderRadius: 10,
        textAlign: "center",
        lineHeight: 60,
        overflow: "hidden",
        fontWeight: "600",
    },
    // TouchableOpacity for two buttons section
    touchableTwo: {
        borderRadius: 10,
        width: "49%",
    },
})

export default PlayStyles
