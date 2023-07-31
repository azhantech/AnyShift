import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import Home from '../../screen/Main/Home';
import Applications from '../../screen/Main/Applications';
import JobDetails from '../../screen/Main/JobDetails';
import GiveReview from '../../screen/Main/GiveReview';
import NotificationScreen from '../../screen/Main/Notification';



const ShiftStack = createStackNavigator();

const ShiftNavigator = () => {
  return (
    <ShiftStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="Applications">
      <ShiftStack.Screen name="Applications" component={Applications} />
      <ShiftStack.Screen name="JobDetails" component={JobDetails} />
      <ShiftStack.Screen name="GiveReview" component={GiveReview} />
      <ShiftStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
    </ShiftStack.Navigator>
  );
};

export default ShiftNavigator;
