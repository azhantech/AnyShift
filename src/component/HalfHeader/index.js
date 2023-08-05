import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../utils/appTheme';
import { vh, vw } from '../../utils/dimensions';

const HalfHeader = props => {
  return (
    <View
      style={[styles.mainHeaderContainer, props?.mainHeaderContainer]}></View>
  );
};

const styles = StyleSheet.create({
  // mainHeaderContainer: {
  //   backgroundColor: colors.primaryColor,
  //   height: 8 * vh,
  //   borderBottomLeftRadius: 6 * vw,
  //   borderBottomRightRadius: 6 * vw,
  // },
  mainHeaderContainer: {
    backgroundColor: colors.primaryColor,
    height: vh * 15,
    borderBottomRightRadius: vh * 2,
    borderBottomLeftRadius: vh * 2,
    width: vw * 100,
    position: 'absolute',
    top: -vh * 5
  },
});

export default HalfHeader;
