import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import Animated from 'react-native-reanimated';
import {vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';
const DrawerScreenWrapper = props => {
  const progress = useDrawerProgress();
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.75],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, vw * 5],
  });

  const borderWidth = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 5],
  });

  const animatedStyle = {borderRadius, borderWidth, transform: [{scale}]};
  return (
    <Animated.View
      style={[
        {
          flex: 1,
          overflow: 'hidden',
          borderColor: colors.white,
        },
        animatedStyle,
      ]}>
      {props.children}
    </Animated.View>
  );
};
export default DrawerScreenWrapper;