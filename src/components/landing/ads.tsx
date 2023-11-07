import AdStyles from "@components/landing/adStyles"
import { Text, TouchableOpacity, View } from "react-native"
import { Card } from "@components/shared/default/defaultComponents"
import { useDispatch, useSelector } from "react-redux"
import { setSearchHighlighted } from "@redux/slices/search"
import { setClickedCategories } from "@redux/slices/categories"

type AdContentProps = {
    items: SubCatArray[]
    hasAll?: boolean
}

export default function Ads(): JSX.Element {
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { category } = useSelector((state: ReduxState) => state.category)
    const catTwo = lang 
        ? category.categories_no.slice(0, 2) 
        : category.categories_en.slice(0, 2)

    const catThree = lang 
    ? category.categories_no.slice(2, 4)
    : category.categories_en.slice(2, 4)

    return (
        <Card title={lang ? "Kategorier" : "Categories"}>
            <AdContent items={catTwo} />
            <AdContent items={catThree} hasAll={true} />
        </Card>
    )
}

function AdContent({items, hasAll}: AdContentProps): JSX.Element {
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const { clickedCategories } = useSelector((state: ReduxState) => state.category) 
    const dispatch = useDispatch()

    const All: SubCatArray = {
        title: lang ? "Vis flere" : "Show more",
        subcategories: []
    }

    if (hasAll) items.push(All)

    function handlePress(item: SubCatArray) {
        dispatch(setSearchHighlighted(true))
        dispatch(setClickedCategories({
            categories_no: lang ? [...clickedCategories.categories_no, item] : clickedCategories.categories_no,
            categories_en: !lang ? [...clickedCategories.categories_en, item] : clickedCategories.categories_en
        }))
    }

    if (hasAll) {
        return (
            <View style={AdStyles.viewThree}>
                {items.map((item) => (
                    <TouchableOpacity
                        key={item.title}
                        onPress={() => handlePress(item)}
                        style={{
                        ...AdStyles.touchableThree, 
                        backgroundColor: theme.green
                        }}
                    >
                        <Text key={item.title} style={{
                            ...AdStyles.textThree, 
                            color: theme.contrast, 
                            backgroundColor: theme.green
                        }}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    } else {
        return (
            <View style={AdStyles.viewTwo}>
                {items.map((item) => (
                    <TouchableOpacity
                        key={item.title}
                        onPress={() => handlePress(item)}
                        style={{
                            ...AdStyles.touchableTwo, 
                            backgroundColor: theme.green
                        }}
                    >
                        <Text key={item.title} style={{
                            ...AdStyles.textTwo, 
                            color: theme.contrast, 
                            backgroundColor: theme.green
                        }}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }
}