import { StyleSheet } from "react-native"

const CartStyles = StyleSheet.create({
    cartView: {
        top: 50
    },
    confirmationText: {
        fontSize: 24, 
        fontWeight: "600", 
        left: 10, 
        top: 4
    },
    innerCartView: {
        margin: 10, 
        borderRadius: 10, 
        padding: 10
    },
    cartHeaderView: {
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    cartHeaderText: {
        fontSize: 18, 
        fontWeight: "600"
    },
    cartHeaderInnerView: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        width: "61%"
    },
    innerTextOne: {
        fontSize: 18, 
        fontWeight: "600", 
        textAlign: "right",
         width: "50%"
    },
    innerTextTwo: {
        fontSize: 18, 
        fontWeight: "600", 
        left: -20
    },
    footer: {
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    total: {
        fontSize: 18, 
        fontWeight: "600"
    },
    footerRight: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "61%"
    },
    footerAmount: {
        fontSize: 18, 
        textAlign: "right", 
        width: "36%"
    },
    itemRight: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        width: "48%"
    }
})

export default CartStyles
