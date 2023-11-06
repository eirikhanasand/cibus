import getTotal from "@utils/getCart";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import CartStyles from "./cartStyles";

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
        <View style={CartStyles.cartView}>
            <Text style={{...CartStyles.confirmationText, color: theme.contrast}}>
                {lang ? "I handlevognen" : "In cart"}
                </Text>
            <View style={{...CartStyles.innerCartView, backgroundColor: theme.card}}>
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
        <View style={CartStyles.cartHeaderView}>
            <Text style={{...CartStyles.cartHeaderText, color: theme.contrast}}>
                {lang ? "Gjenstand" : "Item"}
            </Text>
            <View style={CartStyles.cartHeaderInnerView}>
                <Text style={{...CartStyles.innerTextOne, color: theme.contrast}}>
                    {lang ? "Antall" : "Amount"}
                </Text>
                <Text style={{...CartStyles.innerTextTwo, color: theme.contrast}}>
                    {lang ? "Pris" : "Price"}
                </Text>
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
        <View style={CartStyles.footer}>
            <Text style={{...CartStyles.total, color: theme.contrast}}>
                {lang ? "Totalt" : "Total"}
            </Text>
            <View style={CartStyles.footerRight}>
                <Text />
                <Text style={{fontSize: 18, color: theme.contrast}}>
                    {total} kr
                </Text>
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
        <View style={CartStyles.footer}>
            <Text style={{fontSize: 18, color: theme.contrast}}>{ad.title}</Text>
            <View style={CartStyles.itemRight}>
                <Text style={{...CartStyles.footerAmount, color: theme.contrast}}>1</Text>
                <Text style={{fontSize: 18, color: theme.contrast}}>{ad.price} kr</Text>
            </View>
        </View>
    )
}