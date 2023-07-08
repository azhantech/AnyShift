import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';
export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingTop: vh * 2,
    paddingBottom: vh * 10,
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
  },
  renderItem: {
    width: vw * 90,
    height: vh * 30,
    backgroundColor: colors.white,
    borderRadius: vh,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  topContainer: {
    height: '30%',
    width: '90%',
    justifyContent: 'center',
  },
  title: {
    color: colors.grey,
    fontSize: vw * 3,
  },
  text: {
    color: colors.black,
    fontSize: vw * 3.5,
  },
  middleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '25%',
    width: '90%',
    leftContainer: {
      width: '50%',
      height: '100%',
      justifyContent: 'center',
    },
  },
  renderItemSeparator: {
    height: vh * 2,
  },
});
