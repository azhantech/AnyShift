import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import Home from '../../screen/Main/Home';

const ProfileStack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="Home">
      <ProfileStack.Screen name="Home" component={Home} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
