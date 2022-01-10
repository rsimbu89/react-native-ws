import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '@resources'
import { moderateVerticalScale } from '@utils/UIScaleUtils'


export default StyleSheet.create({
    buttonText: {
        ...Fonts.style.regular_13,
        color: Colors.rgb_FFFFFF,
        textAlign: 'center',
        lineHeight: 15
    },
    imageView: {
        width: moderateVerticalScale(10.99),
        height: moderateVerticalScale(8.38),
    },
    numberPadView: {
        width: moderateVerticalScale(132),
        height: moderateVerticalScale(215),
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
        width: moderateVerticalScale(43),
        height: moderateVerticalScale(43),
        borderColor: Colors.rgb_0A0A0A,
        borderWidth: moderateVerticalScale(1), 
    },
    actionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: moderateVerticalScale(64),
        height: moderateVerticalScale(38),
        borderColor: Colors.rgb_0A0A0A,
        borderWidth: moderateVerticalScale(1), 
    }
})