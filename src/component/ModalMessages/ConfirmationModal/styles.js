import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

export default StyleSheet.create({
  mainContainerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainBlurViewContiner: {
    height: 100 * vh,
    width: 100 * vw,
    position: 'absolute',
    backgroundColor: colors.modalBackground,
    opacity: 0.8,
  },

  miniContainerView: {
    backgroundColor: colors.white,
    width: 85 * vw,
    // height: 35 * vh,
    borderRadius: 3 * vw,
  },

  crossIconStyle: {
    resizeMode: 'contain',
    height: 2.5 * vh,
    width: 2.5 * vw,
  },

  warningIconView: {
    backgroundColor: colors.defaultAlertColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: 23 * vw,
    height: 23 * vw,
    alignSelf: 'center',
    borderRadius: 12 * vw,
  },

  warningIconStyle: {
    resizeMode: 'contain',
    height: 15 * vw,
    width: 15 * vw,
  },

  textStyle: {
    textAlign: 'center',
    marginVertical: vh * 1.2,
    fontSize: 2 * vh,
    lineHeight: vh * 3,
    color: colors.black,
    width: 40 * vw,
    textTransform: 'uppercase',
  },

  textDescriptionView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2 * vh,
  },

  textButtonStyle: {
    width: 40 * vw,
  },

  textButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2.5 * vh,
    marginBottom: vh * 4,
  },

  crossButtonView: {alignItems: 'flex-end', width: 80 * vw, marginTop: 2 * vh},

  placeholderTextStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80 * vw,
    textAlign: 'center',
    color: colors.black,
    lineHeight: 3 * vh,
    fontSize: 1.8 * vh,
    marginTop: 1.5 * vh,
    marginBottom: 1.5 * vh,
  },

  CustomButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  

  yesButtonStyle: {
    width: 30 * vw,
    marginTop: 2 * vh,
    marginBottom: 3 * vh
  },

  noButtonStyle: {
    width: 30 * vw,
    marginTop: 2 * vh,
    marginBottom: 3 * vh,
    backgroundColor: 'transparent',
    borderColor: colors.darkGray,
    borderWidth: 0.2 * vw
  },

  buttonsViewStyle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 65 * vw
  },
  noButtonTextStyle:{
    color: colors.textColor
  }
});
