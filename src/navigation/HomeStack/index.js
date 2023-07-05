import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import Home from '../../screen/Main/Home';
import NotificationScreen from '../../screen/Main/Notification';
const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
