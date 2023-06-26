import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';
const containerWidth = vw * 90;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
  },

  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5 * vh,
    marginBottom: 3 * vh,
  },

  logoStyle: {
    resizeMode: 'contain',
    height: 40 * vw,
    width: 70 * vw,
  },

  fieldContainer: {
    backgroundColor: colors.white,
    height: 100 * vh,
    width: 100 * vw,
    borderTopRightRadius: 15 * vw,
  },

  miniContainer: {
    justifyContent: 'center',
    width: 80 * vw,
    alignSelf: 'center',
  },

  welcomeDescriptionText: {
    width: 60 * vw,
    textAlign: 'center',
    fontSize: 1.8 * vh,
    marginTop: 1 * vh,
    color: colors.darkGray,
  },

  welcomeBackTextStyle: {
    fontSize: 3 * vh,
    marginTop: 2.5 * vh,
    color: colors.black,
  },

  fieldsView: {
    marginTop: 2 * vh,
  },

  checkIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
  },

  mainRow: {
    flexDirection: 'row',
    width: 80 * vw,
    justifyContent: 'space-between',
    marginTop: 2 * vh,
  },

  checkButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  rememberTextStyle: {
    fontSize: 1.8 * vh,
    alignSelf: 'center',
    position: 'absolute',
    marginLeft: 6 * vw,
  },

  forgotPasswordButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  forgotPasswordTextStyle: {
    color: colors.black,
    fontSize: 1.8 * vh,
  },

  submitButtonStyle: {
    width: 40 * vw,
    marginTop: 5 * vh,
  },

  titleTextStyle: {
    fontSize: 1.8 * vh,
  },

  socialView: {
    marginTop: 1 * vh,
  },

  loaderView: {
    borderWidth: 0.1 * vw,
    width: 17 * vw,
    borderRadius: 4 * vw,
    borderColor: 'transparent',
    backgroundColor: colors.black,
    opacity: 0.6,
    height: 0.8 * vh,
    alignSelf: 'center',
    marginTop: 0.5 * vh,
    marginBottom: 2 * vh,
    right: 33 * vw,
  },

  subLoaderView: {
    height: 0.5 * vh,
    backgroundColor: colors.black,
    borderRadius: 4 * vw,
    marginTop: 0.1 * vh,
    marginLeft: 0.2 * vw,
  },

  textStyle: {
    fontSize: 1.8 * vh,
    marginTop: 4 * vh,
    width: 80 * vw,
  },

  subTitleTextStyle: {
    fontSize: 1.8 * vh,
    color: colors.darkGray,
    marginTop: 1 * vh,
    marginBottom: 1 * vh,
  },

  CustomButtonStyle: {
    marginTop: 2 * vh,
  },

  forgotPasswordContainer: {
    width: containerWidth,
    height: vh * 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  forgotPasswordTouchable: {
    width: containerWidth / 2.5,
    justifyContent: 'center',
  },

  forgotPasswordText: {
    color: colors.highlightedText,
    textDecorationLine: 'underline',
  },

  donthaveAccountContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2 * vh,
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  backToTextStyle: {
    color: colors.black,
    fontSize: 1.8 * vh,
  },

  inputFieldStyle:{
    marginTop: 2 * vh,
  }
});
export default styles;
