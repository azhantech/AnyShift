import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import CompanyListScreen from '../../../screen/Employer/CompanyListScreen';
import navigationOptions from '../../NavigationOptions';

const Stack = createStackNavigator();

const CompanyNavigator = () => {
    return (
        <Stack.Navigator
            headerShown={false}
            screenOptions={navigationOptions}>
            <Stack.Screen name="CompanyListScreen" component={CompanyListScreen} />
        </Stack.Navigator>
    );
};

export default CompanyNavigator;
