import BookmarkIcon from "@components/bookmarks/bookmarkIcon";
import CategoryFilter from "@components/shared/filter/categoryFilter";
import { Navigation } from "@interfaces";
import { useNavigation } from "@react-navigation/native";
import { setAd } from "@redux/slices/ad";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function AdList() {
    const { ads } = useSelector((state: ReduxState) => state.ad)
    const { filter } = useSelector((state: ReduxState) => state.search)

    return (
        <View style={{top: 60}}>
            {filter && <CategoryFilter />}
            {ads.map((ad) => <Ad key={ad.id} ad={ad}/>)}
        </View>
    )
}

function Ad({ad}: {ad: Ad}) {
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const navigation: Navigation = useNavigation()
    const dispatch = useDispatch()

    function handlePress() {
        dispatch(setAd(ad))
        navigation.navigate('AdScreen')
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={{marginBottom: 10}}>
                <View style={{flexDirection: "row"}}>
                    <Image style={{height: 50, width: 100}} source={{uri: ad.images[0]}} />
                    <View style={{left: 10}}>
                        <Text style={{color: theme.contrast, fontSize: 22}}>{lang ? ad.title_no: ad.title_en}</Text>
                        <Text style={{color: theme.contrast, fontSize: 15, top: 5}}>{ad.price} kr</Text>
                    </View>
                </View>
                <BookmarkIcon id={ad.id} />
            </View>
        </TouchableOpacity>
    )
}