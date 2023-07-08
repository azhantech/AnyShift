import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import Favorites from '../../screen/Main/Favorites';
import NotificationScreen from '../../screen/Main/Notification';

const FavStack = createStackNavigator();

const FavNavigator = () => {
  return (
    <FavStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="Favorites">
      <FavStack.Screen name="Favorites" component={Favorites} />
      <FavStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
    </FavStack.Navigator>
  );
};

export default FavNavigator;
