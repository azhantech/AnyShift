import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import navigationOptions from '../../NavigationOptions';
import PlanningScreen from '../../../screen/Employer/Company/PlanningScreen';


const Stack = createStackNavigator();

const PlanningNavigator = () => {
    return (
        <Stack.Navigator
            headerShown={false}
            screenOptions={navigationOptions}>
            <Stack.Screen name="PlanningScreen" component={PlanningScreen} />
        </Stack.Navigator>
    );
};

export default PlanningNavigator;
