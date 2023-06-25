import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from './src/utils/appTheme';
import SignInScreen from './src/screen/Auth/SignIn';
import SignupScreen from './src/screen/Auth/SignUp';
import SplashScreen from 'react-native-splash-screen';
import OnBoarding from './src/screen/Auth/OnBoarding/OnBoarding';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.container}>
      <OnBoarding />
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
