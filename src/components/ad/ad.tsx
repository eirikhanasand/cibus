import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import AdStyles from "./adStyles"

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
    const { theme } = useSelector((state: ReduxState) => state.theme)

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
            <View style={{backgroundColor: theme.darker, margin: 10, padding: 10, borderRadius: 10}}>
                <Text style={{color: theme.contrast, fontSize: 24, fontWeight: "600"}}>{ad.title}</Text>
                <Row left={lang ? "Pris" : "Price"} right={`${ad.price}`} />
                <Row left={lang ? "Sted" : "Location"} right={`${ad.location}`} />
            </View>
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
    const { theme } = useSelector((state: ReduxState) => state.theme)

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
        <View style={{backgroundColor: theme.darker, margin: 10, marginTop: 0, padding: 10, borderRadius: 10}}>
            <Text style={{color: theme.contrast, fontSize: 20, marginBottom: 10, fontWeight: "600"}}>{lang ? "Selger" : "Seller"}:</Text>
            <Row left="ID" right={`${ad.seller.id}`} />
            <Row left={lang ? "Navn" : "Name"} right={`${ad.seller.name}`} />
            <Row left={lang ? "Tlf" : "Phon"} right={`${ad.seller.phone}`} />
        </View>
    )
}

function Row({left, right}: RowProps) {
    const { theme } = useSelector((state: ReduxState) => state.theme)

    return (
        <View style={AdStyles.rowView}>
            <Text style={{...AdStyles.sellerText, color: theme.contrast}}>{left}:</Text>
            <Text style={{...AdStyles.sellerText, color: theme.contrast}}>{right}</Text>
        </View>
    )
}
