import { StyleSheet } from "react-native"

const LuckspinStyles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: "center",
    },
    top: {
        paddingTop: 50,
    },
    viewTwo: {
        paddingTop: 50,
        margin: 12
    },
    viewTwoLogin: {
        paddingTop: 30,
        margin: 12
    },
    spacedRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textTwo: {
        height: 50,
        fontSize: 20,
        borderRadius: 10,
        textAlign: "center",
        lineHeight: 50,
        overflow: "hidden",
        fontWeight: "600",
    },
    textTwoTouchable: {
        width: "48.5%",
        height: 50,
        fontSize: 20,
        borderRadius: 10,
        textAlign: "center",
        lineHeight: 50,
        overflow: "hidden",
        fontWeight: "600",
    },
    inputText: {
        alignSelf: "center",
        alignItems: "center",
        width: "100%",
        height: 50,
        borderRadius: 10,
        marginBottom: 12,
        fontSize: 20
    },
})

export default LuckspinStyles