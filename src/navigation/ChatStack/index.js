import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import Home from '../../screen/Main/Home';

const ChatStack = createStackNavigator();

const ChatNavigator = () => {
  return (
    <ChatStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="Home">
      <ChatStack.Screen name="Home" component={Home} />
    </ChatStack.Navigator>
  );
};

export default ChatNavigator;
