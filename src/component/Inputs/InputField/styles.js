import {StyleSheet} from 'react-native';
import {fonts} from '../../../assets/fonts';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // marginVertical  : vh*2,
    width: vw * 80,
  },
  inputWithIcon: {
    // flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.borderColor2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.textInputBackgroundColor,
    height: vh * 7,
    borderRadius: vh * 2.5,
    // paddingBottom: vh * 1,
  },
  icon: {
    height: vh * 2.5,
    width: vh * 2.5,
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },
  icon2: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  leftIcon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  input: {
    // borderBottomWidth: 1,
    // borderColor: colors.borderColor2,
    // borderColor: colors.grey,
    // width: vw * 85,
    // width: vw * 78,
    flex: 1,
    fontFamily: fonts.Qanelas.regular,
    padding: 0,
    fontSize: vh * 1.9,
    color: 'black',
    marginLeft: 4 * vw,
    // paddingBottom: vh * 0.5,
    // opacity: 0.1
  },
  labelContainer: {
    flexDirection: 'row',
  },
  label: {
    color: colors.blackappText,
    fontSize: vh * 1.9,
  },
  require: {
    color: colors.red,
    marginLeft: vw * 0.4,
  },
  labelText: {
    color: colors.black,
    fontSize: vh * 1.5,
    textTransform: 'capitalize',
  },
  optionalStyle: {
    color: colors.highlightedText,
    fontSize: vh * 1.5,
    textTransform: 'capitalize',
    marginLeft: vw,
  },
});

export default styles;
