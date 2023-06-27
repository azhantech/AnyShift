import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray,
  },
  routeContainer: {
    marginTop: 3 * vh,
    marginLeft: vw * 10,
  },
  name: {
    fontSize: 2 * vh,
    color: colors.white,
    marginLeft: 5 * vw,
    width: 30 * vw,
  },
  profileImage: {
    height: vh * 6,
    width: vh * 6,
    borderRadius: (vh * 10) / 2,
    tintColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh * 10,
    marginBottom: 2 * vh,
    marginLeft: 8 * vw,
  },

  logoutTextStyle: {
    fontSize: 2 * vh,
    color: colors.white,
    marginLeft: 2 * vw,
  },

  logoutIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
    tintColor: colors.white,
  },

  logoutButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
