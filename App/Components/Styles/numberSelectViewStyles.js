import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '@resources'
import { moderateVerticalScale } from '@utils/UIScaleUtils'


export default StyleSheet.create({
    buttonText: {
        ...Fonts.style.light_10,
        color: Colors.rgb_FFFFFF,
        textAlign: 'center',
        lineHeight: 15
    },
    numberPadView: {
        width: moderateVerticalScale(129),
        backgroundColor: Colors.rgb_151515
    },
    pad: {
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: '33%',
        borderColor: Colors.rgb_0A0A0A,
        borderWidth: moderateVerticalScale(1)
    }
})