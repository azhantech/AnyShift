import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../../screen/Employer/Company/HomeScreen';
import navigationOptions from '../../NavigationOptions';
import PostFeedbackScreen from '../../../screen/Employer/Company/PostFeedbackScreen';
import JobApplicationScreen from '../../../screen/Employer/Company/JobApplicationScreen';
import FeedbackDetailScreen from '../../../screen/Employer/Company/FeedbackDetailScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator headerShown={false} screenOptions={navigationOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PostFeedbackScreen" component={PostFeedbackScreen} />
      <Stack.Screen name="FeedbackDetailScreen" component={FeedbackDetailScreen} />
      <Stack.Screen name="JobApplicationScreen" component={JobApplicationScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
