import { Dimensions, StyleSheet } from 'react-native'

const DefaultStyles = StyleSheet.create({
    // Content of the default page
    content: {
        flex: 1,
        justifyContent: "center",
    },
    top: {
        paddingTop: Dimensions.get('window').height / 8,
    }
})

export default DefaultStyles
