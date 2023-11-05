import { SafeAreaView, ScrollView } from 'react-native'
import { LandingStyles } from "@screens/landing/landingStyles"
import CustomStatusBar from '@components/shared/default/defaultComponents'
import Ad from '@components/ad/ad'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import fetchAds from '@utils/fetchAds'
import { setAds } from '@redux/slices/ad'

export default function AdScreen(): JSX.Element {
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const dispatch = useDispatch()

    useEffect(() => {
        async function getAds() {
            const ads = await fetchAds()

            if (ads) {
                dispatch(setAds(ads))
            }
        }
        
        getAds()
    }, [])

    return (
        <SafeAreaView style={{
                ...LandingStyles.content, 
                backgroundColor: theme.content
            }}>
            <CustomStatusBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Ad />
            </ScrollView>
        </SafeAreaView>
    )
}