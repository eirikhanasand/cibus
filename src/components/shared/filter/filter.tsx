import { Dimensions, TextInput } from "react-native";
import filterStyles from "./filterStyles"
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setSearchHighlighted } from "@redux/slices/search";

export default function Filter() {
    const textInputRef = useRef<TextInput>(null)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const { highlighted, filter } = useSelector((state: ReduxState) => state.search)
    const dispatch = useDispatch()

    if (textInputRef.current && !highlighted) {
        textInputRef.current.blur()
    }

    function handleFocus() {
        dispatch(setSearchHighlighted(true))
    }

    return (
        <TextInput
            ref={textInputRef}
            style={{...filterStyles.parent, backgroundColor: theme.content, left: highlighted ? -10 : 0,  paddingLeft: highlighted ? 0 : 10, color: theme.contrast, width: highlighted ? Dimensions.get('window').width / 1.4 : Dimensions.get('window').width / 1.5}}
            maxLength={40}
            placeholder={lang ? "Søk.." : "Search.."}
            placeholderTextColor={theme.contrast}
            textAlign="left"
            onChangeText={(val) => dispatch(setSearch(val))}
            selectionColor='#fd8738'
            onFocus={handleFocus}
            onEndEditing={() => !filter && dispatch(setSearchHighlighted(false))}
        />
    )
}
