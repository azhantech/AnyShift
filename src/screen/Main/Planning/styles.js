import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';

const styles = StyleSheet.create({
  flatListStyle: {
    flex: 1,
  },

  contentContainerStyle: {
    width: 100 * vw,
    paddingBottom: 10 * vh,
    marginTop: 2 * vh,
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

  headingViewStyle: {
    // justifyContent: 'center',
    // alignItems: 'center'
  },

  headingTextStyle: {
    color: colors.black,
    fontSize: 2.4 * vh,
    textAlign: 'left',
    textTransform: 'capitalize',
  },

  allOptionsViewStyle: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },

  mainHeaderViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 90 * vw,
    alignSelf: 'center'
  },

  optionIconStyle:{
    resizeMode: 'contain',
    height: 4 * vw,
    width: 4 * vw
  },

  optionButtonStyle:{
    backgroundColor: colors.white,
    height: 8 * vw,
    width: 8 *vw,
    borderRadius: 4 * vw,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
