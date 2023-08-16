import {StyleSheet} from 'react-native';

import {colors} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';

const containerWidth = vw * 80;
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
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
    height: vh * 37,
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
  text: {fontSize: vh * 1.5},

  backIconStyle: {
    resizeMode: 'contain',
    height: 6 * vw,
    width: 6 * vw,
    tintColor: colors.black,
  },
  checkIcon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
    tintColor: colors.white,
  },

  tickBoxViewStyle: checked => ({
    height: vh * 3,
    width: vh * 3,
    borderRadius: vh * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: checked ? colors.highlightedText : colors.lightBorderColor,
    backgroundColor: checked
      ? colors.highlightedText
      : colors.textInputBackgroundColor,
  }),

  tickBoxImageStyle: checked => ({
    resizeMode: 'contain',
    height: 2 * vw,
    width: 2 * vw,
    tintColor: checked && colors.primaryColor,
  }),
  item: {
    marginVertical: vh * 1,
    marginTop: vh * 3,
  },
  labelText: {
    color: colors.black,
    fontSize: vh * 2,
    textTransform: 'capitalize',
    marginBottom: vh * 1,
  },
  inputWithIcon: {
    borderWidth: 1,
    borderColor: colors.borderColor2,
    backgroundColor: colors.textInputBackgroundColor,
    borderRadius: vh * 2,
    paddingHorizontal: vw * 4,
    width: vw * 90,
    alignSelf: 'center',
    marginVertical: vh * 2,
    padding: vh * 2,
  },
  heading: {
    color: colors.highlightedText,
    fontSize: vh * 3,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: vw * 25,
    marginVertical: vh * 1,
  },
  boxTitle: {
    marginLeft: vw * 2,
  },
});
