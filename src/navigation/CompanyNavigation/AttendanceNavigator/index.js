import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import navigationOptions from '../../NavigationOptions';
import AttendanceListScreen from '../../../screen/Employer/Company/AttendanceListScreen';


const Stack = createStackNavigator();

const AttendanceNavigator = () => {
    return (
        <Stack.Navigator
            headerShown={false}
            screenOptions={navigationOptions}>
            <Stack.Screen name="AttendanceListScreen" component={AttendanceListScreen} />
        </Stack.Navigator>
    );
};

export default AttendanceNavigator;
