import { StyleSheet } from "react-native"

export const HeaderStyles = StyleSheet.create({
    // Menu icon in header
    menu: {
        width: 35,
        aspectRatio: 1/1,
        alignSelf: 'center',
        left: -20
    },
    menuWithItems: {
        width: 35,
        aspectRatio: 1/1,
        alignSelf: 'center',
        left: -20,
    },
    menuIcon: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        left: 10,
    },
    // Text logo in header
    logo: {
        fontSize: 28,
        fontWeight: "700",
        marginLeft: "4%",
        justifyContent: 'center'
    },
    logoWithItems: {
        fontSize: 20,
        fontWeight: "700",
        alignSelf: "center",
        marginLeft: "4%",
        justifyContent: 'center'
    },
    // Background of header
    headerContent: {
        position: "absolute",
        width: "100%",
        paddingTop: 50,
        height: 95,
        zIndex: 1,
        top: 0,
    },
    // Row to horizontally align content of the header
    headerRow: {
        flexDirection: "row", 
        justifyContent: "space-between",
    }
})
