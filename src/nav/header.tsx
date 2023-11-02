import { Image, Text, TouchableOpacity, View, useColorScheme } from "react-native"
import { HeaderStyles } from "@nav/headerStyles"
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'
import { useNavigation, useRoute } from "@react-navigation/native"
import { useSelector } from "react-redux"

export default function LandingHeader(): JSX.Element {
    const { name } = useSelector((state: ReduxState) => state.name)
    const { login } = useSelector((state: ReduxState) => state.login)
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme
    const ageLimit = require("@assets/18.png")
    const logo = require("@assets/cibusnbg.png")
    const gobackLogo = require("@assets/goback777.png")
    const Name = name.length > 12 ? `${name.slice(0, 12)}...` : name

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
                        <Image style={HeaderStyles.menu} source={ageLimit} />
                    </>
                    : <>
                        <View style={{flexDirection: "row"}}>
                            <Image style={HeaderStyles.menuIcon} source={logo} />
                            <Text style={{ ...HeaderStyles.logoWithItems, color: theme.contrast }}>
                                Welcome, {Name}!
                            </Text>
                        </View>
                        <Image style={HeaderStyles.menuWithItems} source={ageLimit} />
                    </>
                }
            </View>
        </View>
    )
}
