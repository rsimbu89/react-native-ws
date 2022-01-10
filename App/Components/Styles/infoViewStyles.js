import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '@resources'
import { moderateVerticalScale } from '@utils/UIScaleUtils'

export default StyleSheet.create({
    title: {
        ...Fonts.style.regular_11,
        color: Colors.rgb_676767,
        alignSelf: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    playerName: {
        ...Fonts.style.regular_11,
        alignSelf: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: Colors.rgb_DBFF00,
        lineHeight: moderateVerticalScale(13)
    },
    playerInfoView: {
        flexDirection: 'column',
        width: moderateVerticalScale(68),
        alignItems: 'baseline',
    },
    infoView: {
        flexDirection: 'row',
    },
    hcpPatternView: {
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateVerticalScale(45),
        width: moderateVerticalScale(79.98),
        backgroundColor: Colors.rgb_1C1C1C,
        borderColor: Colors.rgb_0A0A0A,
        borderWidth: moderateVerticalScale(0.5)
    },
    cardShapeView: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: moderateVerticalScale(45),
        width: moderateVerticalScale(45),
        backgroundColor: Colors.rgb_1C1C1C,
        borderColor: Colors.rgb_0A0A0A,
        borderWidth: moderateVerticalScale(0.5),
    },
    cardImageView: {
        alignSelf: 'center',
        width: moderateVerticalScale(11),
        height: moderateVerticalScale(11)
    },
    cardNumberText: {
        color: Colors.rgb_FFFFFF,
        marginTop: moderateVerticalScale(3),
        ...Fonts.style.regular_16,
        alignSelf: 'center',
    },
    playerNameContainer: {
        width: moderateVerticalScale(86),
        height: moderateVerticalScale(23),
        marginHorizontal: moderateVerticalScale(137),
        marginVertical: 0,
        alignContent: 'center',
        justifyContent: 'center'
    }

})