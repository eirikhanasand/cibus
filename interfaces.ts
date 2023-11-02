import { NavigationHelpers, ParamListBase } from "@react-navigation/native"
import { ImageSourcePropType } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { 
    BottomTabBarProps,
    BottomTabNavigationEventMap, BottomTabNavigationOptions
} from "@react-navigation/bottom-tabs/lib/typescript/src/types"

export interface ScreenProps {
    navigation: Navigation
}

export type Navigation = NavigationHelpers<ParamListBase, 
BottomTabNavigationEventMap>

export interface TabOptions extends BottomTabNavigationOptions {
    display?: boolean
    focusedIcon?: ImageSourcePropType
    icon?: ImageSourcePropType
}

export interface ExtendedDescriptor {
    options: TabOptions
}

export interface FooterProps 
extends Omit<BottomTabBarProps, 'descriptors'> {
    descriptors: Record<string, ExtendedDescriptor>
}

export interface LandingScreenProps extends FooterProps {
    route: RouteProp<RootStackParamList, 'LandingScreen'>
}

export interface PlayScreenProps extends FooterProps {
    route: RouteProp<RootStackParamList, 'PlayScreen'>
}
