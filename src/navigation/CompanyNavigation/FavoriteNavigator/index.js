import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import navigationOptions from '../../NavigationOptions';
import FavoriteListScreen from '../../../screen/Employer/Company/FavoriteListScreen';
import EmployeeDetailScreen from '../../../screen/Employer/Company/EmployeeDetailScreen';

const Stack = createStackNavigator();

const FavoriteNavigator = () => {
    return (
        <Stack.Navigator
            headerShown={false}
            screenOptions={navigationOptions}>
            <Stack.Screen name="FavoriteListScreen" component={FavoriteListScreen} />
            <Stack.Screen name="EmployeeDetailScreen" component={EmployeeDetailScreen} />
        </Stack.Navigator>
    );
};

export default FavoriteNavigator;
