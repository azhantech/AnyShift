import {StyleSheet} from 'react-native';

import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const containerWidth = vw * 90;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
  headerMainContainer: {
    height: vh * 35,

    alignItems: 'center',
    width: vw * 100,
    backgroundColor: colors.screenBackgroundColor,
  },
  fieldContainer: {
    height: vh * 50,
    width: containerWidth,
    justifyContent: 'space-around',
    marginTop: vh * 25,
    alignItems: 'center',
  },
  btn: {
    height: vh * 14,
    justifyContent: 'center',
  },
  cardHeading: {
    color: colors.myMessageColor,
    fontSize: vh * 2.4,
  },
  logoButton: {
    borderRadius: vh * 4,
    height: vh * 6,
    width: vw * 40,
    borderWidth: 1,
    borderColor: colors.myMessageColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: vh * 1,
  },
  uploadIcon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  uploadText: {
    marginLeft: vw * 3,
    color: colors.myMessageColor,
  },
  btnContainer: {
    width: vw * 80,
    marginTop: vh * 2,
  },
  labelText: {
    color: colors.black,
    fontSize: vh * 1.5,
    textTransform: 'capitalize',
  },
});

export default styles;
