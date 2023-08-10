import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import navigationOptions from '../../NavigationOptions';
import ProfileScreen from '../../../screen/Employer/Company/Profile/ProfileScreen';
import EditProfileScreen from '../../../screen/Employer/Company/Profile/EditProfileScreen';


const Stack = createStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            headerShown={false}
            screenOptions={navigationOptions}>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />

        </Stack.Navigator>
    );
};

export default ProfileNavigator;
