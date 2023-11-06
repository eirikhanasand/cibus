import { setBookmarks } from "@redux/slices/bookmarks";
import { Image, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

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
        <TouchableOpacity 
            style={{height: 40, width: 40, position: "absolute", zIndex: 5, right: 0, top: 5}} 
            onPress={handlePress}
        >
            <View>
                <Image style={{height: 40, width: 40}} source={bookmark}/>
            </View>
        </TouchableOpacity>
    )
}