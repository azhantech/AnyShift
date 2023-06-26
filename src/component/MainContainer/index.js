import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../utils/appTheme';

const MainContainer = props => {
  return (
    <View {...props} style={[styles.container, props.style]}>
      {props.children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
export default MainContainer;
