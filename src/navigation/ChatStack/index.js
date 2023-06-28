import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import Chat from '../../screen/Main/Chat';
import ChatDetail from '../../screen/Main/ChatDetail'

const ChatStack = createStackNavigator();

const ChatNavigator = () => {
  return (
    <ChatStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="Chat">
      <ChatStack.Screen name="Chat" component={Chat} />
      <ChatStack.Screen name="ChatDetail" component={ChatDetail} />
    </ChatStack.Navigator>
  );
};

export default ChatNavigator;
