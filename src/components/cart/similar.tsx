import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import RelevantStyles from "@components/landing/relevantStyles"
import { useDispatch, useSelector } from "react-redux"
import getSimilar from "@utils/getSimilar"
import { setCart } from "@redux/slices/cart"
import BookmarkIcon from "@components/bookmarks/bookmarkIcon"

/**
 * JSX Element containing the sport images with text found on the landing screen.
 * @returns Relevant section
 */
export default function Similar(): JSX.Element {
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const { ads } = useSelector((state: ReduxState) => state.ad)
    const { cart } = useSelector((state: ReduxState) => state.cart)
    const itemsInCart = ads.filter((ad) => cart.includes(ad.id))
    const similar = getSimilar(itemsInCart, lang)
    const similarTwo = [...similar]
    const similarThree = [...similar]

    let i = 0
    while (similar.length < 5 && i < ads.length) {
        if (!itemsInCart.some((item) => item.id === ads[i].id) && !similar.some((item) => item.id === ads[i].id)) {
            similar.push(ads[i]);
            similarTwo.push(ads[i + 5])
            similarThree.push(ads[i + 10])
        }
        i++
    }

    return (
        <View style={RelevantStyles.content}>
            <Text style={{...RelevantStyles.title, color: theme.contrast}}>
                {lang ? "Anbefalt" : "Recommended"}
            </Text>
            <ImageCarousel similar={similar} />
            {!cart.length && <ImageCarousel similar={similarTwo} />}
            {!cart.length && <ImageCarousel similar={similarThree} />}
        </View>
    )
}

function ImageCarousel({similar}: {similar: Ad[]}) {
    const { cart } = useSelector((state: ReduxState) => state.cart)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const dispatch = useDispatch()

    function handlePress(ad: Ad) {
        dispatch(setCart([...cart, ad.id]))
    }
    
    return (
        <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            style={{marginBottom: 10}}
        >
            {similar.map((ad) => (
                <TouchableOpacity key={ad.id.toString()} onPress={() => {handlePress(ad)}}>
                    <View style={RelevantStyles.imageView}>
                        <Text style={RelevantStyles.imageText}>
                            {lang ? ad.title_no : ad.title_en}
                        </Text>
                        <BookmarkIcon id={ad.id} />
                        <Text style={RelevantStyles.imageTextOpacity} />
                        <Image 
                            style={RelevantStyles.image}
                            source={{uri: ad.images[0]}} 
                        />
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}