import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import navigationOptions from '../../NavigationOptions';
import PlanningScreen from '../../../screen/Employer/Company/PlanningScreen';
import FavoriteListScreen from '../../../screen/Employer/Company/FavoriteListScreen';

const Stack = createStackNavigator();

const FavoriteNavigator = () => {
    return (
        <Stack.Navigator
            headerShown={false}
            screenOptions={navigationOptions}>
            <Stack.Screen name="FavoriteListScreen" component={FavoriteListScreen} />
        </Stack.Navigator>
    );
};

export default FavoriteNavigator;
