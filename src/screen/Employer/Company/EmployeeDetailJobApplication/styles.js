import {StyleSheet} from 'react-native';

import {vh, vw} from '../../../../utils/dimensions';
import {colors, themeShadow} from '../../../../utils/appTheme';

const styles = StyleSheet.create({
  mainContainerStyle: {
    alignItems: 'center',
    // backgroundColor: colors.white,
    // marginTop: -8 * vh,
  },
  profileImageStyle: {
    height: vh * 12,
    width: vh * 12,
    borderRadius: (vh * 10) / 2,
    resizeMode: 'contain',
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
    fontWeight: 'bold',
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
    tintColor: colors.primaryColor,
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
    backgroundColor: colors.white,
  },

  contentContainerStyle: {
    paddingBottom: 10 * vh,
  },

  locationViewStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 20 * vw,
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
    backgroundColor: colors.grey,
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
  profession: {
    color: colors.highlightedText,
  },
  chatButton: {
    borderWidth: 1,
    borderColor: colors.myMessageColor,
    backgroundColor: colors.white,
    height: vh * 5,
    width: vw * 30,
    borderRadius: vh * 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: vh * 4,
  },
  chatText: {
    color: colors.myMessageColor,
  },
  chatIcon: {
    height: vh * 2,
    width: vh * 2,
    tintColor: colors.myMessageColor,
    marginLeft: vw * 4,
  },
  buttonsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: vh * 2,
  },
  approveButton: {
    backgroundColor: colors.successColor,
    height: vh * 5,
    width: vw * 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh * 3,
    marginHorizontal: vw * 2,
  },
  buttonText: {
    color: colors.white,
  },
  item: {
    marginVertical: vh * 1,
  },
  bigDate: {
    fontSize: vh * 2.6,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: vh * 2,
  },
  itemValue: {
    color: colors.darkGray,
  },
  hourContainer: {
    backgroundColor: colors.grayBackground,
    borderRadius: vh * 2,
    padding: vh * 3,
    marginVertical: vh * 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    width: vw * 30,
  },
});

export default styles;
