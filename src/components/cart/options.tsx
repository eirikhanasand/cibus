import { Navigation } from "@interfaces";
import { useNavigation } from "@react-navigation/native";
import { setCart } from "@redux/slices/cart";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import OptionStyles from "./optionStyles";
import { setBookmarks } from "@redux/slices/bookmarks";

type ButtonProps = {
    text: string
    type : 'pay' | 'reset'
}

export default function Options() {
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { cart } = useSelector((state: ReduxState) => state.cart)

    if (!cart.length) return <View />

    return (
        <View style={{flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10, marginTop: -10, marginBottom: 50 + cart.length}}>
            <Button text={lang ? "Nullstill" : "Reset"} type="reset" />
            <Button text={lang ? "Betal" : "Pay"} type="pay" />
        </View>
    )
}

function Button({text, type}: ButtonProps) {
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const { bookmarks } = useSelector((state: ReduxState) => state.bookmarks)
    const { cart } = useSelector((state: ReduxState) => state.cart)
    const navigation: Navigation = useNavigation()
    const dispatch = useDispatch()
    
    function handlePress() {
        switch (type) {
            case 'pay':     handlePay();    break;
            case 'reset':   handleReset();  break;
        }
    }

    function handlePay() {
        // Removes bookmarks once purchased
        dispatch(setBookmarks(bookmarks.filter((bookmark) => !cart.includes(bookmark))))
        /**
         * Payment logic would have been here, but due to the scope of the
         * assignment it was skipped. I figured it would add a lot of confusion
         * if items disappeared and could not be added back when testing the
         * application. My plan was to add a payment option here that would send
         * a put signal to the database and remove the items. I also skipped the
         * payment complete screen, as that was not the scope of the assignment
         * either.
         */
        dispatch(setCart([]))
        // navigation.navigate('LandingScreen')
    }

    function handleReset() {
        dispatch(setCart([]))
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={{...OptionStyles.view, backgroundColor: theme.darker}}>
                <Text style={{...OptionStyles.text, color: theme.contrast}}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}