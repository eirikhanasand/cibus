import Svg, { Rect, Path } from "react-native-svg"
import { useSelector } from "react-redux"
import { View } from "react-native"
import React from "react"

/**
 * Function for drawing a check svg icon
 * @returns Svg
 */
export default function Check() {

    const { theme } = useSelector((state: ReduxState) => state.theme)

    return (
        <View style={{height: 40, width: 40}}>
            <Svg 
                width="32" 
                height="32" 
                fill={theme.darker}
            >
                <Path d="M13.788 25.588c.04.032.064.076.106.106.06.04.128.048.192.076.076.036.15.07.23.092.078.02.154.03.234.036.114.012.224.012.336-.004.046-.008.09-.02.136-.032.138-.034.266-.088.392-.164.022-.014.04-.03.062-.044.082-.056.17-.098.24-.174.05-.054.072-.124.112-.184.002-.002.006-.004.006-.006L27.752 6.188a1.4 1.4 0 1 0-2.344-1.532L14.4 22.298l-6.088-5.922a1.398 1.398 0 1 0-1.9 2.054l7.324 7.126c.014.014.034.018.052.032z"/>
            </Svg>
        </View>
    )
}

/**
 * Function for drawing a smaller icon (todo: combind into a dynamic check icon)
 * 
 * @returns Small svg
 */
export function SmallCheck() {

    const { theme } = useSelector((state: ReduxState) => state.theme)

    return (
        <View style={{right: 18, top: "-1000000%", height: 0.004}}>
            <Svg 
                width="16" 
                height="16" 
                viewBox="0 0 28 26" 
                fill={theme.darker}
            >
                <Path d="M13.788 25.588c.04.032.064.076.106.106.06.04.128.048.192.076.076.036.15.07.23.092.078.02.154.03.234.036.114.012.224.012.336-.004.046-.008.09-.02.136-.032.138-.034.266-.088.392-.164.022-.014.04-.03.062-.044.082-.056.17-.098.24-.174.05-.054.072-.124.112-.184.002-.002.006-.004.006-.006L27.752 6.188a1.4 1.4 0 1 0-2.344-1.532L14.4 22.298l-6.088-5.922a1.398 1.398 0 1 0-1.9 2.054l7.324 7.126c.014.014.034.018.052.032z"/>
            </Svg>
        </View>
    )
}

/**
 * Function for displaying a small check box, should be used together with 
 * CheckedBox
 * 
 * @see CheckBox
 * @returns View containg a checkable box
 */
export function CheckBox() {

    const { theme } = useSelector((state: ReduxState) => state.theme)

    return (
        <View style={{top: "-50%", right: 20}}>
            <Svg 
                width={24} 
                height={24} 
                fill={theme.darker} 
                stroke={theme.contrast} 
                strokeWidth={1}
            >
                <Rect x="1" y="1" width={22} height={22} ry={7.5}/>
            </Svg>
        </View>
    )
}

/**
 * Function for displaying a small checked box, should be used together with 
 * CheckBox
 * 
 * @see CheckBox
 * @returns View containing a checked box
 */
export function CheckedBox() {
    const { theme } = useSelector((state: ReduxState) => state.theme)

    return (
        <View style={{top: "-80%", right: 20}}>
            <Svg 
                width={24}
                height={24}
                fill={theme.darker} 
                stroke={theme.contrast} 
                strokeWidth={1}
            >
                <Rect x="1" y="1" width={22} height={22} ry={7.5}/>
            </Svg>
        </View>
    )
}
