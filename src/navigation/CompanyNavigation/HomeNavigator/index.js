import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../../screen/Employer/Company/HomeScreen';
import navigationOptions from '../../NavigationOptions';


const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            headerShown={false}
            screenOptions={navigationOptions}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default HomeNavigator;
