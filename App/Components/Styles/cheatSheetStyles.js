import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '@resources'
import { moderateVerticalScale } from '@utils/UIScaleUtils'

export default StyleSheet.create({
    title: {
        ...Fonts.style.black_10,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    fullView: {
        flexDirection: 'row',
        height: moderateVerticalScale(340)
    },
    scoreView: {
        width: moderateVerticalScale(90),
        borderColor: Colors.rgb_353535,
        borderWidth: moderateVerticalScale(0.5),
        height: moderateVerticalScale(340)
    },
    cheatSheetView: {
        flexDirection: 'row',
        backgroundColor: Colors.rgb_151515,
        width: moderateVerticalScale(550),
    },
    nsInfoContainer: {
        flexDirection: 'column',
        backgroundColor: Colors.rgb_1C1C1C,
        height: moderateVerticalScale(340),
        width: moderateVerticalScale(340),
        marginHorizontal: moderateVerticalScale(60),
        justifyContent: 'space-between'
    },
    wInfoContainer: {
        height: '100%',
        width: moderateVerticalScale(68),
        justifyContent: 'center'
    },
    eInfoContainer: {
        height: '100%',
        width: moderateVerticalScale(68),
        justifyContent: 'center',
    },
    nInfoView: {
        alignItems: 'center',
    },
    weInfoView: {
        flexDirection: 'column-reverse',
        width: moderateVerticalScale(45),
        marginVertical: moderateVerticalScale(5),
        alignItems: 'baseline',
        justifyContent: 'center'
    },
    sInfoView: {
        alignItems: 'center',
    },
    rotate90Deg: {
        transform: [{ rotate: "90deg" }],
    },
    rotate90DegMinus: {
        transform: [{ rotate: "-90deg" }],
    },
    fdColumn: {
        flexDirection: 'column'
    },
    fdColumnReverse: {
        flexDirection: 'column-reverse'
    },
    fdRow: {
        flexDirection: 'row'
    },
    fdRowReverse: {
        flexDirection: 'row-reverse'
    },
    wePlayerInfoView: {
        marginVertical: moderateVerticalScale(5),
        height: moderateVerticalScale(340)
    },
    wPlayerNameContainer: {
        marginHorizontal: moderateVerticalScale(-30),
        marginVertical: moderateVerticalScale(137),
        transform: [
            { rotate: '-90deg' },
            { translateX: moderateVerticalScale(70) }
        ],
        alignItems: 'center'
    },
    ePlayerNameContainer: {
        marginHorizontal: moderateVerticalScale(-30),
        marginVertical: moderateVerticalScale(137),
        transform: [
            { rotate: '90deg' },
            { translateX: moderateVerticalScale(-70) }
        ],
        alignItems: 'center'
    },
    wHcpView: {
        transform: [
            { rotate: "-90deg" },
            { translateX: moderateVerticalScale(-50) },
        ]
    },
    wPatternView: {
        transform: [
            { rotate: "-90deg" },
            { translateX: moderateVerticalScale(-15) },
        ]
    },
    eHcpView: {
        transform: [
            { rotate: "90deg" },
            { translateX: moderateVerticalScale(50) },
        ]
    },
    ePatternView: {
        transform: [
            { rotate: "90deg" },
            { translateX: moderateVerticalScale(15) },
        ]
    },
    leftModalView: {
        alignItems: "flex-start",
    },
    rightModalView: {
        alignItems: "flex-end",
        marginHorizontal: moderateVerticalScale(-280)
    }

})