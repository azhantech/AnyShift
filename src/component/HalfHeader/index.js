import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../utils/appTheme';
import {vh, vw} from '../../utils/dimensions';

const HalfHeader = props => {
  return (
    <View
      style={[styles.mainHeaderContainer, props?.mainHeaderContainer]}></View>
  );
};

const styles = StyleSheet.create({
  mainHeaderContainer: {
    backgroundColor: colors.primaryColor,
    height: 8 * vh,
    borderBottomLeftRadius: 6 * vw,
    borderBottomRightRadius: 6 * vw,

  },
});

export default HalfHeader;
