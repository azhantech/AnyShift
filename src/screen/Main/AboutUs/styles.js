import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';
import {color} from 'react-native-reanimated';
import {colors} from '../../../utils/appTheme';
const containerWidth = vw * 90;
export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
    alignItems: 'center',
  },
  headerMainContainer: {
    height: vh * 35,

    alignItems: 'center',
    width: vw * 100,
    backgroundColor: colors.screenBackgroundColor,
  },
  headerTopContainer: {
    backgroundColor: colors.primaryColor,
    height: vh * 20,
    borderBottomRightRadius: vh * 2,
    borderBottomLeftRadius: vh * 2,
    width: vw * 100,
  },
  profileDetailsContainer: {
    height: vh * 25,
    width: containerWidth,
    backgroundColor: colors.white,
    top: vh * 14,
    bottom: 30,
    left: vw * 5,
    right: vw * 10,
    borderRadius: vh * 4,
    position: 'absolute',
    alignItems: 'center',
    image: {
      height: vh * 25,
      width: '100%',
      resizeMode: 'cover',
      borderRadius: vh * 2,
    },
  },

  headingContainer: {
    height: vh * 5,
    width: containerWidth,
    marginTop: vh * 27,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    text: {
      fontSize: vw * 5,
    },
    highlightedText: {
      fontSize: vw * 5,
      color: colors.primaryColor,
    },
  },
  textContainer: {
    alignItems: 'center',
    width: containerWidth,
    text: {
      color: colors.grey,
      textAlign: 'justify',
    },
  },
});
