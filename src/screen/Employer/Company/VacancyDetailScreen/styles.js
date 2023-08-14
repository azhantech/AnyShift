import {StyleSheet} from 'react-native';

import {colors} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  labelText: {
    color: colors.black,
    fontSize: vh * 1.5,
    textTransform: 'capitalize',
    marginBottom: vh * 1,
  },
  inputWithIcon: {
    borderWidth: 1,
    borderColor: colors.borderColor2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.textInputBackgroundColor,
    height: vh * 7,
    borderRadius: vh * 4,
    paddingHorizontal: vw * 4,
    width: vw * 90,
    alignSelf: 'center',
  },
  dropDown: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  contentContainer: {
    width: vw * 90,
    alignSelf: 'center',
  },
  item: {
    marginVertical: vh * 1,
    marginTop: vh * 3,
  },
  locationIcon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
    tintColor: colors.darkGray,
  },
  checkIcon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
    tintColor: colors.white,
  },
  btnContainer: {
    height: vh * 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh * 8,
  },
  bar: {
    width: vw * 18,
    height: vh * 1,
    backgroundColor: colors.borderTopColor,
    borderRadius: vh * 2,
    marginHorizontal: vw * 2,
  },
  stepsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh * 2,
  },
  stepsContainer: {
    marginVertical: vh * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepTitle: {
    fontWeight: 'bold',
  },
  scroll: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    alignItems: 'center',
    paddingBottom: vh * 10,
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
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: vw * 30,
  },
  boxTitle: {
    marginLeft: vw * 2,
  },
  boxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: vh * 2,
  },
  heading: {
    color: colors.highlightedText,
    fontSize: vh * 3,
    fontWeight: 'bold',
  },
  headingContainer: {
    marginTop: vh * 2,
    marginBottom: vh * 3,
    width: vw * 80,
  },
  headingContainerStepThree: {
    marginTop: vh * 2,
    width: vw * 80,
  },
  shiftHeading: {
    fontSize: vh * 2.5,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  smallHeading: {
    fontSize: vh * 2,
    fontWeight: 'bold',
  },
  calendar: {
    backgroundColor: colors.offWhiteCircle,
    padding: vh * 2,
    borderRadius: vh * 2,
    height: vh * 58,
    width: vw * 80,
  },
  dateContainer: {
    backgroundColor: colors.highlightedText,
    borderRadius: vh * 2,
    height: vh * 10,
    width: vw * 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: vw * 2,
  },
  date: {
    color: colors.white,
    fontSize: vh * 2,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vh * 1,
    width: vw * 80,
  },
  checkBoxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: vw * 80,
    marginVertical: vh * 1,
  },
  uploadBtn: {
    width: vw * 80,
    marginTop: vh * 2,
  },
  logoButton: {
    borderRadius: vh * 4,
    height: vh * 6,
    width: vw * 40,
    borderWidth: 1,
    borderColor: colors.myMessageColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: vh * 1,
  },
  uploadIcon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  uploadText: {
    marginLeft: vw * 3,
    color: colors.myMessageColor,
  },
});

export default styles;
