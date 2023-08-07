import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import navigationOptions from '../../NavigationOptions';
import JobListScreen from '../../../screen/Employer/JobListScreen';
import VacancyDetailScreen from '../../../screen/Employer/Company/VacancyDetailScreen';

const Stack = createStackNavigator();

const JobNavigator = () => {
  return (
    <Stack.Navigator headerShown={false} screenOptions={navigationOptions}>
      <Stack.Screen name="JobListScreen" component={JobListScreen} />
      <Stack.Screen
        name="VacancyDetailScreen"
        component={VacancyDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default JobNavigator;
