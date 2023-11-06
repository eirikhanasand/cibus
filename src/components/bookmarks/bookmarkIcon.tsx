import { setBookmarks } from "@redux/slices/bookmarks";
import { Image, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BookmarkStyles from "./bookmarkStyles";

type BookmarkIconProps = {
    id: number
}

export default function BookmarkIcon({id}: BookmarkIconProps) {
    const { bookmarks } = useSelector((state: ReduxState) => state.bookmarks)
    const { value } = useSelector((state: ReduxState) => state.theme)
    const unchecked = value ? require('@assets/bookmark.png') : require('@assets/bookmark-black.png')
    const checked = require('@assets/bookmark-yellow.png')
    const highlighted = bookmarks.includes(id)
    const bookmark = highlighted ? checked : unchecked
    const dispatch = useDispatch()

    function handlePress() {
        if (highlighted) {
            dispatch(setBookmarks(bookmarks.filter((bookmark) => bookmark !== id)))
        } else {
            dispatch(setBookmarks([...bookmarks, id]))
        }
    }

    return (
        <TouchableOpacity style={BookmarkStyles.touchable} onPress={handlePress}>
            <View>
                <Image style={BookmarkStyles.touchableImage} source={bookmark}/>
            </View>
        </TouchableOpacity>
    )
}