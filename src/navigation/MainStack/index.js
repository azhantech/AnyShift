import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import AuthStack from '../AuthStack';
import DrawerNavigator from '../DrawerNavigator';
import CreateCompanyScreen from '../../screen/Employer/CreateCompanyScreen';
import navigationOptions from '../NavigationOptions';
import ChatNavigator from '../ChatStack';
import DrawerNavigatorEmployer from '../DrawerNavigatorEmployer';
import DrawerNavigatorCompany from '../DrawerNavigatorCompany';

const RootStack = createStackNavigator();

const MainNavigator = () => {
  const type = useSelector(state => state.general.type);

  return (
    <RootStack.Navigator initialRouteName="AuthStack">
      <RootStack.Screen
        name="DrawerNavigator"
        // component={DrawerNavigator}
        component={
          type == 'company' ? DrawerNavigatorCompany : DrawerNavigatorEmployer
        }
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
      <RootStack.Screen
        name="ChatNavigator"
        component={ChatNavigator}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
