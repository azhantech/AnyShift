import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from '../AuthStack';
import DrawerNavigator from '../DrawerNavigator';
import CreateCompanyScreen from '../../screen/Employer/CreateCompanyScreen';
import navigationOptions from '../NavigationOptions';

const RootStack = createStackNavigator();

const MainNavigator = () => {
  const loggedIn = false;
  return (
    <RootStack.Navigator initialRouteName="AuthStack">
      <RootStack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="CreateCompanyScreen"
        component={CreateCompanyScreen}
        options={navigationOptions}
      />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
