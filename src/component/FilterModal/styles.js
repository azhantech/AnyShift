import {StyleSheet} from 'react-native';
import {colors} from '../../utils/appTheme';
import {vh, vw} from '../../utils/dimensions';
import {fonts} from '../../assets/fonts';

export default StyleSheet.create({
  mainContainerView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  mainBlurViewContiner: {
    height: 100 * vh,
    width: 100 * vw,
    position: 'absolute',
    backgroundColor: colors.modalBackground,
    opacity: 0.8,
  },

  miniContainerView: {
    backgroundColor: colors.white,
    width: 100 * vw,
    height: 80 * vh,
    alignItems: 'center',
    borderTopRightRadius: 8 * vw,
    borderTopLeftRadius: 8 * vw,
  },
  headingContainer: {
    height: vh * 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    color: colors.black,
    fontSize: vw * 4.5,
  },
  dateContainer: {
    height: vh * 10,
    width: vw * 85,
    text: {
      fontSize: vw * 3.5,
      marginBottom: vh * 0.5,
      color: colors.textColor,
    },
  },
  daterow: {
    flexDirection: 'row',
    height: vh * 6,
    backgroundColor: colors.backgroundColor,
    borderRadius: vh * 4,
    justifyContent: 'space-between',
    dateTextContainer: {
      width: '70%',
      height: '100%',
      paddingLeft: '6%',
      justifyContent: 'center',
      text: {
        fontSize: vw * 3.5,
        color: colors.grey,
      },
    },
    iconContainer: {
      width: '20%',
      justifyContent: 'center',
      alignItems: 'center',
      image: {
        height: vh * 5,
        width: vw * 5,
        resizeMode: 'contain',
      },
    },
  },
  row: {
    height: vh * 12,
    alignItems: 'center',
    width: vw * 85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    rightContainer: {
      width: '48%',
      height: '85%',
      justifyContent: 'space-around',
    },
    text: {
      color: colors.textColor,
      fontSize: vw * 3.5,
    },
  },
  btn: {
    width: '48%',
  },
  sliderContainer: {
    width: vw * 85,
    height: vh * 12,
    justifyContent: 'center',
  },
});
