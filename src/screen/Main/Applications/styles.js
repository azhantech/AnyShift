import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';

const styles = StyleSheet.create({
  listStyle: {
    height: 100 * vh,
  },
  headerRight: {
    width: vw * 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  contentContainerStyle: {
    paddingBottom: 10 * vh,
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
  },

  emptyComponentViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30 * vh,
  },

  noChatsTextStyle: {
    fontSize: 2 * vh,
    color: colors.darkGray,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});

export default styles;
