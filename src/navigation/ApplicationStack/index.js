import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import navigationOptions from '../NavigationOptions';
import Applications from '../../screen/Main/Applications';
import JobDetails from '../../screen/Main/JobDetails';
import GiveReview from '../../screen/Main/GiveReview';
import Vacancies from '../../screen/Main/Vacancies';
import VacancyJobDetails from '../../screen/Main/VacancyJobDetails';
import NotificationScreen from '../../screen/Main/Notification';

const ApplicationStack = createStackNavigator();

const ApplicationsNavigator = () => {
  return (
    <ApplicationStack.Navigator
      headerShown={false}
      screenOptions={navigationOptions}
      initialRouteName="Applications">
      <ApplicationStack.Screen name="Applications" component={Applications} />
      <ApplicationStack.Screen name="JobDetails" component={JobDetails} />
      <ApplicationStack.Screen name="GiveReview" component={GiveReview} />
      <ApplicationStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />
    </ApplicationStack.Navigator>
  );
};

export default ApplicationsNavigator;
