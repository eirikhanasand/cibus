import { FooterProps } from '@interfaces'
import { RouteProp } from '@react-navigation/native'
import { View, Image, TouchableOpacity, useColorScheme } from 'react-native'
import { FooterStyles } from '@nav/footerStyles'
import LightTheme from '@themes/lightTheme.json'
import DarkTheme from '@themes/darkTheme.json'

export default function Footer({ state, descriptors, navigation }: FooterProps): 
JSX.Element {
    const isDark = useColorScheme() === 'dark'
    const theme = isDark ? DarkTheme : LightTheme
    return (
        <View style={{...FooterStyles.content, backgroundColor: theme.darker}}>
            {state.routes.map((route: RouteProp<RootStackParamList, any>, 
                index: number) => {
                const { options } = descriptors[route.key]
                
                if (!options.display) return

                const isFocused = state.index === index
                
                // Emitt the normal tab events
                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the
                        // params inside the tab screen are preserved
                        navigation.navigate(route.name, {merge: true})
                    }
                }

                if (!options.focusedIcon || !options.icon) return

                const onLongPress = () => {
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
