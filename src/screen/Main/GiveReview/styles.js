import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';

const styles = StyleSheet.create({
  mainContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3 * vh,
  },

  enterRatingTextStyle: {
    color: colors.black,
    fontSize: 2.4 * vh,
    marginBottom: 2* vh,
  },

  subHeadingTextStyle: {
    color: colors.darkGray,
    fontSize: 1.6 * vh,
    marginBottom: 3 * vh,
  },

  totalRatingTextStyle: {
    color: colors.black,
    fontSize: 2.4 * vh,
    marginTop: 2 * vh,
  },

  sendButtonStyle: {
    marginTop: 3 * vh,
  },
});

export default styles;
