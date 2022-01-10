import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '@resources'
import { moderateVerticalScale } from '@utils/UIScaleUtils'

export default StyleSheet.create({
  modalView: {
    flex: 1,
    width : '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  modalContentView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'center',
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
    flex: 0.45,
    justifyContent: "flex-start",
    alignContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center'
  },
  button: {
    padding: 100
  },
  closeView: {
    flex: 0.275,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  closeIconHolder: {
    marginHorizontal: moderateVerticalScale(1),
    marginVertical: moderateVerticalScale(35),
    width: moderateVerticalScale(45),
    height: moderateVerticalScale(45),
    backgroundColor: Colors.rgb_1C1C1C,
    borderColor: Colors.rgb_0A0A0A,
    borderWidth: moderateVerticalScale(0.5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start'
  }
});