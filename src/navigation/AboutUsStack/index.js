import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import AboutUS from '../../screen/Main/AboutUs';

const AboutusStack = createStackNavigator();

const AboutUsStack = () => {
  return (
    <AboutusStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="AboutUS">
      <AboutusStack.Screen name="AboutUS" component={AboutUS} />
    </AboutusStack.Navigator>
  );
};

export default AboutUsStack;
