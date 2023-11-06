import { SafeAreaView, ScrollView } from 'react-native'
import CartStyles from "@screens/cart/cartStyles"
import CustomStatusBar from '@components/shared/default/defaultComponents'
import { useSelector } from 'react-redux'
import Cart from '@components/cart/cart'
import Similar from '@components/cart/similar'
import Options from '@components/cart/options'

export default function StatsScreen(): JSX.Element {
    const { theme } = useSelector((state: ReduxState) => state.theme)

    return (
        <SafeAreaView style={{
                ...CartStyles.content, 
                backgroundColor: theme.content
            }}>
            <CustomStatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Cart />
                <Similar />
                <Options />
            </ScrollView>
        </SafeAreaView>
    )
}
