import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';
const containerWidth = vw * 90;

export const Styles = StyleSheet.create({
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
  headerTopContainer: {
    backgroundColor: colors.primaryColor,
    height: vh * 20,
    borderBottomRightRadius: vh * 2,
    borderBottomLeftRadius: vh * 2,
    width: vw * 100,
  },
  profileDetailsContainer: {
    height: vh * 25,
    width: containerWidth,
    backgroundColor: colors.white,
    top: vh * 14,
    bottom: 30,
    left: vw * 5,
    right: vw * 10,
    borderRadius: vh * 4,
    position: 'absolute',
    alignItems: 'center',
    image: {
      height: vh * 25,
      width: '100%',
      resizeMode: 'cover',
      borderRadius: vh * 2,
    },
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
});
