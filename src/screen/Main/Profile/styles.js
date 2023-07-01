import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';

const styles = StyleSheet.create({
  mainContainerStyle: {
    alignItems: 'center',
    marginTop: -8 * vh,
  },

  profileImageStyle: {
    height: vh * 12,
    width: vh * 12,
    borderRadius: (vh * 10) / 2,
    tintColor: colors.white,
    resizeMode: 'contain',
    tintColor: colors.black,
  },
  profileImageViewStyle: {
    borderWidth: 0.8 * vw,
    borderColor: colors.white,
    borderRadius: vw * 12,
  },

  titleTextStyle: {
    color: colors.black,
    fontSize: 2.8 * vh,
    marginTop: 1 * vh,
    marginBottom: 1 * vh,
  },

  buttonStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0.2 * vw,
    borderColor: colors.myMessageColor,
    width: 40 * vw,
    marginTop: 1 * vh,
    height: 4.5 * vh
  },

  buttonTextStyle: {
    color: colors.myMessageColor,
  },
});

export default styles;
