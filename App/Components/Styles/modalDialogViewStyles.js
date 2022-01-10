import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '@resources'
import { moderateVerticalScale } from '@utils/UIScaleUtils'

export default StyleSheet.create({
  modalView: {
    flex: 1,
    width : moderateVerticalScale(360),
    height: moderateVerticalScale(640)
  },
  modalContentView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'center',
    backgroundColor: Colors.rgb_151515,
    opacity: 0.9,
    shadowColor: Colors.rgb_000000,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  numberPadContainer: {
    flex: 0.6,
    justifyContent: "flex-start",
    alignContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
  },
  button: {
    padding: 100
  },
  closeView: {
    flex: 0.2,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  closeText: {
    color: Colors.rgb_FFFFFF,
    marginHorizontal: moderateVerticalScale(1),
    marginVertical: moderateVerticalScale(35),
    width: moderateVerticalScale(45),
    height: moderateVerticalScale(45),
    backgroundColor: Colors.rgb_1C1C1C,
    borderColor: Colors.rgb_0A0A0A,
    borderWidth: moderateVerticalScale(0.5),
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: moderateVerticalScale(45)
  }
});