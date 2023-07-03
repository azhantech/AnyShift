import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import Profile from '../../screen/Main/Profile';
import UpdateName from '../../screen/Main/UpdateName';
import UpdatePassword from '../../screen/Main/UpdatePassword';
import UpdateBankDetails from '../../screen/Main/UpdateBankDetails';
import EditProfile from '../../screen/Main/EditProfile';

const ProfileStack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="Profile">
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
      <ProfileStack.Screen name="UpdateName" component={UpdateName} />
      <ProfileStack.Screen name="UpdatePassword" component={UpdatePassword} />
      <ProfileStack.Screen
        name="UpdateBankDetails"
        component={UpdateBankDetails}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
