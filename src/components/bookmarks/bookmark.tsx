import { Image, Text, TouchableOpacity, View } from "react-native";
import BookmarkStyles from "./bookmarkStyles";
import { useDispatch, useSelector } from "react-redux";
import BookmarkIcon from "./bookmarkIcon";
import { useNavigation } from "@react-navigation/native";
import { Navigation } from "@interfaces";
import { setAd } from "@redux/slices/ad";

type BookmarkProps = {
    ad: Ad
}

export default function Bookmark({ad}: BookmarkProps) {
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
                    <Image style={{backgroundColor: "blue", height: 50, width: 100}} source={{uri: ad.images[0]}} />
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