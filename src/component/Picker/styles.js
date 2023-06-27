import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/dimensions';
import {colors} from '../../utils/appTheme';

export const styles = StyleSheet.create({
  pickerMainContainer: {
    width: vw * 24,
    height: vh * 6,
    borderRadius: vh * 4,
    backgroundColor: colors.offWhiteCircle,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerTextContainer: {
    width: '60%',
    alignItems: 'center',
  },
  pickerText: {
    fontSize: vh * 1.5,
    textTransform: 'capitalize',
  },
  pickerIconContainer: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerIcon: {
    resizeMode: 'contain',
    height: vh * 3,
    width: vw * 3,
  },
});
