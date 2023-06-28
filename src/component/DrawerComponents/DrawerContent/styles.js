import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.drawerColor,
  },
  routeContainer: {
    marginTop: 3 * vh,
    marginLeft: vw * 10,
  },
  name: {
    fontSize: 2.6 * vh,
    color: colors.white,
    width: 40 * vw,
    textAlign: 'center',
    marginTop: 1 * vh
  },
  profileImage: {
    height: vh * 7,
    width: vh * 7,
    borderRadius: (vh * 10) / 2,
    tintColor: colors.white,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
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

  locationTextStyle:{
    color: colors.white,
    fontSize: 1.6 * vh,
    // width: 20 * vw
  },

  locationIconStyle:{
    resizeMode: 'contain',
    height: 3 * vh,
    width: 3 * vw
  },

  locationViewStyle:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 40 * vw,
  },

  profileImageViewStyle:{
    borderWidth: 0.8 * vw,
    borderColor: colors.white,
    borderRadius: vh * 4,

  }
});
export default styles;
