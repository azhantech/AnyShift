import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {colors} from '../../utils/appTheme';

class CustomMarker extends React.Component {
  render() {
    return <View style={styles.marker}></View>;
  }
}

const styles = StyleSheet.create({
  marker: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: colors.highlightedText,
    borderColor: colors.highlightedText,
  },
});

export default CustomMarker;
