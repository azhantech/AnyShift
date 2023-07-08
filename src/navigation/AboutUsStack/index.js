import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import AboutUS from '../../screen/Main/AboutUs';
import NotificationScreen from '../../screen/Main/Notification';

const AboutusStack = createStackNavigator();

const AboutUsStack = () => {
  return (
    <AboutusStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="AboutUS">
      <AboutusStack.Screen name="AboutUS" component={AboutUS} />
      <AboutusStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
    </AboutusStack.Navigator>
  );
};

export default AboutUsStack;
