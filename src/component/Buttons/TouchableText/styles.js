import {StyleSheet} from 'react-native';
import {vw, vh} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: vw * 25,
    justifyContent: 'space-between',
    height: vh * 8,
    alignItems: 'center',
  },
  textStyle: {
    color: colors.black,
    fontSize: vw * 4,
  },
  touchableText: {
    color: colors.black,
    fontSize: vw * 4,
    textDecorationLine: 'underline',
  },
});
