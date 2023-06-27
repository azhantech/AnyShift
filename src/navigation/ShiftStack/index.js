import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import Home from '../../screen/Main/Home';

const ShiftStack = createStackNavigator();

const ShiftNavigator = () => {
  return (
    <ShiftStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="Home">
      <ShiftStack.Screen name="Home" component={Home} />
    </ShiftStack.Navigator>
  );
};

export default ShiftNavigator;
