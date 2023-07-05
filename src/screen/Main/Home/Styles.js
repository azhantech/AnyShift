import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';
import {color} from 'react-native-reanimated';
import {colors} from '../../../utils/appTheme';
const containerWidth = vw * 80;
export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.screenBackgroundColor,
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
  headerMainContainer: {
    height: vh * 44,

    alignItems: 'center',
    width: vw * 100,
    backgroundColor: colors.screenBackgroundColor,
  },
  headerTopContainer: {
    backgroundColor: colors.primaryColor,
    height: vh * 30,
    borderBottomRightRadius: vh * 2,
    borderBottomLeftRadius: vh * 2,
    width: vw * 100,
  },
  profileImageContainer: {
    height: vh * 13,
    width: vh * 13,
    borderRadius: (vh * 13) / 2,
    bottom: 40,
    borderWidth: 3,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    height: vh * 12,
    width: vh * 12,
    borderRadius: (vh * 12) / 2,
    resizeMode: 'cover',
  },
  profileDetailsContainer: {
    height: vh * 25,
    width: containerWidth,
    backgroundColor: colors.white,
    top: vh * 18,
    bottom: 30,
    left: vw * 10,
    right: vw * 10,
    borderRadius: vh * 4,
    position: 'absolute',
    alignItems: 'center',
  },
  profileBottomContainer: {
    height: vh * 12,
    width: '100%',
    alignItems: 'center',
  },
  userName: {
    color: colors.black,
    fontSize: vw * 5,
  },
  middleContainer: {
    backgroundColor: colors.white,
    height: vh * 15,
    width: containerWidth,
    marginTop: vh * 35,
    borderRadius: vh * 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    topContainer: {
      height: '40%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      textStyle: {
        color: colors.textColor,
        fontSize: vw * 3,
      },
    },
    bottomContainer: {
      height: '50%',
      width: '100%',
      alignItems: 'center',
      buttonStyle: {
        width: '80%',
        backgroundColor: colors.white,
        borderColor: colors.highlightedText,
        borderWidth: 1,
      },
      buttonText: {
        color: colors.highlightedText,
        fontSize: vw * 4,
      },
    },
  },
  headingContainer: {
    height: vh * 6,
    width: containerWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  todoHeading: {
    color: colors.primaryColor,
    fontSize: vw * 4,
  },
  renderItemMainContainer: {
    height: vh * 13,
    width: containerWidth,
    backgroundColor: colors.white,
    borderRadius: vh * 2,
    flexDirection: 'row',
    leftContainer: {
      width: '75%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      headingText: {
        color: colors.black,
        fontSize: vw * 4,
        width: '85%',
      },
      reviewText: {
        color: colors.black,
        fontSize: vw * 2.5,
        width: '85%',
      },
    },
    rightContainer: {
      width: '20%',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      image: {
        height: vh * 3,
        width: vw * 3,
        resizeMode: 'contain',
        tintColor: colors.primaryColor,
      },
    },
  },
});
