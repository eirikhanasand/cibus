import DarkTheme from "@themes/darkTheme"
import lightTheme from "@themes/lightTheme"
import { Text, View, useColorScheme } from "react-native"
import { useSelector } from "react-redux"
import AdStyles from "./ad"

type RowProps = {
    left: string
    right: string
}

/**
 * Displays the enitre ad with all related content
 * @returns Ad component
 */
export default function Ad() {
    // const { ad } = useSelector((state: ReduxState) => state.ad)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : lightTheme

    const ad = {
        title: "Overskrift",
        price: 400,
        location: "Stednavn, 4150 Rennesøy",
        seller: {
            id: 1,
            name: "Ola Normann",
            phone: 12345678
        }
    }

    return (
        <View style={{top: 50}}>
            <Text style={{color: theme.contrast, marginLeft: 10, marginTop: 10, fontSize: 20}}>{ad.title}</Text>
            <Text style={{color: theme.contrast}}>{lang ? "Pris" : "Sted"}: {ad.price}</Text>
            <Text style={{color: theme.contrast}}>{lang ? "Sted" : "Location"}: {ad.location}</Text>
            <Contact />
        </View>
    )
}

/**
 * Displays id, name and phone number of the seller
 * @returns Contact component
 */
function Contact() {
    // const { ad } = useSelector((state: ReduxState) => state.ad)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : lightTheme

    const ad = {
        title: "Overskrift",
        price: 400,
        location: "Stednavn, 4150 Rennesøy",
        seller: {
            id: 1,
            name: "Ola Normann",
            phone: 12345678
        }
    }

    return (
        <View style={{backgroundColor: theme.darker, margin: 10, padding: 10, borderRadius: 10}}>
            <Row left="ID" right={`${ad.seller.id}`} />
            <Row left={lang ? "Navn" : "Name"} right={`${ad.seller.name}`} />
            <Row left={lang ? "Tlf" : "Phon"} right={`${ad.seller.phone}`} />
        </View>
    )
}

function Row({left, right}: RowProps) {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : lightTheme

    return (
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Text style={{...AdStyles.sellerText, color: theme.contrast}}>{left}:</Text>
            <Text style={{...AdStyles.sellerText, color: theme.contrast}}>{right}</Text>
        </View>
    )
}
