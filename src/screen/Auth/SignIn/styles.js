import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';
const containerWidth = vw * 80;
export const styles = StyleSheet.create({
  mainContainer: {backgroundColor: colors.white, flex: 1, alignItems: 'center'},

  headingText: {
    color: colors.black,
    fontSize: vh * 3,
    width: containerWidth,
  },
  fieldContainer: {
    height: vh * 20,
    width: containerWidth,
    justifyContent: 'space-around',
  },
  forgotPasswordContainer: {
    width: containerWidth,
    height: vh * 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  forgotPasswordTouchable: {
    width: containerWidth / 2.5,
    height: '80%',
    justifyContent: 'center',
  },
  forgotPasswordText: {
    color: colors.highlightedText,
    textDecorationLine: 'underline',
  },
  btnContainer: {
    height: vh * 10,
    justifyContent: 'center',
  },
  donthaveAccountContainer: {
    width: containerWidth,
    height: containerWidth / 4.86,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    width: containerWidth / 1.4733,
    height: containerWidth / 16.733,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textbtn: {
    color: colors.primaryColor,
    textDecorationLine: 'underline',
  },
  socialContainer: {
    width: containerWidth * 0.81,
    height: containerWidth / 2.9,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  socialbtnContainer: {
    width: containerWidth / 4.9,
    height: containerWidth / 4.9,
    borderRadius: containerWidth / 4.9 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.textColor,
  },
  iconStyle: {
    resizeMode: 'contain',
    width: containerWidth / 17.733,
    height: containerWidth / 17.733,
  },
});
