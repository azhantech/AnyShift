import {StyleSheet} from 'react-native';
import { colors } from '../../utils/appTheme';
import { vh, vw } from '../../utils/dimensions';
const styles = StyleSheet.create({
  container: {
    width: vw * 100,
    height: vh * 8,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // borderTopLeftRadius: vh * 3,
    // borderTopRightRadius: vh * 3,
    backgroundColor: colors.red,
  },
  tabItem: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 5 * vh,
    width: 22 * vw,
    justifyContent: 'space-evenly',
  },

  icon: {
    height: vh * 2.5,
    width: vh * 2.5,
    resizeMode: 'contain',
  },

  titleColorStyle: {
    color: colors.white,
    fontSize: 1.6 * vh,
    // width: 15 * vw,
  },

  activeTabColorStyle: {
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.activeTabColor,
    // backgroundColor: 'red',
    height: 5 * vh,
    width: 22 * vw,
    borderRadius: 1 * vw,
    justifyContent: 'space-evenly',
  },
});

export default styles;
