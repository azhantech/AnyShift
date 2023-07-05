import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import ContactUs from '../../screen/Main/ContactUs';

const ContactUSStack = createStackNavigator();

const ContactUsStack = () => {
  return (
    <ContactUSStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="ContactUs">
      <ContactUSStack.Screen name="ContactUs" component={ContactUs} />
    </ContactUSStack.Navigator>
  );
};

export default ContactUsStack;
