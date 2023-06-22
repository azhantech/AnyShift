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
});
