import { StyleSheet } from "react-native"

export const HeaderStyles = StyleSheet.create({
    menu: {
        width: 35,
        height: 35,
        aspectRatio: 1/1,
        alignSelf: 'center',
        left: -20,
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
    headerContent: {
        position: "absolute",
        width: "100%",
        paddingTop: 50,
        height: 95,
        zIndex: 1,
        top: 0,
    },
    headerRow: {
        flexDirection: "row", 
        justifyContent: "space-between",
    }
})

export default HeaderStyles
