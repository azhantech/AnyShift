import {StyleSheet} from 'react-native';

import {colors} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    paddingHorizontal: vw * 5,
    paddingVertical: vh * 2,
    paddingBottom: vh * 10,
  },
  map: {
    height: vh * 15,
    width: vw * 90,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vh * 1,
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
  bigDate: {
    fontSize: vh * 2.6,
    fontWeight: 'bold',
  },
  hourContainer: {
    backgroundColor: colors.grayBackground,
    borderRadius: vh * 2,
    padding: vh * 3,
    marginVertical: vh * 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateInside: {
    fontSize: vh * 2,
    fontWeight: 'bold',
  },
  text: {
    marginTop: vh * 1,
  },
  item: {
    marginVertical: vh * 1,
  },
  itemValue: {
    color: colors.darkGray,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: vh * 2,
  },
  containersRow: {
    marginVertical: vh * 1,
  },
  leftContainer: {
    width: vw * 30,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: colors.myMessageColor,
    marginVertical: vh * 2,
  },
});

export default styles;
