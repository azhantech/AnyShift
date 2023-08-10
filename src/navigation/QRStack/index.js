import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import navigationOptions from '../NavigationOptions';
import QRScreen from '../../screen/Employer/QRScreen';

const Stack = createStackNavigator();

const QRStack = () => {
  return (
    <Stack.Navigator headerShown={false} screenOptions={navigationOptions}>
      <Stack.Screen name="QRScreen" component={QRScreen} />
    </Stack.Navigator>
  );
};

export default QRStack;
