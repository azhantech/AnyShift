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

  pagerView: {
    flex: 1,
  },

  mainTitlesViewStyle:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 4 * vh,
    marginBottom: 2 * vh,
    borderBottomWidth: 0.1 * vh,
    borderBottomColor: colors.grey,
    width: 100 * vw,
    height: 4 * vh,
    alignItems: 'center'
  },

  tabTitleViewStyle:{
    borderBottomWidth: 0.2 * vh,
    borderBottomColor: colors.red,
    width: 30 * vw,
    height: 4 * vh,
  },

  tabTitleTextStyle:{
    color: colors.greyText,
    fontSize: 1.7 * vh,
    textAlign: 'center',
  },

  contentHeadingStyle:{
    fontSize: 2.2 * vh,
    color: colors.myMessageColor
  },

  contentDescriptionStyle:{
    color: colors.darkGray,
    fontSize: 1.6 * vh,
    marginTop: 2 * vh
  },

  mainContentContainerStyle:{
    marginTop: 2 * vh,
    marginBottom: 2 * vh,
    width: 90 * vw,
    justifyContent: 'center',
    alignSelf: 'center'
  }
});

export default styles;
