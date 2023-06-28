import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import Chat from '../../screen/Main/Chat';

const ChatStack = createStackNavigator();

const ChatNavigator = () => {
  return (
    <ChatStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="Chat">
      <ChatStack.Screen name="Chat" component={Chat} />
    </ChatStack.Navigator>
  );
};

export default ChatNavigator;
