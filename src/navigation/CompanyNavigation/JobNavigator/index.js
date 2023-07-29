import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import navigationOptions from '../../NavigationOptions';
import JobListScreen from '../../../screen/Employer/JobListScreen';


const Stack = createStackNavigator();

const JobNavigator = () => {
    return (
        <Stack.Navigator
            headerShown={false}
            screenOptions={navigationOptions}>
            <Stack.Screen name="JobListScreen" component={JobListScreen} />
        </Stack.Navigator>
    );
};

export default JobNavigator;
