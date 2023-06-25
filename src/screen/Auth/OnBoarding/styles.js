import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';
import constants from '../../../utils/constants';

export const styles = StyleSheet.create({
  headingTextStyle: {
    fontSize: 4 * vh,
    marginTop: 10,
    color: colors.black,
    width: 90 * vw,
    textAlign: 'center',
  },

  descriptionStyle: {
    marginTop: constants.SIZES.radius,
    textAlign: 'center',
    color: colors.darkGray,
    fontSize: 1.8 * vh,
    width: 70 * vw,
    top: 5 * vh
  },

  customButtonStyle: {
    paddingHorizontal: constants.SIZES.padding,
    marginVertical: constants.SIZES.padding,
    top: 8 * vh
  },

  detailsViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: constants.SIZES.radius,
    height: 50 * vh,
  },

  imageBackgroundStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: 100 * vh,
  },

  imageBackgroundMiniContainer: {
    flex: 3,
  },

  mainImageContainer: {
    width: constants.SIZES.width,
  },

  mainFlatListContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },

  mainDotsContainer: {
    height: 100,
  },

  dotsContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },

  dotsViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  animatedDotsViewStyle: (dotColor, dotWidth) => ({
    borderRadius: 5,
    marginHorizontal: 6,
    width: dotWidth,
    height: 10,
    backgroundColor: dotColor,
  }),

  getStartedButtonStyle:{
    width: 60 * vw
  }
});
