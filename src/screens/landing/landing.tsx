import { SafeAreaView, ScrollView } from 'react-native'
import { LandingStyles } from "@screens/landing/landingStyles"
import CustomStatusBar from '@components/shared/default/defaultComponents'
import Welcome from '@components/landing/welcome'
import Ads from '@components/landing/ads'
import { useDispatch, useSelector } from 'react-redux'
import AdList from '@components/landing/adList'
import { useEffect } from 'react'
import fetchAds from '@utils/fetchAds'
import { setAds } from '@redux/slices/ad'
import { setCategories } from '@redux/slices/categories'
import fetchCategories from '@utils/fetchCategories'
import Similar from '@components/cart/similar'

export default function LandingScreen(): JSX.Element {
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const { highlighted } = useSelector((state: ReduxState) => state.search)
    const dispatch = useDispatch()

    useEffect(() => {
        async function getAds() {
            const ads = await fetchAds()

            if (ads) {
                dispatch(setAds(ads))
            }
        }

        async function getCategories() {
            const categories = await fetchCategories()

            if (categories) {
                dispatch(setCategories(categories))
            }
        }
        
        getAds()
        getCategories()
    }, [])

    return (
        <SafeAreaView style={{
                ...LandingStyles.content, 
                backgroundColor: theme.content
            }}>
            <CustomStatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                {!highlighted &&
                <>
                    <Welcome />
                    <Ads />
                    <Similar screen='landing' />
                </>}
                {highlighted && <AdList />}
            </ScrollView>
        </SafeAreaView>
    )
}
