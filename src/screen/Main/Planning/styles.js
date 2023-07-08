import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';
const containerWidth = vw * 90;

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
  },

  contentContainerStyle: {
    width: 100 * vw,
    paddingBottom: 10 * vh,
    marginTop: 2 * vh,
    alignItems: 'center',
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
  ListHeaderComponent: {
    height: vh * 10,
    width: containerWidth - 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    leftContainer: {
      height: '100%',
      flexDirection: 'row',
      width: '46%',
      alignItems: 'center',
      justifyContent: 'space-between',
      dropDownContainer: {
        width: vw * 25,
        height: vh * 5,
        backgroundColor: colors.white,
        borderRadius: vh * 4,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        btn: {
          height: vh * 5,
          width: vw * 5,

          alignItems: 'center',
          justifyContent: 'center',
          image: {
            height: vh * 3,
            width: vw * 3,
            resizeMode: 'contain',
          },
        },
      },
    },
    rightContainer: {
      height: '100%',
      width: '46%',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  },
  text: {
    color: colors.black,
    fontSize: vw * 4,
    marginRight: vh * 2,
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
