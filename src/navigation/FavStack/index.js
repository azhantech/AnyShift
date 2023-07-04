import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import Favorites from '../../screen/Main/Favorites';

const FavStack = createStackNavigator();

const FavNavigator = () => {
  return (
    <FavStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="Favorites">
      <FavStack.Screen name="Favorites" component={Favorites} />
    </FavStack.Navigator>
  );
};

export default FavNavigator;
