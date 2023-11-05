import { Dimensions, StyleSheet } from "react-native"

const FilterStyles = StyleSheet.create({
    parent: {
        height: 30, 
        width: Dimensions.get('window').width / 1.5,
        marginLeft: 12,
        top: 2,
        borderRadius: 10
    }
})

export default FilterStyles
