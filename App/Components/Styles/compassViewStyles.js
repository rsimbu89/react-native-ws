import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '@resources'
import { moderateVerticalScale, guidelineBaseHeight } from '@utils/UIScaleUtils'


export default StyleSheet.create({
    title: {
        ...Fonts.style.light_10,
        color: Colors.rgb_676767
    },
    compassView: {
        flexDirection: 'row',
        marginVertical: moderateVerticalScale(46),//86
        marginHorizontal: moderateVerticalScale(170),//180
        width: moderateVerticalScale(50),
        height: moderateVerticalScale(50),
        alignSelf: 'center'
    },
    nsContainer: {
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    weContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        height: moderateVerticalScale(10),
        width: moderateVerticalScale(10),
        margin: moderateVerticalScale(6.89)
    },
    pointerView: {
        borderRadius: moderateVerticalScale(21),
        borderColor: Colors.rgb_676767,
        borderWidth: moderateVerticalScale(0.5),
        width: moderateVerticalScale(21),
        height: moderateVerticalScale(21)
    },
    pointer: {
        backgroundColor: Colors.rgb_DBFF00,
        borderColor: Colors.rgb_DBFF00,
        borderRadius: moderateVerticalScale(4),
        borderWidth: moderateVerticalScale(0.1),
        width: moderateVerticalScale(4),
        height: moderateVerticalScale(4),
        marginTop: moderateVerticalScale(2)
    }
})