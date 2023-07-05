import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';
const containerWidth = vw * 90;
export const Style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  listStyle: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
  renderItemMainContainer: {
    width: containerWidth,
    height: vh * 13,
    borderRadius: vh * 3,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  firstContainer: {
    flexDirection: 'row',
    width: '90%',
    height: '30%',
    alignItems: 'center',
    notificationIconContainer: {
      width: '8%',
      height: '100%',
      justifyContent: 'center',
      image: {
        height: vh * 4,
        width: vw * 4,
        resizeMode: 'contain',
      },
    },
    headingContainer: {
      width: '85%',
      height: '100%',
      justifyContent: 'center',
      text: {
        color: colors.black,
        fontSize: vw * 4,
        width: '85%',
      },
    },
  },
  secondContainer: {
    flexDirection: 'row',
    width: '90%',
    height: '30%',
    alignItems: 'center',
    rightContainer: {
      width: '15%',
      height: '100%',
      alignItems: 'center',
      image: {
        height: vh * 5,
        width: vw * 5,
        resizeMode: 'contain',
      },
    },
    leftContainer: {
      width: '80%',
      height: '100%',
      justifyContent: 'center',

      text: {
        color: colors.grey,
        fontSize: vw * 3,
      },
    },
  },
  thirdContainer: {
    height: '25%',
    width: '90%',
    justifyContent: 'center',
    text: {
      color: colors.highlightedText,
      fontSize: vw * 4,
    },
  },
  ItemSeprator: {
    height: vh * 2,
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
});
