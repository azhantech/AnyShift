import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import navigationOptions from '../../NavigationOptions';
import InvoiceListScreen from '../../../screen/Employer/Company/InvoiceListScreen';
import InvoiceDetailScreen from '../../../screen/Employer/Company/InvoiceDetailScreen';

const Stack = createStackNavigator();

const InvoiceNavigator = () => {
  return (
    <Stack.Navigator headerShown={false} screenOptions={navigationOptions}>
      <Stack.Screen name="InvoiceListScreen" component={InvoiceListScreen} />
      <Stack.Screen
        name="InvoiceDetailScreen"
        component={InvoiceDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default InvoiceNavigator;
