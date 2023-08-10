import {StyleSheet} from 'react-native';

import {vh, vw} from '../../../../../utils/dimensions';

const containerWidth = vw * 80;
export const styles = StyleSheet.create({
  mainContainer: {flex: 1, alignItems: 'center', marginTop: 4 * vh},

  forgotPasswordContainer: {
    width: containerWidth,
    height: vh * 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  btnContainer: {
    height: vh * 10,
    justifyContent: 'center',
    marginTop: vh * 8,
  },
});
