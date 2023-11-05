import CategoryStyles from "@components/categories/categoryStyles"
import { Text, TouchableOpacity, View } from "react-native"
import { Card } from "@components/shared/default/defaultComponents"
import { Navigation } from "@interfaces"
import React, { useEffect, useState } from "react"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { setAnimate } from "@redux/slices/animate"

type AdContentProps = {
    titles: string[]
}

type AdProps = {
    title: string
}

export default function CategoryScreen(): JSX.Element {
    const [color, setColor] = useState("")
    const { animate } = useSelector((state: ReduxState) => state.animate)
    const { category } = useSelector((state: ReduxState) => state.category)
    const dispatch = useDispatch()
    const { lang } = useSelector((state: ReduxState) => state.lang)
    const categories = lang ? category.categories_no :category.categories_en

    useFocusEffect(() => {
        if (animate) {
            setColor("#fd8738")
            setTimeout(() => {
                setColor("")
            }, 500)
        }
        dispatch(setAnimate(false))
    })

    useEffect(() => {
        setColor("#fd8738")
        setTimeout(() => {
            setColor("")
        }, 500)
    }, [category])

    return (
        <View style={CategoryStyles.content}>
            {categories.map((category) => (
                <Card 
                    key={category.title}
                    title={category.title} 
                >
                    <CategoryContent
                        titles={category.subcategories}
                    />
                </Card>
                ))}
        </View>
    )
}

function CategoryContent({titles}: AdContentProps): JSX.Element {
    return (
        <>
            {titles.map((title, index) => {
                if (index % 2 == 0) {
                    return (
                        <View key={title} style={CategoryStyles.viewTwo}>
                            <Ad title={title} />
                            <Ad title={titles[index+1]} />
                        </View>
                    )
                }
            })}
        </>
    )
}

function Ad({title}: AdProps) {
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const navigation: Navigation = useNavigation()
    const dispatch = useDispatch()

    function handleClick() {
        let screen = ""

        switch (title) {
            case "LUCKSPIN":    screen = "LuckspinScreen";  break
            case "JACKPOT":     screen = "JackpotScreen";   break
            default:            screen = "DefaultScreen";   break
        }

        dispatch(setAnimate(false))
        navigation.navigate(screen)
    }

    if (title) return (
        <TouchableOpacity 
            key={title}
            onPress={handleClick}
            style={{
                ...CategoryStyles.touchableTwo, 
                backgroundColor: theme.green
            }}
        >
            <Text key={title} style={{
                ...CategoryStyles.textTwo, 
                color: theme.contrast, 
                backgroundColor: theme.green
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
