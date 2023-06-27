import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../../screen/Auth/OnBoarding/OnBoarding';
import Registration from '../../screen/Auth/Registration';
import SignupScreen from '../../screen/Auth/SignUp';
import SignInScreen from '../../screen/Auth/SignIn';
import ForgotPasswordScreen from '../../screen/Auth/ForgotPasswordScreen';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="OnBoarding">
      <AuthStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthStack.Screen name="SignInScreen" component={SignInScreen} />
      <AuthStack.Screen name="Registration" component={Registration} />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
      <AuthStack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
