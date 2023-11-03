import { Image, Text, TouchableOpacity, View, useColorScheme } from "react-native"
import HeaderStyles from "@nav/headerStyles"
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import { useNavigation, useRoute } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { setLang } from "@redux/slices/lang"
import { setTheme } from "@redux/slices/theme"

type IconValue = "globe" | "theme"

export default function Header(): JSX.Element {
    const { name } = useSelector((state: ReduxState) => state.name)
    const { login } = useSelector((state: ReduxState) => state.login)
    const logo = require("@assets/cibus.png")
    const gobackLogo = require("@assets/goback777.png")
    const Name = name.length > 12 ? `${name.slice(0, 12)}...` : name
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme

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
        navigation.goBack()
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
                {!name.length || !login
                    ? <>
                        <Text style={{ ...HeaderStyles.logo, color: theme.contrast }}>
                            Cibus
                        </Text>
                        <HeaderIcons />
                    </>
                    : <>
                        <View style={{flexDirection: "row"}}>
                            <Image style={HeaderStyles.menuIcon} source={logo} />
                            <Text style={{ ...HeaderStyles.logoWithItems, color: theme.contrast }}>
                                Welcome, {Name}!
                            </Text>
                        </View>
                        <HeaderIcons />
                    </>
                }
            </View>
        </View>
    )
}

/**
 * Renders all icons of the header
 */
function HeaderIcons() {
    return (
        <View style={HeaderStyles.headerRow}>
            <HeaderIcon type="theme" />
            <HeaderIcon type="globe" />
        </View>
    )
}

/**
 * Renders icon of the header
 * @param {string} type globe or theme 
 */
function HeaderIcon({type}: {type: IconValue}) {
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const dispatch = useDispatch()
    const globe = require("@assets/globe.png")
    const globeLight = require("@assets/globelight.png")
    const sun = require("@assets/sun.png")
    const moon = require("@assets/moon.png")
    const isDark = useColorScheme() === 'dark'
    const langIcon = isDark ? globeLight : globe
    const themeIcon = isDark ? sun : moon
    const icon = type === "globe" ? langIcon : themeIcon

    function handlePress() {
        type === "globe" ? dispatch(setLang()) : dispatch(setTheme())
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <View>
                <Image style={HeaderStyles.menu} source={icon} />
                {type === "globe" && <Text>{lang ? "en" : "no"}</Text>}
            </View>
        </TouchableOpacity>
    )
}