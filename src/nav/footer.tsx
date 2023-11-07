import { FooterProps } from '@interfaces'
import { RouteProp } from '@react-navigation/native'
import { View, Image, TouchableOpacity } from 'react-native'
import FooterStyles from '@nav/footerStyles'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchHighlighted } from '@redux/slices/search'
import { resetClicked } from '@redux/slices/categories'

export default function Footer({ state, descriptors, navigation }: FooterProps): 
JSX.Element {
    const { theme } = useSelector((state: ReduxState) => state.theme)
    const dispatch = useDispatch()

    return (
        <View style={{...FooterStyles.content, backgroundColor: theme.darker}}>
            {state.routes.map((route: RouteProp<RootStackParamList, any>, 
                index: number) => {
                const { options } = descriptors[route.key]
                
                if (!options.display) return

                const isFocused = state.index === index
                
                // Emitt the normal tab events
                function onPress() {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    })

                    dispatch(resetClicked())
                    dispatch(setSearchHighlighted(false))
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, {merge: true})
                    }
                }

                if (!options.focusedIcon || !options.icon) return

                function onLongPress() {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    })
                }

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused
                            ? { selected: true }
                            : {}}
                        style={FooterStyles.touchable}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >
                        <Image 
                            style={FooterStyles.menu} 
                            source={isFocused 
                                ? options.focusedIcon
                                : options.icon}
                        />
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}
