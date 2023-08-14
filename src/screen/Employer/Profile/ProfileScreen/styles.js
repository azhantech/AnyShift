import {StyleSheet} from 'react-native';

import {vh, vw} from '../../../../utils/dimensions';
import {colors} from '../../../../utils/appTheme';

const styles = StyleSheet.create({
  mainContainerStyle: {
    alignItems: 'center',
    // marginTop: -8 * vh,
  },

  profileImageStyle: {
    height: vh * 13,
    width: vh * 13,
    resizeMode: 'contain',
  },

  profileImageViewStyle: {
    height: vh * 13,
    width: vh * 13,
    borderRadius: (vh * 13) / 2,
    backgroundColor: colors.behindProfile,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: colors.white,
  },

  titleTextStyle: {
    color: colors.black,
    fontSize: 2.8 * vh,
    marginTop: 1 * vh,
    marginBottom: 1 * vh,
    fontWeight: 'bold',
  },

  buttonStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0.2 * vw,
    borderColor: colors.myMessageColor,
    width: 40 * vw,
    marginTop: 1 * vh,
    height: 4.5 * vh,
  },

  buttonTextStyle: {
    color: colors.myMessageColor,
  },

  pagerView: {
    flex: 1,
  },

  mainTitlesViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 4 * vh,
    marginBottom: 2 * vh,
    borderBottomWidth: 0.1 * vh,
    borderBottomColor: colors.grey,
    width: 100 * vw,
    height: 4 * vh,
    alignItems: 'center',
  },

  tabTitleViewStyle: {
    borderBottomWidth: 0.2 * vh,
    borderBottomColor: colors.red,
    width: 30 * vw,
    height: 4 * vh,
  },

  tabTitleTextStyle: {
    color: colors.greyText,
    fontSize: 1.7 * vh,
    textAlign: 'center',
  },

  contentHeadingStyle: {
    fontSize: 2.2 * vh,
    color: colors.myMessageColor,
  },

  contentDescriptionStyle: {
    color: colors.darkGray,
    fontSize: 1.6 * vh,
    marginTop: 2 * vh,
  },

  mainContentContainerStyle: {
    marginTop: 2 * vh,
    marginBottom: 2 * vh,
    width: 90 * vw,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  bankSubInfoViewStyle: {
    marginTop: 2 * vh,
  },

  bankInfoHeadingStyle: {
    color: colors.anotherBlackColor,
    fontSize: 1.8 * vh,
    textTransform: 'capitalize',
  },

  bankInfoValueStyle: {
    color: colors.darkGray,
    fontSize: 1.6 * vh,
    textTransform: 'capitalize',
  },

  placeHolderImageStyle: {
    resizeMode: 'contain',
    height: 15 * vh,
    width: 40 * vw,
  },

  mainDetailsRowViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2 * vh,
  },

  profileDetailsSubRowOne: {
    justifyContent: 'center',
    width: 45 * vw,
  },

  profileDetailsSubRowSecond: {
    justifyContent: 'center',
    width: 45 * vw,
  },

  mapImageStyle: {
    resizeMode: 'cover',
    height: 15 * vh,
    width: 90 * vw,
    marginTop: 1 * vh,
  },

  onlineIconStyle: {
    resizeMode: 'contain',
    height: vh * 3,
    width: vh * 3,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0.5 * vh,
  },

  listStyle: {
    height: 100 * vh,
  },

  contentContainerStyle: {
    paddingBottom: 10 * vh,
  },
});

export default styles;
