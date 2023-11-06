import Bookmark from "@components/bookmarks/bookmark";
import AdList from "@components/landing/adList";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import BookmarkStyles from "./bookmarkStyles";

export default function BookmarkScreen() {
    const { bookmarks } = useSelector((state: ReduxState) => state.bookmarks)
    const { highlighted } = useSelector((state: ReduxState) => state.search)
    const { ads } = useSelector((state: ReduxState) => state.ad)
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const items = ads.filter((ad) => bookmarks.includes(ad.id))

    if (!bookmarks.length) return <View style={{...BookmarkStyles.errorView, backgroundColor: theme.content}}>
        <Text style={{...BookmarkStyles.errorText, color: theme.contrast}}>{lang ? "Du finner bokmerkene dine her." : "You find your bookmarks here."}</Text>
    </View>

    return (
        <View style={{...BookmarkStyles.view, backgroundColor: theme.content, paddingTop: highlighted ? 40 : 100}}>
            {!highlighted && items.map((bookmark) => <Bookmark key={bookmark.id} ad={bookmark} />)}
            {highlighted && <AdList />}
        </View>
    )
}
