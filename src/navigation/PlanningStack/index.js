import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import Planning from '../../screen/Main/Planning';
import NotificationScreen from '../../screen/Main/Notification';

const PlanningStack = createStackNavigator();

const PlanningNavigator = () => {
  return (
    <PlanningStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="Planning">
      <PlanningStack.Screen name="Planning" component={Planning} />
      <PlanningStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
    </PlanningStack.Navigator>
  );
};

export default PlanningNavigator;
