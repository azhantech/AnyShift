import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from './src/utils/appTheme';
import SplashScreen from 'react-native-splash-screen';
import ForgotPasswordScreen from './src/screen/Auth/ForgotPasswordScreen';
import Navigation from './src/navigation';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.container}>
      <ForgotPasswordScreen />
      {/* <Navigation /> */}
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
