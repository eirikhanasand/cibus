import { StyleSheet } from "react-native"

const BookmarkStyles = StyleSheet.create({
    touchable: {
        height: 40, 
        width: 40, 
        position: "absolute", 
        zIndex: 5, 
        right: 0, 
        top: 5
    },
    touchableImage: {
        height: 40, 
        width: 40
    },
    view: {
        marginBottom: 10
    },
    innerView: {
        flexDirection: "row"
    },
    innerViewImage: {
        height: 50, 
        width: 100
    }
})

export default BookmarkStyles
