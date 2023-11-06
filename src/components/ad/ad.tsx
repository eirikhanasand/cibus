import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import AdStyles from "./adStyles"
import BookmarkIcon from "@components/bookmarks/bookmarkIcon"
import { setCart } from "@redux/slices/cart"

type RowProps = {
    left: string
    right: string
}

/**
 * Displays the enitre ad with all related content
 * @returns Ad component
 */
export default function Ad() {
    const { ad } = useSelector((state: ReduxState) => state.ad)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const title = lang ? ad.title_no : ad.title_en

    return (
        <View style={{top: 50}}>
            <View style={{backgroundColor: theme.card, margin: 10, padding: 10, borderRadius: 10}}>
                <View style={{zIndex: 100}}>
                    <BookmarkIcon id={ad.id} />
                </View>
                <ScrollView 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false}
                    style={{marginBottom: 10}}
                >
                    {ad.images.map((image) => <Image 
                        key={image}
                        source={{uri: image}} 
                        style={{
                            width: Dimensions.get("window").width * 5.55 / 6.5,
                            height: Dimensions.get("window").width * 5.6 / 6.5 * 0.6,
                            resizeMode: "stretch",
                            marginRight: 10,
                            overflow: "hidden",
                            borderRadius: 15
                        }} 
                    />)}
                </ScrollView>
                <Text style={{color: theme.contrast, fontSize: 24, fontWeight: "600"}}>{title}</Text>
                <Row left={lang ? "Pris" : "Price"} right={`${ad.price}`} />
                <Row left={lang ? "Sted" : "Location"} right={`${ad.location}`} />
            </View>
            <Contact />
            <Action />
        </View>
    )
}

/**
 * Displays id, name and phone number of the seller
 * @returns Contact component
 */
function Contact() {
    const { ad } = useSelector((state: ReduxState) => state.ad)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { theme } = useSelector((state: ReduxState) => state.theme)

    return (
        <View style={{backgroundColor: theme.card, margin: 10, marginTop: 0, padding: 10, borderRadius: 10}}>
            <Text style={{color: theme.contrast, fontSize: 20, marginBottom: 10, fontWeight: "600"}}>{lang ? "Selger" : "Seller"}:</Text>
            <Row left="ID" right={`${ad.seller.id}`} />
            <Row left={lang ? "Navn" : "Name"} right={`${ad.seller.name}`} />
            <Row left={lang ? "Tlf" : "Phone"} right={`${ad.seller.phone}`} />
        </View>
    )
}

function Row({left, right}: RowProps) {
    const { theme } = useSelector((state: ReduxState) => state.theme)

    return (
        <View style={AdStyles.rowView}>
            <Text style={{...AdStyles.sellerText, color: theme.contrast}}>{left}:</Text>
            <Text style={{...AdStyles.sellerText, color: theme.contrast}}>{right}</Text>
        </View>
    )
}

function Action() {
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const { cart } = useSelector((state: ReduxState) => state.cart)
    const { ad } = useSelector((state: ReduxState) => state.ad)
    const inCart = cart.includes(ad.id)
    const text = lang 
        ? inCart 
            ? "Lagt til i handlevognen" 
            : "Legg til i handlevognen"
        : inCart 
            ? "In cart"
            : "Add to cart"
    const dispatch = useDispatch()

    function handlePress() {
        dispatch(setCart([...cart, ad.id]))
    }


    if (inCart) return (
        <View style={{...AdStyles.actionView, backgroundColor: theme.card}}>
            <Text style={{color: theme.contrast, fontSize: 20, fontWeight: "600"}}>{text}</Text>
        </View>
    )

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={{...AdStyles.actionView, backgroundColor: theme.darker}}>
                <Text style={{...AdStyles.actionText, color: theme.contrast}}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}