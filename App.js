import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from './src/utils/appTheme';
import SignInScreen from './src/screen/Auth/SignIn';
const App = () => {
  return (
    <View style={styles.container}>
      <SignInScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default App;
