import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import PaymentLogs from '../../screen/Main/paymentLogs';
const PaymentLogsStack = createStackNavigator();

const PaymentlogsStack = () => {
  return (
    <PaymentLogsStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="PaymentLogs">
      <PaymentLogsStack.Screen name="PaymentLogs" component={PaymentLogs} />
    </PaymentLogsStack.Navigator>
  );
};

export default PaymentlogsStack;
