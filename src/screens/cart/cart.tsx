import { SafeAreaView, ScrollView } from 'react-native'
import CartStyles from "@screens/cart/cartStyles"
import CustomStatusBar from '@components/shared/default/defaultComponents'
import { useSelector } from 'react-redux'
import Cart from '@components/cart/cart'
import Similar from '@components/cart/similar'
import Options from '@components/cart/options'
import AdList from '@components/landing/adList'

export default function CartScreen(): JSX.Element {
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const { highlighted } = useSelector((state: ReduxState) => state.search)

    return (
        <SafeAreaView style={{
            ...CartStyles.content, 
            backgroundColor: theme.content
        }}>
            <CustomStatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                {!highlighted && <>
                    <Cart />
                    <Similar screen='cart' />
                    <Options />
                </>}
                {highlighted && <AdList />}
            </ScrollView>
        </SafeAreaView>
    )
}
