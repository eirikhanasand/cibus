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
    },
    contactView: {
        margin: 10, 
        marginTop: 0, 
        padding: 10, 
        borderRadius: 10
    },
    view: {
        top: 50
    },
    innerView: {
        margin: 10,
        padding: 10, 
        borderRadius: 10
    }
})

export default AdStyles
