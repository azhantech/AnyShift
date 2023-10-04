import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';
const containerWidth = vw * 80;
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: vh * 6,
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: vh * 5,
  },
  stepStyle: {
    width: containerWidth,
    alignItems: 'center',
  },
  stepTextContainer: {
    height: vh * 8,
    justifyContent: 'space-around',
  },
  stepText: {
    color: colors.black,
  },
  stepIndicatorMainContainer: {
    height: vh * 3,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: containerWidth / 1.8,
    alignSelf: 'center',
  },
  stepIndicatorContainer: {
    width: containerWidth / 4,
    backgroundColor: 'red',
    height: vh,
    borderRadius: vh,
  },
  headingContainer: {
    width: containerWidth,
    height: vh * 5,
    justifyContent: 'center',
  },
  headingText: {
    fontSize: vh * 2,
    color: colors.black,
  },
  fieldContainer: {
    height: vh * 35,
    width: containerWidth,
    justifyContent: 'space-around',
  },
  noteContainer: {
    height: vh * 5,
    justifyContent: 'center',
    width: containerWidth + 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  noteText: {
    color: colors.highlightedText,
    fontSize: vh * 1.5,
    width: containerWidth - 10,
  },
  dobContainer: {
    height: vh * 10,
    width: containerWidth,
    justifyContent: 'center',
    marginTop: 2 * vh
  },
  pickerContainer: {
    flexDirection: 'row',
    height: vh * 8,
    width: containerWidth,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  requirementContainer: {
    width: containerWidth,
    height: vh * 10,
    justifyContent: 'space-evenly',
  },
  btnContainer: {
    height: vh * 20,
    width: containerWidth,
    alignItems: 'center',
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
  text: { fontSize: vh * 1.5 },

  backIconStyle: {
    resizeMode: 'contain',
    height: 6 * vw,
    width: 6 * vw,
    tintColor: colors.black,
  },

  tickBoxViewStyle: checked => ({
    height: vh * 2.5,
    width: vh * 2.5,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: checked ? colors.primaryColor : colors.lightBorderColor,
    backgroundColor: checked
      ? colors.lightRed
      : colors.textInputBackgroundColor,
  }),

  tickBoxImageStyle: checked => ({
    resizeMode: 'contain',
    height: 2 * vw,
    width: 2 * vw,
    tintColor: checked && colors.primaryColor,
  }),
});
