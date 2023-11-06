import { Image, Text, TouchableOpacity, View } from "react-native"
import HeaderStyles from "@nav/headerStyles"
import { useNavigation, useRoute } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { setLang } from "@redux/slices/lang"
import { setTheme } from "@redux/slices/theme"
import Filter from "@components/shared/filter/filter"
import CategoryFilter from "@components/shared/filter/categoryFilter"
import { setCategories } from "@redux/slices/categories"
import { setFilter, setSearchHighlighted } from "@redux/slices/search"

type IconValue = "globe" | "theme" | "filter"

export default function Header(): JSX.Element {
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const { highlighted } = useSelector((state: ReduxState) => state.search)
    const dispatch = useDispatch()
    const gobackLogo = require("@assets/goback777.png")

    // Get the navigation object
    const navigation = useNavigation()
        
    // Get the route object
    const route = useRoute()

    // Check if the active screen is nested
    function isNested(): boolean {

        // All nested routes will be added here as they are implemented
        switch (route.name) {
            case "LuckspinScreen": return true
            case "JackpotScreen": return true
        }

        return false
    }

    // Function to go back
    function goBack(): void {
        if (highlighted) {
            dispatch(setSearchHighlighted(false))
        } else {
            navigation.goBack()
        }
    }

    // Allow the user to go back if they are inside a nested screen
    function GobackView(): JSX.Element {
        return (
            <TouchableOpacity onPress={goBack}>
                <Image style={HeaderStyles.menuIcon} source={gobackLogo} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={{
                ...HeaderStyles.headerContent, 
                backgroundColor: theme.darker
            }}>
            <View style={HeaderStyles.headerRow}>
                {isNested() && <GobackView />}
                {highlighted && <GobackView />}
                <Filter />
                <HeaderIcons />
            </View>
        </View>
    )
}

/**
 * Renders all icons of the header
 */
function HeaderIcons() {
    const { highlighted } = useSelector((state: ReduxState) => state.search)

    return (
        <View style={HeaderStyles.headerRow}>
            {!highlighted && <>
                <HeaderIcon type="theme" />
                <HeaderIcon type="globe" />
            </>}
            {highlighted && <HeaderIcon type="filter" />}
        </View>
    )
}

/**
 * Renders icon of the header
 * @param {string} type globe or theme 
 */
function HeaderIcon({type}: {type: IconValue}) {
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { filter } = useSelector((state: ReduxState) => state.search)
    const { theme, value } = useSelector((state: ReduxState) => state.theme)
    const dispatch = useDispatch()
    const globe = require("@assets/globe.png")
    const globeLight = require("@assets/globelight.png")
    const sun = require("@assets/sun.png")
    const moon = require("@assets/moon.png")
    const langIcon = value ? globeLight : globe
    const themeIcon = value ? sun : moon
    const filterIcon = filter ? require("@assets/filter-green.png") : require("@assets/filter.png")
    const icon = type === "globe" ? langIcon : type === "theme" ? themeIcon : filterIcon

    function handlePress() {
        type === "globe" ? dispatch(setLang()) : type === "theme" ? dispatch(setTheme()) : dispatch(setFilter())
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={{flexDirection: "row"}}>
                <Image style={HeaderStyles.menu} source={icon} />
                {type === "globe" && <Text style={{color: theme.contrast, fontSize: 20, left: -20, top: 4}}>{lang ? "en" : "no"}</Text>}
            </View>
        </TouchableOpacity>
    )
}
