import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import {colors} from './src/utils/appTheme';
import Navigation from './src/navigation';
import {persistor, store} from './src/redux/store';
import Loader from './src/component/Loader';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={styles.container}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <Navigation />
          <Loader />
        </View>
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});

export default App;
