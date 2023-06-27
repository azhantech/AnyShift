import {useDrawerProgress} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import Animated from 'react-native-reanimated';
import {drawerRoutes} from '../../../navigation/NavigationOptions';
import QanelasRegular from '../../Texts/QanelasRegular';
import {vh, vw} from '../../../utils/dimensions';
import {colors} from '../../../utils/appTheme';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const DrawerButton = props => {
  const progress = useDrawerProgress();
  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-40 * vw * (props.index + 1), 0],
  });
  const animatedStyles = {
    transform: [{translateX}],
  };
  const routeConfigs = drawerRoutes[props.routeName];
  if (!routeConfigs) {
    return null;
  }
  return (
    <AnimatedTouchable
      onPress={() => props.onPress(props.routeName)}
      style={[styles.container, animatedStyles]}>
      <Image style={styles.drawerButtonIconStyle} source={routeConfigs?.icon} />
      <QanelasRegular style={styles.label}>{routeConfigs.label}</QanelasRegular>
    </AnimatedTouchable>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3 * vh,
  },
  icon: {
    tintColor: 'white',
    height: 2.2 * vh,
    width: 2.2 * vh,
    resizeMode: 'contain',
    marginHorizontal: 5 * vw,
  },
  label: {
    fontSize: 2 * vh,
    color: colors.white,
    marginLeft: 2 * vw,
  },

  drawerButtonIconStyle: {
    resizeMode: 'contain',
    height: 4 * vh,
    width: 4 * vw,
    tintColor: colors.white,
  },
});
export default DrawerButton;
