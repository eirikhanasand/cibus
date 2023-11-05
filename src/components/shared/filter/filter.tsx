import { TextInput } from "react-native";
import filterStyles from "./filterStyles"
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "@redux/slices/search";

export default function Filter() {
    const textInputRef = useRef<TextInput | null>(null)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const dispatch = useDispatch()

    return (
        <TextInput
            ref={textInputRef}
            style={{...filterStyles.parent, backgroundColor: theme.content, paddingLeft: 10, color: theme.contrast}}
            maxLength={40}
            placeholder={lang ? "Søk.." : "Search.."}
            placeholderTextColor={theme.contrast}
            textAlign="left"
            onChangeText={(val) => dispatch(setSearch(val))}
            selectionColor='#fd8738'
        />
    )
}