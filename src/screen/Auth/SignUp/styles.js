import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';
const containerWidth = vw * 80;

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
  headingContainer: {
    height: vh * 12,
    width: containerWidth,
    justifyContent: 'flex-end',
  },
  headingText: {
    color: colors.black,
    fontSize: vh * 3,
    textTransform: 'capitalize',
  },
  renderSelectionView: {
    flexDirection: 'row',
    width: containerWidth,
    justifyContent: 'space-around',
    height: vh * 17,
    alignItems: 'center',
    marginTop: 2 * vh
  },
  selectionCOntainer: (signedInAs, valId) => ({
    height: vw * 32,
    width: 36 * vw,
    borderRadius: vh * 1.2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: signedInAs == valId ? colors.lightRed : colors.white,
    borderColor:
      signedInAs == valId ? colors.primaryColor : colors.borderTopColor,
  }),
  selectionImageContainer: {
    width: containerWidth / 3,
  },
  employeeImage: (signedInAs, valId) => ({
    height: vh * 8,
    width: vw * 8,
    resizeMode: 'contain',
    tintColor:
      signedInAs == valId ? colors.primaryColor : colors.black,
  }),
  selectiontext: {
    fontSize: vh * 1.7,
    color: colors.black,
  },
  selectionMarkContainer: (signedInAs, valId) => ({
    height: vh * 3,
    width: vh * 3,
    position: 'absolute',
    top: 10,
    bottom: 0,
    right: 10,
    borderRadius: (vh * 3) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor:
      signedInAs == valId ? colors.primaryColor : colors.borderTopColor,
  }),
  horizontalLineContainer: {
    height: containerWidth * 0.26,
    width: containerWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLine: {
    height: 2,
    width: containerWidth,
    backgroundColor: colors.greyBtnOrder,
    borderRadius: vh * 2,
  },
  renderSocialLogin: {
    height: vh * 7,
    width: containerWidth,
    borderRadius: vh * 4,
    borderWidth: 1,
    borderColor: colors.viewGrey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialLoginImageContainer: {
    width: '30%',
    alignItems: 'center',
  },
  socialLoginTextContainer: {
    width: '60%',
  },
  socialLoginText: {
    color: colors.black,
    fontSize: vh * 2,
    textTransform: 'capitalize',
  },
  socialLoginMainContainer: {
    height: vh * 40,
    width: containerWidth,

    justifyContent: 'space-around',
  },
  socialLoginIcon: {
    resizeMode: 'contain',
    height: vh * 5,
    width: vw * 5,
  },
  mainContainerStyles: {
    flexDirection: 'row',
    width: vw * 23,
    justifyContent: 'space-between',
  },
});
