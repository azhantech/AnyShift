import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import ContactUs from '../../screen/Main/ContactUs';
import NotificationScreen from '../../screen/Main/Notification';

const ContactUSStack = createStackNavigator();

const ContactUsStack = () => {
  return (
    <ContactUSStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="ContactUs">
      <ContactUSStack.Screen name="ContactUs" component={ContactUs} />
      <ContactUSStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
    </ContactUSStack.Navigator>
  );
};

export default ContactUsStack;
