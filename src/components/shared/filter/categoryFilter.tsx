import { Dimensions, FlatList, TouchableOpacity, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CheckBox, CheckedBox, SmallCheck } from "./check";
import { setClickedCategories } from "@redux/slices/categories";

export default function CategoryFilter() {
    const { category, clickedCategories } = useSelector((state: ReduxState) => state.category)
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const categories = lang ? category.categories_no : category.categories_en
    const clicked = lang ? clickedCategories.categories_no: clickedCategories.categories_en
    const dispatch = useDispatch()

    function handleUnchecked(category: SubCatArray) {
        dispatch(setClickedCategories({
            categories_no: clickedCategories.categories_no.filter((cat) => cat.title !== category.title),
            categories_en: clickedCategories.categories_en.filter((cat) => cat.title !== category.title)
        }))
    }

    function handleChecked(category: SubCatArray) {
        dispatch(setClickedCategories({
            categories_no: lang ? [...clickedCategories.categories_no, category] : clickedCategories.categories_no,
            categories_en: !lang ? [...clickedCategories.categories_en, category] : clickedCategories.categories_en
        }))
    }

    return (
        <View>
            <FlatList
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                numColumns={3}
                keyExtractor={(item) => item.title}
                data={categories}
                renderItem={({item}) => (
                    <View style={{flexDirection: "row", left: "9%", top: 10, width: Dimensions.get("window").width / 3.1, alignItems: "center"}}>
                        {clicked.includes(item) ?
                            <TouchableOpacity onPress={() => handleUnchecked(item)}>
                                <View style={{width: Dimensions.get("window").width / 4.2}}>
                                    <Text style={{color: theme.contrast, left: 10}}>
                                        {item.title}
                                    </Text>
                                    <View style={{top: -1}}><CheckedBox /></View>
                                    <View><SmallCheck /></View>
                                </View>
                            </TouchableOpacity>
                        :
                            <TouchableOpacity onPress={() => handleChecked(item)}>
                                <View style={{width: Dimensions.get("window").width / 4.2}}>
                                    <Text style={{color: theme.contrast, left: 10}}>
                                        {item.title}
                                    </Text>
                                    <CheckBox />
                                </View>
                            </TouchableOpacity>
                        }
                    </View>
                )}
            />
        </View>
    )
}