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
    justifyContent: 'flex-end',
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
  },
  locationIcon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
    tintColor: colors.darkGray,
  },
  btnContainer: {
    height: vh * 10,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginVertical: vh * 2,
  },
  stepsContainer: {
    marginVertical: vh * 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepTitle: {},
  scroll: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    alignItems: 'center',
    paddingBottom: vh * 10,
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
  },
  headingContainer: {
    marginTop: vh * 2,
    marginBottom: vh * 3,
  },
});

export default styles;
