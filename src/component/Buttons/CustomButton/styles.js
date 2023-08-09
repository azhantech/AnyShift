import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
  ButtonWrapper: {
    paddingVertical: vh * 1.3,
    borderRadius: vw * 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: vh * 6,
    width: vw * 80,
    backgroundColor: colors.primaryColor,
    borderRadius: vh * 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    color: '#fff',
    fontSize: vh * 2,
    textTransform: 'capitalize'
  },
  icon: {
    height: vh * 2, width: vh * 2, resizeMode: 'contain', marginLeft: vw * 4
  }
});
export default styles;
