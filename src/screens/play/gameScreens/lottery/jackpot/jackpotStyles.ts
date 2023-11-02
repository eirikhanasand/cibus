import { Dimensions, StyleSheet } from "react-native"

const JackpotStyles = StyleSheet.create({
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
        marginHorizontal: 12
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
    row: {
        fontSize: 20,
        fontWeight: '500',
    },
    ball: {
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 100
    },
    ballRow: {
        width: Dimensions.get('window').width - 48,
    },
    ballText: {
        textAlign: 'center',
        width: 25,
        height: 25,
        position: 'absolute',
        left: '19%',
        top: 8,
        fontSize: 20
    },
    parent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 45
    }
})

export default JackpotStyles