import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import SimilarStyles from "./similarStyles"
import { useDispatch, useSelector } from "react-redux"
import getSimilar from "@utils/getSimilar"
import { setCart } from "@redux/slices/cart"
import BookmarkIcon from "@components/bookmarks/bookmarkIcon"
import { setAd } from "@redux/slices/ad"
import { Navigation } from "@interfaces"
import { useNavigation } from "@react-navigation/native"

type SimilarProps = {
    screen: string
}

type ImageCarouselProps = {
    similar: Ad[]
    direct?: boolean
}

/**
 * JSX Element containing the sport images with text found on the landing screen.
 * @returns Relevant section
 */
export default function Similar({screen}: SimilarProps): JSX.Element {
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const { ad, ads } = useSelector((state: ReduxState) => state.ad)
    const { cart } = useSelector((state: ReduxState) => state.cart)
    const itemsInCart = ads.filter((ad) => cart.includes(ad.id))
    let similar = getSimilar(itemsInCart, lang)
    const doubleCarousel = screen === 'landing'
    const top = screen === 'cart' ? cart.length ? 50 : 25 : 0
    const similarTwo = [...similar]
    const similarThree = [...similar]

    let i = 0
    while (similar.length < 5 && i < ads.length) {
        if (!itemsInCart.some((item) => item.id === ads[i].id) 
            && !similar.some((item) => item.id === ads[i].id) 
            && ads[i].id !== ad.id) {
            similar.push(ads[i]);
            similarTwo.push(ads[i + 5])
            similarThree.push(ads[i + 10])
        }
        i++
    }

    return (
        <View style={{...SimilarStyles.content, top, marginBottom: screen === 'ad' ? 60 : 20}}>
            <Text style={{...SimilarStyles.title, color: theme.contrast}}>
                {lang ? "Anbefalt" : "Recommended"}
            </Text>
            <ImageCarousel similar={similar} direct={screen === 'cart' && true} />
            {(!cart.length || doubleCarousel) && <ImageCarousel similar={similarTwo} direct={screen === 'cart' && true} />}
            {!cart.length && screen === 'cart' && <ImageCarousel similar={similarThree} direct={screen === 'cart' && true} />}
        </View>
    )
}

function ImageCarousel({similar, direct}: ImageCarouselProps) {
    const { cart } = useSelector((state: ReduxState) => state.cart)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const navigation: Navigation = useNavigation()
    const dispatch = useDispatch()

    function handlePress(ad: Ad) {
        if (direct) {
            dispatch(setCart([...cart, ad.id]))
        } else {
            dispatch(setAd(ad))
            navigation.navigate('AdScreen')
        }
    }
    
    return (
        <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            style={{marginBottom: 10}}
        >
            {similar.map((ad) => (
                <TouchableOpacity key={ad.id.toString()} onPress={() => {handlePress(ad)}}>
                    <View style={SimilarStyles.imageView}>
                        <Text style={SimilarStyles.imageText}>
                            {lang ? ad.title_no : ad.title_en}
                        </Text>
                        <BookmarkIcon id={ad.id} />
                        <Text style={SimilarStyles.imageTextOpacity} />
                        <Image 
                            style={SimilarStyles.image}
                            source={{uri: ad.images[0]}} 
                        />
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}