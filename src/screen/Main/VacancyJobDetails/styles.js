import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';
import {colors, themeShadow} from '../../../utils/appTheme';

const styles = StyleSheet.create({
  mainContainerStyle: {
    alignItems: 'center',
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
    borderColor: colors.behindProfile,
    borderRadius: vw * 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleTextStyle: {
    color: colors.black,
    fontSize: 2.8 * vh,
    marginTop: 1 * vh,
    alignSelf: 'center',
  },

  buttonStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0.2 * vw,
    borderColor: colors.myMessageColor,
    width: 40 * vw,
    marginTop: 2 * vh,
    height: 4.5 * vh,
    alignSelf: 'center',
  },

  rateButtonStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0.2 * vw,
    borderColor: colors.myMessageColor,
    width: 80 * vw,
    marginTop: 2 * vh,
    height: 6 * vh,
    alignSelf: 'center',
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

  customerContentDescriptionStyle: {
    color: colors.darkGray,
    fontSize: 1.6 * vh,
    marginTop: 1 * vh,
    textAlign: 'center',
  },

  mainContentContainerStyle: {
    marginTop: 2 * vh,
    marginBottom: 2 * vh,
    width: 90 * vw,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  customerContentContainerStyle: {
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

  onlineIconStyle: fav => ({
    resizeMode: 'contain',
    height: vw * 3,
    width: vw * 3,
    tintColor: fav ? colors.primaryColor : null,
    // alignSelf: 'flex-end',
    // position: 'absolute',
    // bottom: 0.5 * vh,
  }),

  statusMainContainerStyle: {
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 0.2 * vh,
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    width: 55 * vw,
    justifyContent: 'space-between',
  },

  heartViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 17 * vw,
    backgroundColor: colors.white,
    borderRadius: 4 * vw,
    width: 7 * vw,
    height: 7 * vw,
    ...themeShadow,
  },

  statusViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.warningColor,
    width: 18 * vw,
    borderRadius: 4 * vw,
  },

  statusTextStyle: {
    fontSize: 1.6 * vh,
    color: colors.white,
    textTransform: 'capitalize',
  },

  listStyle: {
    height: 100 * vh,
  },

  contentContainerStyle: {
    paddingBottom: 10 * vh,
  },

  locationViewStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 80 * vw,
  },

  locationIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
    tintColor: colors.primaryColor,
  },

  locationTextStyle: {
    color: colors.darkGray,
    fontSize: 2.2 * vh,
    // width: 20 * vw
  },

  daysTextStyle: {
    color: colors.highlightedText,
    fontSize: 2.8 * vh,
    textAlign: 'center',
  },

  daysAgoTextStyle: {
    color: colors.darkGray,
    fontSize: 1.8 * vh,
  },

  bulletTextViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2 * vw,
  },

  descriptionTextStyle: {
    color: colors.darkGray,
    fontSize: 1.6 * vh,
  },

  bulletViewStyle: {
    backgroundColor: colors.highlightedText,
    height: 2 * vw,
    width: 2 * vw,
    borderRadius: 2 * vw,
    justifyContent: 'center',
    alignItems: 'center',
  },

  jobPointsViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1 * vh,
  },

  breakerViewStyle: {
    justifyContent: 'center',
    marginTop: 4 * vh,
    marginBottom: 2 * vh,
    width: 100 * vw,
    borderWidth: 0.04 * vw,
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: colors.grey,
  },

  showInterestButtonStyle: {
    backgroundColor: colors.highlightedText,
    width: 80 * vw,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    height: 7 * vh,
    borderRadius: 8 * vw,
    position: 'absolute',
    bottom: 10 * vh,
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
});

export default styles;
