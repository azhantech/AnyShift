import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';
const containerWidth = vw * 80;
export const styles = StyleSheet.create({
  headingContainer: {
    height: vh * 22,
    justifyContent: 'center',
    alignItems: 'center',
    width: containerWidth,
  },
  imagestyle: {height: vh * 8, width: vw * 80, resizeMode: 'contain'},
});
