import AdStyles from "@components/landing/adStyles"
import { Text, TouchableOpacity, View } from "react-native"
import { Card } from "@components/shared/default/defaultComponents"
import { useDispatch, useSelector } from "react-redux"
import { setAnimate } from "@redux/slices/animate"
import { setSearchHighlighted } from "@redux/slices/search"
import { setClickedCategories } from "@redux/slices/categories"

type AdContentProps = {
    titles: string[]
}

export default function Ads(): JSX.Element {
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const dispatch = useDispatch()
    dispatch(setAnimate(true))

    const titlesNO = {
        two: ["Gensere", "Bukser"],
        three: ["Sko", "T-skjorter", "Alle klær"]
    }

    const titlesEN = {
        two: ["Sweaters", "Pants"],
        three: ["Shoes", "Shirts", "All clothes"]
    }

    const titles = lang ? titlesNO : titlesEN
    
    return (
        <Card title={lang ? "Klær" : "Clothes"}>
            <AdContent titles={titles.two} />
            <AdContent titles={titles.three} />
        </Card>
    )
}

function AdContent({titles}: AdContentProps): JSX.Element {
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { clickedCategories } = useSelector((state: ReduxState) => state.category) 
    const dispatch = useDispatch()

    const klær = {
        "title": "Klær",
        "subcategories": [
            "Genser",
            "Bukser",
            "Sko",
            "T-skjorte",
            "Kjole",
            "Shorts"
        ]
    }

    const clothes = {
        "title": "Clothes",
        "subcategories": [
            "Sweater",
            "Pants",
            "Shoes",
            "T-shirts",
            "Dresses",
            "Shorts"
        ]
    }

    function handlePress() {
        dispatch(setSearchHighlighted(true))
        dispatch(setClickedCategories({
            categories_no: lang ? [...clickedCategories.categories_no, klær] : clickedCategories.categories_no,
            categories_en: !lang ? [...clickedCategories.categories_en, clothes] : clickedCategories.categories_en
        }))
    }

    if (titles.length === 3) {
        return (
            <View style={AdStyles.viewThree}>
                {titles.map((title) => (
                    <TouchableOpacity
                        key={title}
                        onPress={handlePress}
                        style={{
                        ...AdStyles.touchableThree, 
                        backgroundColor: theme.green
                        }}
                    >
                        <Text key={title} style={{
                            ...AdStyles.textThree, 
                            color: theme.contrast, 
                            backgroundColor: theme.green
                        }}>
                            {title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    } else {
        return (
            <View style={AdStyles.viewTwo}>
                {titles.map((title) => (
                    <TouchableOpacity
                        key={title}
                        onPress={handlePress}
                        style={{
                            ...AdStyles.touchableTwo, 
                            backgroundColor: theme.green
                        }}
                    >
                        <Text key={title} style={{
                            ...AdStyles.textTwo, 
                            color: theme.contrast, 
                            backgroundColor: theme.green
                        }}>
                            {title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }
}