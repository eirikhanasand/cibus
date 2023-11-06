import { StyleSheet } from "react-native"

const AdStyles = StyleSheet.create({
    sellerText: {
        fontSize: 18
    },
    rowView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    actionView: {
        margin: 10, 
        marginTop: 0, 
        height: 50, 
        borderRadius: 15, 
        justifyContent: "center", 
        alignItems: "center"
    },
    actionText: {
        fontSize: 20, 
        fontWeight: "600"
    }
})

export default AdStyles
