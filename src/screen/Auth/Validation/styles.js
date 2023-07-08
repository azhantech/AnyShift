import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';
const containerWidth = vw * 80;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
    alignItems: 'center',
  },
  headerContainer: {
    height: vh * 20,
    width: vw * 80,
    justifyContent: 'center',
    marginTop: vh * 2,
  },
  headingText: {
    color: colors.black,
    fontSize: vw * 5,
    width: containerWidth,
    textTransform: 'capitalize',
  },
  text: {
    color: colors.grey,
    fontSize: vw * 3,
    width: containerWidth,
  },
  otpContainer: {
    height: vh * 15,
    width: containerWidth,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: colors.primaryColor,
  },

  underlineStyleBase: {
    width: containerWidth / 5,
    height: vh * 8,
    borderRadius: vh * 2,
    backgroundColor: colors.greyBtnOrder,
    color: colors.black,
  },

  underlineStyleHighLighted: {
    borderColor: colors.primaryColor,
  },
  OTPInputView: {
    width: containerWidth,
    height: vh * 15,
    justifyContent: 'center',
  },
  resendbtn: {
    width: containerWidth,
    alignItems: 'flex-end',
    height: vh * 5,
  },
  resendText: {
    color: colors.highlightedText,
    textDecorationLine: 'underline',
  },
});
