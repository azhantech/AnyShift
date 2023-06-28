import {StyleSheet} from 'react-native';
import {vh, vw} from '../utils/dimensions';
import {colors} from '../utils/appTheme';

const styles = StyleSheet.create({
  image: {
    height: vh * 3,
    width: vh * 3,
  },

  logoStyle: {
    resizeMode: 'contain',
    height: 15 * vh,
    width: 15 * vw,
  },

  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchIconStyle: {
    resizeMode: 'contain',
    height: 5 * vh,
    width: 5 * vw,
  },

  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 10 * vw,
    borderRadius: 8 * vw,
  },
  headerMesh: {
    width: 100 * vw,
    height: 25 * vh,
    resizeMode: 'cover',
  },

  titleTextStyle: {
    color: colors.white,
    fontSize: 2.2 * vh,
    textAlign: 'center',
  },

  backIconStyle: {
    resizeMode: 'contain',
    height: 2 * vh,
    width: 2 * vw,
  },

  notificationsIconStyle: {
    resizeMode: 'contain',
    height: 5 * vh,
    width: 5 * vw,
  },

  numberTextStyle: {
    fontSize: 1.5 * vh,
    color: colors.white,
  },

  notificationNumberView: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    width: 4 * vw,
    height: 4 * vw,
    borderRadius: 4 * vw,
    position: 'absolute',
    left: 3 * vw,
    bottom: 2 * vh,
    borderColor: 'red',
    borderWidth: 0.5,
  },
});

export default styles;
