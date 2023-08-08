import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../../screen/Employer/Company/HomeScreen';
import navigationOptions from '../../NavigationOptions';
import PostFeedbackScreen from '../../../screen/Employer/Company/PostFeedbackScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator headerShown={false} screenOptions={navigationOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PostFeedbackScreen" component={PostFeedbackScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
