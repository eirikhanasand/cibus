import getTotal from "@utils/getCart";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

type CartItemProps = {
    item: Ad
}
 
export default function Cart() {
    const { cart } = useSelector((state: ReduxState) => state.cart)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { ads } = useSelector((state: ReduxState) => state.ad)
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const cartItems = ads.filter((ad) => cart.includes(ad.id))

    if (!cart.length) return <View style={{marginTop: 10}} />

    return (
        <View style={{top: 50}}>
            <Text style={{fontSize: 24, fontWeight: "600", left: 10, top: 4, color: theme.contrast}}>{lang ? "I handlevognen" : "In cart"}</Text>
            <View style={{backgroundColor: theme.card, margin: 10, borderRadius: 10, padding: 10}}>
                <CartHeader />
                {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
                <CartFooter />
            </View>
        </View>
    )
}

function CartHeader() {
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { theme } = useSelector((state: ReduxState) => state.theme)

    return (
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={{fontSize: 18, fontWeight: "600", color: theme.contrast}}>{lang ? "Gjenstand" : "Item"}</Text>
            <View style={{flexDirection: "row", justifyContent: "space-between", width: "61%"}}>
                <Text style={{fontSize: 18, fontWeight: "600", textAlign: "right", width: "50%", color: theme.contrast}}>{lang ? "Antall" : "Amount"}</Text>
                <Text style={{fontSize: 18, fontWeight: "600", left: -20, color: theme.contrast}}>{lang ? "Pris" : "Price"}</Text>
            </View>
        </View>
    )
}

function CartFooter() {
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const { cart } = useSelector((state: ReduxState) => state.cart)
    const { ads } = useSelector((state: ReduxState) => state.ad)
    const total = getTotal(cart, ads).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')

    return (
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={{fontSize: 18, fontWeight: "600", color: theme.contrast}}>{lang ? "Totalt" : "Total"}</Text>
            <View style={{flexDirection: "row", justifyContent: "space-between", width: "61%"}}>
                <Text />
                <Text style={{fontSize: 18, color: theme.contrast}}>{total} kr</Text>
            </View>
        </View>
    )
}

function CartItem({item}: CartItemProps) {
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const ad = {
        title: lang ? item.title_no : item.title_en,
        price: item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
    }

    return (
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={{fontSize: 18, color: theme.contrast}}>{ad.title}</Text>
            <View style={{flexDirection: "row", justifyContent: "space-between", width: "48%"}}>
                <Text style={{fontSize: 18, textAlign: "right", width: "36%", color: theme.contrast}}>1</Text>
                <Text style={{fontSize: 18, color: theme.contrast}}>{ad.price} kr</Text>
            </View>
        </View>
    )
}