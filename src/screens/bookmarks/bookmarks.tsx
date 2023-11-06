import Bookmark from "@components/bookmarks/bookmark";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function BookmarkScreen() {
    const { bookmarks } = useSelector((state: ReduxState) => state.bookmarks)
    const { ads } = useSelector((state: ReduxState) => state.ad)
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const items = ads.filter((ad) => bookmarks.includes(ad.id))

    if (!bookmarks.length) return <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: theme.content}}>
        <Text style={{fontSize: 18, fontWeight: "600", color: theme.contrast}}>{lang ? "Du finner bokmerkene dine her." : "You find your bookmarks here."}</Text>
    </View>

    return (
        <View style={{backgroundColor: theme.content, flex: 1, paddingTop: 100, padding: 10}}>
            {items.map((bookmark) => <Bookmark ad={bookmark} />)}
        </View>
    )
}
