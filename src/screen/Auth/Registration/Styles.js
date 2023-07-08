import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';
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
    width: containerWidth,
  },
  noteText: {
    color: colors.highlightedText,
    fontSize: vh * 1.5,
  },
  dobContainer: {
    height: vh * 10,
    width: containerWidth,
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
});
