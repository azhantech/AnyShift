import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../../screen/Employer/Profile/ProfileScreen';
import EditProfileScreen from '../../screen/Employer/Profile/EditProfileScreen';
import UpdateNameScreen from '../../screen/Employer/Profile/UpdateNameScreen';
import UpdatePasswordScreen from '../../screen/Employer/Profile/UpdatePasswordScreen';
import navigationOptions from '../NavigationOptions';

const Stack = createStackNavigator();

const EmployerProfileNavigator = () => {
  return (
    <Stack.Navigator headerShown={false} screenOptions={navigationOptions}>
      <Stack.Screen name="ProfileScreenEmployer" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="UpdateNameScreen" component={UpdateNameScreen} />
      <Stack.Screen
        name="UpdatePasswordScreen"
        component={UpdatePasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default EmployerProfileNavigator;
