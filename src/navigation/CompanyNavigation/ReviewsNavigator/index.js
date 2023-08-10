import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ReviewListScreen from '../../../screen/Employer/Company/ReviewListScreen';
import navigationOptions from '../../NavigationOptions';

const Stack = createStackNavigator();

const ReviewsNavigator = () => {
  return (
    <Stack.Navigator headerShown={false} screenOptions={navigationOptions}>
      <Stack.Screen name="ReviewListScreen" component={ReviewListScreen} />
    </Stack.Navigator>
  );
};

export default ReviewsNavigator;
