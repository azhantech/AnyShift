import {StyleSheet} from 'react-native';

import {colors} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
  },
  headerMainContainer: {
    height: vh * 44,
    alignItems: 'center',
    width: vw * 100,
    backgroundColor: colors.screenBackgroundColor,
  },
  headerTopContainer: {
    backgroundColor: colors.primaryColor,
    height: vh * 15,
    borderBottomRightRadius: vh * 2,
    borderBottomLeftRadius: vh * 2,
    width: vw * 100,
    position: 'absolute',
    top: -vh * 5,
  },
  headerRight: {
    width: vw * 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 8 * vw,
    height: 8 * vw,
    borderRadius: 8 * vw,
  },
  notificationsIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
    tintColor: colors.primaryColor,
  },
});

export default styles;
