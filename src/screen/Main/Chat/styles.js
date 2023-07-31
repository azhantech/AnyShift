import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';

const styles = StyleSheet.create({
  flatListStyle: {
    flex: 1,
  },
  headerMainContainer: {
    height: vh * 25,
    borderBottomRightRadius: vh * 2,
    borderBottomLeftRadius: vh * 2,
    alignItems: 'center',
    width: vw * 100,
    backgroundColor: colors.primaryColor,
    justifyContent: 'flex-end',
    paddingBottom: vh * 4,
  },
  inputContainerIcon: {
    borderRadius: vh * 4,
    height: vh * 6,
    width: 90 * vw,
    alignSelf: 'center'
  },
  contentContainerStyle: {
    width: 100 * vw,
    paddingBottom: 10 * vh,
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
