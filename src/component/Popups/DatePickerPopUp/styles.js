import {Platform, StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';

import {colors} from '../../../utils/appTheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 100000,
  },
  backDrop: {
    justifyContent: 'center',
    width: 100 * vw,
    height: 100 * vh,
    alignItems: 'center',
  },
  imageContainer: {
    width: 100 * vw,
    height: 35 * vh,
    paddingTop: Platform.OS == 'ios' ? vh * 4 : 0,
    // backgroundColor: '#fff',
    backgroundColor: colors.lightThemeColor,
    borderRadius: 2 * vw,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    // left: 7 * vw,
    bottom: 0,
    // top: 28 * vh,
    // padding: '4%',
  },
  modalInnerView: {
    position: 'absolute',
    width: 80 * vw,
    height: 36 * vh,
    backgroundColor: colors.white,
    borderRadius: 10,
    alignContent: 'center',
  },
  touchableContainer: {
    height: vh * 100,
    width: vw * 100,
    position: 'absolute',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  crossContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: '3%',
    marginTop: '3%',
  },
  modalContent: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    height: vh * 26,
    width: vw * 70,
    marginTop: '4%',
  },
  modalHeading: {
    marginTop: '5%',
    color: colors.greyColor4,
    fontSize: vw * 5,
    // fontFamily: fonts.PM,
  },
  modalDescription: {
    color: colors.greyColor6,
    // fontFamily: fonts.PM,
    fontSize: vw * 3.8,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60 * vw,
    marginTop: '3%',
  },
  noButton: {
    height: vh * 6,
    width: vw * 28,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.purple,
  },
  yesButton: {
    height: vh * 6,
    width: vw * 28,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.blueAlt1,
  },
  buttonText: {
    fontSize: vw * 3,
    color: colors.white,
    // fontFamily: fonts.PR
  },
  modalContainer: {
    // position:'absolute',
    // flex:1,
    // alignItems:'center',
    // justifyContent:'center',
    // backgroundColor:'purple'
  },
  blurBackground: {
    flex: 1,
    height: 100 * vh,
    width: 100 * vw,
    position: 'absolute',
  },
  blurView: {
    height: 100 * vh,
    width: 100 * vw,
  },
});

export default styles;
