import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import navigationOptions from '../../NavigationOptions';
import ProfileScreen from '../../../screen/Employer/Company/Profile/ProfileScreen';
import EditProfileScreen from '../../../screen/Employer/Company/Profile/EditProfileScreen';
import UpdateNameScreen from '../../../screen/Employer/Company/Profile/UpdateNameScreen';
import UpdatePasswordScreen from '../../../screen/Employer/Company/Profile/UpdatePasswordScreen';
import UpdateBankDetailScreen from '../../../screen/Employer/Company/Profile/UpdateBankDetailScreen';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator headerShown={false} screenOptions={navigationOptions}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="UpdateNameScreen" component={UpdateNameScreen} />
      <Stack.Screen
        name="UpdatePasswordScreen"
        component={UpdatePasswordScreen}
      />
      <Stack.Screen
        name="UpdateBankDetailScreen"
        component={UpdateBankDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
