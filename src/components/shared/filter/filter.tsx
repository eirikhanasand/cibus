import { TextInput, useColorScheme } from "react-native";
import filterStyles from "./filterStyles"
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "@redux/slices/search";
import DarkTheme from "@themes/darkTheme"
import LightTheme from "@themes/lightTheme"

export default function Filter() {
    const textInputRef = useRef<TextInput | null>(null)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const dispatch = useDispatch()
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

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