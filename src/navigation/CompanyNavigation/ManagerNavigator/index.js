import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import navigationOptions from '../../NavigationOptions';
import ManagerListScreen from '../../../screen/Employer/Company/ManagerListScreen';
import AddManagerScreen from '../../../screen/Employer/Company/AddManagerScreen';

const Stack = createStackNavigator();

const ManagerNavigator = () => {
    return (
        <Stack.Navigator headerShown={false} screenOptions={navigationOptions}>
            <Stack.Screen name="ManagerListScreen" component={ManagerListScreen} />
            <Stack.Screen name="AddManagerScreen" component={AddManagerScreen} />
        </Stack.Navigator>
    );
};

export default ManagerNavigator;
