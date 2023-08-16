import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../../screen/Employer/Company/HomeScreen';
import navigationOptions from '../../NavigationOptions';
import PostFeedbackScreen from '../../../screen/Employer/Company/PostFeedbackScreen';
import JobApplicationScreen from '../../../screen/Employer/Company/JobApplicationScreen';
import FeedbackDetailScreen from '../../../screen/Employer/Company/FeedbackDetailScreen';
import JobDetailScreen from '../../../screen/Employer/Company/JobDetailScreen';
import JobApplicationListScreen from '../../../screen/Employer/Company/JobApplicationListScreen';
import EmployeeDetailJobApplication from '../../../screen/Employer/Company/EmployeeDetailJobApplication';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator headerShown={false} screenOptions={navigationOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PostFeedbackScreen" component={PostFeedbackScreen} />
      <Stack.Screen
        name="FeedbackDetailScreen"
        component={FeedbackDetailScreen}
      />
      <Stack.Screen
        name="JobApplicationScreen"
        component={JobApplicationScreen}
      />
      <Stack.Screen name="JobDetailScreen" component={JobDetailScreen} />
      <Stack.Screen
        name="JobApplicationListScreen"
        component={JobApplicationListScreen}
      />
      <Stack.Screen
        name="EmployeeDetailJobApplication"
        component={EmployeeDetailJobApplication}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
