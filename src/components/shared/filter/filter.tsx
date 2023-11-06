import { Dimensions, TextInput } from "react-native";
import filterStyles from "./filterStyles"
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setSearchHighlighted } from "@redux/slices/search";

export default function Filter() {
    const textInputRef = useRef<TextInput | null>(null)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const { highlighted, filter } = useSelector((state: ReduxState) => state.search)
    const dispatch = useDispatch()

    return (
        <TextInput
            ref={textInputRef}
            style={{...filterStyles.parent, backgroundColor: theme.content, paddingLeft: 10, color: theme.contrast, width: highlighted ? Dimensions.get('window').width / 1.24 : Dimensions.get('window').width / 1.5}}
            maxLength={40}
            placeholder={lang ? "Søk.." : "Search.."}
            placeholderTextColor={theme.contrast}
            textAlign="left"
            onChangeText={(val) => dispatch(setSearch(val))}
            selectionColor='#fd8738'
            onFocus={() => dispatch(setSearchHighlighted(true))}
            onEndEditing={() => !filter && dispatch(setSearchHighlighted(false))}
        />
    )
}
