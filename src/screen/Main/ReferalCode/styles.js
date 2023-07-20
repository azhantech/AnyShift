import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';
import {colors, themeShadow} from '../../../utils/appTheme';

const styles = StyleSheet.create({
  mainContainerStyle: {
    width: 80 * vw,
    height: 55 * vh,
    backgroundColor: colors.white,
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 6 * vh,
    borderRadius: 4 * vw,
    ...themeShadow,
  },

  codeImageViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3 * vh,
  },

  codeImageStyle: {
    resizeMode: 'contain',
    height: 25 * vw,
    width: 25 * vw,
  },

  codeViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.highlightedText,
    borderRadius: 2 * vw,
    height: 12 * vh,
    width: 60 * vw,
    marginTop: 2 * vh,
  },

  codeTextStyle: {
    color: colors.highlightedText,
    fontSize: 6.5 * vh,
    fontWeight: 'bold',
  },

  showInterestButtonStyle: {
    backgroundColor: colors.highlightedText,
    width: 40 * vw,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    height: 7 * vh,
    borderRadius: 8 * vw,
    marginTop: 2 * vh,
  },

  heartIconStyle: {
    resizeMode: 'contain',
    height: 3 * vh,
    width: 3 * vw,
  },

  textButtonStyle: {
    color: colors.white,
    fontSize: 2 * vh,
  },

  descriptionViewStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 70 * vw,
    marginTop: 2 * vh
  },

  descriptionTextStyle:{
    color: colors.darkGray,
    textAlign: 'center',
    fontSize: 1.8 * vh
  },
  
});

export default styles;
